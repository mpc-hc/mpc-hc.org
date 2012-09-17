SPHINXOPTS   =
PAPER        =
BUILDDIR     = build
BUILDDIR_WEB = $(BUILDDIR)/website

# Internal variables.
PAPEROPT_a4     = -D latex_paper_size=a4
PAPEROPT_letter = -D latex_paper_size=letter
ALLSPHINXOPTS   = -a -d $(BUILDDIR)/doctrees $(PAPEROPT_$(PAPER)) $(SPHINXOPTS) source
# the i18n builder cannot share the environment and doctrees with the others
I18NSPHINXOPTS  = $(PAPEROPT_$(PAPER)) $(SPHINXOPTS) source

.PHONY: server website clean help
.DEFAULT_GOAL := website

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  server     to start the development webserver"
	@echo "  website    to make the website"
	@echo "  clean      to clean the website build product"
	@echo "  help       to show this help message"

server:
	@echo "Starting webserver..."
	@cd $(BUILDDIR_WEB) && python -m SimpleHTTPServer

clean:
	-@echo cleaning...
	-rm -rf $(BUILDDIR)/*

website:
	@echo "Building posts..."
	@python sphinxblog/gen.py
	@echo "Building site..."
	@sphinx-build -b dirhtml $(ALLSPHINXOPTS) $(BUILDDIR_WEB)
	@cp source/.htaccess source/version.txt source/robots.txt $(BUILDDIR_WEB)
	@echo

	@echo "Combining css files..."
	@cat source/_static/css/bootstrap.css source/_static/css/bootstrap-responsive.css \
		 source/_static/css/jquery.fancybox.css source/_static/css/website.css \
		 | cssc > $(BUILDDIR_WEB)/_static/css/pack.css

	@echo "Combining js files..."
	@cat source/_static/js/bootstrap.js source/_static/js/jquery.fancybox.js \
		 | uglifyjs --no-copyright -o $(BUILDDIR_WEB)/_static/js/pack.js

	@echo "Removing files we don't need..."
	@rm -rf $(BUILDDIR_WEB)/genindex $(BUILDDIR_WEB)/search
	@rm $(BUILDDIR_WEB)/objects.inv $(BUILDDIR_WEB)/.buildinfo $(BUILDDIR_WEB)/searchindex.js
	@echo "Build finished. The HTML pages are in $(BUILDDIR_WEB)."

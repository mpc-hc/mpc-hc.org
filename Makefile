SPHINXOPTS  =
SPHINXBUILD = sphinx-build
PAPER       =
BUILDDIR    = build
DOCS_FILES  =
DOCS_URL    =
DOCS_BRANCH =

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
	@echo "  test       to run the sphinxblog testsuite"

server:
	@echo "Starting webserver..."
	@cd $(BUILDDIR)/website && python -m SimpleHTTPServer

clean:
	-@echo cleaning...
	-rm -rf $(BUILDDIR)/*

website:
#	@cat source/_static/css/bootstrap.css source/_static/css/bootstrap-responsive.css \
#		source/_static/css/website.css | cleancss -o source/_static/css/pack.css
	@cleancss -o source/_static/css/bootstrap.min.css source/_static/css/bootstrap.css \
		&& cleancss -o source/_static/css/bootstrap-responsive.min.css source/_static/css/bootstrap-responsive.css \
		&& cleancss -o source/_static/css/website.min.css source/_static/css/website.css

	@echo "Building posts..."
	@python sphinxblog/gen.py
	@echo "Building site..."
	@$(SPHINXBUILD) -b dirhtml $(ALLSPHINXOPTS) $(BUILDDIR)/website
	@cp source/.htaccess source/version.txt source/robots.txt $(BUILDDIR)/website
	@echo
	@echo "Build finished. The HTML pages are in $(BUILDDIR)/website."

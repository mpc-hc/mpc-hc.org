PAPER        =
BUILDDIR     = build
BUILDDIR_WEB = $(BUILDDIR)/website

# Internal variables.
ALLSPHINXOPTS = -a -d $(BUILDDIR)/doctrees $(PAPEROPT_$(PAPER)) source

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
	@echo & echo "Building posts..."
	@python sphinxblog/gen.py

	@echo & echo "Building site..."
	@sphinx-build -b dirhtml $(ALLSPHINXOPTS) $(BUILDDIR_WEB)

	@echo & echo "Copying files..."
	@cp source/.htaccess source/version.txt source/robots.txt $(BUILDDIR_WEB)

	@echo & echo "Removing files we don't need..."
	@rm -rf $(BUILDDIR_WEB)/.buildinfo \
			$(BUILDDIR_WEB)/_static/*.css \
			$(BUILDDIR_WEB)/_static/*.gif \
			$(BUILDDIR_WEB)/_static/*.js \
			$(BUILDDIR_WEB)/_static/*.png \
			$(BUILDDIR_WEB)/_static/css/*.css \
			$(BUILDDIR_WEB)/_static/js/*.js \
			$(BUILDDIR_WEB)/genindex \
			$(BUILDDIR_WEB)/objects.inv \
			$(BUILDDIR_WEB)/search \
			$(BUILDDIR_WEB)/searchindex.js

	@echo & echo "Combining css files..."
	@cat source/_static/css/bootstrap.css \
		 source/_static/css/bootstrap-responsive.css \
		 source/_static/css/jquery.fancybox.css \
		 source/_static/css/jquery.fancybox-thumbs.css \
		 source/_static/css/website.css \
		 | cleancss -o $(BUILDDIR_WEB)/_static/css/pack.css

	@echo & echo "Combining js files..."
	@cat source/_static/js/bootstrap.js \
		 source/_static/js/jquery.mousewheel.js \
		 source/_static/js/jquery.fancybox.js \
		 source/_static/js/jquery.fancybox-thumbs.js \
		 | uglifyjs --no-copyright -o $(BUILDDIR_WEB)/_static/js/pack.js

	@echo & echo "Build finished. The HTML pages are in $(BUILDDIR_WEB)."

BUILDDIR   = ./build
BLDDIR_WEB = $(BUILDDIR)/website
SRC        = ./source

# Internal variables
SPHINXOPTS = -d $(BUILDDIR)/doctrees $(SRC)

# Targets
all: website

build: all

server:
	@echo ; echo "Starting webserver..."
	@cd $(BLDDIR_WEB) && python -m SimpleHTTPServer

clean:
	@echo cleaning...
	-@rm -rf $(BUILDDIR)/

rebuild: clean build

distclean: clean

website:
	@echo ; echo "Building posts..."
	@python sphinxblog/gen.py

	@echo ; echo "Building site..."; echo
	@sphinx-build -b dirhtml $(SPHINXOPTS) $(BLDDIR_WEB)

	@echo ; echo "Removing files we don't need..."
	-@rm -rf $(BLDDIR_WEB)/.buildinfo			\
			 $(BLDDIR_WEB)/_static/*.css		\
			 $(BLDDIR_WEB)/_static/*.gif		\
			 $(BLDDIR_WEB)/_static/*.js			\
			 $(BLDDIR_WEB)/_static/*.png		\
			 $(BLDDIR_WEB)/_static/css/*.css	\
			 $(BLDDIR_WEB)/_static/js/*.js		\
			 $(BLDDIR_WEB)/genindex				\
			 $(BLDDIR_WEB)/objects.inv			\
			 $(BLDDIR_WEB)/search				\
			 $(BLDDIR_WEB)/searchindex.js

	@echo ; echo "Copying files..."
	@cp $(SRC)/.htaccess $(SRC)/version.txt $(SRC)/robots.txt $(BLDDIR_WEB)
	@cp $(SRC)/_static/js/jquery-1.8.2.min.js $(BLDDIR_WEB)/_static/js

	@echo ; echo "Combining css files..."
	@cat $(SRC)/_static/css/bootstrap.css				\
		 $(SRC)/_static/css/bootstrap-responsive.css	\
		 $(SRC)/_static/css/jquery.fancybox.css			\
		 $(SRC)/_static/css/jquery.fancybox-thumbs.css	\
		 $(SRC)/_static/css/style.css					\
		 | cleancss --s0 -o $(BLDDIR_WEB)/_static/css/pack.css

	@echo ; echo "Combining js files..."
	@cat $(SRC)/_static/js/bootstrap.js					\
		 $(SRC)/_static/js/jquery.mousewheel.js			\
		 $(SRC)/_static/js/jquery.fancybox.js			\
		 $(SRC)/_static/js/jquery.fancybox-thumbs.js	\
		 | uglifyjs --no-copyright -o $(BLDDIR_WEB)/_static/js/pack.js

	@echo ; echo "Build finished. The HTML pages are in $(BLDDIR_WEB)."

help:
	@echo "Please use \"make <target>\" where <target> is one of:"
	@echo " server   to start the webserver"
	@echo " website  to build the website"
	@echo " clean    to clean the built website"
	@echo " help     to show this help message"

.PHONY: clean help server

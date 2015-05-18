.PHONY: test
test: node_modules/.bin/marionette-mocha
	./node_modules/.bin/marionette-mocha \
		--host $(shell pwd)/index.js \
		--runtime $(shell pwd)/binary_link \
		$(shell find test/ -name "*_test.js")

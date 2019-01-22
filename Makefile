#!/bin/bash

PORT=1313

all: serve

install:
	rm -rf public/
	hugo
	npm install

serve:
	hugo serve --port ${PORT}

# integration tests need selenium and access to your browser (chromedriver, ...)
test:
	npm test

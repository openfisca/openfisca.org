#!/bin/bash

PORT=1313

all: serve

install:
	rm -rf public/
	hugo
	npm install

serve:
	hugo serve --port ${PORT} --watch --verbose --disableFastRender --printI18nWarnings --ignoreCache --logLevel warn

build:
	hugo

test:
	npm test

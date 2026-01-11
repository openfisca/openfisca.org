#!/bin/bash

PORT=1313

all: serve

serve:
	hugo serve --port ${PORT} --watch --disableFastRender --printI18nWarnings --ignoreCache --logLevel warn

build:
	rm -rf public/
	hugo

test:
	npm test

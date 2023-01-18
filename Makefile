#!/bin/bash

PORT=1313

all: serve

install:
	rm -rf public/
	hugo
	npm install

serve:
	hugo serve --port ${PORT} --watch --verbose --disableFastRender

build:
	hugo

test:
	npm test

#!/bin/bash

PORT=1313

all: serve

install:
	rm -rf public/
	hugo
	npm install

serve:
	hugo serve --port ${PORT}

test:
	npm test

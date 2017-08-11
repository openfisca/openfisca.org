#!/bin/bash
if [ ! -f index.html ]; then
    echo "Index file not found!"
    exit 1
fi
exit 0

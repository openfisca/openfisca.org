#!/bin/bash

if [ ! -f index.html ]; then
    echo "Index file not found!"
    return 1
fi

return 0

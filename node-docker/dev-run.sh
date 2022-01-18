#!/bin/bash
docker run -it -p 5000:5000 --mount type=bind,source="$(pwd)"/src,target=/app/src,readonly benoithubert/node-mongo-docker-dev
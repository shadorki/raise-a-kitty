#!/bin/sh

yarn install
. ./.env
echo $DATABASE_URL
exec tail -f /dev/null

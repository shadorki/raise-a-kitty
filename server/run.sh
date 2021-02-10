#!/bin/sh

yarn install
. ./.env
echo $DATABASE_URL
yarn run dev

#!/bin/sh

set -e
  
./wait-for-it.sh postgres:5432 -- echo "Database is ready"

flask db upgrade

flask run
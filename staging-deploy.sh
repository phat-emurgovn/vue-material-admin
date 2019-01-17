#!/usr/bin/env bash

WORKING_DIR="/var/www/app/admin-console"
SERVER_IP="13.251.174.231"
yarn run staging-build
zip -r dist.zip dist
scp -i ~/.ssh/act-payment.pem ./dist.zip "ubuntu@$SERVER_IP:~/"

ssh "ubuntu@$SERVER_IP" -i ~/.ssh/act-payment.pem "unzip dist.zip && rm -Rf $WORKING_DIR && mv dist $WORKING_DIR"
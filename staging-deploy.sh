#!/usr/bin/env bash

yarn run staging-build
zip -r dist.zip dist
scp -i ~/.ssh/act-payment.pem ./dist.zip ubuntu@13.251.174.231:~/

ssh ubuntu@13.251.174.231 -i ~/.ssh/act-payment.pem "unzip dist.zip && sudo rm -R /var/www/app/admin-console/ && sudo mv dist /var/www/app/admin-console"
#!/usr/bin/env bash

yarn run build
zip -r dist.zip dist
scp -i ~/.ssh/act-payment.pem ./dist.zip ubuntu@3.0.117.173:~/

ssh ubuntu@3.0.117.173 -i ~/.ssh/act-payment.pem "unzip dist.zip && sudo rm -R /var/www/app/admin-console/ && sudo mv dist /var/www/app/admin-console"
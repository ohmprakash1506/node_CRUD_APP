#!/bin/bash
cd /home/ec2-user/node-app
npm install
pm2 start app.js

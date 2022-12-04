#!/bin/bash
#author:SAMIA Oussama

clear
echo "Install Root Packages"
npm install
echo "Install Server Packages"
cd ./packages/Server/
npm install
echo "Install Client Packages"
cd ../Client
npm install
echo "Project Packages Installed"
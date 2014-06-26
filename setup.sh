#!/usr/bin/env bash

if [[ `hostname -s` = "runnable" ]]
then
  echo "doing set up for runnable..."

  if [ -e "../package.json" ]
	then
	  echo "removing original package.json"
	  rm ../package.json
  fi
  if [ -e "../server.js" ]
	then
	  echo "removing original server.js"
	  rm ../server.js
  fi

  (shopt -s dotglob; mv -- * ..)
	
  echo "Files relocated to root, installing node packages..."
  cd ../ && npm install
  echo "PS1='\n$PWD\n$ '" >> .bashrc
  source .bashrc
  rm setup.sh
  rm -rf simple-node-app
else
  npm install
  rm setup.sh
fi


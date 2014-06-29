#!/usr/bin/env bash

git clone https://github.com/jfraboni/simple-node-app.git

if [[ `hostname -s` = "runnable" ]]
then
  echo "executing set up for runnable..."

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

  # remove the current bash profile, we'll install our own
  rm ../.bashrc

  ./replace-anchor.js

  (shopt -s dotglob; mv -- * ..)

  echo "Files relocated to root, installing node packages..."
  cd ../ && npm install
  
  rm setup.sh
  rm -rf simple-node-app
else
  npm install
  rm setup.sh
fi


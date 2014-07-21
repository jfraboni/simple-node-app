#!/usr/bin/env bash

config=()

getConfig() {
    i=0
    while read line 
    do
        config[i]=$line # Put it into the array
        i=$(($i + 1))
    done < $1
}
getConfig "spark/.setup/config.txt"

echo "executing set up for app ${config[0]}..."

if [[ `hostname -s` = "runnable" ]]
then
  echo "...on runnable..."

  if [ -e "package.json" ]
  then
    echo "removing original package.json"
    rm package.json
  fi
  if [ -e "server.js" ]
  then
    echo "removing original server.js"
    rm server.js
  fi

  mv spark/* .
  rm -rf spark

  ./replace-anchor.js
  rm replace-anchor.js

  echo "Files relocated to root, installing node packages..."
  npm install
  
  rm setup.sh
else
  cd spark && npm install
  rm setup.sh
fi

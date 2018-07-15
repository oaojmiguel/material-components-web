#!/usr/bin/env bash

if [ "$TEST_SUITE" == 'screenshot' ]; then
  if [ ! -d $HOME/google-cloud-sdk ]; then
    curl -o /tmp/gcp-sdk.bash https://sdk.cloud.google.com
    chmod +x /tmp/gcp-sdk.bash
    /tmp/gcp-sdk.bash --disable-prompts
  fi

  export PATH=$PATH:$HOME/google-cloud-sdk/bin
  export CLOUDSDK_CORE_DISABLE_PROMPTS=1

  openssl aes-256-cbc -K $encrypted_eead2343bb54_key -iv $encrypted_eead2343bb54_iv \
    -in test/screenshot/auth/travis.tar.enc -out test/screenshot/auth/travis.tar -d
  tar -xzf test/screenshot/auth/travis.tar -C test/screenshot/auth/

  git status

  gcloud auth activate-service-account --key-file test/screenshot/auth/gcs.json
  gcloud config set project material-components-web
  gcloud components install gsutil

  which gsutil 2>&1 > /dev/null
  if [ $? != 0 ]; then
    pip install --upgrade pip
    pip install gsutil
  fi
fi
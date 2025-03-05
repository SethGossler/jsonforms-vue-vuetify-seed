#!/bin/bash

#######################################
# Setup package managers
#######################################
function setup_package_managers() {
  npm install -g npm
  npm i -g @antfu/ni
  npm i -g pnpm@10.2.0
}

#######################################
# Install dependencies
#######################################
function install_dependencies() {
  yes | pnpm install
  # pnpm install --no-optional --config.confirmModulesPurge=false
}

#######################################
# Setup devcontainer
#######################################
setup_package_managers
install_dependencies

echo "Setup complete!"

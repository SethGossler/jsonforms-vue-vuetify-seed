# All possible images can be seen at https://github.com/devcontainers/images/tree/main/src/javascript-node,
# though that doesn't appear to show which debian aligns with which version name,
# but that can be found at https://wiki.debian.org/LTS
#
# Update 'VARIANT' to pick a Node version: 20, 18, 16
# -Debian version: bookworm (12), bullseye (11), buster (10)
ARG VARIANT=20-bookworm
FROM mcr.microsoft.com/devcontainers/typescript-node:1-${VARIANT}

# node may come with an older version of npm. Update and install related tools
# RUN npm install -g npm@10.2.3 // If necessary to ensure we have a specific version
# RUN npm install -g npm
# RUN npm i -g @antfu/ni
# RUN npm add -g pnpm@10.2.0

# [Optional] Uncomment this section to install additional OS packages.
# (Commented out until we need it)
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends libnss3-tools parallel

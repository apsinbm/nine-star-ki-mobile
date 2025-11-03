const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Resolve path aliases (@/ prefix)
const projectRoot = __dirname;
config.resolver.extraNodeModules = {
  '@': path.resolve(projectRoot),
};

module.exports = config;

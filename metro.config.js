const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
  resolver: {
    // Supprime SVG des fichiers considérés comme des assets statiques
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    // Ajoute SVG aux fichiers sources
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
  transformer: {
    // Utilise react-native-svg-transformer pour transformer les fichiers SVG
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
};

module.exports = mergeConfig(defaultConfig, customConfig);

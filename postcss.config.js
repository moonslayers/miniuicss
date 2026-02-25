module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': true
      },
      browsers: ['last 2 versions', '>= 1%', 'not dead']
    },
    cssnano: {
      preset: 'default'
    }
  }
}

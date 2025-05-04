const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/assets/js/notebook.js',
  mode : 'development',
  output: {
    filename: 'assets/js/notebook.js',
    path: path.resolve(__dirname, 'dist/'),
  }
  ,plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/index.php', to: 'index.php' },
        { from: 'src/notebook.php', to: 'notebook.php' },
        // { from: 'src/shell', to: 'shell' },
        { from: 'src/file', to: 'file' },
        // { from: 'src/models', to: 'models' },
        // { from: 'src/scrape', to: 'scrape' },
        // { from: 'src/data', to: 'data' },
        // { from: 'src/assets/img', to: 'assets/img' },
        // { from: 'src/assets/data', to: 'assets/data' },
        // { from: 'src/assets/html', to: 'assets/html' },
        { from: 'src/assets/css', to: 'assets/css' }
      ]
    })
  ]
};
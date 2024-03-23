const path = require('node:path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
   module: {
     rules: [
    //   {
    //     test: /\.js$/, // Определение, что эти правила применяются к файлам JavaScript
    //     exclude: /node_modules/, // Исключение папки 'node_modules' из обработки
    //     use: {
    //       loader: 'babel-loader', // Использование Babel для транспиляции JavaScript
    //     },
    //   },
    //   {
    //     test: /\.html$/, // Определение, что эти правила применяются к HTML файлам
    //     use: [
    //       {
    //         loader: 'html-loader', // Использование 'html-loader' для обработки HTML файлов
    //       },
    //     ],
    //   },
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, 'css-loader'],
      },
     ],
   },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html', // Указание исходного HTML-файла для генерации
      filename: './index.html', // Указание имени итогового HTML-файла
    }),
    new MiniCSSExtractPlugin() // Использование MiniCSSExtractPlugin для извлечения CSS в отдельные файлы
  ],
};
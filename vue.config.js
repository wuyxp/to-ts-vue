module.exports = {
  configureWebpack: {
    entry: './src/main.ts',
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts', 'tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            'babel-loader',
            {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.vue$/],
              },
            },
          ],
        },
      ],
    },
  },
};

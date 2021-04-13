import * as path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { DefinePlugin } from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { sbtiResults } from "./src/constants/sbti";

const production = process.env.NODE_ENV === "production";
const development =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const config: webpack.Configuration = {
  mode: development ? "development" : "production",
  entry: "./src/index.tsx",
  output: {
    filename: production ? "[name]-bundle-[chunkhash:8].js" : "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: process.env.PUBLIC_PATH ?? "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".mjs"],
    modules: [path.join(__dirname, "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(mjs|js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: true,
          },
        },
      },
      {
        test: /\.(png|ico|ttf|woff2?|eot|otf|svg)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      "process.env": {
        BASE_NAME: JSON.stringify(process.env.BASE_NAME ?? "/"),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new CopyWebpackPlugin({ patterns: [{ from: "src/static" }] }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "src/**/*.{ts,tsx,js,jsx}",
      },
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      title: "슝슝이 테스트",
      description: "슝슝이로 알아보는 성향 테스트",
      image: "https://ssungbti.yourssu.com/img/open.png?v=2",
      url: "https://ssungbti.yourssu.com/",
    }),
    ...sbtiResults.map(
      sbti =>
        new HtmlWebpackPlugin({
          template: "src/index.html",
          filename: `result/${sbti.type}/index.html`,
          title: "슝슝이 테스트",
          description: `${sbti.subtitle} ${sbti.title}`,
          image: `https://ssungbti.yourssu.com/img/${sbti.type}.png`,
          url: `https://ssungbti.yourssu.com/result/${sbti.type}/`,
        })
    ),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  devtool: development ? "inline-source-map" : undefined,
};

if (development) {
  config.plugins = config.plugins?.concat([
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ]);
}

export default config;

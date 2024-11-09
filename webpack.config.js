const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: "development", // 또는 'production'
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // 이전 번들 삭제
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // CSS 파일을 처리하기 위한 로더 설정
      },
      {
        test: /\.html$/i,
        loader: "html-loader", // HTML 파일을 처리하기 위한 로더
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // 이미지 파일 처리 설정 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // HTML 템플릿 파일 경로
      filename: "index.html", // 출력할 HTML 파일 이름
    }),
    new Dotenv(), // .env 파일의 변수를 사용할 수 있도록 설정
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // 정적 파일 제공 경로
    },
    compress: true, // gzip 압축 활성화
    port: 9000, // 개발 서버 포트 설정
    open: true, // 서버 시작 시 브라우저 자동 열기
  },
};
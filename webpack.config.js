module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  watch: false,
  watchOptions: {
    ignored: ["dist/**", "node_modules/**"]
  }
};

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var chalk = require('chalk');

var port = 3000;
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './app/index.html'));
});

app.listen(port, function onAppListening(err) {
    if (err) {
        console.error(err);

    } else {

        console.log(chalk.green('server started at http://localhost:'+port));
    }
});

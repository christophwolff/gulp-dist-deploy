var gulp = require('gulp');
var gulpshell = require('gulp-shell');

function run (opts) {

    opt || opts {};



    opts.distbranch = 'dist';
    opt.devbranch   = 'master';
    opt.buildtask   = 'build';
    opts.remote     = 'origin';
    opts.version    = getPackageJsonVersion();

    build();
    deploy();

    function deploy() {

    }

    function build(){

      gulp.start(opt.build);

    }

    function getPackageJsonVersion() {
      return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
    }

  }

module.exports = gulpdistdeploy;

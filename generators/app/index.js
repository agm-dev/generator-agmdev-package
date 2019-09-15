"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  initializing() {
    this.composeWith(require.resolve('generator-agmdev-barebone/generators/app'));
  }

  prompting() {

  }

  writing() {
    // .travis.yml
    const travis = ".travis.yml";
    this.fs.copy(this.templatePath(travis), this.destinationPath(travis));
  }

  install() {

  }

  end() {
    this.log(`Don't forget to enable and configure your project in the Travis dashboard with the enviroment variables used in file .travis.yml!`)
    this.log(`You have to configure following environment variables:\n- NPM_EMAIL\n- NPM_TOKEN\n- CODACY_PROJECT_TOKEN`);
  }
};

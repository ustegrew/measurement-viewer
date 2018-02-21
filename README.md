# MeasurementViewer

I needed to display some simulations for the CPU I/O circuit for the [fan controller](https://github.com/ustegrew/fan_controller) project. The purpose is immaterial, for me it was just an excuse to whip up an Angular application and learn best practices for Angular programming. Success? Dunno... Criticism welcome.

I built the project using `ng build`; servable files are located in the `dist` sub directory. Best served up from a web server (loading into browser from local Storage didn't work for me).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

**Note**: Development won't work straight away, as my dev setup has got a lot of node modules in the dev tree (amounts to about 320MB whilst the project relevant files are miniscule). I put those into `.gitignore`. If you wish to do some dev on this project, create your own angular-cli environment and clone this project into it. Once your angular-cli is set up, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Blue
> Blocklevel loves user experience

Blue is an opinionated full fledged Vue.js framework. Blue enables you to create high end applications in a process where clients are a big part of your workflow.

## Quickstart

### Installation
Using npm
``` bash
$ npm install
```
Using Yarn
``` bash
$ yarn
```

### Development
This will start a webpack dev server with hot-reload
``` bash
$ npm run dev
```

### Testing
This will start the karma test runner, we only support unit testing in this setup which are located in ``test/src/``
``` bash
$ npm run test
```

### Build
This will create a new build, it will create a timestamped folder located in ``dist/version/``.

Run the build command
``` bash
# to run a production build (default)
$ npm run build

# to run a environment specific build
$ npm run build --env=staging
```


## Project structure

```
blue
└───config
│   └───dev
│   └───production
└───src
│   └───app
│   │   └───component
│   │   └───container
│   │   └───mixin
│   │   └───page
│   │   └───proxy
│   │   └───store
│   │   └───vendor
│   └───asset
│   │   └───font
│   │   └───image
│   │   └───style
└───static
│   └───lang
└───test
│   └───src
└───webpack
│   └───build
│   └───dev
│   └───test
```

### ``config``
The environment configuration files can be found in ``config/`` where the subdirectories represent environment specifics.
The build is created with environment specific configuration, it will use the ``--env`` argument when provided, otherwise it will use the ``NODE_ENV`` variable and will default to production.
The path to the index file of the application can be altered by providing an ``index`` and ``template`` property to ``paths.yaml``. ``index`` is the file which will be written by Webpack based on the file located in the ``template`` path.

Example configuration (TL;DR)
```
# Example for a Laravel setup, all paths are relative to the root of this project
index: '../backend/resources/views/layouts/build.blade.php'
template: '../backend/resources/views/layouts/vue.blade.php'
buildPath: '../htdocs'
```


### ``src``
This is where all the application specific files will be located.
- ``src/app/component/`` should contain components which are used for presentational purposes
- ``src/app/container`` should contain components which are used for functional purposes
- ``src/app/mixin`` [should contain mixins](https://www.google.nl/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjFrZSVjcTQAhVB6xoKHXpAArIQjRwIBw&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F339388521896053375%2F&psig=AFQjCNHbLqq8l_sFqq6qhjAPjCsOsMQ03w&ust=1480170014958970)
- ``src/app/page`` should contain components which represent a certain page
- ``src/app/proxy`` should contain functions which retrieve data in any way (AJAX, getCurrentPosition, localStorage etc.)
- ``src/app/proxy`` contains the application's store and modules, see [Vuex](https://github.com/vuejs/vuex)
- ``src/app/vendor`` contain files which can't be loaded by Webpack for some reason

### ``static``
Should contain all static files for the project

### ``test``
Should contain unit tests

### ``webpack``
Contains the Webpack setup

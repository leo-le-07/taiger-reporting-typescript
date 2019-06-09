## iconverse-analytics

[Live demo](https://sad-lewin-2e9852.netlify.com/#/)

### Project important dependencies
* State management: `vuex`
* Router: `vue-router`
* Post-CSS: `sass`
* ESLint: `@vue/eslint-config-standard`
* Unit test: `jest`

### Naming conventions
1. Use `kebab-casing` for file names (e.g. `chatbot-users` instead of `chatbotUsers`).
2. Use `PascaleCasing` for Vue components.
3. Consistantly using `camelCasing` for component props (e.g. `:isCollapsed` is acceptable now)

### Start mock backend server
Currently, we're using [JSON server](https://github.com/typicode/json-server) to mock backend server.

* Install JSON server
```
npm install -g json-server
```

* Start backend server
```
json-server --watch src/faker/db.json --port 8081
```

### Start frontend
* Install dependencies
```
yarn install
```

* Compiles and hot-reloads for development
```
yarn run serve
```
* Compiles and minifies for production
```
yarn run build
```

* Run your tests
```
yarn run test
```
* Lints and fixes files
```
yarn run lint
```

* Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
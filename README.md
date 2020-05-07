# :abcd: Vue input mask
> Tiny input mask library for vue.js based on [text-mask-core](https://github.com/text-mask/text-mask/tree/master/core) (~4kb) exposed as directive. No dependencies
---
> Special thanks to the author of the repository [v-mask](https://github.com/probil/v-mask) (Max Lyashuk) for the implementation of the plugin for vue
---


## :heavy_check_mark: Browser Support

|![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![iOS Safari](https://raw.github.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png) | ![Android WebView](https://raw.github.com/alrra/browser-logos/master/src/android-webview-beta/android-webview-beta_48x48.png) | ![Android WebView](https://raw.github.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png)
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 74+ :heavy_check_mark: | 66+ :heavy_check_mark:  | 12+ :heavy_check_mark: | 46+ :heavy_check_mark: | 17+ :heavy_check_mark: | 11+ :heavy_check_mark: | 12+ :heavy_check_mark: | 67+ :heavy_check_mark: | 8.2+ :heavy_check_mark:

We support only browsers with global usage statistics greater then 1%, last 2 version of each browser but not dead browsers. Library may work in older browser but we don't not guarantee that. You may need addition polyfills to make it work.


## :cd: Installation

This version requires Vue 2.X. If you are looking for Vue 1.X, [check it here](https://github.com/lexfoxer/v-mask-ru/tree/vue-1.x).

```sh
npm install v-mask-ru
```


## Initialization

### ES2015 (Webpack/Rollup/Browserify/etc)

```javascript
import Vue from 'vue'

// As a plugin
import VueMaskRu from 'v-mask-ru'
Vue.use(VueMaskRu);

// Or as a directive
import { VueMaskDirective } from 'v-mask-ru'
Vue.directive('mask-ru', VueMaskDirective);

// Or only as a filter
import { VueMaskFilter } from 'v-mask-ru'
Vue.filter('VMaskRu', VueMaskFilter)
```


## :rocket: Usage
```html
<input type="text" v-mask-ru="'####-##'" v-model="myInputModel">
<!-- OR -->
<input type="text" v-mask-ru="nameOfVariableWithMask" v-model="myInputModel">
```

**Notice:** `v-model` is required starting from `v1.1.0`, because [a lot](https://github.com/probil/v-mask/issues/16) [of](https://github.com/probil/v-mask-ru/issues/30) [bugs](https://github.com/probil/v-mask/issues/29) with HTMLElement event listeners and sync with Vue internals.

There is no reason to support using this lib for using without `v-model` but open the door for using on [custom inputs](http://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events).


### Filter usage
```html
<span>{{ '9999999999' | VMaskRu('(###) ###-####') }}</span>
```


## :gear: Configs

List of supported placeholders:

| Value | Format                            |
|-------|-----------------------------------|
| #     | Number (0-9)                      |
| A     | Letter in any case (a-z,A-Z)      |
| B     | Letter in any case (а-я,А-Я)      |
| C     | Russian car number (АВЕКМНОРСТУХ) |
| N     | Number or letter                  |
| X     | Any symbol                        |
| ?     | Optional (next character)         |


## :syringe: Tests

[Jest](https://github.com/facebook/jest) is used for unit-tests.

Unit-tests can be executed by typing this command in your terminal:

```bash
npm test
```

[TestCafe](https://github.com/DevExpress/testcafe) is used of E2E testing.

E2E-tests can be executed by typing this command in your terminal:

```bash
npm test:e2e
```


## :anchor: Semantic Versioning Policy

This plugin follows [semantic versioning](http://semver.org/).


## :newspaper: Changelog

We're using [GitHub Releases](https://github.com/lexfoxer/v-mask-ru/releases).


## :beers: Contributing

We're more than happy to see potential contributions, so don't hesitate. If you have any suggestions, ideas or problems feel free to add new [issue](https://github.com/lexfoxer/v-mask-ru/issues), but first please make sure your question does not repeat previous ones.

**Notice:** You should make your changes only in `src` folder, don't try to edit files from `dist` as it compiled from `src` by babel and shouldn't be changes manually.

## :lock: License

See the [LICENSE](LICENSE) file for license rights and limitations (MIT).

# vue-project-setting

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
### setting.json in VSCode
단축키 Ctrl + comma(,) setting 창에서 'eslint' 검색 <br> 
Eslint: Validate를 찾아 Edit in setting.json 버튼 눌러 이동 후 다음 설정 추가

```
"eslint.validate": [

    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "markdown"
],
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true 
}
```

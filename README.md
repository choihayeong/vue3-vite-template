# vue-project-setting
- Vue3 공부를 위한 Vue3 Setting 정리

## vue 설치
- Vite로 프로젝트 구성
```
npm init vue@latest
```
<img src="https://user-images.githubusercontent.com/90609686/222661061-93b7f118-f55f-4e0e-a25a-a5b624230bb3.png">

```
cd study-vue3
npm install
npm run format
npm run dev
```

### (Option).eslintrc.cjs 추가
```
rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': [
        'error',
        {
            singleQuote: true,
            semi: true,
            useTabs: true,
            tabWidth: 2,
            trailingComma: 'all',
            printWidth: 80,
            bracketSpacing: true,
            arrowParens: 'avoid',
        },
    ],
},
```

### (Option)setting.json in VSCode
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

## vue3 study
- vue3 기본 문법

## vue3 + bootstrap5
- bootstrap5 활용법 (보통 vue는 vuetify를 사용함)
```
npm install bootstrap
```
- 설치 후 main.js에 다음과 같이 import
```javascript
import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

createApp(App).mount('#app');
```

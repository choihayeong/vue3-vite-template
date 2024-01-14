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

### Non-Prop 속성 (fallthrough 속성)

#### 속성 상속 비활성화
- 자식 컴포넌트에서 `inheritAttrs: false` 옵션을 설정하면 됨.
```vue
<template>
    <!-- child component.vue -->
    <div>
        <button class="btn btn-primary" type="button">My Button</button>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    setup() {
        return {};
    }
}
</script>
```

- `inheritAttrs: false` 옵션을 설정하는 경우는 자식 컴포넌틍의 루트 요소 이외의 다른 요소에 Non-Prop 속성을 적용하고 싶을 때임. 
- 아래 예시는 `<div>` 하위 요소인 `<button>` 요소에 Non-Prop 속성을 적용
- `<button>` 요소에 `$attrs` 를 바인딩 시키면 됨

```vue
<template>
    <!-- parent component.vue -->
    <main>
        <MyButton class="any-class" id="anyId" @click="sayHello" />
    </main>
</template>

<script setup>
    const sayHello = () => {
        alert("Hi there :)");
    };
</script>
```

```vue
<template>
    <!-- MyButton.vue : child component.vue -->
    <div>
        <button class="btn btn-primary" type="button" v-bind="$attrs">My Button</button>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    setup(prop, context) {
        console.log(context.attrs.class);
        console.log(context.attrs.id);
        console.log(context.attrs.onClick);

        return {};
    }
}
</script>
```

#### 자식 컴포넌트에 여러 루트 노드가 있는 경우의 속성 상속

- 루트 노드가 여러 개일 경우 Non-Prop 속성이 상속되지 않는다. (콘솔에 warning 발생)
- 루트 노드 중 Non-Prop 속성을 적용할 요소에 `v-bind="$attrs"`를 바인딩을 해줘야함

```vue
<template>
    <!-- parent component.vue -->
    <main>
        <LabelInput label="이름" data-custom="any" />
    </main>
</template>
```

```vue
<template>
    <!-- child component.vue -->
    <label>{{ label }}</label>
    <input v-model="value" type="text" v-bind="$attrs" />
</template>

<script>
import {computed} from 'vue';

export default {
    props: ['modelValue', 'label'],
    emits: ['update:modelValue'],
    setup(props, {emit}) {
        const value = computed({
            get() {
                return props.modelValue;
            },
            set(value) {
                emit('update:modelValue', value);
            }
        })

        return {value};
    }
}
</script>
```
#### 자식 컴포넌트에 emits 옵션 써주기
- `emits: ['click'],` 옵션을 생략할 경우 My Button의 `<button>` 요소를 클릭할 경우 alert이 두 번 발생하게 됨

```vue
<template>
    <!-- parent component.vue -->
    <main>
        <MyButton class="any-class" @click="sayHello" />
    </main>
</template>

<script setup>
import MyButton from "./MyButton.vue";

const sayHello = () => {
    alert("안녕하세요.");
};
</script>
```

```vue
<template>
    <!-- MyButton.vue : child component.vue -->
    <div>
        <button class="btn btn-primary" type="button" @click="sayHello">My Button</button>
    </div>
</template>

<script>
export default {
    emits: ['click'],
    setup(prop, {emit}) {
        const sayHello = () => {
            emit("click");
        }

        return {sayHello};
    }
}
</script>
```

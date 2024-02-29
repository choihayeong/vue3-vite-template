import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App);

app.provide("app-message", "app message 입니당");

app.config.globalProperties.msg = "hello~";

app.mount("#app");

/* import global component */
// import AppCard from '@/components/AppCard.vue';
// app.component('AppCard', AppCard);

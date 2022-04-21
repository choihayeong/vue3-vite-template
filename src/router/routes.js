import Vue from "vue";
import Router from "vue-router"; 
import DefaultLayout from "../layout/Default.vue";

Vue.use(Router);

export const router = new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Home",
			component: DefaultLayout,
			children: [
				{
					path: '/',
					component: () => import('@/views/Home')
				},
			]
		},
		{
			path: "/login",
			name: "Login",
			component: DefaultLayout,
			children: [
				{
					path: '/',
					component: () => import('@/views/login/Main')
				},
				{
					path: 'dashboard',
					component: () => import('@/views/login/Dashboard')
				}
			]
		},
	],
});
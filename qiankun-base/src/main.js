import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
	{
		name: 'vueApp', //应用名字
		entry: '//localhost:1000', //默认会加载这个html,解析里面的js 动态执行 (子应用必须支持跨域)
		container: '#vue', //容器名字
		activeRule: '/vue', //激活路径
	},
	{
		name: 'reactApp',
		entry: '//localhost:2000',
		container: '#react',
		activeRule: '/react',
	},
]);
// 启动 qiankun
start();
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');

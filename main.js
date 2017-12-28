//引入vue
import Vue from 'vue';
import App from './app.vue';
var app = new Vue({
	el: '#app',
	//虚拟DOM
	render: h => {
		return h(App)
	}
});
console.log(app)
 
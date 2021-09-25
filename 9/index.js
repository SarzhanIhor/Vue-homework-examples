// Учебник по фреймворку Vue

let app = new Vue({
	el: '#app',
	data: {
		message: 'hello',
		items: ['a', 'b', 'c', 'd', 'e'],
		str: 'qwertyu',
		age: '25',
		str2: 'Вова',
	},

	methods: {
		reverseStr: function(str2) {
			return str2.split('').reverse().join('');
		}
	}
});



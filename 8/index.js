// Учебник по фреймворку Vue

let app = new Vue({
	el: '#app',
	data: {
		message: 'hello',
		items: ['a', 'b', 'c', 'd', 'e'],
		newItem: '',
		nums: [1, 2, 3, 4, 5],
		age: 17,	
		num: null,
		num2: null,
		num3: null,
		result: 0,	
		result2: 0,
		text1: 'qwerty',
		text2: 'zxcvb',
		fullName: 'Петров Петр Петрович',
		arr: [],
	

	},

	methods: {
		hideElem: function() {
			this.showName = false,
			this.hideName = true
		},
		showElem: function() {
			this.showName = true,
			this.hideName = false
		},

		/* Задача 8.2 */
		calcSqrt: function() {
			this.result = Math.sqrt(this.num);
		},

		/* Задача 8.3 */
		calcPlus: function() {
			this.result2 = Number(this.num2) + Number(this.num3);
		},

		/* Задача 8.4 */
		changeText: function() {
			tempText = ''

			tempText = this.text1
			this.text1 = this.text2 
			this.text2 = tempText
		},

		/* Задача 8.5 */
		addArr: function () {
			this.arr.push(...this.fullName.split(' '))
		},

		/* Задача 8.6
		   Задача 8.7 */
		addItem: function() {
			this.items.unshift(this.newItem);
			this.items.push(this.newItem);

			this.newItem = ''
		}
	}
});



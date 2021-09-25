// Учебник по фреймворку Vue

let app = new Vue({
	el: '#app',
	data: {
		message: 'hello',
		items: ['a', 'b', 'c', 'd', 'e'],
		text: '',
		arr: [],
		newItem: 'raz dva tri',
		checked: true,
		checked2: true,
		checked3: true,
		checked4: false,
		lang: [],
		type: '',
		selected: 'В каком городе вы живете?',
		selected2: '',
		options: ['Москва', 'Париж', 'Шанхай'],
		str: 'header',
		isDisabled: true,
		cssClasses: 'miniClass megaClass, superClass',
		isValid: true,
		isDone: true,
		isDone2: false,
		isValid2: false,
		changeableColor: 'black',
		checked5: true,
		changeableColor2: 'red',


	},

	methods: {
		addArrAndItem: function() {
			this.arr.push(...this.newItem.split(' '))
			this.newItem = ''
		},
		buttonChange: function() {
			if (this.isDisabled == true) {
				this.isDisabled = false
			} else if (this.isDisabled == false)
				this.isDisabled = true
		},
		changeClass: function() {
			if (this.isDone2 == true) {
				this.isDone2 = false
			} else if (this.isDone2 == false) {
				this.isDone2 = true
			}
		},
		changeColor: function() {
			if (this.changeableColor == 'red') {
				this.changeableColor = 'black'
			} else if (this.changeableColor == 'black')
				this.changeableColor = 'red'
		},
		checkboxColorChange: function() {
			if (this.checked5 == true) {
				this.changeableColor2 = 'black'
			} else if (this.checked5 == false)
				this.changeableColor2 = 'red'
		},
	}
});



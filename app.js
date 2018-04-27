new Vue({
    el: '#app',
    data: {
        title: 'Yo! Sup?',
        name: 'Ryan',
        url: 'https://www.youtube.com/',
        classes: ['one', 'two']
    },
    methods: {
        greet(time) {
            return `Hello There ${this.name}, Good ${time}`
        }
    }
});

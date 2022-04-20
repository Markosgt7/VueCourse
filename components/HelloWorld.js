Vue.component('hello-world', {
    template: `<header>
                <h1>{{ title }}</h1>
                <h3>{{ message }}</h3>
                </header>`,
    data() {
        return {
            title: 'Hola soy una app de vue.js',
            message: 'Bienvenidos tod@s!!!'
        }
    }
})
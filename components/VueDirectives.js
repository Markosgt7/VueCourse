Vue.component('vue-directives', {
    template: `
                <div>
                <strong><p v-text="text"></p></strong>
                <em><p> {{ otherText }}</p></em>
                <a :href="link.href" :title="link.title" v-text="link.text"></a>
                </div>`,
    data() {
        return {
            text: 'Texto de prueba directiva v-text',
            otherText: "Otro texto con mostacho",
            link: {
                text: 'VueJs Home',
                href: 'https://es.vuejs.org/v2/guide/',
                title: 'Vue documentation'
            }
        }
    }
})
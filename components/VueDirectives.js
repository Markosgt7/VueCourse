Vue.component('vue-directives', {
    //son las etiquetas html para mostrar los achivos
    template: `
                <div>
                <!--v-test muestra valor de una variable reactiva-->
                <h1 v-text="title"></h1>
                <strong><p v-text="text"></p></strong>
                <em><p> {{ otherText }}</p></em>
                <a :href="link.href" :title="link.title" v-text="link.text"></a>
                <DirectiveHtml/>
                </div>`,
    data() {
        return {//son los datos que retorna para mostrar en la view 
            title: 'Directivas de Vue.Js',
            text: 'Texto de prueba directiva v-text',
            otherText: "Otro texto con mostacho",
            link: {
                text: 'VueJs Home',
                href: 'https://es.vuejs.org/v2/guide/',
                title: 'Vue documentation'
            }
        }
    },
    components: {//se usa para agregar un component hijo dentro de uno padre
        DirectiveHtml,

    }
})
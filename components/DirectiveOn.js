let DirectiveOn = {
    template: `
        <div>
            <h1 v-text="title"></h1>
            <p v-text="message"></p>
            <h3 v-text="pelicula"></h3>
            Entradas disponibles:<span v-text="entradas"></span></br>
            <button @click="comprarEntrada">Comprar Entrada</button>
            <input type="text" @keyup="decirHola"/>
            

        </div>
    `,
    data() {
        return {
            title: "Directiva v-On",
            message: "este componente usa V-on",
            welcome_text: "Bienvendio desde la data :->",
            pelicula: 'Dora la exploradora',
            entradas: 5
        }
    },
    methods: {
        decirHola() {
            alert(this.welcome_text)
        },
        comprarEntrada() {
            if (this.entradas > 0) {
                this.entradas--
                return alert(`Entrada para ${this.pelicula} comprada`)
            }
            return alert(`Ya no hay entreadas para ${this.pelicula}`)

        }

    }
}
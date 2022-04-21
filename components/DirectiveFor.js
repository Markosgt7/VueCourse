let DirectiveFor = {
    template: `
        <div>
            <h1 v-text="title"></h1>
            <p v-text="message"></p>
            <h3>Lista de un Array</h3>
            <ul>
                <li v-for="(color, index) in list" :key="index" v-text="color"></li>
            </ul>
            <h3>Lista de un Objeto</h3>
            <ul>
                <li v-for="(item, key, index ) in lista_objeto" :key="index">
                    {{ key }}=={{ item }}
                </li>
            </ul>
            <h3>Lista de un Array con Objeto</h3>
            <ul>
                <li v-for="(item, index ) in other_list" :key="index">
                    Marca:{{ item.marcas }}<br/>
                    Modelo:{{ item.modelo }}<br/>
                    Color:{{ item.color }}<br/>
                </li>
            </ul>

        </div>
    `,
    data() {
        return {
            title: 'Directiva V-For',
            message: 'Hola desde componente con V-For',
            list: ['Rojo', 'Amarillo', 'Azul', 'Verde'],
            lista_objeto: {
                marcas: 'suzuki',
                modelo: '2019',
                color: 'Gris con etiquetas multicolor'
            },
            other_list: [
                {
                    marcas: 'suzuki',
                    modelo: '2011',
                    color: 'Gris con etiquetas multicolor'
                },
                {
                    marcas: 'serpento',
                    modelo: '2015',
                    color: 'Negra con etiquetas multicolor'
                },
                {
                    marcas: 'pulsar',
                    modelo: '2019',
                    color: 'Roja con etiquetas multicolor'
                },

            ]
        }
    }
}

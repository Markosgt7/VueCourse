let DirectiveShow = {
    template: `
            <div>
                <h1 v-text="title"></h1>
                <p v-show="mostrar" v-text="message"></p>
                <p v-show="user.permission">Tienes acceso a ver esto</p>
                <p v-show="!user.permission">NO tiene acceso a ver esto</p>
            </div>
    `,
    data() {
        return {
            title: 'Directiva V-Show',
            message: 'Hola desde el componente de v-show',
            mostrar: true,
            user: {
                permission: false,
            }
        }
    }

}
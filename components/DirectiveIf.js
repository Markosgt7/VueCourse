let DirectiveIf = {
    template: `
        <div>
            <h1 v-text="title"></h1>
            <p v-text="message"></p>
            <p v-if="mostrar">Mostrar esta en true</p>
            <p v-else>Mostrar esta en False</p>
            <h3>Uso de V-if/ V-else / V-else-if</h3>
                <p v-if="user.permission && user.vip">Usuario con permisos y VIP</p>
                <p v-else-if="user.permission">Usuario solo con permisos</p>
                <p v-else-if="user.vip">Usuario solo es vip</p>
                <p v-else>Usuario no tiene accesos</p>
        </div>
    `,
    data() {
        return {
            title: 'Directiva V-If',
            message: 'Hola desde componente con V-If',
            mostrar: true,
            user: {
                permission: false,
                vip: false,
            }
        }
    }
}
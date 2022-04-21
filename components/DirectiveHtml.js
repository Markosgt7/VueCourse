let DirectiveHtml = {
    template: `
    <div>
        <h1 v-text="title"></h1>
        <p v-html="message"></p>
    </div>`,
    data() {
        return {
            title: 'Directivas V-html',
            message: '<u><i>Hola desde directive html</i></u>'
        }
    }
}
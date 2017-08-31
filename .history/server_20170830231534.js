import Express from 'express'
import Vue from 'vue'
import Render from 'vue-server-renderer'

const server = Express()

server.get('*', (req, res) => {
    let app = new Vue({
        template: `hello world!`
    })

    Render.createRenderer().renderToString(app, (err, html) => {
        res.send(`
        <html>
            <body>
                ${html}
        
            </body>
        </html>
        
        `)
    })
    
})

server.listen(3000, () => {
    console.log(`server is start on 3000`)
})
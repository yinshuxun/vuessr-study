import Express from 'express'
import Vue from 'vue'
import {createRenderer} from 'vue-server-renderer'

const server = Express()

server.get('*', (req, res) => {
    const app = new Vue({
        template: `hello vuessr `
      })

    createRenderer().renderToString(app, (err, html) => {
        res.send(`
        <html>
            <body>
                ${html}
            </body>
        </html>
        
        `)
    })
    
})

server.listen(8080, () => {
    console.log(`server is start on 8080`)
})
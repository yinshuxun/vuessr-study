import Express from 'express'
import Vue from 'vue'
import {createRenderer} from 'vue-server-renderer'

const server = Express()

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
          url: req.url
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`
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
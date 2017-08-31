import Express from 'express'
import Vue from 'vue'
import {createRenderer} from 'vue-server-renderer'

const server = Express()

server.get('*', (req, res) => {
    let app = new Vue({
        template: `<div>hello world!</div>`
    })

    createRenderer({
        template:require('fs').readFileSync('index.html','utf-8')
    }).renderToString(app, (err, html) => {
        if(err){
            console.log(err)
        }
        res.send(html)
    })
    
})

server.listen(8080, () => {
    console.log(`server is start on 8080`)
})
import Express from 'express'
import Vue from 'vue'
import Render from 'vue-server-renderer'

const server = Express()

server.get('*', (res, ret) => {

})

server.listen(3000, () => {
    console.log(`server is start on 3000`)
})
'use strict'
const { createApp } = Vue

let elementObj = {
    data() {

        return {
            text: 'hello',
        }

    }
}

const app = createApp(elementObj)
app.mount('#app')
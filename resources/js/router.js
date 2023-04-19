import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from './components/Home'
import Hello from './components/Hello'
import Test from './components/Test'

export default new VueRouter({
    mode: 'history',
    base:'/stalk_person/',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello
        },

        {
            path: '/test',
            name: 'test',
            component : Test
        }

      
    ],
});
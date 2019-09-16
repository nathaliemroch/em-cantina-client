import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import List from './components/List.vue';
import Edit from './components/Edit.vue';
import Add from './components/Add.vue';
import Read from './components/Read.vue'

export default new VueRouter({
    name : "VueRouter",
    routes : [
        {
            path: '/home',
            component: Home,
            name : 'Home'
        },
        {
            path: '/list',
            component: List,
            name : 'List'
        },
        {
            path: '/edit/:id',
            component: Edit,
            name : 'Edit'
        },
        {
            path: '/add',
            component: Add,
            name : 'Add'
        },
        {
            path: '/read/:id',
            component: Read,
            name : 'Read'
        }
    ]
})
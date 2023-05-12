import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import ProjetosTarefas from '../views/Projetos.vue'
import Formulario from '../views/Projetos/Formulario.vue'
import Lista from '../views/Projetos/Lista.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        component: ProjetosTarefas,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: Lista
            },
            {
                path: 'novo',
                name: 'Novo Projeto',
                component: Formulario
            },
            {
                path: ':id',
                name: 'Editar Projeto',
                component: Formulario,
                props: true
            },
        ]
    }
]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})


export default roteador;
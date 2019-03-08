import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home.vue')
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: () => import('./views/inscription.vue')
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: () => import('./views/connexion.vue')
    },
    {
      path: '/deconnexion',
      name: 'deconnexion',
      component: () => import('./views/deconnexion.vue')
    },
    {
      path: '/discussions',
      name: 'discussions',
      component: () => import('./views/discussions.vue')
    },
    {
      path: '/newDiscussion',
      name: 'newDiscussion',
      component: () => import('./views/newDiscussion.vue')
    },
    {
      path: '/discussion/:id',
      name: 'discussion',
      component: () => import('./views/discussion.vue')
    },
    {
      path: '/membres',
      name: 'membres',
      component: () => import('./views/membres.vue')
    },
    {
      path: '/membre/:id',
      name: 'membre',
      component: () => import('./views/membre.vue')
    },
    {
      path: '/edit/:idChannel/:idMessage',
      name: 'edit',
      component: () => import('./views/edit.vue')
    },
    {
      path: '/editChannel/:idChannel/',
      name: 'editChannel',
      component: () => import('./views/editChannel.vue')
    },
  ]
})

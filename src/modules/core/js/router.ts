import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue';

export default createRouter({
  history: createWebHistory(),
  routes: [{
            path: '/',
            name: 'HomepageContainer',
            component: defineAsyncComponent(() => import(
                /* webpackChunkName: "homepage" */
                '~routes/homepage/components/HomepageContainer.vue')),
            meta: {}
        },
        {
            path: '/forms/',
            name: 'FormPlaygroundContainer',
            component: defineAsyncComponent(() => import(
                /* webpackChunkName: "formPlayground" */
                '~routes/form-playground/components/FormPlaygroundContainer.vue')),
            meta: {}
        }
    ]
});

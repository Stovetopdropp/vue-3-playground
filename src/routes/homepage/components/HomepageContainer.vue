<template>
    <Layout>
        <div class="c-home">
            <h1>Vue 3 Playground</h1>
            <ModalSingleton />
        </div>
    </Layout>
</template>

<script lang="ts">

import { defineAsyncComponent } from 'vue';

import Layout from '~modules/core/components/layouts/Layout.vue';

export default {
    name: 'HomepageContainer',
    components: {
        Layout,
        ModalSingleton: defineAsyncComponent(() => import('~modules/core/components/ModalSingleton.vue'))
    },
    data() {
        return {};
    }
};

</script>

<style scoped>
    .c-home {
        padding: 0 24px;
    }
</style>

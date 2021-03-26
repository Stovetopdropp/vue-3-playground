<template>
    <Layout>
        <div class="c-home">
            <h1>Forms Playground</h1>

            <h3>Vee Validate 4 + Yup</h3>
            <BaseForm
                :onSubmit="onSubmit"
                :validationSchema="formSchema"
                :submitButton="{
                    'text': 'Submit'
                }"
            >
                <BaseInputVee
                    name="name"
                    type="text"
                    label="Full Name"
                    placeholder="Your Name"
                    success-message="Wow good job entering your name bud!!"
                />
                <br>
                <BaseInputVee
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="Your Email"
                />
                <br>
            </BaseForm>
            <br>
            <ModalSingleton />
        </div>
    </Layout>
</template>

<script lang="ts">

import { defineAsyncComponent } from 'vue';
import * as Yup from 'yup';

import Layout from '~modules/core/components/layouts/Layout.vue';

import BaseForm from '~modules/core/components/ui/form-elements/BaseForm.vue';
import BaseInput from '~modules/core/components/ui/form-elements/BaseInput.vue';
import BaseInputVee from '~modules/core/components/ui/form-elements/BaseInputVee.vue';

export default {
    name: 'FormPlaygroundContainer',
    components: {
        BaseForm,
        BaseInput,
        BaseInputVee,
        Layout,
        ModalSingleton: defineAsyncComponent(() => import('~modules/core/components/ModalSingleton.vue'))
    },
    data() {
        return {
            formSchema: Yup.object().shape({
                name: Yup.string().min(2).required(),
                email: Yup.string().email().required(),
            })
        };
    },
    methods: {
        async onSubmit(values) {
            // this only fires if validation passes
            const res = await new Promise((resolve) => {
                setTimeout(() => resolve({ msg: '!!!!!'}), 750);
            });

            console.log(`successful mission boys ${res.msg}`)
        }
    }
};

</script>

<style scoped>
    .c-home {
        padding: 0 24px;
    }
</style>

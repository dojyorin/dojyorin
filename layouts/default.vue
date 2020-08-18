<template>
<v-app>
    <app-header></app-header>
    <app-navbar></app-navbar>
    <v-main>
        <nuxt></nuxt>
    </v-main>
    <app-footer></app-footer>
</v-app>
</template>

<script>
import header from "@/components/layouts/header.vue";
import navbar from "@/components/layouts/navbar.vue";
import footer from "@/components/layouts/footer.vue";

export default {
    name: "default",
    components: {
        "app-header": header,
        "app-navbar": navbar,
        "app-footer": footer
    },
    data(){
        return {

        };
    }
};
</script>
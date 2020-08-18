<template>
<v-app>
    <app-header></app-header>
    <app-navbar></app-navbar>
    <app-main></app-main>
    <app-footer></app-footer>
</v-app>
</template>

<script>
import header from "@/components/layouts/header.vue";
import navbar from "@/components/layouts/navbar.vue";
import main from "@/components/layouts/main.vue";
import footer from "@/components/layouts/footer.vue";

export default {
    name: "default",
    components: {
        "app-header": header,
        "app-navbar": navbar,
        "app-main": main,
        "app-footer": footer
    }
};
</script>
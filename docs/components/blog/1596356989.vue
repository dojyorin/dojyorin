<template>
<div>
    <v-btn class="override_button_case test" to="/blog">Blog Top</v-btn>
</div>
</template>

<script>
export default {
    data(){
        return {
            test: this.$route.params
        };
    }
};
</script>

<style scoped>
    .test{
        padding: 50px !important;
    }
</style>
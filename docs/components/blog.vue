<template>
<div>
    <v-btn to="/blog/title">Blog:title</v-btn>
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
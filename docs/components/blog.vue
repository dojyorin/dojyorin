<template>
<div>
    <v-btn to="/blog/title">Blog:title</v-btn>
    <v-btn @click="toggleNav(true)">Open</v-btn>
</div>
</template>

<script>
export default {
    data(){
        return {
            test: this.$route.params.article
        };
    },

    methods: {
        ...Vuex.mapMutations([
            "toggleNav"
        ])
    }
};
</script>
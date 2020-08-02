<template>
<div>
    <v-btn class="override_button_case" to="/blog">Blog Top</v-btn>
    <v-btn class="override_button_case" @click="toggleNav(true)">Open</v-btn>
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
import colors from "vuetify/es5/util/colors";

const repository = "dojyorin";

export default {
    mode: "universal",
    target: "static",
    components: true,
    plugins: [],
    modules: [
        "nuxt-webfontloader"
    ],
    buildModules: [
        ["@nuxtjs/vuetify", {
            defaultAssets: {
                font: {
                    family: "M PLUS 1p"
                },
                icons: "mdi"
            }
        }],
    ],
    build: {},
    router: {
        base: `/${repository}/`
    },
    head: {
        titleTemplate: `%s - ${process.env.npm_package_name}`,
        title: process.env.npm_package_name || "",
        meta: [{
            charset: "utf-8"
        }, {
            name: "viewport",
            content: "height=device-height, width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
        }, {
            hid: "description",
            name: "description",
            content: process.env.npm_package_description || ""
        }],
        link: [{
            rel: "icon",
            type: "image/x-icon",
            href: `/${repository}/favicon.ico`
        }]
    },
    css: [],
    vuetify: {
        customVariables: [],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    webfontloader: {
        google: {
            families: [
                "M+PLUS+1p:japanese",
                "Kosugi:japanese"
            ]
        }
    }
};
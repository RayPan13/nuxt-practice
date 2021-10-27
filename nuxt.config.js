export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        htmlAttrs: {
            lang: 'en',
        },
        title: 'nuxt-practice',
        meta: [
            { charset: 'utf-8' },
            {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge,chrome=1',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { name: 'format-detection', content: 'telephone=no' },
            { hid: 'title', name: 'title', content: 'nuxt-practice' },
            { hid: 'description', name: 'description', content: '共用的描述' },
            { hid: 'keywords', name: 'keywords', content: 'html,css,js,vue,nuxt' },
            { hid: 'author', name: 'author', content: 'RayPan' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/scss/basic.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['@/plugins/font-awesome'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        'nuxt-fontawesome',
        'vue-scrollto/nuxt',
    ],
    fontawesome: {
        component: 'fa',
        imports: [
            {
                set: '@fortawesome/free-solid-svg-icons',
                icons: ['fas'],
            },
            {
                set: '@fortawesome/free-regular-svg-icons',
                icons: ['far'],
            },
            {
                set: '@fortawesome/free-brands-svg-icons',
                icons: ['fab'],
            },
        ],
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    router: { base: '/<repository-name>/' },
    generate: {
        subFolders: false,
    },
}

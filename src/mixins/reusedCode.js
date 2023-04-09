export default {
    methods: {
        getUrl(picture) {
            return require('../assets/' + picture)
        },
        getUrlHome(picture) {
            return require('../assets/main-page/' + picture)
        },
        getUrlAbout(picture) {
            return require('../assets/about-us-page/' + picture)
        },
        getUrlNews(picture) {
            return require('../assets/news-page/' + picture)
        },
        getUrlService(picture) {
            return require('../assets/services-page/' + picture)
        },
        getUrlVideo(picture) {
            return require('../assets/video/' + picture)
        },
        getUrlContact(picture) {
            return require('../assets/contact-us-page/' + picture)
        },
    }
}
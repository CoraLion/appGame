import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue";
import AboutUsPage from "@/views/AboutUsPage.vue";
import ServicesPage from "@/views/ServicesPage.vue";
import NewsPage from "@/views/NewsPage.vue";
import ContactUsPage from "@/views/ContactUsPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";
import MainLayout from "@/layout/MainLayout.vue";
import InfoCardPage from "@/views/SinglePage/InfoCardPage.vue";
import store from "@/store";
import WithInteractionLayout from "@/layout/WithInteractionLayout.vue";
import NewsCardPage from "@/views/SinglePage/NewsCardPage.vue";

const routes = [

      {
        path: '/',
        name: 'MainPage',
        component: MainLayout,
        children: [
          {
            path: '',
            name: 'WithInteraction',
            component: WithInteractionLayout,
            children: [
              {
                path: '',
                name: 'HomePage',
                component: HomePage,
              },
              {
                path: '/aboutUs',
                name: 'AboutUsPage',
                component: AboutUsPage,
              },
              {
                path: '/services',
                name: 'ServicesPage',
                component: ServicesPage,
              },
              {
                path: '/news',
                name: 'NewsPage',
                component: NewsPage,
              },
              {
                path: '/contact',
                name: 'ContactPage',
                component: ContactUsPage,
              },
            ]},
          {
            path: '/services/:id',
            name: 'ServicesInfoCard',
            component: InfoCardPage
          },
          {
            path: '/news/:id',
            name: 'NewsCard',
            component: NewsCardPage
          },
        ],
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFoundPage',
        component: NotFoundPage
      },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  store.dispatch('TEXT_SEARCH_NEWS', '')
  store.dispatch('ACTIVE_LOADING_PAGE', true)
  next();
  setTimeout(() => {
    store.dispatch('ACTIVE_LOADING_PAGE', false)
  },300)
})

export default router

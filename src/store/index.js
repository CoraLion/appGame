import { createStore } from 'vuex'

export default createStore({
  state: {
    infoGame: [
      {
        id: 0,
        mainTitle: 'Lorem Ipsum is simply dummy text dummy text1',
        mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        moreText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        img: 'game-2.jpg'
      },
      {
        id: 1,
        mainTitle: 'Lorem Ipsum is simply dummy text dummy text2 ',
        mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        moreText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        img: 'game-2.jpg',
      },
      {
        id: 2,
        mainTitle: 'Lorem Ipsum is simply dummy text dummy text3 ',
        mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        moreText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        img: 'game-2.jpg',
      },
      {
        id: 3,
        mainTitle: 'Lorem Ipsum is simply dummy text dummy text4 ',
        mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        moreText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        img: 'game-2.jpg'
      },
    ],
    news: [
        {
          id: 0,
          mainTitle: 'Lorem Ipsum is simply dummy text dummy text 1',
          minute: '.5min',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,' +
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
              'ly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem IpsLorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
          img: 'game-2.jpg',
          video: 'Marvels Spider-Man 2 - PlayStation Showcase 2021_ Reveal Trailer _ PS5.mp4',
          status: 'main'
        },
        {
          id: 1,
          mainTitle: 'Lorem Ipsum is simply dummy text dummy text 2',
          minute: '.5min',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
          img: 'game-2.jpg',
          video: 'Marvels Spider-Man 2 - PlayStation Showcase 2021_ Reveal Trailer _ PS5.mp4',
          status: 'main'
        },
        {
          id: 2,
          mainTitle: 'Lorem Ipsum is simply dummy text dummy text 3',
          minute: '.5min',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,' +
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
              'ly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem IpsLorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
          img: 'lessons-1.jpg',
          video: 'Marvels Spider-Man 2 - PlayStation Showcase 2021_ Reveal Trailer _ PS5.mp4',
          status: 'sub'
        },
        {
          id: 3,
          mainTitle: 'Lorem Ipsum is simply dummy text dummy text 4',
          minute: '.5min',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,' +
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
              'ly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem IpsLorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
          img: 'lessons-2.jpg',
          video: 'Marvels Spider-Man 2 - PlayStation Showcase 2021_ Reveal Trailer _ PS5.mp4',
          status: 'sub'
        },
        {
          id: 4,
          mainTitle: 'Lorem Ipsum is simply dummy text dummy text 5',
          minute: '.5min',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,' +
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
              'ly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem IpsLorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
          img: 'lessons-3.jpg',
          video: null,
          status: 'sub'
        },
        {
          id: 5,
          mainTitle: 'Lorem Ipsum is simply dummy text dummy text 6',
          minute: '.5min',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,' +
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
              'ly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem IpsLorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
          img: 'lessons-4.jpg',
          video: 'Marvels Spider-Man 2 - PlayStation Showcase 2021_ Reveal Trailer _ PS5.mp4',
          status: 'sub'
        },
        {
          id: 6,
          mainTitle: 'Lorem Ipsum is simply dummy text dummy text 7',
          minute: '.5min',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,' +
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
              'ly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem IpsLorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
          img: 'lessons-5.jpg',
          video: 'Marvels Spider-Man 2 - PlayStation Showcase 2021_ Reveal Trailer _ PS5.mp4',
          status: 'sub'
        },
        {
          id: 7,
          mainTitle: 'Lorem Ipsum is simply dummy text dummy text 8',
          minute: '.5min',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,' +
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
              'ly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem IpsLorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
          img: 'lessons-6.jpg',
          video: 'Marvels Spider-Man 2 - PlayStation Showcase 2021_ Reveal Trailer _ PS5.mp4',
          status: 'sub'
        },
        {
          id: 8,
          mainTitle: 'Lorem Ipsum is simply dummy text dummy text 9',
          minute: '.5min',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,' +
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
              'ly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem IpsLorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
          img: 'lessons-7.jpg',
          video: 'Marvels Spider-Man 2 - PlayStation Showcase 2021_ Reveal Trailer _ PS5.mp4',
          status: 'sub'
        },
        {
          id: 9,
          mainTitle: 'Lorem Ipsum is simply dummy text dummy text 10',
          minute: '.5min',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,' +
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
              'ly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem Ipsly dummy text of the printing and typesetting industry. Lorem IpsLorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
          img: 'lessons-1.jpg',
          video: 'Marvels Spider-Man 2 - PlayStation Showcase 2021_ Reveal Trailer _ PS5.mp4',
          status: 'sub'
        },
      {
        id: 10,
        mainTitle: 'Lorem Ipsum is simply dummy text dummy text 11',
        minute: '.5min',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
        img: 'game-2.jpg',
        video: 'Marvels Spider-Man 2 - PlayStation Showcase 2021_ Reveal Trailer _ PS5.mp4',
        status: 'main'
      },
      ],
    loadingPage: true,
    textSearchNews: '',
    activePhotoModal: false,
    objectPhoto: {},
    indexActiveHeader: 0
  },
  getters: {
    getNewsReverse: state => {
      return state.news.reverse();
    }
  },
  mutations: {
    SET_LOADING_PAGE: (state, payload) =>{
      state.loadingPage = payload;
    },
    SET_TEXT_SEARCH_NEWS: (state, payload) => {
      state.textSearchNews = payload
    },
    SET_ACTIVE_PHOTO_MODAL: (state, payload) => {
      state.activePhotoModal = payload
    },
    SET_OBJECT_PHOTO: (state, payload) => {
      state.objectPhoto = payload
    },
    SET_HEADER_ACTIVE: (state, payload) => {
      state.indexActiveHeader = payload;
      +localStorage.setItem('indexActiveHeader', payload)
    }
  },
  actions: {
  },
  modules: {
  }
})

<template>
  <footer class="footer">
    <div class="container">
      <div class="content">
        <div class="top-content">
            <div class="top-left-content">
              <main-logo class="left-logo"
                         :active-size="true">
                {{textLogo}}
              </main-logo>
                <span class="left-text"> {{leftParagraph}}</span>
                <span>{{atLogo}}</span>
            </div>

            <div class="top-center-content"
                 v-if="activeScreen">
              <list-footer
                  :active-link="true"
                  :footer-text="text_about">
                {{ aboutText }}
              </list-footer>
              <list-footer
                  :active-link="false"
                  :footer-text="text_contact">
                {{contactText}}
              </list-footer>
            </div>

          <div class="top-center-content" v-else>
            <drop-down class="drop-down"
                       :text-drop-down="text_about">
              {{aboutText}}
            </drop-down>
            <list-footer
                :active-link="false"
                :footer-text="text_contact">
              {{ contactText }}
            </list-footer>
          </div>
              <social-network-tools
                  :type-color="'black'"/>
        </div>
        <div class="bottom-content">
            <div class="bottom-center-content">
                <p class="text-bottom-content">
                  {{copyright}}
                </p>
            </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import MainLogo from "@/shared/MainLogo.vue";
import DropDown from "@/shared/DropDown.vue";
import ListFooter from "@/shared/ListFooter.vue";
import SocialNetworkTools from "@/shared/SocialNetworkTools.vue";

export default {
  name: "MainFooter",
  components: {SocialNetworkTools, ListFooter, DropDown, MainLogo},
  data() {
    return {
      textLogo: 'LOGO',
      atLogo: '@Logo',
      text_about: [
        {id: 0, text: 'Zeux', path: '/'},
        {id: 1, text: 'Portfolio', path: '/services'},
        {id: 2, text: 'Careers', path: '/news'},
        {id: 3, text: 'Contact us', path: '/contact'}
      ],
      text_contact: [
        {id: 0, text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
        {id: 1, text: '+908 89097 890'},
      ],
      activeScreen: false,
      copyright: 'Copyright ® 2023 Lorem All rights Recerved',
      leftParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      contactText: 'Contact us',
      aboutText: 'About us'
    }
  },
  methods: {
    resizeWindow() {
      this.activeScreen = window.innerWidth > 1295;
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeWindow)
  },
  created() {
    this.resizeWindow();
  }
}
</script>

<style scoped lang="scss">
 .footer {
   position: relative;
   flex: 0 0 auto;
   width: 100%;
   background-color: var(--background-black-color);

   .container {
     min-width: 100%;

     .content {
       display: flex;
       min-height: 376px;
       max-width: 1440px;
       padding: 0 15px;
       margin: 0 auto;
       flex-direction: column;
       align-items: center;

       .top-content {
         position: relative;
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         min-height: 164.6px;
         max-width: 1219px;
         margin: 79px auto 55px;
         width: 100%;
         align-content: space-between;
         flex-wrap: wrap;
         .top-left-content {
           position: relative;
           display: flex;
           flex-direction: column;
           max-width: 372px;
           text-align: left;
           margin-right: 78px;
           justify-content: space-between;
           .left-logo {
             margin-bottom: 15px;
           }
           .left-text {
             margin-bottom: 33px;
           }
         }

         .top-center-content {
           display: flex;
           flex-wrap: wrap;
           flex-direction: row;
           max-width: 502px;
           text-align: left;
           margin-right: 53px;
           .drop-down {
             margin-right: 15px;
           }
         }
       }

       .bottom-content {
         margin: 0 55px;
         display: flex;
         align-items: center;
         justify-content: center;
         font-size: 13px;
         position: relative;
         max-width: 100%;
         min-height: 83px;
       }
     }
   }
 }

 .footer:after {
   content: '';
   position: absolute;
   width: 100%;
   right: 0;left:0; bottom: 83px;
   height: 0.8px;
   background-color: var(--white);
 }
 
 @media (max-width: 1295px) {
   .footer {
     .container {
       .content {
         .top-content {
           justify-content: space-between;
           .top-left-content {
             margin: 0;
           }
           .top-center-content {
             align-items: center;
             margin: 0;
           }
           .top-right-content {
             margin: 15px;
           }
         }
       }
     }
   }
 }
 @media (max-width: 768px) {
   .footer {
     .container {
       .content {
         .top-content {
           align-content: center;
           flex-wrap: wrap;
           align-items: center;
           flex-direction: column;
           .top-left-content {
             margin-bottom: 15px;
           }
          .top-center-content {
            justify-content: flex-end;
            .drop-down {
              margin: 15px;
            }
          }
           .top-right-content {
             align-self: center;
           }
         }

         .bottom-content p {
           font-size: 9px;
         }
       }
     }
   }
 }
</style>
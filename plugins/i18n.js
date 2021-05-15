import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default {
  name: 'tour',
  data () {
    return {
      steps: [
        {
          target: '#v-step-0',  // We're using document.querySelector() under the hood
          header: {
            title: 'Get Started',
          },
          content: `Discover <strong>Vue Tour</strong>!`
        },
        {
          target: '.v-step-1',
          content: 'An awesome plugin made with Vue.js!'
        },
        {
          target: '[data-v-step="2"]',
          content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
          params: {
            placement: 'top' // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
          }
        }
      ]
    }
  },
  mounted: function () {
    this.$tours['tour'].start()
  }
}

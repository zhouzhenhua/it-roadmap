import DefaultTheme from 'vitepress/theme'
import Roadmap from './Roadmap.vue'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Roadmap', Roadmap)
  }
}
import DefaultTheme from 'vitepress/theme'
import Roadmap from './RoadMap.vue'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Roadmap', Roadmap)
  }
}
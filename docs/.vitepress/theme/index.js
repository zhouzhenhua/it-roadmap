import DefaultTheme from 'vitepress/theme'
import RoadMap from './RoadMap.vue'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('roadmap', RoadMap)
  }
}
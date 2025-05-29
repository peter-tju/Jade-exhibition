import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/global.css'
import AboutOverview from './about/overview.vue'
import AboutHall from './about/hall.vue'
import AboutMap from './about/map.vue'
import OverviewForeword from './overview/foreword.vue'
import OverviewOrigin from './overview/origin.vue'
import OverviewDivinity from './overview/divinity.vue'
import OverviewPower from './overview/power.vue'
import OverviewRebirth from './overview/rebirth.vue'
import AudienceNotice from './audience/notice.vue'
import AudienceRegister from './audience/register.vue'
import AudienceTraffic from './audience/traffic.vue'
import ContactUs from './contact.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI);

const routes = [
  {path: '/about/overview', component: AboutOverview},
  {path: '/about/hall', component: AboutHall},
  {path: '/about/map', component: AboutMap},
  {path: '/overview/foreword', component: OverviewForeword},
  {path: '/overview/origin', component: OverviewOrigin},
  {path: '/overview/divinity', component: OverviewDivinity},
  {path: '/overview/power', component: OverviewPower},
  {path: '/overview/rebirth', component: OverviewRebirth},
  {path: '/about/hall', component: AboutHall},
  {path: '/about/map', component: AboutMap},
  {path: '/audience/notice', component: AudienceNotice},
  {path: '/audience/register', component: AudienceRegister},
  {path: '/audience/traffic', component: AudienceTraffic},
  {path: '/contact', component: ContactUs},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import WhatWeDo from '@/components/WhatWeDo'
import DigitalDevide from '@/components/DigitalDevide'
import GetInvolved from '@/components/GetInvolved'
import OurNetwork from '@/components/OurNetwork'
import Insights from '@/components/Insights'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/whatwedo',
      name: 'WhatWeDo',
      component: WhatWeDo
    },
    {
      path: '/digitaldevide',
      name: 'DigitalDevide',
      component: DigitalDevide
    },
    {
      path: '/getinvolved',
      name: 'GetInvolved',
      component: GetInvolved
    },
    {
      path: '/ournetwork',
      name: 'OurNetwork',
      component: OurNetwork
    },
    {
      path: '/insights',
      name: 'Insights',
      component: Insights
    }
  ]
})

import Vue from 'vue'

import './styles/quasar.styl'
import lang from 'quasar/lang/en-us.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QInput,
  QField,
  QPageSticky,
  QAvatar,
  QScrollArea
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QInput,
    QField,
    QPageSticky,
    QAvatar,
    QScrollArea
  },
  directives: {
  },
  plugins: {
  },
  lang: lang
})

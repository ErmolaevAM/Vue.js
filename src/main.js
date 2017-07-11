var Vue = require('vue')
var VueRouter = require('vue-router')

var App = require('./App')
var Home = require('./components/Home')
var About = require('./components/About')
var AddItem = require('./components/epam_prac/AddItem')

Vue.use(VueRouter)
Vue.use(require('vue-resource'))

var router = new VueRouter()

router.map({
  '/': { component: Home },
  '/about': { component: About },
  '/add': { component: AddItem }
})

router.start(App, 'app')

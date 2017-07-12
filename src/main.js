var Vue = require('vue')
var VueRouter = require('vue-router')
var VueResource = require('vue-resource')

var App = require('./App')
var AddItem = require('./components/epam_prac/AddItem')
var AllItems = require('./components/epam_prac/AllItems')
var Cart = require('./components/epam_prac/Cart')
var MyItems = require('./components/epam_prac/MyItems')

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()

router.map({
  '/allitems': { component: AllItems },
  '/myitems': { component: MyItems },
  '/cart': { component: Cart },
  '/add': { component: AddItem }
})

router.start(App, 'app')

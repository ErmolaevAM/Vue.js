var Vue = require('vue')
var VueRouter = require('vue-router')
var VueResource = require('vue-resource')

var App = require('./App')
var AddItem = require('./components/epam_prac/AddItem')
var AllItems = require('./components/epam_prac/AllItems')
var Cart = require('./components/epam_prac/Cart')
var MyItems = require('./components/epam_prac/MyItems')
var LoginPage = require('./components/epam_prac/LoginPage')
var Registration = require('./components/epam_prac/Registration')

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()

router.map({
  '/allitems': { component: AllItems },
  '/': { component: LoginPage },
  '/myitems': { component: MyItems },
  '/cart': { component: Cart },
  '/add': { component: AddItem },
  '/registration': { component: Registration }
})

router.start(App, 'app')

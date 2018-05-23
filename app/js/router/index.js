import Vue from "vue"
import Router from "vue-router"
import home from "../home/index.vue"
import money from "../money/index.vue"
import white from "../white/index.vue"
import raise from "../raise/index.vue"
import down from "../special/download.vue"
import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: home
        },
        {
            path: "/money",
            name: "money",
            component: money
        },
        {
            path: "/white",
            name: "white",
            component: white
        },{
            path: "/raise",
            name: "raise",
            component: raise
        },
        {
            path: "/down",
            name: "down",
            component: down
        }
    ]
})

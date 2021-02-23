import bookApp from './pages/book-app.cmp.js'
import homePage from './pages/home-page.cmp.js'
import appHeader from './cmps/app-header.cmp.js'
import { myRouter } from './routes.js'

const options = {
    name:'main',
    router: myRouter,
    el: '#app',
    template: `
        <section>
            <app-header />
            <router-view/>
         <!-- <book-app/> -->
            <footer><p> &copy; Coffeerights Erez H</p></footer>
        </section>
    `,
    components:{
        appHeader,
        bookApp,
        homePage
    }
}

const app = new Vue(options)
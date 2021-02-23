import appHeader from '../cmps/app-header.cmp.js'

export default {
    name: 'home-page',
    template:`
    <section class="home app-main">
    <!-- <app-header /> -->
        <h1 class="welcome">Welcome To My Book Store</h1>
        <img id="home-img" src="http://coding-academy.org/books-photos/20.jpg"/>

    </section>
    `
,
components:{
    appHeader,
   
},
}




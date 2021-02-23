import { bookService } from '../services/book-service.js'
import  reviewAdd  from '../cmps/review-add.cmp.js'
import longText from '../cmps/long-text.cmp.js'

export default {
   
    template:`
    <section v-if="book" class="book-details">
        
        <p>Title: {{book.title}}</p>
        <img :src="book.thumbnail"/>
        <p :class="markPrice">Price: {{book.listPrice.amount}}  </p>
        <p v-if="book.listPrice.isOnSale">SALE!!</p>
        <p>subtitle: {{book.subtitle}}</p>
        <p>authors: {{joinAuthors}}</p>
        <p>publishedDate: {{book.publishedDate}} - {{calculateDate}}</p>
        <p>description:</p>
        <long-text :txt="book.description" />
        <p>pageCount: {{book.pageCount}} - {{decribeLength}}</p>
        <p>Categories: {{joinCategories}}</p>
        <p>language: {{book.language}}</p>
        <review-add  @addReview="addReview"> </review-add>


        <router-link :to="'/book/'">Close</router-link>
     </section>
    `,
    data() {
        return {
        
            book: null
        }
    },
    methods: {
     addReview(review) {
     this.book.reviews.push(review)
     console.log(this.book.reviews);
     console.log(review);
     }
    },
    computed: {
        joinAuthors() {
           var authors = this.book.authors
          return authors.join('')
        },
        joinCategories() {
            return this.book.categories.join(', ')
        },
        decribeLength() {
            if (this.book.pageCount>500) return 'Long reading'
            if (this.book.pageCount>200) return 'Decent reading'
            if (this.book.pageCount<100) return 'light reading'
        },
        calculateDate() {
            var date = new Date()
            var now = date.getFullYear()
            if (this.book.publishedDate < now-10) return 'Veteran Book'
            if (this.book.publishedDate < now-1) return 'new!'
        },
        markPrice() {
            if (this.book.listPrice.amount > 150) return 'red'
            if (this.book.listPrice.amount < 20) return 'green'
        },
        isOnSale() {
            if (this.book.listPrice.isOnSale) return 'SALE!'
        },
        
        
    },
     created() {
        const id = this.$route.params.bookId
        bookService.getById(id)
        .then(book => this.book = book)
    },
    components: {
        reviewAdd,
        longText
    }
}

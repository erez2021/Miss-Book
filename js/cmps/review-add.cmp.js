import {
    bookService
} from '../services/book-service.js'

export default {
    name: 'review-add',
    template: `
        <section v class="review-add">
            <h3> User Review:</h3>
        <form @submit.prevent="addReview">
            <input type="text"  ref="name" placeholder="Books Reader Name"  v-model="review.reader">
            <ul class="review">
            <li v-for="star in 5" @click="setRate(star)" :class="{fill : star < review.rate}">☆ </li>
            </ul >
            <input type="date" placeholder="date" v-model="review.date">
            <input type="text" placeholder="textarea" v-model="review.textarea">
            <button>Save</button>
        </form>
        </section>`,

    data() {
        return {
            review: {
                reader: '',
                rate: '4',
                textarea: ''
            },
       

        }
    },
        methods:  {
                newReview() {
            return{
            reader: '',
            rate: '4',
            textarea: ''
        }
    },
                addReview() {
                    this.$emit('addReview', this.review)
                    this.review = this.newReview()
                },
                setRate(rate) {
                    this.review.rate = rate
                }
            },
            created() {
                const id = this.$route.params.bookId
                bookService.getById(id)
                    .then(book => this.book = book)
            },
        mounted(){
        this.$refs.name.focus()
        }
    }

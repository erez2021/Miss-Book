import {
    bookService
} from '../services/book-service.js'
import bookFilter from '../cmps/book-filter.cmp.js'

import bookList from '../cmps/book-list.cmp.js'
import bookDetails from '../pages/book-details.cmp.js'
// import bookEdit from '../pages/book-edit.cmp.js'

export default {
    template: `
        <section class="book-app">
        <book-filter @filtered="setFilter"></book-filter>
<book-list :books="booksToShow" @selected="selectBook"></book-list>
<book-details v-if="selectedBook" :book="selectedBook" @close="selectedBook = null"></book-details> 
        </section>
    `,
    data() {
        return {
            books: [],
            selectedBook: null,
            filterBy: null
        }
    },
    methods: {
        loadBooks() {
            bookService.query()
                .then(books => this.books = books)
        },
        removeBook(bookId) {
            bookService.remove(bookId)
                .then(() => this.loadBooks())
        },
        selectBook(book) {
            this.selectedBook = book
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books
            const searchPrice = this.filterBy.byPrice
            const searchStr = this.filterBy.byTitle.toLowerCase()
            var booksToShow = this.books.filter(book => {
                return book.title.toLowerCase().includes(searchStr) && book.listPrice.amount > searchPrice

            })
            // this.filterBy= null
            return booksToShow
        }
    },
    created() {
        this.loadBooks()
    },

    components: {
        bookFilter,
        bookList,
        bookDetails,

        // bookEdit,
    }
}
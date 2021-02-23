import bookPreview from '../cmps/book-preview.cmp.js'

export default {
    name:'book-list',
    props: ['books'],
    template: `
    <ul class="book-list">
        <li v-for="book in books" :key="book.id" class="book-preview-container" >
            <book-preview :book="book" @click.native="logId(book.id)" />
            <div class="btns-container">
            <router-link :to="'/book/'+book.id">Details</router-link>
            </div>
        </li>
    </ul>
    `,
    methods: {
       
     
        logId(bookId) {
            console.log('Id is', bookId);
        }
    },
    components:{
        bookPreview
    }
}

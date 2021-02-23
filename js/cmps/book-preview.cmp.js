

export default {
    props: ['book'],
    template: `
    <section class="book-preview">
        <p>Title: {{book.title}}</p>
        <p>Price: {{currencySign}}{{book.listPrice.amount}}</p>
        <img :src="book.thumbnail"/>
    </section>
    `,
    computed: {
        currencySign() {
            if (this.book.listPrice.currencyCode === 'USD') return '$'
            if (this.book.listPrice.currencyCode === 'ILS') return '₪'
            if (this.book.listPrice.currencyCode === 'EUR') return '€'
        }
    },
    created() {
        
    }
}
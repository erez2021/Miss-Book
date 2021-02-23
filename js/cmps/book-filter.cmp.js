export default {
    template: `
    <section class="book-filter">
        <label> Search a book: </label>    
        <input type="text"  placeholder="Enter Title" v-model="filterBy.byTitle"><p>0-300</p>
        <input type="range" min="0" max="300" list="tickmarks" v-model="filterBy.byPrice" requierd>
        <datalist id="tickmarks">
  <option value="0"></option>
  <option value="100"></option>
  <option value="200"></option>
  <option value="300"></option>
  </datalist>
        <button @click.prevent="setFilter">Search</button>
    </section>
    `,
    data() {
        return {
            filterBy: {
               byTitle:'',
               byPrice:''
            }
        }
    },
    methods:{
        setFilter(){
            this.$emit('filtered', {...this.filterBy}) // spread the all filterby object- gives us a copy
           
        }
    }
}

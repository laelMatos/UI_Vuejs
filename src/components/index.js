//import Table from './Tables/Table'
import Card from './Cards/Card'
import DataTable from '@andresouzaabreu/vue-data-table'


/**
 * instaciar componentes global
 */
const GlobalComponents = {
  install (Vue) {
    //Vue.component(Table.name, Table)
    Vue.component(Card.name, Card)
    Vue.component("data-table", DataTable)
  }
}

export default GlobalComponents

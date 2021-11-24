<template>
  <div id="main">
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <card
              class="strpied-tabled-with-hover"
              body-classes="table-full-width table-responsive"
            >
              <template slot="header">
                <h4 class="card-title">Usuários</h4>
                <p class="card-category">Lista de usuários</p>
              </template>

              <data-table v-bind="bindings" />
              <!--
              <l-Table
                class="table-hover table-striped"
                :columns="table1.columns"
                :data="table1.data"
              >
              </l-Table>
-->
            </card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonDelete from "../../components/Bottons/ButtonDelete";
import ButtonEdit from "../../components/Bottons/ButtonEdit";
import { mapState } from "vuex";
import { mapActions } from "vuex";

const tableColumns = [
  //{ key: "id", title: "Código", sortable: false },
  { key: "ra", title: "Registro Acadêmico", sortable: false },
  { key: "name", title: "Nome" },
  { key: "cpf", title: "CPF", sortable: false },
  {
    title: "Ações",
    sortable: false,
    component: ButtonEdit,
  },
  {
    title: "-",
    sortable: false,
    component: ButtonDelete,
  },
];
const tableData = [
  {
    ra: "D485DS6",
    cpf: "123.456.521-54",
    name: "João",
    email: "joão@example.com",
  },
  {
    ra: "S954RJ6",
    cpf: "123.456.521-54",
    name: "José",
    email: "jose@example.com",
  },
];

export default {
  name: "studentList",
  components: {},
  computed: {
    ...mapState("home", ["students"]),
    bindings() {
      //Faz a requisição para remover um aluno
      this.ActionGetAllStudent();
      return {
        //data: this.students,
        data: tableData,
        columns: tableColumns,
      };
    },
  },
  methods: {
    //Constroi o metodo para requisição ActionDeleteStudent
    ...mapActions("home", ["ActionGetAllStudent"]),
  },
};
</script>
<style>
</style>
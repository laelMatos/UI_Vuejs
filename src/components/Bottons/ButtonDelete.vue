<template>
  <span class="bt-delete material-icons" @click="triggerSomeAction()">
    delete
  </span>
  <!-- trash icon -->
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "ButtonDelete",
  methods: {
    //Constroi o metodo para requisição ActionDeleteStudent
    ...mapActions("home", ["ActionDeleteStudent"]),
    async triggerSomeAction() {
      try {
        this.$swal({
          title: "Tem certeza?",
          text: "Esta ação removera permanentemente o aluno e todos seus dados!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Delete",
          cancelButtonText: "cancelar",
          closeOnConfirm: true,
          closeOnCancel: false,
        }).then((confirmed) => {
          if (confirmed) {
            //Faz a requisição para remover um aluno
            this.ActionDeleteStudent(this.data.id);
            this.$swal({
              title: "Aluno removido com sucesso",
              icon: "success",
            });
          }
        });
      } catch (err) {
        if (err.data) {
          this.$swal(err.data.title, err.data.messages[0].message, "error");
        } else {
          this.$swal(
            "Falha ao remover",
            "Não foi possível remover o aluno",
            "error"
          );
        }
      }
    },
  },
  props: {
    // prop below is REQUIRED:
    data: {
      type: Object,
    },
  },
};
</script>

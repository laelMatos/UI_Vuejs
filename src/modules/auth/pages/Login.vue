<template>
  <div class="login-dark">
    <form @submit.prevent="submit()">
      <div class="illustration">
        <img class="logo" src="@/assets/img/a-01.png" />
      </div>
      <div class="form-group">
        <input
          required
          class="form-control"
          type="email"
          name="email"
          placeholder="Email"
          v-model="form.login"
        />
      </div>
      <div class="form-group">
        <input
          required
          class="form-control"
          type="password"
          name="password"
          placeholder="Password"
          v-model="form.password"
        />
      </div>
      <div class="form-group d-grid">
        <button class="btn btn-primary" type="submit">Entrar</button>
      </div>
      <a href="#" class="forgot">Esqueceu seu email ou senha?</a>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    form: {
      login: "cglael@gmail.com",
      password: "12345678",
    },
  }),
  methods: {
    //Constroi o metodo para requisição ActionDoLogin
    ...mapActions("auth", ["ActionDoLogin"]),
    async submit() {
      try {
        //Faz a requisição para o ActionDoLogin passando os dados
        await this.ActionDoLogin(this.form);

        //Verifica se o usuário é administrador
        if (this.$store.getters["auth/UserAdm"]) {
          //direciona para pagina home
          this.$router.push({ name: "home" });
        }
      } catch (err) {
        if (err.data) {
          this.$swal(err.data.title, err.data.messages[0].message, "error");
        } else {
          this.$swal("Falha no login", "Não foi possível fazer login", "error");
        }
      }
    },
  },
};
</script>

<style scoped>
.login-dark {
  width: 100%;
  height: 100%;
  margin: 0px;
  background: #5b748b;
  background: radial-gradient(circle, #6e8499 0%, #3f4452);
  background-size: cover;
  position: absolute;
}
.login-dark .logo {
  height: 150px;
}
.login-dark form {
  max-width: 320px;
  width: 90%;
  background-color: #1a2129;
  padding: 40px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
}

.login-dark .illustration {
  text-align: center;
  padding: 15px 0 20px;
  font-size: 100px;
  color: #297fef;
}

.login-dark form .form-control {
  background: none;
  border: none;
  border-bottom: 1px solid #434a52;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: inherit;
}

.login-dark form .btn-primary {
  background: #d91f3d;
  border: none;
  border-radius: 4px;
  padding: 11px;
  box-shadow: none;
  margin-top: 26px;
  margin-bottom: 26px;
  text-shadow: none;
  outline: none;
}

.login-dark form .btn-primary:hover,
.login-dark form .btn-primary:active {
  background: #eb425e;
  outline: none;
}

.login-dark form .forgot {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #9fb1c2;
  opacity: 0.9;
  text-decoration: none;
}

.login-dark form .forgot:hover,
.login-dark form .forgot:active {
  opacity: 1;
  text-decoration: none;
}

.login-dark form .btn-primary:active {
  transform: translateY(1px);
}
</style>

<template>
  <div>
    <!-- ======= Mobile nav toggle button ======= 
    <span class="material-icons mobile-nav-toggle d-xl-none">menu</span>-->
    <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
    <!-- ======= Header ======= -->
    <header id="header">
      <div class="d-grid">
        <div class="profile">
          <a href="#">
            <img src="../../assets/img/a-01.png" alt="" class="img-fluid"
          /></a>
        </div>

        <nav id="navbar" class="nav-menu navbar d-grid">
          <ul>
            <li>
              <a class="nav-link scrollto"
                ><span class="material-icons"> people </span> Usuários</a
              >
            </li>
            <li>
              <a class="nav-link scrollto" @click="exit()"
                ><span class="material-icons"> exit_to_app </span> Sair</a
              >
            </li>
          </ul>
        </nav>
        <!-- .nav-menu -->
      </div>
    </header>
    <!-- End Header -->
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "navBar",
  computed: {},
  methods: {
    ...mapActions("auth", ["ActionSignOut"]),
    async exit() {
      console.log("sair");
      try {
        await this.ActionSignOut();
        this.$router.push({ name: "login" });
      } catch (error) {
        console.log("Erro ao sair");
      }
    },
  },
};
</script>

<style lang="css" scoped>
/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Desktop Navigation */
.nav-menu {
  padding: 30px 0 0 0;
}

.nav-menu * {
  margin-left: 10px;
  padding: 0;
  list-style: none;
}

.nav-menu > ul > li {
  width: 280px;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
}

.nav-menu > ul > li:hover {
  position: relative;
  white-space: nowrap;
  background-color: rgba(233, 252, 255, 0.123);
  border-radius: 25px 0 0 25px;
}

.nav-menu a,
.nav-menu a:focus {
  display: flex;
  align-items: center;
  color: #a8a9b4;
  padding: 12px 15px;
  margin-bottom: 8px;
  transition: 0.3s;
  font-size: 20px;
}

.nav-menu a span,
.nav-menu a:focus span {
  font-size: 24px;
  padding-right: 8px;
  color: #6f7180;
}

.nav-menu a:hover,
.nav-menu .active,
.nav-menu .active:focus,
.nav-menu li:hover > a {
  text-decoration: none;
  color: #fff;
}

.nav-menu a:hover span,
.nav-menu .active span,
.nav-menu .active:focus span,
.nav-menu li:hover > a span {
  color: #d91f3d;
}

/* Mobile Navigation */
.mobile-nav-toggle {
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 9998;
  border: 0;
  font-size: 24px;
  transition: all 0.4s;
  outline: none !important;
  background-color: #149ddd;
  color: #fff;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  border-radius: 50px;
  cursor: pointer;
}

.mobile-nav-active {
  overflow: hidden;
}

.mobile-nav-active #header {
  left: 0;
}
</style>

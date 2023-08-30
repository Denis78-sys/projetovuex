<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container" v-if="pagina == 'Menu'">
    <div class="caixa">
      <div class="cabecalho">
        <img src="@/assets/images/astronaut.svg" alt="astronauta" />
      </div>
      <div class="legenda">
        <h2>Perguntas frequentes</h2>
        <p class="aviso">Escolha a categoria desejada</p>
      </div>

      <ul>
        <li v-for="todo in $allTodos" :key="todo.id">
          <a href="#" class="item" @click="categoriaSelecionada(todo)"
            ><img
              :src="require(`@/assets/images/${todo.icon}`)"
              alt="'icones'"
              class="icone"
            />
            <p class="opcao">
              {{ todo.title }}
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <Submenu
      v-if="pagina === 'Submenu'"
      :categ="categorias"
      :iCone="iconeCorrente"
      :Id="idCateg"
      :categoriaSelecionada="categoriaSelecionada"
    />
  </transition>
</template>

<script>
import "animate.css";
import Submenu from "@/pages/Submenu.vue";
export default {
  computed: {
    $allTodos() {
      return this.$store.getters.$allTodos;
    },
  },
  created() {
    this.$store.dispatch("fetchTodos");
  },
  data() {
    return {
      pagina: "Menu",
      categorias: "",
      iconeCorrente: "",
      idCateg: 0,
    };
  },
  components: {
    Submenu,
  },
  methods: {
    categoriaSelecionada(categoria) {
      this.categorias = categoria.title;
      this.iconeCorrente = categoria.icon;
      this.idCateg = categoria.id;
      this.categoriaSelecionada = categoria;
      this.pagina = "Submenu";
    },
  },
};
</script>
<style scoped>
@import "@/assets/css/main.css";
* {
  margin: 0;
  padding: 0;
  color: #f6f6f8;
}

/*FUNDO*/
.container {
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 450px;
  height: 100vh;
  align-content: center;
  justify-content: center;
}

.caixa {
  background: linear-gradient(to bottom, #3f4452, #26282c);
  border-radius: 10px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
}
/*FUNDO*/
/*LEGENDA*/
h2 {
  font-size: 20px;
  margin-top: 5px;
  margin-left: 20px;
}
.aviso {
  font-size: 13px;
  margin-top: 5px;
  margin-left: 20px;
  margin-bottom: 30px;
}
/*LEGENDA*/

/*ESTILIZANDO LISTA*/
.icone {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-content: center;
  justify-content: center;
  width: 25px;
  margin-left: 10px;
}
li {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 5px;
  margin-bottom: 5px;
}

.item {
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: auto;
  padding: 5px;
}

li:hover {
  background: #5d6681;
}
/*ESTILIZANDO LISTA*/
</style>

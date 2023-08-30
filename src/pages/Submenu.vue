<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container" v-if="pagina == 'Submenu'">
    <div class="caixa">
      <div class="cabecalho">
        <a href="#" class="item" @click="pagina = 'Menu'">
          <img
            src="../assets/images/arrow-left.svg"
            alt="icones"
            class="flecha"
          />
        </a>

        <div class="legenda">
          <h2>{{ categ }}</h2>
          <p class="aviso">Selecione uma pergunta</p>
        </div>
        <img
          :src="require(`@/assets/images/${iCone}`)"
          alt="icone"
          class="icone2"
        />
      </div>

      <ul class="menu">
        <li
          v-for="question in categoriaSelecionada.questions"
          :key="question.id"
        >
          <a href="#" class="item" @click="selectQuestion(question)">
            <p class="opcao">{{ question.title }}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <transition>
    <Resposta
      v-if="pagina === 'Resposta'"
      :selectedQuestion="selectedQuestion"
      @voltar="voltar"
    />
    <Menu v-else-if="pagina === 'Menu'" />
  </transition>
</template>

<script>
import "animate.css";
import Menu from "@/App.vue";
import Resposta from "@/pages/Resposta.vue";

export default {
  props: {
    categ: String,
    categoriaSelecionada: Object,
    iCone: String,
    Id: Number,
  },
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
      pagina: "Submenu",
      selectedQuestion: null,
    };
  },
  components: {
    Menu,
    Resposta,
  },
  methods: {
    selectQuestion(question) {
      this.selectedQuestion = question; // Pergunta selecionada
      this.pagina = "Resposta"; // Alterar a página para exibir a resposta
    },
    voltar() {
      this.pagina = "Submenu";
    },
  },
};
</script>

<style scoped>
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
.cabecalho {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  grid-template-rows: auto;
  justify-content: center;
  align-content: center;
}
.icone2 {
  margin-top: 25px;
  width: 25px;
}
.flecha {
  width: 25px;
  padding: 5px;
  border-radius: 5px;
  margin-left: 5px;
}
.flecha:hover {
  background: #26282c;
}

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
.menu {
  margin-top: 20px;
}
li {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 10px;
  margin-bottom: 5px;
}

.item {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 5px;
}
.opcao {
  color: #f6f6f8;
}
li:hover {
  background: #5d6681;
}
/*ESTILIZANDO LISTA*/
</style>

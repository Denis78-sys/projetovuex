<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container" v-if="pagina == 'Resposta'">
    <div class="caixa">
      <div class="cabecalho">
        <a href="#" class="item" @click="voltar">
          <img
            src="../assets/images/arrow-left.svg"
            alt="icones"
            class="flecha"
          />
        </a>

        <div class="legenda">
          <p class="aviso">{{ selectedQuestion.title }}</p>
        </div>
      </div>
      <div class="resposta">
        <div class="texto" v-html="selectedQuestion.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedQuestion: Object,
  },
  data() {
    return {
      pagina: "Resposta",
    };
  },
  created() {
    console.log("Componente:", this.pagina);
  },

  methods: {
    voltar(pag) {
      this.pagina = pag;
      this.$emit("voltar"); // Emitir evento para o componente pai (Submenu)
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
  grid-template-columns: 40px 1fr;
  grid-template-rows: auto;
  justify-content: center;
  align-content: center;
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
  font-size: 16px;
  margin-top: 5px;
  margin-left: 20px;
  margin-bottom: 30px;
}
/*LEGENDA*/

/*ESTILIZANDO LISTA*/
li {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 10px;
}

.item {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 5px;
}

/*ESTILIZANDO LISTA*/
.resposta {
  margin-top: 20px;
  padding: 15px;
  font-size: 13px;
}
</style>

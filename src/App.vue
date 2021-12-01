<template>
  <div id="app">
    <NavBar />
    <b-container  fluid>
      <b-row>
        <b-col cols="3"><SubmitForm /></b-col>
        <b-col cols="9"><Circuit /> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SubmitForm from "./components/SubmitForm.vue";
import NavBar from "./components/NavBar.vue";
import Circuit from "./components/Circuit.vue";

export default {
  name: "App",
  components: {
    SubmitForm,
    NavBar,
    Circuit,
  },
};
</script>

<template>
  <div id="cric"></div>
</template>

<script>
import * as qviz from "@microsoft/quantum-viz.js";
export default {
  name: "Quantumviz",
  data() {
    return {
    }
  },
  methods: {
    render(circuit, style) {
      const cricDiv = document.getElementById("cric");
      if (!style) {
        style = qviz.STYLES["Default"];
      }
      if (!circuit) {
        circuit = this.entangle;
      }
      if (cricDiv != null) {
        qviz.draw(circuit, cricDiv, style);
      }
    },
  },
  watch: {
      // When the state changes in the store listen to this event and draw circuit
    "$store.state.circuit": function () {
      this.render(this.$store.state.circuit)
    },
  },
};
</script>

<style>
</style>
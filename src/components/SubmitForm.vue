<template>
  <div class="submitform">
    <h3>Create your own circuit</h3>
    <b-form @submit="onSubmit">
      <b-form-group
        id="qubits-group"
        label="Total number of qubits 🛈"
        label-for="qubits-input"
        v-b-popover.hover.top="'Explain this qubit'"
      >
        <b-form-input
          id="qubits-input"
          v-model="form.qubits"
          type="number"
          placeholder="Enter number of quabits"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="bitstring-group"
        label="Bitstring to find 🛈"
        label-for="bistring-input"
        v-b-popover.hover.top="'Explain this bitstring'"
      >
        <b-form-input
          id="bistring-input"
          v-model="form.bitstring"
          type="text"
          placeholder="Enter the bitstring to find"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="target-group"
        label="Bitstring to find 🛈"
        label-for="target-input"
        v-b-popover.hover.top="'Explain this target'"
      >
        <b-form-select
          id="target-input"
          v-model="form.target"
          :options="options"
        ></b-form-select>
      </b-form-group>

      <b-button :disabled="loading" type="submit" variant="primary"
        >Submit</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  name: "SubmitForm",
  data() {
    return {
      loading: false,
      form: {
        qubits: 0,
        bitstring: "",
        target: "",
      },
      options: [
        { value: "local", text: "Local simulator" },
        { value: "cloudsimulator", text: "Cloud simulator" },
        { value: "quantum", text: "Quantum device" },
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.loading = true;
      this.$store.dispatch('submitProblem')
      .then(result=>{
          console.log(result)
      })
      .catch(error=>{
          console.log(error)
      })
    },
  },
};
</script>

<style scoped>
</style>
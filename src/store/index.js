import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    circuit: {}
  },
  mutations: {
    setCircuit(state, newCircuit) {
      state.circuit = newCircuit
    }
  },
  getters:{
    getCircuiit(state) {
      return state.circuit
    }
  },
  actions: {
    submitProblem(store) {
      return new Promise((resolve) => {
        store.commit('setCircuit', {
          qubits: [{ id: 0 }, { id: 1, numChildren: 1 }],
          operations: [
            {
              gate: "H",
              targets: [{ qId: 0 }],
            },
            {
              gate: "X",
              isControlled: true,
              controls: [{ qId: 0 }],
              targets: [{ qId: 1 }],
            },
            {
              gate: "Measure",
              isMeasurement: true,
              controls: [{ qId: 1 }],
              targets: [{ type: 1, qId: 1, cId: 0 }],
            },
          ],
        })
        resolve('done')
        //Uncomment when API GOES LIVE
        //   fetch('')
        //     .then(response => {
        //       if (!response.ok) {
        //         reject(response) //Check if we get a 200 status code back
        //       }
        //       return response;
        //     })
        //     .then(response => response.json())
        //     .then(data => { // All is ok, parse data
        //       console.log(data)
        //       store.commit('setCircuit',data)
        //       resolve(data)
        //     })
        //     .catch(error => {
        //       reject(error)
        //       console.log(error)
        //     }
        //     );

        // })

      })
    },
  },
  modules: {
  }
})

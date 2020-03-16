import { SETCOUNT } from './mutations-type'

export default {
  increment({ state, commit }) {
    commit(SETCOUNT, ++state.count)
  },
  decrement({ state, commit }) {
    commit(SETCOUNT, --state.count)
  }
}

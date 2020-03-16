import { SETCOUNT } from './mutations-type'
export default {
  [SETCOUNT](state, count) {
    console.log(count)
    state.count = count
  }
}

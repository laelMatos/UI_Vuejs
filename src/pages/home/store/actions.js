import services from '../../../http'
import * as types from './mutation-types'


export const ActionGetAllStudent = ({ dispatch })=> {
  return services.home.getAllStudent().then(res => {
    try {
      dispatch('ActionSetStudent', res.data)
    } catch (error) {
      console.log(error.data);
    }
  })
}
export const ActionSetStudent = ({ commit }, payload) => {
  commit(types.SET_USERS, payload)
}

export const ActionDeleteStudent = ({ commit }, payload) =>{
  console.log(payload);
  return services.home.deleteStudent({body: {'ra':toString(payload)}}).then(res => {
    commit(types.SET_STUDENTS, res.data)
    console.log(res.data)
  })
}


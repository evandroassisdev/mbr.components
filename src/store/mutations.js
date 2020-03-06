import { LocalStorage } from 'quasar'
// import Functions from './../functions/index'

export default {
  Logout: (state) => {
    LocalStorage.remove('token')
    state.token = null
    state.isAuth = false
  }
}
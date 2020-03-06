import axios from 'axios'
import { LocalStorage, Loading } from 'quasar'
// import Functions from './../functions/index'

const Header = () => {
  var common = {
    'Authorization': 'Bearer ' + LocalStorage.getItem('token'),
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*'
  }
  axios.defaults.headers = {
    common: common
  }
}

export const Post = ({ dispatch }, objeto) => {
  Header()
  Loading.show()
  return axios.post(objeto.endereco, objeto.data)
    .then(resp => {
      Loading.hide()
      return resp.data
    })
    .catch(erro => {
      Loading.hide()
      return erro.response.data
    })
}
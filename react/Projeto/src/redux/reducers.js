import { combineReducers } from 'redux'

let usuarioInicial = null

const json = localStorage.getItem('usuario')
if (json) {
  usuarioInicial = JSON.parse(json)
}

function usuario(state = usuarioInicial, action) {
  switch(action.type) {
    case 'LOGA_USUARIO':
      const usuarioLogado = action.dados
      const json = JSON.stringify(usuarioLogado)
      localStorage.setItem('usuario', json)
      return usuarioLogado
    case 'DESLOGA_USUARIO':
      localStorage.removeItem('usuario')
      const usuarioDeslogado = null
      return usuarioDeslogado
    default:
      return state
  }
}

function postits(state = [], action) {
  switch(action.type) {
    case 'CADASTRA_POSTIT':
      return state.concat(action.dados)
    case 'ALTERA_POSTIT':
      return state.map(postit => postit.id === action.dados.id ? action.dados : postit)
    case 'REMOVE_POSTIT':
        return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}

const reducers = combineReducers({
  usuario: usuario,
  postits: postits
})

export default reducers
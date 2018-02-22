import "../build/tags"
import store from './store'
import * as actions from './actions/actions'

// const reduxGlobal = Object.assign({}, store, actions)
const reduxGlobal = { ...store, ...actions }
riot.mixin('reduxGlobal', reduxGlobal)

riot.mount('#div-geral', 'app')


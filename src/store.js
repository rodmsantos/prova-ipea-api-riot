import reducers from './reducers/root-reducer'

const initialState = {
    pessoas: [],
    seExibeLista: true
}

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunkMiddleware)
)

export default store
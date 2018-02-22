function reducers(state, action) {
    if(action.type === "ADICIONAR_PESSOA") {
        const newState = { ...state, pessoas: [...state.pessoas, action.payload] };
        return newState;
    }
    else{
        return state;
    }
}

export default reducers
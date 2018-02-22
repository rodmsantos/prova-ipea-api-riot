export const adicionarPessoa = (novaPessoa) => {
    return {
        type: "ADICIONAR_PESSOA",
        payload: novaPessoa
    }
}

export const addCadastroAPI = () => {
    return (dispatch) => {
        axios.get('https://randomuser.me/api')
            .then(response => {
                dispatch({
                    type: 'ADICIONAR_PESSOA',
                    payload: {
                        firstName: response.data.results[0].name.first,
                        lastName: response.data.results[0].name.last
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}



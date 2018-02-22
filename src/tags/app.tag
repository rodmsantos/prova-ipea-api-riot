<app>

    <form onsubmit={adicionarPessoaFormulario}>
        <input ref="nome" type="text" placeholder="Nome">
        <input ref="sobrenome" type="text" placeholder="Sobrenome">
        <input class="botao" type="submit" value="Add Name">
    </form>

    <br>

    <button class="botao" onclick={handleBuscaPessoasAPI}>Chamar pessoa da API</button>

    <br>

    <lista-pessoas />

    <script>
        this.mixin('reduxGlobal')

        this.adicionarPessoaFormulario = (x) => {
            x.preventDefault()
            const newPerson = {
                firstName: this.refs.nome.value,
                lastName: this.refs.sobrenome.value,
            }
            this.dispatch(this.adicionarPessoa(newPerson))
        }

        this.handleBuscaPessoasAPI = () => {
            this.dispatch(this.addCadastroAPI())
        }

    </script>

    <style>
        .botao {
            background-color: #90EE90; /* Green */
            border: none;
            color: black;
            border-radius: 6px;
            padding: 5px 12px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 12px;
        }

        .botao:hover {
            cursor: pointer;
            box-shadow: 0 5px 12px 0 rgba(0,0,0,0.24), 0 10px 20px 0 rgba(0,0,0,0.19);
        }
    </style>

</app>
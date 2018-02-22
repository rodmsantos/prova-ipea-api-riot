<lista-pessoas>

    <h2>Lista de Cadastrados</h2>
    <ul if={estado.pessoas && estado.seExibeLista}>
        <li each={ estado.pessoas }>{firstName} {lastName}</li>
    </ul>

    <script>
        this.mixin('reduxGlobal')
        
        this.estado = {}

        this.estadoAtual = () => {
            this.update({
                estado: this.getState()
            })
        }

        this.subscribe(this.estadoAtual)


    </script>

</lista-pessoas>
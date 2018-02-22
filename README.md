# Workshop de Desenvolvimento Web (IPEA)

## Estrutura básica do projeto

Árvore de arquivos e pastas.

- `/` : todos os arquivos de configurações, de setagem do projeto.
    - `package.json`:
        - as meta informações do projeto
        - a versão da tag do projeto (que o git vai pegar)
        - as dependências do projeto
    - `.gitignore`
        - `dist/` e `build/`: foram adicionadas
    - `riot.config.js`: seta os parâmetros da compilação `.tag` -> `.js`
    - `webpack.config.js`: seta os parâmetros do webpack
    - `.babelrc`: parametros de configuração do transpilador babel
- `/src` : onde vai todo o código fonte.
    - `index.html`: esqueleto básico do html
    - `index.js`: arquivo de entrada de todo o javascript da aplicação
    - `tags/`
    - (demais pastas...)
- `/dist` : onde vai a nossa aplicação. São os arquivos que vão para deploy.
- `/build` : onde vão os arquivos compilados/transpilados.
    - `.tag` -> `.js`
    - `.scss` -> `.css`
    - `.ts` -> `.js`
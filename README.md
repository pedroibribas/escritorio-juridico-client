# Escritório Jurídico

## Informações

- Status: Offline
- Hospedagem: Nenhum
- Linguagem: JavaScript
- Framework: React.js
- Criado por Pedro Ribas
- Licensa MIT

## Rodando o projeto

```bash
# Clone o repositório
$ git clone https://github.com/pedroibribas/escritorio-juridico-client.git
# ou com SSH
$ git clone git@github.com:pedroibribas/escritorio-juridico-client.git

# Acesse a pasta do projeto
$ cd escritorio-juridico-client

# Instale todas as dependências
npm install
# ou
yarn install

# Configure as variáveis de ambiente[*]

# Rode o servidor de desenvolvimento
npm run start
# ou
yarn start

# O projeto será inicializado em <http://localhost:3000>
```

[*] Variáveis de ambiente no arquivo raiz `.env.local`:

```bash
# API
REACT_APP_API_URL=#URL da api de dados

# Local
REACT_APP_LOCAL_API_URL=#URL do servidor rodando localmente
REACT_APP_ENV="development" #[**]

#[**] Quando "development", a url para obter os dados será a do servidor local.
```

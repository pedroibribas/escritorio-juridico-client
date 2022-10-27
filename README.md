# Documentação

- Status: [Online](http://ribasadv.netlify.app/)
- Hospedagem: [Netlify](https://app.netlify.com/sites/ribasadv/overview)
- Servidor: [API Escritório Jurídico Ribas](https://api-escritorio-juridico-ribas.up.railway.app)

## Usuário Teste

```
email: test@admin.com
senha: admin1234
```

## Regras de Estilização

### Componente Page

- Descrição: O componente `page` é o componente que apresenta a UI completa da página.

- Local do componente: `./src/components/pages`

- Nome do componente: `[CaminhoDaPágina]Page`.

- Formatação:

```tsx
// obs: a arrow function usa menos linhas de código
// se existir apenas o JSX nele
const ComponentePage = () => (
  <ComponenteTemplate>
    <Heading type="pageHeading">Título</Heading>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
  </ComponenteTemplate>
)
```

- Cada conteúdo apresentado ao usuário é uma seção da página. A seção deve ser um componente _organism_ próprio.

- Templates:
  - Local do componente: `./src/components/temapltes`
  - Nome do componente: `[Nome]PageTemplate`.
  - `<PageTemplate/>`: template para páginas em geral do app. Contêm cabeçalho e rodapé.
  - `<AuthPageTemplate/>`: template para página de autenticação. Não tem cabeçalho e rodapé.
  - O cabeçalho da página - Header - está em `./src/components/organisms/Header`
  - O roda-pé da página - Footer - está em `./src/components/organisms/Footer`
  - Tanto o cabeçalho quanto o rodapé são renderizados exclusivamente no template.

### Seções da Página

- Local do componente: `./src/components/organisms/Sections`.

- Nome do componente: `[Nome]Section`.

- Estrutura interna:

  - O primeiro componente-filho é obrigatoriamente um átomo `<Heading type="sectionHeading"/>`.
  - O cabeçalho do elemento é um `<Heading type="subSectionHeading"`.
  - Cada elemento é embalado pelo átomo `<Container/>` para fins de espaçamento, caso o elemento não possua regras nativas, como `<Heading/>` ou `<Paragraph/>`.

- Displays:

  - Local do componente: `./src/components/organisms/Displays`.
  - Nome do componente: `[Conteúdo]Display`.
  - Os displays são componentes cuja função é apresentar dados ao usuário.

- Formulários:

  - Local do componente: `./src/components/organisms/Forms`.
  - Nome do componente: `[Função]Form`.
  - Na parte lógica do formulário, existem em regra _states_, _change handlers_ e um _submit handler_.
    - O padrão de nomenclatura dos _states_ é o nome do Input respectivo.
    - O padrão de nomenclatura dos _change handlers_ é `handleChange[NomeDoState]`.
    - O padrão de nomenclatura dos _submit handlers_ é `handleSubmit`.
  - Formatação:

```tsx
const Componente = () => {
  // # STATES
  // # CHANGE HANDLERS
  // # SUBMIT HANDLER
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>NomeDoInput</Label>
        <Input /*atributos*/ />
      </FormGroup>
      <FormGroup>
        <Button /*submit*/>AçãoDoUsuário</Button>
      </FormGroup>
    </form>
  )
}
```

### Componente Atom

- Glossário:
  - `toggle`: prop React que monitora a mudança de valor de um boleano.
  - `handler`: prop React que deflagra um efeito condicionado a um `toggle`.

# Documentação

## Estilos

### Fontes

- Roboto # 300|400|500
- Poppins # 300|400|600|700
- Montserrat # 300|400|600|700
- Source Serif Pro # 300|400|600|700

## Páginas

- O nome do componente é composto pelo nome do caminho da página e o sufixo **Page**.

- O conteúdo JSX do componente _page_ é inserido dentro de um componente _template_.

- **Templates:**

  - **PageTemplate:** modelo para as páginas em geral da aplicação que contêm cabeçalho e rodapé.
  - **AuthPageTemplate:** modelo para a página de autenticação do usuário. Ela não contêm cabeçalho e rodapé.

- O topo do JSX recebe um componente `<Heading type="pageHeading">`, que recebe o título da página.

- Cada conteúdo apresentado ao usuário corresponde a uma seção da página, que não deve ser expresso no código da página, mas deve ser um componente _organism_ próprio.

```tsx
const NomeDaPáginaPage = () => (
  <PageTemplate>
    <Heading type="pageHeading">Título</Heading>
    <SectionA />
    <SectionB />
    <SectionC />
  </PageTemplate>
)
```

## Cabeçalho

|-- HEADER # ORGANISM # Header => isOpenMenu
| |-- MENU # MOLECULE # Menu

## Seções

- O nome do componente é composto por um nome característico e o sufixo _Section_.

- Cabeçalho: O cabeçalho é obrigatório e é o primeiro dos componentes-filhos. Tag `<Heading type="sectionHeading">`.

- Espaçamentos: Cada elemento é separado do outro por um `<Container content=""/>` ou por regras de espaçamento nativas ao elemento, como é o caso de Section/Heading/Paragraph.

- Subseção: Caso o elemento receba um cabeçalho, ele é tratado como _subsection_, tag `<Heading type="subSectionHeading"`.

### LoginPage

A LoginPage é o único componente de página que possui a sua seção única, dispensando a criação de um componente individualizado.

|-- SECTION # PAGE # LoginPage
| |-- FORM # ORGANISM # LoginForm => InputsStates

### HomePage/AllCasesSummarySection

|-- SECTION # ORGANISM # AllCasesSummarySection => cases
| |-- DISPLAY # ORGANISM # AllCasesDisplay => caseSearchResult
| | |-- INPUT # MOLECULE # SearchBarDisplay
| | |-- DISPLAY # MOLECULE # AllCasesSummary

### CreateNewCasePage/CreateNewCaseSection

|-- SECTION # ORGANISM # CreateNewCaseSection
| |-- FORM # ORGANISM # CreateNewCaseForm => InputsStates

### LegalCasePage

```
LegalCasePage

|-- SECTION ORGANISM CaseLawsuitSection => caseLawsuit
| | |-- MOLECULE CaseLawsuitDetails

|-- SECTION ORGANISM CaseParticipantsSection => isOpenAddForm
| |-- FORM ORGANISM AddParticipantToCaseForm => InputsStates
| |-- DISPLAY ORGANISM AllParticipantsDisplay
| | |-- ORGANISM ParticipantDisplay => isOpenDetails
| | | |-- MOLECULE ParticipantSummary
| | | |-- MOLECULE ParticipantDetails

|-- SECTION ORGANISM CaseWitnessesSection => isOpenAddForm
| |-- FORM ORGANISM AddWitnessToCaseForm => InputsStates
| |-- DISPLAY ORGANISM AllWitnessesDisplay
| | |-- ORGANISM WitnessDisplay => isOpenDetails
| | | |-- MOLECULE WitnessSummary
| | | |-- MOLECULE WitnessDetails

|-- SECTION ORGANISM CaseHistoricSection => isToggle
| |-- FORM ORGANISM AddHistoricDataForm => { InputsState }
| |-- DISPLAY ORGANISM HistoricDisplay
| | |-- MOLECULE HistoricDataDetails
```

## Formulários

- Os formulários da aplicação são componentes `organisms`.
- O nome do formulário é composto por `<função do formulário>`+`Form`
- Na parte lógica do formulário, existem em regra _states_, _change handlers_ e um _submit handler_.
  - O padrão de nomenclatura dos _states_ é o nome do Input respectivo.
  - O padrão de nomenclatura dos _change handlers_ é `handleChange`+`<nome do estado>`.
  - O padrão de nomenclatura dos _submit handlers_ é `handleSubmit`.
- Na parte do JSX, utiliza-se os átomos _styled-components_ `<FormGroup>` para o distanciamento para pares Label-Input e o botão de envio, `<Label>` para a estilização da Label, e `Input` para a estilização do Input. O botão de envio é um átomo `<Button action="">`.
- Veja-se o modelo:

```tsx
const FunçãoDoFormulárioForm = () => {
  // # STATES
  // # CHANGE HANDLERS
  // # SUBMIT HANDLER
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Nome do Input</Label>
        <Input
        //atributos
        />
      </FormGroup>
      <FormGroup>
        <Button action="">Nome do Input</Button>
      </FormGroup>
    </form>
  )
}
```

## Componentes

### Atoms

- Os _Atoms_ são arquivos que contêm componentes de estilo com ou sem componentes JSX simples.

- A prop React que monitora a mudança de um valor boleano deve receber o nome de `toggle` (i.e., dispositivo).

- A prop React que deflagra um efeito condicionado a um `toggle` deve receber o nome de `handler`.

#### `Button`

- O `Button` contêm estilizações para cada tipo de botão e recebe um booleano e handler de click para ativar efeitos na página, se o caso.
- O padrão de nomenclatura da prop `action` é `<action><Component>`
- Props:

  - `action` = `'showMenu'`
    | `'logout'`
    | `'showDialog'`
    | `'showDetails'`
    | `'showForm'`
    | `'submitForm'`
    | `'downloadFile'`
  - `toggle` = `boolean`
  - `handler` = `function`
  - `container` = `HTMLElement`
  - `children`

## `Anchor

- O `Anchor` oferece estilos para links. O nome Anchor se deve porque Link é um componente do pacote React-Router.
- Cada estilo é especificado pela prop `style`, isto é, o estilo específico da origem em que é utilizado.
- O componente de estilo é uma `div` porque o componente `a` já é utilizado pelo componente `<Link>` do React-Router.
- O padrão de nomenclatura dos valores de `style` é `'<origem>Link'`
- Props:
  - `styles` &lt;obrigatório&gt; = `'casesSummaryLink'`
    | `'headerLink'`
    |`'paragraphLink'`
    | `'headerMenuLink'`
  - `path` &lt;obrigatório&gt; = `string`
  - `children`

## `Section`

- O `Section` se extende pela largura toda da página. Ele define a cor do background e controla a largura do conteúdo interior e o seu posicionamento.
- A `color` padrão é `var(--white)`.
- O `size` padrão é `var(--max-w-base)`
- Props: `color: string`,`isScreenHeight: boleano`,`size: string`,`children`.

## `Heading`

- O `Heading` contêm as propriedades de fonte dos três principais títulos da aplicação e o seu posicionamento.
- O posicionamento do elemento é lidado aqui para evitar poluir o JSX.
- O estilo `pageHeading` é o título da **page**. O estilo `sectionHeading` é o título da **section**. O `subSectionHeading` é título na **section**.
- Props: `type: pageHeading | sectionHeading | subSectionHeading`,`children`.

## `Paragraph`

- O `Paragraph` contêm as propriedades de fonte dos parágrafos.
- O posicionamento do elemento é lidado aqui para evitar poluir o JSX.
- Props: `mt`: `string`.

## `Container`

- O `Container` oferece estilizações para cada tipo de contêiner especial.
- Os contêineres dos elementos do `Header` estão em sua própria pasta de arquivos.
- Os componentes Heading, Paragraph, FormGroup, Section **não podem receber Container**. Obs.: Para a Table se tornou permitido.
- O `content='any'` é o contêiner padrão. Sua função é aplicar margem superior nos elementos dentro da seção. Por essa razão, ele recebe uma margem personalizada via props. Os `content` personalizados recebem estilizações específicas.
- O padrão de nomenclatura da prop `content` é `'<component>Content'`
- Props:
  - `content` = `'any'` <br>
    | `'row'` <br>
    | `'caseLawsuitCardContent'` <br>
    | `'searchInputIconContent'` <br>
    | `'loginFormContent'` <br>
    | `'addParticipantFormContent'` <br>
    | `'participantDetailsContent'` <br>
    | `'participantDisplayContent'`
  - `mt` = `string`
  - `gap` = `string`
  - `children`

## `FormGroup`

- O `FormGroup` oferece estilização para o par Label-Input dentro de um formulário. O par embalado pelo `FormGroup` recebe margem de topo.

## `Table`

- O `Table` fornece estilos para tabelas.
- A tabela é selecinada pela prop `content`, isto é, o conteúdo da tabela.
- Tabelas de sumário recebem o nome `summary` e tabelas de detalhes recebem o nome `details`.
- A nomenclatura da prop `content` é: |`<página>`OU`<página>`+`<conteúdo>`|+|`<Summary>`/`<Details>`|.
- Props:
  - `content` = `'homeCasesSummary'` <br>
    | `'casePageSummary'` <br>
    | `'casePageDetails'` <br>
  - `children`

## `Transition`

- O `Transition` oferece transições animadas.
- Qualquer estilização que não seja relativa à transição deve ser colocada através de outro componente, como por exemplo o `Container`.
- O padrão de nomenclatura da prop `property` é `'<property>Transition'`
- Props:
  - `property` = `'heightTransition'`
  - `toggle` = `boolean`
  - `size` = `string`
  - `overflowY` = `string`
  - `children`

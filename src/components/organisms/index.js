export * from './Header';
export * from './Footer';

// # Sections
export * from './Sections/CaseLawsuitSection';
export * from './Sections/CaseParticipantsSection';
export * from './Sections/CaseWitnessesSection';
export * from './Sections/CaseHistoricSection';
export * from './Sections/CreateNewCaseSection';

// # Forms
export * from './Forms/AddHistoricDataForm';
export * from './Forms/AddParticipantToCaseForm';
export * from './Forms/AddWitnessToCaseForm';
export * from './Forms/CreateNewCaseForm';
export * from './Forms/LoginForm';
// Os formulários precisam ser autônomos para ser fácil reutilizar de outras maneiras, como em uma página própria.

// # Displays
export * from './Displays/AllCasesDisplay';
export * from './Displays/AllParticipantsDisplay';
export * from './Displays/AllWitnessesDisplay';
export * from './Displays/HistoricDisplay';
export * from './Displays/ParticipantDisplay';
export * from './Displays/WitnessDisplay';
export * from './Displays/SearchBarDisplay';
// Os displays são componentes cuja função é apresentar dados ao usuário.

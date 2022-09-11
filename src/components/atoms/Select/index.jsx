const Select = ({ name, value, handleChange }) => {
  const defaultValue = {
    state: "SP",
    nationality: "Brasileira",
    gender: 'Não informado',
    civilStatus: 'Não informado'
  };
  const label = {
    state: "Estado",
    nationality: 'Nacionalidade',
    gender: 'Gênero',
    civilStatus: 'Estado Civil'
  };
  const options = {
    state: ["AC","AL","AP","AM","BA","CE","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO","DF"],
    nationality: ["Brasileira", "Outra"],
    gender: ['Masculino','Feminino','Diverso'],
    civilStatus: ['Solteiro(a)','Casado(a)','União Estável'],
  };
  return (
    <div>
      <label htmlFor={name}>{label[name]}</label>
      <select id={name} name={name} onChange={handleChange} defaultValue={defaultValue[name]}>
        {options[name].map(item => <option value={item}>{item}</option>)}
      </select>
    </div>
  );
};

export { Select };

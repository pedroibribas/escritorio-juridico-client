const InputGroup = ({ name, handleChange, value }) => {
  const label = {
    fullname: 'Nome',
    job: 'Profissão',
    securityNumber: 'CPF nº',
    rgNumber: 'RG',
    rgOrigin: 'Órgão emissor',
    birthdate: 'Data de nascimento',
    street: 'Endereço',
    addressNumber: 'Número',
    cityArea: 'Bairro',
    city: 'Cidade',
    postalCode: 'CEP',
    phone: 'Telefone',
    email: 'Email',
    lawsuitNumber: 'Processo Nº'
  };
  return (
    <div>
      <label htmlFor={name}>{label[name]}</label>
      <input type="text" name={name} id={name} value={value} onChange={handleChange} />
    </div>
  );
};

export { InputGroup };

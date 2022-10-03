const regexFormat = {
  age: age => age.replace(/\D/g, ''),

  cellphone: cellphone => cellphone
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1'),

  cep: cep => cep
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1'),

  cpf: cpf => cpf
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1'),

  date: date => date
    .replace(/\D+/g, "")
    .replace(/(\d{2})(\d)/, "$1-$2")
    .replace(/(\d{2})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d)/, "$1"),
};

export { regexFormat };
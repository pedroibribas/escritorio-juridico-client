
const validateDate = date => {
  const regex =
    /^(0[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]([012]\d{3})$/;
  return regex.test(date);
};

export { validateDate };
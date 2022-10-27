export const formatNamesList = (participantsArray) => {
  const names = participantsArray.map(participant => participant.name);

  const formattedNames = names.join(", ");

  return formattedNames;
};
const namesRowFormat = (allParticipantsArr) => {
  let formattedNamesArray = [];

  for (let index = 0; index < allParticipantsArr.length; index++) {
    const allParticipantsArrLastIndex = allParticipantsArr.length - 1;
    const lastParticipantArr = allParticipantsArr[allParticipantsArrLastIndex];

    if (allParticipantsArr[index] !== lastParticipantArr) {
      const { name } = allParticipantsArr[index];
      formattedNamesArray.push(`${name}, `);
    } else {
      const { name } = lastParticipantArr;
      formattedNamesArray.push(name);
    }
  }

  return formattedNamesArray;
};

export { namesRowFormat };
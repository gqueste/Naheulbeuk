export const onChangeCharac = (char, value) => {
  return{
    type: 'CHANGE_CARAC',
    char: char,
    value: value
  }
};

export const refreshProposals = () => {
  return {
    type : 'REFRESH_PROPOSALS'
  }
};

export const changeSelectedOriginProposition = (prop) => {
  return {
    type : 'CHANGE_SELECT_ORIGIN_PROPOSITION',
    prop : prop
  }
};

export const changeSelectedProfessionProposition = (prop) => {
  return {
    type : 'CHANGE_SELECT_PROFESSION_PROPOSITION',
    prop : prop
  }
};

export const generateChars = () => {
  return {
    type : 'GENERATE_CHARS'
  }
};

export const toogleCheaterMode = () => {
  return {
    type : 'TOOGLE_CHEATER_MODE'
  }
};

export const refreshDetails = () => {
  return {
    type : 'REFRESH_DETAILS'
  }
};
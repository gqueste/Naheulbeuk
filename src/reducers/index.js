import characteristics from './characteristics';
import originPropositions from './originPropositions';
import {selectOriginProposition, defaultSelectedOrigin} from './originPropositions';
import professionPropositions from './professionPropositions';
import {selectProfessionProposition, defaultSelectedProfession} from './professionPropositions';

const initialState = {
  characteristics : [
    {
      title : `Courage`,
      number : 0
    },
    {
      title : `Intelligence`,
      number : 0
    },
    {
      title : `Charisme`,
      number : 0
    },
    {
      title : `Adresse`,
      number : 0
    },
    {
      title : `Force`,
      number : 0
    }
  ],
  originPropositions : [],
  professionPropositions : [],
  isCheater : false,
  selectedOriginProposition : defaultSelectedOrigin,
  selectedProfessionProposition : defaultSelectedProfession
};


const isCheater = (isCheater, action) => {
  switch (action.type) {
    case 'TOOGLE_CHEATER_MODE' :
      return !isCheater;
    default:
      return isCheater
  }
};


const NaheulbeukApp = (state = initialState, action) => {
  return {
    characteristics : characteristics(state.characteristics, action),
    originPropositions : originPropositions(state, action),
    professionPropositions : professionPropositions(state, action),
    selectedOriginProposition : selectOriginProposition(state, action),
    selectedProfessionProposition : selectProfessionProposition(state, action),
    isCheater : isCheater(state.isCheater, action)
  }
};

export default NaheulbeukApp;
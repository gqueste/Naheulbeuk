import {Professions} from '../data/Professions';
import {isSuitable} from './originPropositions';

export const defaultSelectedProfession = {
  details : "Sélectionnez une profession pour en voir le détail"
};

const professionPropositions = (state, action) => {
  switch (action.type) {
    case 'REFRESH_PROPOSALS' :
      state.professionPropositions = [];

      Professions.map((origin) => {
        if(isSuitable(origin, state.characteristics)){
          state.professionPropositions.push(origin);
        }
        return null;
      });
      return state.professionPropositions;
    default:
      return state.professionPropositions
  }
};

export const selectProfessionProposition = (state, action) => {
  switch (action.type) {
    case 'REFRESH_DETAILS' :
      let propIsStillHere = false;
      state.professionPropositions.map((prop) => {
        if(prop.id === state.selectedProfessionProposition.id){
          propIsStillHere = true;
        }
        return null;
      });
      if(!propIsStillHere){
        state.selectedProfessionProposition = defaultSelectedProfession;
      }
      return state.selectedProfessionProposition;
    case 'CHANGE_SELECT_PROFESSION_PROPOSITION':
      return action.prop;
    default:
      return state.selectedProfessionProposition;
  }
};

export default professionPropositions;
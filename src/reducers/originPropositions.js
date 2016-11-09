import {Origins} from '../data/Origins';

export const defaultSelectedOrigin = {
  details : "Sélectionnez une origine pour en voir le détail"
};


let getTargetedCarac = (str, chars) => {
  for(let i =0; i < chars.length; i++){
    if(str === chars[i].title){
      return chars[i];
    }
  }
};


export const isSuitable = (spec, chars) => {
  let ret = true;

  if(spec.conditions.length > 0){
    for(let i = 0; i < spec.conditions.length; i++){
      let currentCond = spec.conditions[i];
      let targetedCarac = getTargetedCarac(currentCond.carac, chars);
      if(currentCond.op === 'Min'){
        if(targetedCarac.number < currentCond.value){
          return false;
        }
      }
      else{
        if(targetedCarac.number > currentCond.value){
          return false;
        }
      }
    }
  }
  return ret;
};



const originPropositions = (state, action) => {
  switch (action.type) {
    case 'REFRESH_PROPOSALS' :
      state.originPropositions = [];

      Origins.map((origin) => {
        if(isSuitable(origin, state.characteristics)){
          state.originPropositions.push(origin);
        }
        return null;
      });
      return state.originPropositions;
    default:
      return state.originPropositions
  }
};

export const selectOriginProposition = (state, action) => {
  switch (action.type) {
    case 'REFRESH_DETAILS' :
      let propIsStillHere = false;
      state.originPropositions.map((prop) => {
        if(prop.id === state.selectedOriginProposition.id){
          propIsStillHere = true;
        }
        return null;
      });
      if(!propIsStillHere){
        state.selectedOriginProposition = defaultSelectedOrigin;
      }
      return state.selectedOriginProposition;
    case 'CHANGE_SELECT_ORIGIN_PROPOSITION' :
      return action.prop;
    default:
      return state.selectedOriginProposition;
  }
};

export default originPropositions;
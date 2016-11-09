import { connect } from 'react-redux';
import ProfessionPropositions from '../components/ProfessionPropositions';
import {changeSelectedProfessionProposition} from '../actions';

const mapStateToProps = (state) => {
  return {
    professionPropositions : state.professionPropositions,
    selectedProfessionProposition : state.selectedProfessionProposition
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProposalSelect: (proposition) => {
      dispatch(changeSelectedProfessionProposition(proposition));
    }
  }
};


const VisibleProfessionsPropositionsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfessionPropositions);

export default VisibleProfessionsPropositionsList;
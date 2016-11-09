import { connect } from 'react-redux';
import OriginPropositions from '../components/OriginPropositions';
import {changeSelectedOriginProposition} from '../actions';

const mapStateToProps = (state) => {
  return {
    originPropositions : state.originPropositions,
    selectedOriginProposition : state.selectedOriginProposition
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProposalSelect: (proposition) => {
      dispatch(changeSelectedOriginProposition(proposition));
    }
  }
};


const VisibleOriginsPropositionsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(OriginPropositions);

export default VisibleOriginsPropositionsList;
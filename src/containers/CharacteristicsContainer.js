import { connect } from 'react-redux';
import Characteristics from '../components/Characteristics';
import {onChangeCharac} from '../actions';
import {refreshProposals} from '../actions';
import {generateChars} from '../actions';
import {toogleCheaterMode, refreshDetails} from '../actions';

const mapStateToProps = (state) => {
  return {
    characteristics: state.characteristics,
    isCheater : state.isCheater
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (char, event) => {
      dispatch(onChangeCharac(char, Number(event.target.value)));
      dispatch(refreshProposals());
      dispatch(refreshDetails());
    },
    onGenerateClick: () => {
      dispatch(generateChars());
      dispatch(refreshProposals());
      dispatch(refreshDetails());
    },
    onCheaterSwitchClick: () => {
      dispatch(toogleCheaterMode())
    }
  }
};

const CharacteristicsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Characteristics);

export default CharacteristicsContainer;
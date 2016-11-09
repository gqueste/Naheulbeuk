import React, {Component} from 'react';
import Details from './Details';

class ProfessionPropositions extends Component {

  render() {
    let isPropSelected = (prop) => {
      return prop.id === this.props.selectedProfessionProposition.id;
    };
    let getPropositionList = this.props.professionPropositions.map((prop) => <button className={"button proposal " + (isPropSelected(prop) ? 'secondary' : '')} key={prop.id} onClick={this.props.onProposalSelect.bind(null, prop)}>{prop.title}</button>);
    let displayProfessionsPanel = () => {
      if(this.props.professionPropositions.length === 0){
        return (
          <p className="text-center">Il n'y a pas de propositions pour ces valeurs.</p>
        );
      }
      else {
        return (
          <div>
            <div className="text-center">
              {getPropositionList}
            </div>
            <Details selectedProp={this.props.selectedProfessionProposition} />
          </div>
        )
      }
    };
    return(
      <div className="medium-6 columns">
        <h2 className="text-center">Professions</h2>
        {displayProfessionsPanel()}
      </div>
    )
  }
}

ProfessionPropositions.PropTypes = {
  professionPropositions: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.string,
      title: React.PropTypes.string
    })
  )
};

export default ProfessionPropositions;
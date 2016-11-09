import React, {Component} from 'react';
import Details from './Details';

class OriginPropositions extends Component {

  render() {
    let isPropSelected = (prop) => {
      return prop.id === this.props.selectedOriginProposition.id;
    };
    let getProposalList = this.props.originPropositions.map((prop) => <button className={"button proposal " + (isPropSelected(prop) ? 'secondary' : '')} key={prop.id} onClick={this.props.onProposalSelect.bind(null, prop)}>{prop.title}</button>);
    let displayOriginsPanel = () => {
      if(this.props.originPropositions.length === 0){
        return (
          <p className="text-center">Il n'y a pas de propositions pour ces valeurs.</p>
        );
      }
      else {
        return (
          <div>
            <div className="text-center">
              {getProposalList}
            </div>
            <Details selectedProp={this.props.selectedOriginProposition} />
          </div>
        );
      }
    };
    return(
      <div className="medium-6 columns">
        <h2 className="text-center">Origines</h2>
        {displayOriginsPanel()}
      </div>
    )
  }
}

OriginPropositions.PropTypes = {
  originPropositions: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.string,
      title: React.PropTypes.string
    })
  )
};

export default OriginPropositions;
import React, {Component} from 'react';

class Details extends Component {
  render(){
    return(
      <div>
        <h2 className="text-center">Détails</h2>
        <div dangerouslySetInnerHTML={ { __html:  this.props.selectedProp.details} }></div>
      </div>
    )
  }
}

export default Details;
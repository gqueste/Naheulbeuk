import React, { Component } from 'react';

class Characteristics extends Component{

  render(){
    const getCharacList = this.props.characteristics.map((char, index) =>
      <div key={index} className="row">
        <div className="small-6 small-centered columns">
          <div className="row">
            <div className="small-6 columns">
              <label className="text-right middle">{char.title}</label>
            </div>
            <div className="small-3 columns end">
              <input type="number" value={char.number} min="0" readOnly={!this.props.isCheater} onChange={this.props.onChange.bind(this, char)} />
            </div>
          </div>
        </div>
      </div>
    );

    return(
      <div className="text-center">
        <h2>Caractéristiques</h2>
        <div>
          <div className="row">
            <button className="button" onClick={this.props.onGenerateClick}>Générer</button>
          </div>
          <div className="row">
            <button className={"button " + (this.props.isCheater ? "secondary" : "")} onClick={this.props.onCheaterSwitchClick}>Je suis un tricheur</button>
          </div>
        </div>
        {getCharacList}
      </div>
    )
  }
}

Characteristics.propTypes = {
    characteristics: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title : React.PropTypes.string,
        number: React.PropTypes.number
      })
    )
};

export default Characteristics;
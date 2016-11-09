import React, { Component } from 'react';
import Header from './components/Header';
import VisibleOriginsPropositionsList from './containers/VisibleOriginsPropositionsList';
import VisibleProfessionsPropositionsList from './containers/VisibleProfessionsPropositionsList';
import CharacteristicsContainer from './containers/CharacteristicsContainer';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Header header="Création de personnage pour le Donjon de Naheulbeuk JDR"/>
        <CharacteristicsContainer />
        <h2 className="text-center">Propositions</h2>
        <div className="row">
          <VisibleOriginsPropositionsList />
          <VisibleProfessionsPropositionsList />
        </div>
      </div>
    )
  }
}

export default App;

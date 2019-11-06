import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Test from './Models/test'


// Pourquoi npm start lance-t-il expo ?

// 1) modifier Test afin d'afficher du texte a l'ecran

// 2) passer le texte a afficher dans les props de Test

// 3) ajoutez un bouton intitule "change Text" qui modifie la prop
//    de Test.

// 4 forcer le re render

// 5) le faire en remplacant les props par des states.

// 6) qu'est un callback ? comment peut on le mettre ds un setstate?

// 7) enlever le bouton, centrer le texte a l'ecran. 
// tout l'ecran doit repondre au toucher comme le bouton le faisait avant



export default class App extends React.Component {

  render() {
    return (
      <Test/>
    )
  }
}



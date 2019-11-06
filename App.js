import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// 0) npm start puis resolve le bug inclus en cadeau

// 1) modifier Test afin que le texte ne soit pas cache par la barre du haut

// 2) passer le texte a afficher dans les props de Test

// 3) ajoutez un bouton intitule "change Text" qui modifie la prop
//    de Test.

// 4 forcer le re render

// 5) le faire en remplacant les props par des states.

// 6) qu'est un callback ? comment peut on le mettre ds un setstate?

// 7) enlever le bouton, centrer le texte a l'ecran. 
// tout l'ecran doit repondre au toucher comme le bouton le faisait avant

// 8) cree un nouveau component NoteList qui affiche une liste de notes a l'ecran
// et permet d'ajouter des "note" a cette liste (une note est tout simplement une string)

// bonus Pourquoi npm start lance-t-il expo ?

export default class App extends React.Component {

  render() {
    return (
      <Test/>
    )
  }
}



import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
  // Jeu d'essai à n'ajouter qu'une seule fois
  if (!ProduitsCollection.find({}).count()) {
    ProduitsCollection.insert({nom: "Peinture mate licorne sur arc-en-ciel", prix: 79, disponible:false});
    ProduitsCollection.insert({nom: "Peinture satinée noire", prix: 69, disponible:true});
    ProduitsCollection.insert({nom: "Peinture satinée blanche", prix: 59, disponible:true});
  }
});

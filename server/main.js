import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
  // Jeu d'essai à n'ajouter qu'une seule fois
  if (!ProduitsCollection.find({}).count()) {
    ProduitsCollection.insert({nom: "Peinture mate licorne sur arc-en-ciel", prix: 79, disponible:false});
    ProduitsCollection.insert({nom: "Peinture satinée noire", prix: 69, disponible:true});
    ProduitsCollection.insert({nom: "Peinture satinée blanche", prix: 59, disponible:true});
  }
  if (!FournisseursCollection.find({}).count()) {
    FournisseursCollection.insert({nom: "Rêve peintures", professionnel:false});
    FournisseursCollection.insert({nom: "Peintures resist'MAX", professionnel:true});
    FournisseursCollection.insert({nom: "Peinture Durand", professionnel:true});
  }
});

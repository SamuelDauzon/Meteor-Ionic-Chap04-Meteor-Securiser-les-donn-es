import { Template } from 'meteor/templating';

Template.listerProduits.helpers({
  'produits': function() {
    return ProduitsCollection.find();
  }
});

Template.ajouterProduit.events({
  'submit form': function(event) {
    event.preventDefault();
    Meteor.call('produits.insert', {
      nom: event.target.nom.value,
      prix: event.target.prix.value,
      disponible: event.target.disponible.checked,
    });
    event.target.nom.value = '';
    event.target.prix.value = '';
    event.target.disponible.checked = false;
    event.stopPropagation();
  }
});
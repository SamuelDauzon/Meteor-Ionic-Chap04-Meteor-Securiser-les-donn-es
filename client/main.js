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
      prix: Number(event.target.prix.value),
      disponible: event.target.disponible.checked,
    }, (err) => {
      if (err) {
        alert("Données refusées : "+err.details);
      } else {
        alert("Document ajouté");
      }
    });
    event.target.nom.value = '';
    event.target.prix.value = '';
    event.target.disponible.checked = false;
    event.stopPropagation();
  }
});
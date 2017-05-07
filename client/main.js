import { Template } from 'meteor/templating';

Template.listerProduits.helpers({
  'produits': function() {
    return ProduitsCollection.find();
  }
});

Template.listerFournisseurs.helpers({
  'fournisseurs': function() {
    return FournisseursCollection.find();
  }
});
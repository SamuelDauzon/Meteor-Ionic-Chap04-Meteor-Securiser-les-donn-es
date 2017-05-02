import { Template } from 'meteor/templating';

Template.listerProduits.helpers({
  'produits': function() {
    return ProduitsCollection.find();
  }
});
Meteor.methods({
  'produits.insert': function (document) {
    ProduitsCollection.insert(document);
  }
});
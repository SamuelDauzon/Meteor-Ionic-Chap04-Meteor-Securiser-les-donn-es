Meteor.publish('produits', function() {
  return ProduitsCollection.find({disponible: true}, {fields: {nom: 1, prix: 1}});
});

Meteor.publish('fournisseurs', function(professionnel) {
  return FournisseursCollection.find({
    professionnel: professionnel
  });
});
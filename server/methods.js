Meteor.methods({
  'produits.insert': function (document) {
    check(document, {
      nom: Match.Where((nom) => {
        check(nom, String);
        return nom.length > 5;
      }),
      prix: Match.Where((prix) => {
        check(prix, Number);
        return prix >= 0;
      }),
      disponible: Boolean
    });
    ProduitsCollection.insert(document);
  }
});
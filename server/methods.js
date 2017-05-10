Meteor.methods({
  'produits.insert': function (document) {
    try {
      check(document.nom, Match.Where((nom) => {
        check(nom, String);
        return nom.length > 5;
      }));
    }
    catch(err) {
      throw new Meteor.Error(
        400,
        'Error 400: Bad request',
        "Le nom doit faire au minimum 5 caractères."
      );
    }
    try {
      check(document.nom, Match.Where((prix) => {
        check(prix, Number);
        return prix >= 0;
      }));
    }
    catch(err) {
      throw new Meteor.Error(
        400,
        'Error 400: Bad request',
        "Le prix ne peut pas être négatif."
      );
    }
    check(document.disponible, Boolean);
    ProduitsCollection.insert(document);
  }
});
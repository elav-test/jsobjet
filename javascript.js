

contacts = [
  {prenom: "Julien",    nom: "Grillot",    numero: "0123456789" },
  {prenom: "John",    nom: "Smith",    numero: "0123456789" }];

function texteContact(coordo) {
      return (coordo.nom+ " " + coordo.prenom + " "+ (coordo.numero))
     }


alert(texteContact(contacts[0])); // affiche « Julien Grillot (0123456789)

/* pour  afficher les éléments d'un tableau, boucle   for (var i = 0; i < contacts.length; i++)*/

contacts = [{
    prenom: "Julien",
    nom: "Grillot",
    numero: "0123456789"},
    {    prenom: "John",
    nom: "Smith",
    numero: "0123456789"}];

class Repertoire {
  constructor (nom, prenom, numero){
    this.nom=nom;
    this.prenom=prenom;
    this.numero=numero;

  }
}

function texteContact(coordo) {
      return (coordo.nom + "  " + coordo.prenom + "  "+ (coordo.numero))
    }

    function afficherListe(){
       // variable créer pour accéder à l'ID "liste" dans fichier HTML (element)
      var liste = document.getElementById('liste');
       // vide la variable nouveauTableau
      var nouveauTableau = "";
       /* pour instruire ma boucle, je nomme variable "i" (i correspond à l'index du tableau) qui débute à "0",
       tant que mon "i" est inférieur à la longueur de mon tableau,je l'incréménte de +1 avec "++" */
      for (var i = 0; i < contacts.length; i++) {
        //ci-dessous importer la liste du fichier HTML
        /* je crée une variable coordonnee, qui me permettra d'envoyer dans ma balise <li> un nouvel
         elément qui se réfère à ma fonction texteContact, qui elle même se réfère à mon tableau contacts */
        var coordonnee= texteContact(contacts[i]);
        /* j'indique à mon tableau qu'il se remplisse avec coordonnee */
        nouveauTableau += "<li>" + coordonnee +"</li>";
      } /* fin de ma boucle*/
      // modifie la balise HTML contenant l'id "liste" (innerHTML)
      liste.innerHTML =nouveauTableau;
    }
    afficherListe(); // appel de la fonction créer ci-dessus
    // fin fonction afficherListe


    // Fonction  ajouter les noms à la liste
    function ajouterContact (){
    	// variable créee qui fait référence au fichier html par l'id "nom,prenom,telephone" et au constructor Repertoire
      var newContact = new Repertoire (document.getElementById("nom").value,document.getElementById("prenom").value,document.getElementById("telephone").value); // ajoute

    	contacts.push(newContact) ; /* envoi des nouveaux éléments dans le tableau par
    	l'intermediaire de ma variable newContact */

    	afficherListe();

    	}
      // function rechercher un élément, vide le tableau, rempli le tableau et le vide
      function recherche (){
        var inputRecherche= document.getElementById('maRecherche').value; /* création de variable pour récupérer l'id maRecherche */
        var tableauVide= ""; /* vide le tableau (recherche)*/

        for (var i = 0; i < contacts.length; i++)/* FOR recherche dans mon tableau */
          /* IF si le nom existe dans mon tableau , dans ma case recherche (inputRecherche), comparaison égalité srticte (===) dans mon tableau contacts[i] à partir de l'index "0" .nom , .prenom et .numero*/
          if (inputRecherche === contacts[i].nom || inputRecherche === contacts[i].prenom || inputRecherche === contacts[i].numero) {
            tableauVide += "<li>"+ contacts[i].nom + " " +contacts[i].prenom+ " " +contacts[i].numero +"</li>"; /* rempli mon tableau recherche*/
          }
        }
        document.getElementById("resultatRecherche").innerHTML = tableauVide; /* vide mon tableau recherche */

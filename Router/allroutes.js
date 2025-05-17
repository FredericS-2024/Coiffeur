import Route from "./Route.js";

//Définir ici vos routes
export const allroutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La Galerie", "/pages/galerie.html"),
    new Route("/prestation", "Nos prestations", "/pages/prestation.html"),
    new Route("/contact", "Nous contacter", "/pages/contact.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Coiffure Harmonie";
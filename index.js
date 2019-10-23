import Recherche from './models/Recherche';
import * as RechercheVue from './views/RechercheVue';
import { elements, rendreLoader, effaceLoader} from './base';


/* State global de l'app
	- Objet recherche
	- Objet recette actuel
	- Objet avec la liste de achats
	- Objet recettes favorites
*/ 
const state = {};

const ctrlRecherche = async () => {
	// 1. Récupérer le query de la vue
	const query = RechercheVue.getInput();

	// 2. Créer nouvelle objet Recherche et ajouter au state
	state.recherche = new Recherche(query);

	// 3. Préparer l'interface(UI) pour le résultat
	RechercheVue.clearInput();
	RechercheVue.clearRecettes();
	rendreLoader(elements.recherRes);
	// 4. Rercheche des recettes
	await state.recherche.getRecette();

	// 5. Affichage de la liste dans l'UI
	effaceLoader();
	RechercheVue.renduRecettes(state.recherche.resultats);
}

elements.rechercheForm.addEventListener('submit', e => {
	e.preventDefault();
	ctrlRecherche();
})
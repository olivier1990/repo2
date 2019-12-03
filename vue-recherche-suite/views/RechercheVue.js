import { elements } from '../base';

export const getInput = () => elements.rechercheInput.value;

//il faut mettre des accolades juste en dessous sinon il fait un return
export const clearInput = () => {
	elements.rechercheInput.value ='';
}
export const clearRecettes = () => {
	elements.rechercheListe.innerHTML = '';
}
const limiteTitre = (titre, limite = 17) => {
	const nouveauTitre = [];
	if(titre.length > limite) {
		titre.split(' ').reduce((concat, actuel)=>{
			if(concat + actuel.length <= limite){
				nouveauTitre.push(actuel);
			}
			return concat + actuel.length;
		}, 0);
		return `${nouveauTitre.join(' ')}...`;
	}
	return titre;
}
const renduRecette = recette => {
	const balise = `
	<li>
		<a class="results__link" href="#${recette.recipe.uri}">
				<figure class="results__fig">
						<img src="${recette.recipe.image}" alt="Test">
				</figure>
				<div class="results__data">
						<h4 class="results__name">${limiteTitre(recette.recipe.label)}</h4>
						<p class="results__author">${recette.recipe.source}</p>
				</div>
		</a>
	</li>`;
	elements.rechercheListe.insertAdjacentHTML('beforeend', balise);
}

export const renduRecettes = (recettes, page =1, recParPage =10) => {
	const debut =(page -1) * recParPage;
	const fin = page * recParPage;

	recettes.slice(debut, fin).forEach(renduRecette);
}
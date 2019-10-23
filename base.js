export const elements = {
	rechercheForm: document.querySelector('.search'),
	rechercheInput: document.querySelector('.search__field'),
	recherRes: document.querySelector('.results'),
	rechercheListe: document.querySelector('.results__list')
}

export const elementStrings = {
	loader: 'loader'
};

export const rendreLoader = parent => {
	const loader = `
	<div class="${elementStrings.loader}">
	<svg>
	<use href="img/icons.svg#icon-cw"></user>
	</svg>
	</div>`;
	parent.insertAdjacentHTML('afterbegin', loader);
}
export const effaceLoader = () => {
	const loader = document.querySelector(`.${elementStrings.loader}`);
	if(loader){
		loader.parentElement.removeChild(loader);
	}
}

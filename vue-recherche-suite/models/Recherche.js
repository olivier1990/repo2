import axios from 'axios';

export default class Recherche{
	constructor(query) {
		this.query = query;
	}
	async getRecette() {
		const proxy = 'https://cors-anywhere.herokuapp.com/';
		const key   = '--- VOTRE CLE ---';
		const appId = '-- VOTRE APP ID ---';
		try {
			const res = await axios(`https://api.edamam.com/search?q=${this.query}&to=100&app_id=${appId}&app_key=${key}`) 
		
			this.resultats = res.data.hits;
		} catch (error) {
			alert(error);
		}
	}
} 
console.log('HELLO');

const recipes = [
	{
		title: 'Eggs',
		picture: 'https://bit.ly/30fOBmg',
		author: 'Nathan',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'spring onion', `tomatoes`, `papper`],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs inside a bowl',
			`Prepare the spring onion`,
			`Mix it with the eggs`,
			'Add some salt on it',
			`Fry them`,
			'Wait, put them out',
		],
		id: 1596168482053,
	},
	{
		title: 'Tsangatsofina',
		picture: `https://bit.ly/2BOtNJ4`,
		author: 'Nety',
		difficulty: 'medium',
		timing: '45',
		ingredients: ['fish', 'menavony', 'water', `salt`],
		steps: [
			'Prepare the fish and the menavony',
			'Boil water and put them in the boiled water',
			'Add some salt on it',
			'Wait, put them out',
		],
		id: 1596168522409,
	},
	{
		title: 'Salad',
		picture: 'https://bit.ly/3157zuJ',
		author: 'Lacey',
		difficulty: 'difficult',
		timing: '1hour',
		ingredients: ['papaya', 'salt', 'water', `carry`, `papper`, `spring onion`],
		steps: [
			'Grate the papaya',
			'Boil it about 20min',
			'Take it out',
			'Add some salt, carry and spring onion on it',
		],
		id: 1596168522409,
	},
];

const postList = document.querySelector(`#post-list`);
const heading = document.querySelector(`h1`);
const generateButton = document.querySelector('button.generate');

const renderCard = () => {
	// check the recipes collection
	function getArrayOfRecipes(obj) {
		return Object.keys(recipes);
	}
	console.log(getArrayOfRecipes(recipes));

recipes.forEach(function(element) {
	console.log(element);
});
	// generate the HTML
for (let i = 0; i < recipes.length; i++) {
	const myHTML = `
	    <div class="card">
			<div class="card-body">
				<h2 class="card-title">${recipes[i].title}</h2>
				<img src="${recipes[i].picture}">
				<p>
				Timing: ${recipes[i].timing}
				  <br>
				  Difficulty: ${recipes[i].difficulty}
				</p>
				<button type="button" class="info">
				More info
				</button>
			</div>
	    </div>
`;
postList.insertAdjacentHTML(`afterend`, myHTML);

const handleBtn = event => {
	const InfoHTML = `
	<h1>${recipes[i].title} <small>${recipes[i].author}</small></h1>`;
}

}	  

	// put it in the DOM
generateButton.addEventListener('click', renderCard);

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
const container = document.querySelector(`.container`)
const postList = document.querySelector(`#post-list`);
const heading = document.querySelector(`h1`);
const generateButton = document.querySelector('button.generate');
const cardElement = document.querySelector(`.card`);
const addNewRecipe = document.querySelector(`.add-recipe`);
const infoBtn = document.querySelector(`info`);
const outerModal = document.querySelector(`.outer-modal`);
const innerModal = document.querySelector(`.inner-modal`);


const renderCard = () => {
// 	// check the recipes collection
// 	function getArrayOfRecipes(obj) {
// 		return Object.keys(recipes);
// 	}
// 	console.log(getArrayOfRecipes(recipes));

// recipes.forEach(function(element) {
// 	console.log(element);
// });
	// generate the HTML
for (let i = 0; i < recipes.length; i++) {
	const myHTML = `
	    <article class="card">
				<h2 class="card-title">${recipes[i].title}</h2>
				<img src="${recipes[i].picture}">
				<nav>
				  <ul>
					<li>Timing: ${recipes[i].timing}</li>
					<li>Difficulty: ${recipes[i].difficulty}</li>
				  </ul>
				</nav>
				<button type="button" class="info">
				More info
				</button>
		</article>
`;
container.insertAdjacentHTML("beforeend", myHTML);

}
}

const moreInfo = () => {
	// const {title, picture, author, difficulty, ingredients, steps} = cardElement;
	// cardElement.querySelector(`.card`).textContent;
	const moreInfoHTML = `
	<h4>${recipes.title} by</h4>
	  <img src="">
	  <nav>
	  <ul>
		<li>Timing: </li>
		<li>Difficulty: </li>
		<li>Ingredients:
			<ul>
				<li>
				
				</li>
			</ul>
		</li>
		<li>
			<ul>
				<li>
				
				</li>
			</ul>
		</li>
	  </ul>
	  </nav>
	`; 
	innerModal.innerHTML = moreInfoHTML;
	outerModal.classList.add(`open`);
  }

  const handleCloseModal = event => {
    const isOutside = !event.target.closest(`.inner-modal`);
    if (isOutside) {
        outerModal.classList.remove(`open`);
    }
};

const handleEscapeKey = event => {
    if (event.key === `Escape`) {
        closeModal();
    }
};
const closeModal = event => {
    outerModal.classList.remove(`open`);
}
  const handleBtnClick = event => {
	if (event.target.matches(`button.info`)) {
		const card = event.target.closest(`.card`);
		const id = Number(card.dataset.id);
		const recipe = recipes.find(singleRecipe => singleRecipe.id === id);
		moreInfo(recipe);
	}
  };




  // Listeners
  window.addEventListener(`click`, handleBtnClick);
  window.addEventListener(`keydown`, handleEscapeKey);
  outerModal.addEventListener(`click`, handleCloseModal);
//   addOrderBtn.addEventListener(`click`, addOrder);

generateButton.addEventListener('click', renderCard);

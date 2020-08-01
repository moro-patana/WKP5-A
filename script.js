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
		id: 1596168522402,
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
// Grab elements
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
// check the recipes collection
	function getArrayOfRecipes(obj) {
		return Object.keys(recipes);
	}
	console.log(getArrayOfRecipes(recipes));

recipes.forEach(function(element) {
	console.log(element);
});

 // Loop through the object
for (let i = 0; i < recipes.length; i++) {

    // Grab the ingredients array value into list item
	let ingredientsValue = recipes[i].ingredients;
	let ingredientsTxt = "";

	ingredientsValue.forEach(myFunction);
	function myFunction(item) {
		ingredientsTxt += "<li>" + item + "</li>";
	}
// let stepsValue = recipes[i].steps;
// let stepsTxt = "";

// stepsValue.forEach(myFunction);
// function myFunction(item) {
// stepsTxt += "<li>" + item + "</li>";
// }

   // generate the HTML
	const myHTML = `
	    <article class="card" data-id="${recipes[i].id}">
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

  // Create a modal
const moreInfo = (recipe) => {
innerModal.innerHTML = `
	<h4>${recipe.title} by ${recipe.author}</h4>
	  <img src="${recipe.picture}">
	  <nav>
	  <ul class="list">
		<li><b>Timing:</b> ${recipe.timing}</li>
		<li><b>Difficulty:</b> ${recipe.difficulty}</li>
		<li><b>Ingredients:</b>
			<ul class="ingredients">
			</ul>
		</li>
		<li>
			<ul>
				<li><b>Steps:</b>
				${recipe.steps}
				</li>
			</ul>
		</li>
	  </ul>
	  </nav>
	`; 
	outerModal.classList.add(`open`);
	 }
  // Add class
  const handleCloseModal = event => {
    const isOutside = !event.target.closest(`.inner-modal`);
    if (isOutside) {
        outerModal.classList.remove(`open`);
    }
};
 // Remove the class
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
// Listen to the add a new recipe button
  const handleAddRecipe = (event) => {
// Create a form
	  innerModal.innerHTML = `
	  <div class="col-8 offset-2">
	  <div class="card" id="form-card">
			  <form class="post-form">
				  <h2>Add a new cookbook</h2>
				  <div class="form-group">
					  <label for="recipeName">What's the recipe name?</label><br>
					  <input
						  type="text"
						  class="form-control"
						  id="recipeName"
						  name="recipeName"
						  placeholder="Enter recipe name"
					  />
				  </div>
				  <div class="form-group">
					  <label for="resultImage">Picture of the result (URL)</label><br>
					  <input
						  class="form-control"
						  type="url"
						  name="resultImage"
						  rows="3"
						  placeholder="Enter image url"
					  />
				  </div>
				  <div class="form-group">
					  <label for="cookName">Who's the cook?</label><br>
					  <input
						  type="text"
						  class="form-control"
						  name="cookName"
						  aria-describedby="cookName"
						  placeholder="Enter cook's name"
					  />
				  </div>
				  <div class="form-group">
					  <label for="difficulty">What's the difficulty?</label><br>
						  <select id="difficulty-select" name="difficulty">
							  <option value="easy">Easy</option>
							  <option value="quite difficult">Quite difficult</option>
							  <option value="very difficult">Very difficult</option>
						  </select>
				  </div>
				  <div class="form-group">
					  <label for="time">How much time does it take?</label><br>
						  <select id="time-select" name="timing">
							  <option value="">Less than 15 minutes</option>
							  <option value="30min">30 minutes</option>
							  <option value="45min">40 minutes</option>
							  <option value="1hour">An hour</option>
							  <option value="more">More than an hour</option>
						  </select>
				  </div>
				  <div class="form-group">
					  <label for="ingredient">Ingredients</label><br>
					  <ul id="ingredients">
						  <li>
							  <input 
							  type="text" 
							  id="ingredient" 
							  name="ingredient" 
							  value="eggs">
						  </li>
					  </ul>
					  <button class="add-ingredient">Add a new ingredient to the list</button>
				  </div>
				  <div class="form-group">
					  <label for="steps">Steps</label><br>
					  <ul id="steps">
						  <li>
							  <input 
							  type="text" 
							  id="steps" 
							  name="steps" 
							  value="fried the eggs">
						  </li>
					  </ul>

					  <button class="add-step">Add a new step to the list</button>
				  </div>
				  <button type="submit" class="btn btn-primary">
					  Submit
				  </button>
			  </form>
		  </div>
  </div>
`;
outerModal.classList.add(`open`);
  }
// Add event listener to the submit button
const handleSubmitBtn = (event) => {
	event.preventDefault();
	if (event.target.matches(`form`)) {
		const form = event.target;
		const title = form.title.value;
		const picture = form.resultImage.value;
		const cookName = form.cookName.value;
		const time = form.timing.value
		const difficulty = form.difficulty.value;
		const ingredients = form.ingredient.value;
		const steps = form.steps.value;
// Create an html for the result of the from
		const newRecipe = `
		<article class="card" data-id="${recipes.id}">
		<h2 class="card-title">${title}</h2>
		<img src="${picture}">
		<nav>
		  <ul>
			<li>Timing: ${time}</li>
			<li>Difficulty: ${difficulty}</li>
		  </ul>
		</nav>
		<button type="button" class="info">
		More info
		</button>
</article>

`;
container.innerHTML += newRecipe;
outerModal.classList.remove(`open`);
form.reset();
	}

} 


  // Listeners
  window.addEventListener(`submit`, handleSubmitBtn);
  window.addEventListener(`click`, handleBtnClick);
  window.addEventListener(`keydown`, handleEscapeKey);
  outerModal.addEventListener(`click`, handleCloseModal);

generateButton.addEventListener('click', renderCard);
addNewRecipe.addEventListener(`click`, handleAddRecipe);

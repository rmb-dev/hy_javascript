const pizza = {
	pie: [
		{
			title: 'Maker Pizza',
			price: '$$'
		},
		{
			title: 'Pizza Libretto',
			price: '$$'
		},
		{
			title: 'Dominoes',
			price: '$'
		}
	],
	slice: [
		{
			title: 'Pizzaiolo',
			price: '$$'
		},
		{
			title: 'North of Brooklyn',
			price: '$$'
		},
		{
			title: 'Pizza Pizza',
			price: '$'
		},
		{
			title: 'King Slice',
			price: '$'
		}
	]
};


// allow the user to only click one radio button per section




// Create a namespace
const pizzaApp = {};
pizzaApp.randomResult = arr => {
	// arr has 2 items
	// have idexes of 0 and 1
	// create a variable that holds a random index of either 0 or 1
	const randomIndex = Math.round(Math.random() * (arr.length - 1));
	//return the item from my array at that random index
	return arr[randomIndex];
}
pizzaApp.init = () => {
	// console.log('WE ARE READY FOR THE PIZZA');

	// attach a submit event to some element
	const form = document.querySelector("form");
	// console.log(form);
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		// on submit, retrieve user selection from radio buttons
		// console.log("we did the submitting");
		const sizeSelection = document.querySelector("input[name=size]:checked").value;
		const priceSelection = document.querySelector('input[name=price]:checked').value;
		//something is telling us how to select a single pizza place
		// console.log(sizeInput.value);
		const sizeOptions = pizza[sizeSelection]; // an array of object
		const filteredOptions = sizeOptions.filter((item) => {
			return item.price === priceSelection;
		});
		// console.log(filteredOptions, "you are filtered");
		// get random item from filtered options 
		const theOne = pizzaApp.randomResult(filteredOptions);
		// manipulate the DOM, add our results to the page
		const result = document.getElementsByClassName("results")[0];
		const resultHTML = `<h2>You should go to <span class="restaurant">${theOne.title}</span></h2>`;
		// console.log(results);
		result.innerHTML = resultHTML;



	})
}
// Document ready:
document.addEventListener('DOMContentLoaded', () => {
	pizzaApp.init();
})
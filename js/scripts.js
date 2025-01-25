// This file contains JavaScript code for handling the search functionality on the TravelBloom homepage.

const recommendations = {
	beach: [
		{
			name: "Maldives",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjA5ePmicGUHHayiV_FdmABuwzu1S_4lFXDw&s",
		},
		{
			name: "Bora Bora",
			image:
				"https://cdn.britannica.com/16/60016-050-5D8447C8/peaks-Bora-Bora-Society-Islands-lagoon-French-Polynesia.jpg",
		},
	],
	temple: [
		{
			name: "Angkor Wat",
			image:
				"https://cdn.britannica.com/56/122156-050-F5B469C8/overview-complex-Angkor-Wat-Cambodia.jpg",
		},
		{
			name: "Golden Temple",
			image:
				"https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2019/11/golden-temple-feature.jpg",
		},
	],
	country: [
		{
			name: "Japan",
			image:
				"https://career-advice.jobs.ac.uk/wp-content/uploads/Japan-e1634207070862.jpg.optimal.jpg",
		},
		{
			name: "Italy",
			image:
				"https://delivery.gfobcontent.com/api/public/content/69158ae40b48417eb30d19fcc97942a8?v=160b28fd",
		},
	],
};

function searchRecommendations() {
	const searchInput = document.getElementById("searchBar").value.toLowerCase();
	const resultsContainer = document.getElementById("resultsContainer");
	resultsContainer.innerHTML = ""; // Clear previous results

	for (const category in recommendations) {
		recommendations[category].forEach((item) => {
			if (item.name.toLowerCase().includes(searchInput)) {
				const resultItem = document.createElement("div");
				resultItem.classList.add("result-item");
				resultItem.innerHTML = `<h3>${item.name}</h3><img src="${item.image}" alt="${item.name}">`;
				resultsContainer.appendChild(resultItem);
				document.getElementById("results").classList.add("show");
			}
		});
	}
}

document
	.getElementById("searchButton")
	.addEventListener("click", searchRecommendations);

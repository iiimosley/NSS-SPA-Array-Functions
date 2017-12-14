let el = document.getElementById("planets");
let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
planets.forEach(i => {
    el.innerHTML += `<li>${i}</li>`;
});

let planetsCap = planets.map( c => c.charAt(0).toUpperCase() + c.slice(1));
console.log("Capitalized Planets:", planetsCap);

let planetsE = planets.filter(f=>f.includes("e"));
console.log("Planets w/ letter 'E'", planetsE);


let words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
console.log("Sentence by array.reduce:", `${words.reduce((acc, cv) => acc + " " + cv)}.`);
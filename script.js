const pokémon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

// the id is evenly divisible by 3
const divisibleByThree = pokémon.filter((p) => p.id % 3 === 0);
console.log(divisibleByThree);

// "fire" type
const fireType = pokémon.filter((p) => p.types.includes("fire"));
console.log(fireType);

// more than one type
// const moreThanOneType = pokémon.map((p) => p.types[length] > 0);
// console.logp(pokémon.types.filter((i) => i.length > 0));
// console.log(moreThanOneType);

// just the name of the pokémon
const pokémonname = pokémon.map((p) => p.name);
console.log(pokémonname);

// just the name of the pokémon and id greater than 99
const pokémonNameId = pokémon
  .filter((p) => p.id > 99)
  .map((pp) => `id:${pp.id} name:${pp.name}`);
console.log(pokémonNameId);

// name of the pokémon whose only type is poison

const typeIsPoison = pokémon.filter((p) => p.types.includes("poison"));
console.log(typeIsPoison);

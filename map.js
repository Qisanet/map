const colors =["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
const personArray = ["Alice" ,"25","Wonderland"];
const [namePerson, agePerson,cityPerson]= personArray;
console.log(agePerson);
console.log(namePerson);
console.log(cityPerson);
const settings = { theme: 'dark', language: 'en' };
const { theme, language, mode = 'light' } = settings;

console.log(theme);   
console.log(language); 
console.log(mode);     



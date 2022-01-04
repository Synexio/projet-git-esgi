import {Armor, Character, Excalibur, Gun, Sword} from "./models";


const sword1 = new Sword({name: "Epee en bois", height: 50, price: 20, weight: 500, width: 5},2020, false);
const sword2 = new Sword({name: "Epee en fer", height: 50, price: 20, weight: 1000, width: 5},2020, false);
const gun1 = new Gun({name:"Pistolet à eau", width:15, weight:100, price:5, height:3},3);
const armor1 = new Armor({armor:10, price:30, name:"Plastron en fer",durability:50});
const armor2 = new Armor({armor:10, price:30, name:"Plastron en fer",durability:50});
const armor3 = new Armor({armor:40, price:30, name:"Plastron en or",durability:5});
const armor4 = new Armor({armor:10, price:30, name:"Plastron en fer",durability:50});

const char1 = new Character({name:"Alexandre", weapon:sword2, health:25000,hitChance:Math.floor(Math.random() * 21)+50,armor:armor1, isZombie: false});
const char2 = new Character({name:"Jonathan", weapon:gun1, health:25000,hitChance:Math.floor(Math.random() * 21)+50,armor:armor3, isZombie: false});
const char3 = new Character({name:"Benoit", weapon:sword1, health:25000,hitChance:Math.floor(Math.random() * 21)+50,armor:armor2, isZombie: false});
const GOD = new Character({name:"GOD", weapon:Excalibur.getInstance(), health:5000,hitChance:Math.floor(Math.random() * 21)+50,armor: armor4, isZombie: false});

//console.log("Winner : " + char1.fight(char2));
//console.log("Winner : " + char1.fight(char3));
//console.log("Winner : " + char2.fight(char3));
console.log("Winner : " + GOD.fight(char2));

//Affiche les vies
console.log(char1.getName() + " : " + char1.getHealth());
console.log(char2.getName() + " : " + char2.getHealth());
console.log(char3.getName() + " : " + char3.getHealth());
console.log(GOD.getName() + " : " + GOD.getHealth());
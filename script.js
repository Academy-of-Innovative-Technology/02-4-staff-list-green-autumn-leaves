//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////

let
	Admin = ["Fowlkes", "Lynch", "Woodham", "Stahl", "Peter"],
	CTE = ["Alphonse", "Donahue", "Santana", "Vaduva", "Woods", "Shams", "Urena"],
	History = ["McQuilkin", "Amell", "Hablenko", "Schmidt", "Headlem", "Lucas", "Smith"],
	Counselor = ["Grant", "Weaver"],
	Maths = ["Freck", , "Ventimiglia"],
	Gym = ["Banta", "Proper", "Moll", "Murray"],
	Dean = ["Frazier", "Vaduva", "Mollison"],
	Language = ["Levystone", "Ortiz", "Stratman", "Vaduva", "Streeter", "Weaver"],
	Science = ["Koelsch", "Willet", "Lagana", "Fonrose"],
	English = ["Brown", "DelValle", "Duran", "Griszell", "King", "Fonrose", "Constant"],
	Office = ["Verley"],
	Support = ["Kabir", "Minto"],
	SSC = ["Stephine"];



//////// DO NOT EDIT ABOVE THIS LINE ////////////////
/////////////////////////////////////////////////////

////////// MAKE YOUR UPDATES WITHIN THIS SECTION //// 

Admin.splice(3);
Admin.shift();
Admin.shift();
Admin.push("Drysdale", "Simpkins");


Office.splice(0);
Office.push("Martinez", "Tirado"," Valentin" );



CTE.splice(1,4);
CTE.pop();
CTE.push("Frazer"," Gomes", "Pelzer", "Pierre", "Ramsawak", "Rahimi","Sullivan");
CTE.sort();


Counselor.splice(0);
Counselor.push("Mollina")


let Guidance = [];

Guidance.push("Desroches", "Cooper");


History.splice(0,1);
History.splice(1,2);
History.push("Urena")

Maths.pop();
Maths.push("Koelsch","Minto", "Forth", "Wong");

Gym.splice(1);
Gym.push("Mcalary")

Dean.splice(1,1)


Language.splice(0,5)
Language.push( "Nowakowski", "Vallejo")

Science.splice(0)
Science.push( "lynch" , "Davies", "Boswell")

English.splice(0)
English.push("Grant", "Griszell", "Gomez", "Tavares")

Support.pop()
Support.push("Slater","Sherman",  "Rodriguez", "Steele", "David");
Support.sort()

SSC.splice(0)
SSC.push("Guzman")


let Paraprofessional = [];

Paraprofessional.push("Albsi","Camila","Colter", "Ward", "Ahad", "Shand", "Nicholson", "J.Grant", "Belton", "Damari");







/////////////////////////////////////////////////////
//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////

const STAFF = [Admin, Office, Counselor, CTE, History, Maths, Gym, Dean, Language, Science, English, Support, SSC, Paraprofessional];

e("table").innerHTML = createTableCotents();

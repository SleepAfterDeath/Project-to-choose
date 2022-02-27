//guzik gry
const btn = document.getElementById("losowanieGuzika");
const div = document.getElementById("divGry");


const games = ["monopoly", "makao", "scrable", "kalambury", "czółko", "ps4", "statki",
"państwa miasta", "kółko i krzyżyk", "5 sekund", "znamy się"];


const gameGenerator = () => {

    const index = Math.floor(Math.random() * games.length);
    div.textContent = `Najfajniejsza gra to ${games
    [index]}`

}
btn.addEventListener("click", gameGenerator)



//Guzik podróży
const btn1 = document.getElementById("losowanieGuzikaPodrozy");
const div1 = document.getElementById("divPodroz");


const travels = ["Białystok", "Warszawa", "Kraków", "Łódź", "Wrocław", "Poznań",
"Gdańsk", "Gdynia", "Szczecin", "Bydgoszcz", "Lublin", "Katowice", "Częstochowa", "Radom",
"Toruń", "Kielce", "Rzeszów", "Olsztyn", "Bytom", "Elbląg", "Płock", "Piła", "Suwałki"];
     
const travelGenerator = () => {

    const index = Math.floor(Math.random() * travels.length);
    div1.textContent = `Miasto do którego pojedziesz to ${travels
    [index]}`
}
btn1.addEventListener("click", travelGenerator)

//Guzik Co robić
const btn2 = document.getElementById("losowanieGuzikaDoit");
const div2 = document.getElementById("divDiIt");


const doing = ["idź na spacer", "idź na siłownie", "idź na basen", "spotkaj się ze znajomymi",
"pograj ze znajomymi"];
     
const doingGenerator = () => {

    const index = Math.floor(Math.random() * doing.length);
    div2.textContent = `Wstań i  ${doing
    [index]}`
}
btn2.addEventListener("click", doingGenerator)

//Guzik do oglądania filmu
const btn3 = document.getElementById("losowanieGuzikaWatch");
const div3 = document.getElementById("divWatch");


const watch = ["Kogiel mogiel", "Harry Potter i Kamień Filozoficzny", 
"Harry Potter i Komnata Tajemnic"];
     
const watchGenerator = () => {

    const index = Math.floor(Math.random() * watch.length);
    div3.textContent = `Dzisiejszy film to  ${watch
    [index]}`
}
btn3.addEventListener("click", watchGenerator)
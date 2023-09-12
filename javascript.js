var Kvadrats = document.getElementById("kvadrats") // šis ir mainīgais "kvadrats", vins ir vienads ar html elementu kvadrats
var Onclick = 0 // skaita kliskus
var Poga = document.getElementById("poga") // tas pats kas kvadrats tikai poga
var background = document.getElementById("background") // ja man sitik pat bus jakomente actual darba es ilgi neizvilksu

function MainFunkcija() { // si ir main funkcija kuru izsauc katru reizi ka piespiez pogu

    Pieskaita() 
    
    var Red = RandomKrasa() // sie ir krasu mainigie, kas izsauc funkciju random krasu
    var Green = RandomKrasa()
    var Blue = RandomKrasa()

    Kvadrats.style.backgroundColor = `rgb(${Red}, ${Green}, ${Blue})` // html elementam kvadrats mes nomainam CSS faila doto style un background color ar mainigo vertibam RGB krasam

    RandomSpawn() // nomaina kvadrata poz

    var Pagrieziens = RandomLenkis() // mainigajam pagrieziens iedod vertibu no 0-360 un pa tik gradiem pagriez
    Kvadrats.style.rotate = `${Pagrieziens}deg`

    function RandomSpawn() 
    {
        
        var kvadrataPlatums = Kvadrats.offsetWidth; 
        var kvadrataAugstums = Kvadrats.offsetHeight;
        var  backgroundGarums = background.offsetWidth;
        var backgroundAugstums = background.offsetHeight;
        var top = Math.random() * (backgroundAugstums - (kvadrataAugstums * 2));
        var left = Math.random() * ( backgroundGarums - (kvadrataPlatums * 2));
        if (left + kvadrataPlatums >  backgroundGarums) {
          left =  backgroundGarums - (kvadrataPlatums * 2);
        }
        if (top + kvadrataAugstums > backgroundAugstums) {
          top = backgroundAugstums - (kvadrataAugstums * 2);
        }
        if (left < 0) {
          left = 0;
        }
        if (top < 0) {
          top = 0;
        }
        Kvadrats.style.top = top + 'px';
        Kvadrats.style.left = left + 'px';
    }
    function Pieskaita() 
    {
        Onclick += 1
        Poga.innerHTML = Onclick        
    }
    function RandomKrasa() {
        return Math.floor(Math.random() * 255);
    }
    function RandomLenkis() {
        return Math.floor(Math.random() * 360);
    }
}
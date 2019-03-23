
// variabelen declareren

var name = document.querySelector("#name");
var day = document.querySelector("#day");
var month = document.querySelector("#month");
var year = document.querySelector("#year");
var male = document.querySelector("#male");
var female = document.querySelector("#female");
var other = document.querySelector("#other");
var button = document.querySelector("#button");
button.addEventListener("click", showResult);

var personen = document.querySelector("#results");

// persoon object aanmaken

function showResult(){
    var personObject={
        naam: name.value, // --> naam blijft op undefined staan..
        dag: day.value,
        maand: month.value,
        jaar: year.value,
        man: male.value,
        vrouw: female.value,
        ander: other.value
    }
   // console.log(personObject);
    var div = document.createElement("div");
    var p = document.createElement("p");
    var b = document.createElement("p");
    var small = document.createElement("small");
    var strong = document.createElement("strong");
    var DateOfBirth = personObject.dag+ "-" + personObject.maand+ "-" + personObject.jaar;

// controleren als alles ingevuld of geckecked is

    if(male.checked || female.checked || other.checked){

        b.innerHTML= personObject.naam;

        strong.appendChild(b);

        div.appendChild(strong);

        p.innerHTML= DateOfBirth;

        small.appendChild(p);

        div.appendChild(small);

        results.appendChild(div);

        div.classList.add("pop-up");
    }

    // box tonen in kleur naargelang het geslacht

    if(male.checked){
        div.classList.add("blue");
    }

    else if(female.checked){
        div.classList.add("pink");
    }

    else if(other.checked){
        div.classList.add("grey");
    }

}
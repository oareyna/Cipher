let form = document.getElementById("form")
//retrieving data from form 
let submit = document.getElementById("submit")
 
 
 
form.addEventListener("submit", function (event){
    event.preventDefault()
    //retrieving data from form
    let shift= document.getElementById("shift").value
    let direction = document.getElementById("direction").value
    let userInput = document.getElementById("input").value
    let eord = document.getElementById("eord").value
    let output = ""
    //iterating the user's input
    for (i of userInput){
        if (i== " "){output += i}
        else if (eord == "Encrypt"){
            if (direction == "Right") {
                if (shift =="0"){
                    output += i
                }
                else if (shift =="1"){
                    if (i =="a"){i="b"}
                    else if (i == "b"){i = "c"}
                    else if (i == "c"){i = "d"}
                    else if (i == "d"){i = "e"}
                    else if (i == "e"){i = "f"}
                    else if (i == "f"){i = "g"}
                    else if (i == "g"){i = "h"}
                    else if (i == "h"){i = "i"}
                    else if (i == "i"){i = "j"}
                    else if (i == "j"){i = "k"}
                    else if (i == "k"){i = "l"}
                    else if (i == "l"){i = "m"}
                    else if (i == "m"){i = "n"}
                    else if (i == "n"){i = "o"}
                    else if (i == "o"){i = "p"}
                    else if (i == "p"){i = "q"}
                    else if (i == "q"){i = "r"}
                    else if (i == "r"){i = "s"}
                    else if (i == "s"){i = "t"}
                    else if (i == "t"){i = "u"}
                    else if (i == "u"){i = "v"}
                    else if (i == "v"){i = "w"}
                    else if (i == "w"){i = "x"}
                    else if (i == "x"){i = "y"}
                    else if (i == "y"){i = "z"}
                    else if (i == "z"){i = "a"}
                    output += i
                   
                }
                else if (shift == "2") {
                    if (i =="a"){i="c"}
                    else if (i == "b"){i = "d"}
                    else if (i == "c"){i = "e"}
                    else if (i == "d"){i = "f"}
                    else if (i == "e"){i = "g"}
                    else if (i == "f"){i = "h"}
                    else if (i == "g"){i = "i"}
                    else if (i == "h"){i = "j"}
                    else if (i == "i"){i = "k"}
                    else if (i == "j"){i = "l"}
                    else if (i == "k"){i = "m"}
                    else if (i == "l"){i = "n"}
                    else if (i == "m"){i = "o"}
                    else if (i == "n"){i = "p"}
                    else if (i == "o"){i = "q"}
                    else if (i == "p"){i = "r"}
                    else if (i == "q"){i = "s"}
                    else if (i == "r"){i = "t"}
                    else if (i == "s"){i = "u"}
                    else if (i == "t"){i = "v"}
                    else if (i == "u"){i = "w"}
                    else if (i == "v"){i = "x"}
                    else if (i == "w"){i = "y"}
                    else if (i == "x"){i = "z"}
                    else if (i == "y"){i = "a"}
                    else if (i == "z"){i = "b"}
                    output += i
 
                }
                else if (shift == "3"){
                    if (i =="a"){i="d"}
                    else if (i == "b"){i = "e"}
                    else if (i == "c"){i = "f"}
                    else if (i == "d"){i = "g"}
                    else if (i == "e"){i = "h"}
                    else if (i == "f"){i = "i"}
                    else if (i == "g"){i = "j"}
                    else if (i == "h"){i = "k"}
                    else if (i == "i"){i = "l"}
                    else if (i == "j"){i = "m"}
                    else if (i == "k"){i = "n"}
                    else if (i == "l"){i = "o"}
                    else if (i == "m"){i = "p"}
                    else if (i == "n"){i = "q"}
                    else if (i == "o"){i = "r"}
                    else if (i == "p"){i = "s"}
                    else if (i == "q"){i = "t"}
                    else if (i == "r"){i = "u"}
                    else if (i == "s"){i = "v"}
                    else if (i == "t"){i = "w"}
                    else if (i == "u"){i = "x"}
                    else if (i == "v"){i = "y"}
                    else if (i == "w"){i = "z"}
                    else if (i == "x"){i = "a"}
                    else if (i == "y"){i = "b"}
                    else if (i == "z"){i = "c"}
                    output += i
                }
                else if (shift == "4"){
                    if (i =="a"){i="e"}
                    else if (i == "b"){i = "f"}
                    else if (i == "c"){i = "g"}
                    else if (i == "d"){i = "h"}
                    else if (i == "e"){i = "i"}
                    else if (i == "f"){i = "j"}
                    else if (i == "g"){i = "k"}
                    else if (i == "h"){i = "l"}
                    else if (i == "i"){i = "m"}
                    else if (i == "j"){i = "n"}
                    else if (i == "k"){i = "o"}
                    else if (i == "l"){i = "p"}
                    else if (i == "m"){i = "q"}
                    else if (i == "n"){i = "r"}
                    else if (i == "o"){i = "s"}
                    else if (i == "p"){i = "t"}
                    else if (i == "q"){i = "u"}
                    else if (i == "r"){i = "v"}
                    else if (i == "s"){i = "w"}
                    else if (i == "t"){i = "x"}
                    else if (i == "u"){i = "y"}
                    else if (i == "v"){i = "z"}
                    else if (i == "w"){i = "a"}
                    else if (i == "x"){i = "b"}
                    else if (i == "y"){i = "c"}
                    else if (i == "z"){i = "d"}
                    output += i
 
                }
 
                else if (shift == "5") {
                    if (i =="a"){i="f"}
                    else if (i == "b"){i = "g"}
                    else if (i == "c"){i = "h"}
                    else if (i == "d"){i = "i"}
                    else if (i == "e"){i = "j"}
                    else if (i == "f"){i = "k"}
                    else if (i == "g"){i = "l"}
                    else if (i == "h"){i = "m"}
                    else if (i == "i"){i = "n"}
                    else if (i == "j"){i = "o"}
                    else if (i == "k"){i = "p"}
                    else if (i == "l"){i = "q"}
                    else if (i == "m"){i = "r"}
                    else if (i == "n"){i = "s"}
                    else if (i == "o"){i = "t"}
                    else if (i == "p"){i = "u"}
                    else if (i == "q"){i = "v"}
                    else if (i == "r"){i = "w"}
                    else if (i == "s"){i = "x"}
                    else if (i == "t"){i = "y"}
                    else if (i == "u"){i = "z"}
                    else if (i == "v"){i = "a"}
                    else if (i == "w"){i = "b"}
                    else if (i == "x"){i = "c"}
                    else if (i == "y"){i = "d"}
                    else if (i == "z"){i = "e"}
                    output += i
 
                }

                else if (shift == "6") {
                    if (i =="a"){i="g"}
                    else if (i == "b"){i = "h"}
                    else if (i == "c"){i = "i"}
                    else if (i == "d"){i = "j"}
                    else if (i == "e"){i = "k"}
                    else if (i == "f"){i = "l"}
                    else if (i == "g"){i = "m"}
                    else if (i == "h"){i = "n"}
                    else if (i == "i"){i = "o"}
                    else if (i == "j"){i = "p"}
                    else if (i == "k"){i = "q"}
                    else if (i == "l"){i = "r"}
                    else if (i == "m"){i = "s"}
                    else if (i == "n"){i = "t"}
                    else if (i == "o"){i = "u"}
                    else if (i == "p"){i = "v"}
                    else if (i == "q"){i = "w"}
                    else if (i == "r"){i = "x"}
                    else if (i == "s"){i = "y"}
                    else if (i == "t"){i = "z"}
                    else if (i == "u"){i = "a"}
                    else if (i == "v"){i = "b"}
                    else if (i == "w"){i = "c"}
                    else if (i == "x"){i = "d"}
                    else if (i == "y"){i = "e"}
                    else if (i == "z"){i = "f"}
                    output += i

                }
                else if (shift == "7") {
                    if (i =="a"){i="h"}
                    else if (i == "b"){i = "i"}
                    else if (i == "c"){i = "j"}
                    else if (i == "d"){i = "k"}
                    else if (i == "e"){i = "l"}
                    else if (i == "f"){i = "m"}
                    else if (i == "g"){i = "n"}
                    else if (i == "h"){i = "o"}
                    else if (i == "i"){i = "p"}
                    else if (i == "j"){i = "q"}
                    else if (i == "k"){i = "r"}
                    else if (i == "l"){i = "s"}
                    else if (i == "m"){i = "t"}
                    else if (i == "n"){i = "u"}
                    else if (i == "o"){i = "v"}
                    else if (i == "p"){i = "w"}
                    else if (i == "q"){i = "x"}
                    else if (i == "r"){i = "y"}
                    else if (i == "s"){i = "z"}
                    else if (i == "t"){i = "a"}
                    else if (i == "u"){i = "b"}
                    else if (i == "v"){i = "c"}
                    else if (i == "w"){i = "d"}
                    else if (i == "x"){i = "e"}
                    else if (i == "y"){i = "f"}
                    else if (i == "z"){i = "g"}
                    output += i

                }   
                
                else if (shift == "8") {
                    if (i =="a"){i="i"}
                    else if (i == "b"){i = "j"}
                    else if (i == "c"){i = "k"}
                    else if (i == "d"){i = "l"}
                    else if (i == "e"){i = "m"}
                    else if (i == "f"){i = "n"}
                    else if (i == "g"){i = "o"}
                    else if (i == "h"){i = "p"}
                    else if (i == "i"){i = "q"}
                    else if (i == "j"){i = "r"}
                    else if (i == "k"){i = "s"}
                    else if (i == "l"){i = "t"}
                    else if (i == "m"){i = "u"}
                    else if (i == "n"){i = "v"}
                    else if (i == "o"){i = "w"}
                    else if (i == "p"){i = "x"}
                    else if (i == "q"){i = "y"}
                    else if (i == "r"){i = "z"}
                    else if (i == "s"){i = "a"}
                    else if (i == "t"){i = "b"}
                    else if (i == "u"){i = "c"}
                    else if (i == "v"){i = "d"}
                    else if (i == "w"){i = "e"}
                    else if (i == "x"){i = "f"}
                    else if (i == "y"){i = "g"}
                    else if (i == "z"){i = "h"}
                    output += i
                }
        
                else if (shift == "9") {
                    if (i == "a") { i = "j" }
                    else if (i == "b") { i = "k" }
                    else if (i == "c") { i = "l" }
                    else if (i == "d") { i = "m" }
                    else if (i == "e") { i = "n" }
                    else if (i == "f") { i = "o" }
                    else if (i == "g") { i = "p" }
                    else if (i == "h") { i = "q" }
                    else if (i == "i") { i = "r" }
                    else if (i == "j") { i = "s" }
                    else if (i == "k") { i = "t" }
                    else if (i == "l") { i = "u" }
                    else if (i == "m") { i = "v" }
                    else if (i == "n") { i = "w" }
                    else if (i == "o") { i = "x" }
                    else if (i == "p") { i = "y" }
                    else if (i == "q") { i = "z" }
                    else if (i == "r") { i = "a" }
                    else if (i == "s") { i = "b" }
                    else if (i == "t") { i = "c" }
                    else if (i == "u") { i = "d" }
                    else if (i == "v") { i = "e" }
                    else if (i == "w") { i = "f" }
                    else if (i == "x") { i = "g" }
                    else if (i == "y") { i = "h" }
                    else if (i == "z") { i = "i" }                    
                    output += i

                }
                else if (shift == "10") {
                    if (i == "a") { i = "k" }
                    else if (i == "b") { i = "l" }
                    else if (i == "c") { i = "m" }
                    else if (i == "d") { i = "n" }
                    else if (i == "e") { i = "o" }
                    else if (i == "f") { i = "p" }
                    else if (i == "g") { i = "q" }
                    else if (i == "h") { i = "r" }
                    else if (i == "i") { i = "s" }
                    else if (i == "j") { i = "t" }
                    else if (i == "k") { i = "u" }
                    else if (i == "l") { i = "v" }
                    else if (i == "m") { i = "w" }
                    else if (i == "n") { i = "x" }
                    else if (i == "o") { i = "y" }
                    else if (i == "p") { i = "z" }
                    else if (i == "q") { i = "a" }
                    else if (i == "r") { i = "b" }
                    else if (i == "s") { i = "c" }
                    else if (i == "t") { i = "d" }
                    else if (i == "u") { i = "e" }
                    else if (i == "v") { i = "f" }
                    else if (i == "w") { i = "g" }
                    else if (i == "x") { i = "h" }
                    else if (i == "y") { i = "i" }
                    else if (i == "z") { i = "j" }
                    output += i

                }

                else if (shift == "11") {
                    if (i == "a") { i = "l" }
                    else if (i == "b") { i = "m" }
                    else if (i == "c") { i = "n" }
                    else if (i == "d") { i = "o" }
                    else if (i == "e") { i = "p" }
                    else if (i == "f") { i = "q" }
                    else if (i == "g") { i = "r" }
                    else if (i == "h") { i = "s" }
                    else if (i == "i") { i = "t" }
                    else if (i == "j") { i = "u" }
                    else if (i == "k") { i = "v" }
                    else if (i == "l") { i = "w" }
                    else if (i == "m") { i = "x" }
                    else if (i == "n") { i = "y" }
                    else if (i == "o") { i = "z" }
                    else if (i == "p") { i = "a" }
                    else if (i == "q") { i = "b" }
                    else if (i == "r") { i = "c" }
                    else if (i == "s") { i = "d" }
                    else if (i == "t") { i = "e" }
                    else if (i == "u") { i = "f" }
                    else if (i == "v") { i = "g" }
                    else if (i == "w") { i = "h" }
                    else if (i == "x") { i = "i" }
                    else if (i == "y") { i = "j" }
                    else if (i == "z") { i = "k" }
                    output += i
                }

                else if (shift == "12") {
                    if (i == "a") { i = "m" }
                    else if (i == "b") { i = "n" }
                    else if (i == "c") { i = "o" }
                    else if (i == "d") { i = "p" }
                    else if (i == "e") { i = "q" }
                    else if (i == "f") { i = "r" }
                    else if (i == "g") { i = "s" }
                    else if (i == "h") { i = "t" }
                    else if (i == "i") { i = "u" }
                    else if (i == "j") { i = "v" }
                    else if (i == "k") { i = "w" }
                    else if (i == "l") { i = "x" }
                    else if (i == "m") { i = "y" }
                    else if (i == "n") { i = "z" }
                    else if (i == "o") { i = "a" }
                    else if (i == "p") { i = "b" }
                    else if (i == "q") { i = "c" }
                    else if (i == "r") { i = "d" }
                    else if (i == "s") { i = "e" }
                    else if (i == "t") { i = "f" }
                    else if (i == "u") { i = "g" }
                    else if (i == "v") { i = "h" }
                    else if (i == "w") { i = "i" }
                    else if (i == "x") { i = "j" }
                    else if (i == "y") { i = "k" }
                    else if (i == "z") { i = "l" }
                    output += i

                }

                else if (shift == "13") {
                    if (i == "a") { i = "n" }
                    else if (i == "b") { i = "o" }
                    else if (i == "c") { i = "p" }
                    else if (i == "d") { i = "q" }
                    else if (i == "e") { i = "r" }
                    else if (i == "f") { i = "s" }
                    else if (i == "g") { i = "t" }
                    else if (i == "h") { i = "u" }
                    else if (i == "i") { i = "v" }
                    else if (i == "j") { i = "w" }
                    else if (i == "k") { i = "x" }
                    else if (i == "l") { i = "y" }
                    else if (i == "m") { i = "z" }
                    else if (i == "n") { i = "a" }
                    else if (i == "o") { i = "b" }
                    else if (i == "p") { i = "c" }
                    else if (i == "q") { i = "d" }
                    else if (i == "r") { i = "e" }
                    else if (i == "s") { i = "f" }
                    else if (i == "t") { i = "g" }
                    else if (i == "u") { i = "h" }
                    else if (i == "v") { i = "i" }
                    else if (i == "w") { i = "j" }
                    else if (i == "x") { i = "k" }
                    else if (i == "y") { i = "l" }
                    else if (i == "z") { i = "m" }
                    output += i

                }

                else if (shift == "14") {
                    if (i == "a") { i = "o" }
                    else if (i == "b") { i = "p" }
                    else if (i == "c") { i = "q" }
                    else if (i == "d") { i = "r" }
                    else if (i == "e") { i = "s" }
                    else if (i == "f") { i = "t" }
                    else if (i == "g") { i = "u" }
                    else if (i == "h") { i = "v" }
                    else if (i == "i") { i = "w" }
                    else if (i == "j") { i = "x" }
                    else if (i == "k") { i = "y" }
                    else if (i == "l") { i = "z" }
                    else if (i == "m") { i = "a" }
                    else if (i == "n") { i = "b" }
                    else if (i == "o") { i = "c" }
                    else if (i == "p") { i = "d" }
                    else if (i == "q") { i = "e" }
                    else if (i == "r") { i = "f" }
                    else if (i == "s") { i = "g" }
                    else if (i == "t") { i = "h" }
                    else if (i == "u") { i = "i" }
                    else if (i == "v") { i = "j" }
                    else if (i == "w") { i = "k" }
                    else if (i == "x") { i = "l" }
                    else if (i == "y") { i = "m" }
                    else if (i == "z") { i = "n" }
                    output += i

                }

                else if (shift == "15") {
                    if (i == "a") { i = "p" }
                    else if (i == "b") { i = "q" }
                    else if (i == "c") { i = "r" }
                    else if (i == "d") { i = "s" }
                    else if (i == "e") { i = "t" }
                    else if (i == "f") { i = "u" }
                    else if (i == "g") { i = "v" }
                    else if (i == "h") { i = "w" }
                    else if (i == "i") { i = "x" }
                    else if (i == "j") { i = "y" }
                    else if (i == "k") { i = "z" }
                    else if (i == "l") { i = "a" }
                    else if (i == "m") { i = "b" }
                    else if (i == "n") { i = "c" }
                    else if (i == "o") { i = "d" }
                    else if (i == "p") { i = "e" }
                    else if (i == "q") { i = "f" }
                    else if (i == "r") { i = "g" }
                    else if (i == "s") { i = "h" }
                    else if (i == "t") { i = "i" }
                    else if (i == "u") { i = "j" }
                    else if (i == "v") { i = "k" }
                    else if (i == "w") { i = "l" }
                    else if (i == "x") { i = "m" }
                    else if (i == "y") { i = "n" }
                    else if (i == "z") { i = "o" }
                    output += i

                }

                else if (shift == "16") {
                    if (i == "a") { i = "q" }
                    else if (i == "b") { i = "r" }
                    else if (i == "c") { i = "s" }
                    else if (i == "d") { i = "t" }
                    else if (i == "e") { i = "u" }
                    else if (i == "f") { i = "v" }
                    else if (i == "g") { i = "w" }
                    else if (i == "h") { i = "x" }
                    else if (i == "i") { i = "y" }
                    else if (i == "j") { i = "z" }
                    else if (i == "k") { i = "a" }
                    else if (i == "l") { i = "b" }
                    else if (i == "m") { i = "c" }
                    else if (i == "n") { i = "d" }
                    else if (i == "o") { i = "e" }
                    else if (i == "p") { i = "f" }
                    else if (i == "q") { i = "g" }
                    else if (i == "r") { i = "h" }
                    else if (i == "s") { i = "i" }
                    else if (i == "t") { i = "j" }
                    else if (i == "u") { i = "k" }
                    else if (i == "v") { i = "l" }
                    else if (i == "w") { i = "m" }
                    else if (i == "x") { i = "n" }
                    else if (i == "y") { i = "o" }
                    else if (i == "z") { i = "p" }
                    output += i

                }

                else if (shift == "17") {
                    if (i == "a") { i = "r" }
                    else if (i == "b") { i = "s" }
                    else if (i == "c") { i = "t" }
                    else if (i == "d") { i = "u" }
                    else if (i == "e") { i = "v" }
                    else if (i == "f") { i = "w" }
                    else if (i == "g") { i = "x" }
                    else if (i == "h") { i = "y" }
                    else if (i == "i") { i = "z" }
                    else if (i == "j") { i = "a" }
                    else if (i == "k") { i = "b" }
                    else if (i == "l") { i = "c" }
                    else if (i == "m") { i = "d" }
                    else if (i == "n") { i = "e" }
                    else if (i == "o") { i = "f" }
                    else if (i == "p") { i = "g" }
                    else if (i == "q") { i = "h" }
                    else if (i == "r") { i = "i" }
                    else if (i == "s") { i = "j" }
                    else if (i == "t") { i = "k" }
                    else if (i == "u") { i = "l" }
                    else if (i == "v") { i = "m" }
                    else if (i == "w") { i = "n" }
                    else if (i == "x") { i = "o" }
                    else if (i == "y") { i = "p" }
                    else if (i == "z") { i = "q" }

                    output += i

                }

                else if (shift == "18") {
                    if (i == "a") { i = "s" }
                    else if (i == "b") { i = "t" }
                    else if (i == "c") { i = "u" }
                    else if (i == "d") { i = "v" }
                    else if (i == "e") { i = "w" }
                    else if (i == "f") { i = "x" }
                    else if (i == "g") { i = "y" }
                    else if (i == "h") { i = "z" }
                    else if (i == "i") { i = "a" }
                    else if (i == "j") { i = "b" }
                    else if (i == "k") { i = "c" }
                    else if (i == "l") { i = "d" }
                    else if (i == "m") { i = "e" }
                    else if (i == "n") { i = "f" }
                    else if (i == "o") { i = "g" }
                    else if (i == "p") { i = "h" }
                    else if (i == "q") { i = "i" }
                    else if (i == "r") { i = "j" }
                    else if (i == "s") { i = "k" }
                    else if (i == "t") { i = "l" }
                    else if (i == "u") { i = "m" }
                    else if (i == "v") { i = "n" }
                    else if (i == "w") { i = "o" }
                    else if (i == "x") { i = "p" }
                    else if (i == "y") { i = "q" }
                    else if (i == "z") { i = "r" }

                    output += i

                }
                else if (shift == "19") {

                    if (i == "a") { i = "t" }
                    else if (i == "b") { i = "u" }
                    else if (i == "c") { i = "v" }
                    else if (i == "d") { i = "w" }
                    else if (i == "e") { i = "x" }
                    else if (i == "f") { i = "y" }
                    else if (i == "g") { i = "z" }
                    else if (i == "h") { i = "a" }
                    else if (i == "i") { i = "b" }
                    else if (i == "j") { i = "c" }
                    else if (i == "k") { i = "d" }
                    else if (i == "l") { i = "e" }
                    else if (i == "m") { i = "f" }
                    else if (i == "n") { i = "g" }
                    else if (i == "o") { i = "h" }
                    else if (i == "p") { i = "i" }
                    else if (i == "q") { i = "j" }
                    else if (i == "r") { i = "k" }
                    else if (i == "s") { i = "l" }
                    else if (i == "t") { i = "m" }
                    else if (i == "u") { i = "n" }
                    else if (i == "v") { i = "o" }
                    else if (i == "w") { i = "p" }
                    else if (i == "x") { i = "q" }
                    else if (i == "y") { i = "r" }
                    else if (i == "z") { i = "s" }

                    output += i

                }
                else if (shift == "20") {
                    if (i == "a") { i = "u" }
                else if (i == "b") { i = "v" }
                else if (i == "c") { i = "w" }
                else if (i == "d") { i = "x" }
                else if (i == "e") { i = "y" }
                else if (i == "f") { i = "z" }
                else if (i == "g") { i = "a" }
                else if (i == "h") { i = "b" }
                else if (i == "i") { i = "c" }
                else if (i == "j") { i = "d" }
                else if (i == "k") { i = "e" }
                else if (i == "l") { i = "f" }
                else if (i == "m") { i = "g" }
                else if (i == "n") { i = "h" }
                else if (i == "o") { i = "i" }
                else if (i == "p") { i = "j" }
                else if (i == "q") { i = "k" }
                else if (i == "r") { i = "l" }
                else if (i == "s") { i = "m" }
                else if (i == "t") { i = "n" }
                else if (i == "u") { i = "o" }
                else if (i == "v") { i = "p" }
                else if (i == "w") { i = "q" }
                else if (i == "x") { i = "r" }
                else if (i == "y") { i = "s" }
                else if (i == "z") { i = "t" }

                    output += i

                }
                else if (shift == "21") {
                    if (i == "a") { i = "v" }
                    else if (i == "b") { i = "w" }
                    else if (i == "c") { i = "x" }
                    else if (i == "d") { i = "y" }
                    else if (i == "e") { i = "z" }
                    else if (i == "f") { i = "a" }
                    else if (i == "g") { i = "b" }
                    else if (i == "h") { i = "c" }
                    else if (i == "i") { i = "d" }
                    else if (i == "j") { i = "e" }
                    else if (i == "k") { i = "f" }
                    else if (i == "l") { i = "g" }
                    else if (i == "m") { i = "h" }
                    else if (i == "n") { i = "i" }
                    else if (i == "o") { i = "j" }
                    else if (i == "p") { i = "k" }
                    else if (i == "q") { i = "l" }
                    else if (i == "r") { i = "m" }
                    else if (i == "s") { i = "n" }
                    else if (i == "t") { i = "o" }
                    else if (i == "u") { i = "p" }
                    else if (i == "v") { i = "q" }
                    else if (i == "w") { i = "r" }
                    else if (i == "x") { i = "s" }
                    else if (i == "y") { i = "t" }
                    else if (i == "z") { i = "u" }

                    output += i

                }
                else if (shift == "22") {
                    if (i == "a") { i = "w" }
                    else if (i == "b") { i = "x" }
                    else if (i == "c") { i = "y" }
                    else if (i == "d") { i = "z" }
                    else if (i == "e") { i = "a" }
                    else if (i == "f") { i = "b" }
                    else if (i == "g") { i = "c" }
                    else if (i == "h") { i = "d" }
                    else if (i == "i") { i = "e" }
                    else if (i == "j") { i = "f" }
                    else if (i == "k") { i = "g" }
                    else if (i == "l") { i = "h" }
                    else if (i == "m") { i = "i" }
                    else if (i == "n") { i = "j" }
                    else if (i == "o") { i = "k" }
                    else if (i == "p") { i = "l" }
                    else if (i == "q") { i = "m" }
                    else if (i == "r") { i = "n" }
                    else if (i == "s") { i = "o" }
                    else if (i == "t") { i = "p" }
                    else if (i == "u") { i = "q" }
                    else if (i == "v") { i = "r" }
                    else if (i == "w") { i = "s" }
                    else if (i == "x") { i = "t" }
                    else if (i == "y") { i = "u" }
                    else if (i == "z") { i = "v" }

                    output += i

                }
                else if (shift == "23") {
                    if (i == "a") { i = "x" }
                    else if (i == "b") { i = "y" }
                    else if (i == "c") { i = "z" }
                    else if (i == "d") { i = "a" }
                    else if (i == "e") { i = "b" }
                    else if (i == "f") { i = "c" }
                    else if (i == "g") { i = "d" }
                    else if (i == "h") { i = "e" }
                    else if (i == "i") { i = "f" }
                    else if (i == "j") { i = "g" }
                    else if (i == "k") { i = "h" }
                    else if (i == "l") { i = "i" }
                    else if (i == "m") { i = "j" }
                    else if (i == "n") { i = "k" }
                    else if (i == "o") { i = "l" }
                    else if (i == "p") { i = "m" }
                    else if (i == "q") { i = "n" }
                    else if (i == "r") { i = "o" }
                    else if (i == "s") { i = "p" }
                    else if (i == "t") { i = "q" }
                    else if (i == "u") { i = "r" }
                    else if (i == "v") { i = "s" }
                    else if (i == "w") { i = "t" }
                    else if (i == "x") { i = "u" }
                    else if (i == "y") { i = "v" }
                    else if (i == "z") { i = "w" }

                    output += i

                }
                else if (shift == "24") {
                    if (i == "a") { i = "y" }
                    else if (i == "b") { i = "z" }
                    else if (i == "c") { i = "a" }
                    else if (i == "d") { i = "b" }
                    else if (i == "e") { i = "c" }
                    else if (i == "f") { i = "d" }
                    else if (i == "g") { i = "e" }
                    else if (i == "h") { i = "f" }
                    else if (i == "i") { i = "g" }
                    else if (i == "j") { i = "h" }
                    else if (i == "k") { i = "i" }
                    else if (i == "l") { i = "j" }
                    else if (i == "m") { i = "k" }
                    else if (i == "n") { i = "l" }
                    else if (i == "o") { i = "m" }
                    else if (i == "p") { i = "n" }
                    else if (i == "q") { i = "o" }
                    else if (i == "r") { i = "p" }
                    else if (i == "s") { i = "q" }
                    else if (i == "t") { i = "r" }
                    else if (i == "u") { i = "s" }
                    else if (i == "v") { i = "t" }
                    else if (i == "w") { i = "u" }
                    else if (i == "x") { i = "v" }
                    else if (i == "y") { i = "w" }
                    else if (i == "z") { i = "x" }

                    output += i

                }
                else if (shift == "25") {
                    if (i == "a") { i = "z" }
                    else if (i == "b") { i = "a" }
                    else if (i == "c") { i = "b" }
                    else if (i == "d") { i = "c" }
                    else if (i == "e") { i = "d" }
                    else if (i == "f") { i = "e" }
                    else if (i == "g") { i = "f" }
                    else if (i == "h") { i = "g" }
                    else if (i == "i") { i = "h" }
                    else if (i == "j") { i = "i" }
                    else if (i == "k") { i = "j" }
                    else if (i == "l") { i = "k" }
                    else if (i == "m") { i = "l" }
                    else if (i == "n") { i = "m" }
                    else if (i == "o") { i = "n" }
                    else if (i == "p") { i = "o" }
                    else if (i == "q") { i = "p" }
                    else if (i == "r") { i = "q" }
                    else if (i == "s") { i = "r" }
                    else if (i == "t") { i = "s" }
                    else if (i == "u") { i = "t" }
                    else if (i == "v") { i = "u" }
                    else if (i == "w") { i = "v" }
                    else if (i == "x") { i = "w" }
                    else if (i == "y") { i = "x" }
                    else if (i == "z") { i = "y" }

                    output += i

                }
        
               
            }

            if (direction == "Left") {
                if (shift =="0"){
                    output += i
                }
                else if (shift =="25"){
                    if (i =="a"){i="b"}
                    else if (i == "b"){i = "c"}
                    else if (i == "c"){i = "d"}
                    else if (i == "d"){i = "e"}
                    else if (i == "e"){i = "f"}
                    else if (i == "f"){i = "g"}
                    else if (i == "g"){i = "h"}
                    else if (i == "h"){i = "i"}
                    else if (i == "i"){i = "j"}
                    else if (i == "j"){i = "k"}
                    else if (i == "k"){i = "l"}
                    else if (i == "l"){i = "m"}
                    else if (i == "m"){i = "n"}
                    else if (i == "n"){i = "o"}
                    else if (i == "o"){i = "p"}
                    else if (i == "p"){i = "q"}
                    else if (i == "q"){i = "r"}
                    else if (i == "r"){i = "s"}
                    else if (i == "s"){i = "t"}
                    else if (i == "t"){i = "u"}
                    else if (i == "u"){i = "v"}
                    else if (i == "v"){i = "w"}
                    else if (i == "w"){i = "x"}
                    else if (i == "x"){i = "y"}
                    else if (i == "y"){i = "z"}
                    else if (i == "z"){i = "a"}
                    output += i
                   
                }
                else if (shift == "24") {
                    if (i =="a"){i="c"}
                    else if (i == "b"){i = "d"}
                    else if (i == "c"){i = "e"}
                    else if (i == "d"){i = "f"}
                    else if (i == "e"){i = "g"}
                    else if (i == "f"){i = "h"}
                    else if (i == "g"){i = "i"}
                    else if (i == "h"){i = "j"}
                    else if (i == "i"){i = "k"}
                    else if (i == "j"){i = "l"}
                    else if (i == "k"){i = "m"}
                    else if (i == "l"){i = "n"}
                    else if (i == "m"){i = "o"}
                    else if (i == "n"){i = "p"}
                    else if (i == "o"){i = "q"}
                    else if (i == "p"){i = "r"}
                    else if (i == "q"){i = "s"}
                    else if (i == "r"){i = "t"}
                    else if (i == "s"){i = "u"}
                    else if (i == "t"){i = "v"}
                    else if (i == "u"){i = "w"}
                    else if (i == "v"){i = "x"}
                    else if (i == "w"){i = "y"}
                    else if (i == "x"){i = "z"}
                    else if (i == "y"){i = "a"}
                    else if (i == "z"){i = "b"}
                    output += i
 
                }
                else if (shift == "23"){
                    if (i =="a"){i="d"}
                    else if (i == "b"){i = "e"}
                    else if (i == "c"){i = "f"}
                    else if (i == "d"){i = "g"}
                    else if (i == "e"){i = "h"}
                    else if (i == "f"){i = "i"}
                    else if (i == "g"){i = "j"}
                    else if (i == "h"){i = "k"}
                    else if (i == "i"){i = "l"}
                    else if (i == "j"){i = "m"}
                    else if (i == "k"){i = "n"}
                    else if (i == "l"){i = "o"}
                    else if (i == "m"){i = "p"}
                    else if (i == "n"){i = "q"}
                    else if (i == "o"){i = "r"}
                    else if (i == "p"){i = "s"}
                    else if (i == "q"){i = "t"}
                    else if (i == "r"){i = "u"}
                    else if (i == "s"){i = "v"}
                    else if (i == "t"){i = "w"}
                    else if (i == "u"){i = "x"}
                    else if (i == "v"){i = "y"}
                    else if (i == "w"){i = "z"}
                    else if (i == "x"){i = "a"}
                    else if (i == "y"){i = "b"}
                    else if (i == "z"){i = "c"}
                    output += i
                }
                else if (shift == "22"){
                    if (i =="a"){i="e"}
                    else if (i == "b"){i = "f"}
                    else if (i == "c"){i = "g"}
                    else if (i == "d"){i = "h"}
                    else if (i == "e"){i = "i"}
                    else if (i == "f"){i = "j"}
                    else if (i == "g"){i = "k"}
                    else if (i == "h"){i = "l"}
                    else if (i == "i"){i = "m"}
                    else if (i == "j"){i = "n"}
                    else if (i == "k"){i = "o"}
                    else if (i == "l"){i = "p"}
                    else if (i == "m"){i = "q"}
                    else if (i == "n"){i = "r"}
                    else if (i == "o"){i = "s"}
                    else if (i == "p"){i = "t"}
                    else if (i == "q"){i = "u"}
                    else if (i == "r"){i = "v"}
                    else if (i == "s"){i = "w"}
                    else if (i == "t"){i = "x"}
                    else if (i == "u"){i = "y"}
                    else if (i == "v"){i = "z"}
                    else if (i == "w"){i = "a"}
                    else if (i == "x"){i = "b"}
                    else if (i == "y"){i = "c"}
                    else if (i == "z"){i = "d"}
                    output += i
 
                }
 
                else if (shift == "21") {
                    if (i =="a"){i="f"}
                    else if (i == "b"){i = "g"}
                    else if (i == "c"){i = "h"}
                    else if (i == "d"){i = "i"}
                    else if (i == "e"){i = "j"}
                    else if (i == "f"){i = "k"}
                    else if (i == "g"){i = "l"}
                    else if (i == "h"){i = "m"}
                    else if (i == "i"){i = "n"}
                    else if (i == "j"){i = "o"}
                    else if (i == "k"){i = "p"}
                    else if (i == "l"){i = "q"}
                    else if (i == "m"){i = "r"}
                    else if (i == "n"){i = "s"}
                    else if (i == "o"){i = "t"}
                    else if (i == "p"){i = "u"}
                    else if (i == "q"){i = "v"}
                    else if (i == "r"){i = "w"}
                    else if (i == "s"){i = "x"}
                    else if (i == "t"){i = "y"}
                    else if (i == "u"){i = "z"}
                    else if (i == "v"){i = "a"}
                    else if (i == "w"){i = "b"}
                    else if (i == "x"){i = "c"}
                    else if (i == "y"){i = "d"}
                    else if (i == "z"){i = "e"}
                    output += i
 
                }

                else if (shift == "20") {
                    if (i =="a"){i="g"}
                    else if (i == "b"){i = "h"}
                    else if (i == "c"){i = "i"}
                    else if (i == "d"){i = "j"}
                    else if (i == "e"){i = "k"}
                    else if (i == "f"){i = "l"}
                    else if (i == "g"){i = "m"}
                    else if (i == "h"){i = "n"}
                    else if (i == "i"){i = "o"}
                    else if (i == "j"){i = "p"}
                    else if (i == "k"){i = "q"}
                    else if (i == "l"){i = "r"}
                    else if (i == "m"){i = "s"}
                    else if (i == "n"){i = "t"}
                    else if (i == "o"){i = "u"}
                    else if (i == "p"){i = "v"}
                    else if (i == "q"){i = "w"}
                    else if (i == "r"){i = "x"}
                    else if (i == "s"){i = "y"}
                    else if (i == "t"){i = "z"}
                    else if (i == "u"){i = "a"}
                    else if (i == "v"){i = "b"}
                    else if (i == "w"){i = "c"}
                    else if (i == "x"){i = "d"}
                    else if (i == "y"){i = "e"}
                    else if (i == "z"){i = "f"}
                    output += i

                }
                else if (shift == "19") {
                    if (i =="a"){i="h"}
                    else if (i == "b"){i = "i"}
                    else if (i == "c"){i = "j"}
                    else if (i == "d"){i = "k"}
                    else if (i == "e"){i = "l"}
                    else if (i == "f"){i = "m"}
                    else if (i == "g"){i = "n"}
                    else if (i == "h"){i = "o"}
                    else if (i == "i"){i = "p"}
                    else if (i == "j"){i = "q"}
                    else if (i == "k"){i = "r"}
                    else if (i == "l"){i = "s"}
                    else if (i == "m"){i = "t"}
                    else if (i == "n"){i = "u"}
                    else if (i == "o"){i = "v"}
                    else if (i == "p"){i = "w"}
                    else if (i == "q"){i = "x"}
                    else if (i == "r"){i = "y"}
                    else if (i == "s"){i = "z"}
                    else if (i == "t"){i = "a"}
                    else if (i == "u"){i = "b"}
                    else if (i == "v"){i = "c"}
                    else if (i == "w"){i = "d"}
                    else if (i == "x"){i = "e"}
                    else if (i == "y"){i = "f"}
                    else if (i == "z"){i = "g"}
                    output += i

                }   
                
                else if (shift == "18") {
                    if (i =="a"){i="i"}
                    else if (i == "b"){i = "j"}
                    else if (i == "c"){i = "k"}
                    else if (i == "d"){i = "l"}
                    else if (i == "e"){i = "m"}
                    else if (i == "f"){i = "n"}
                    else if (i == "g"){i = "o"}
                    else if (i == "h"){i = "p"}
                    else if (i == "i"){i = "q"}
                    else if (i == "j"){i = "r"}
                    else if (i == "k"){i = "s"}
                    else if (i == "l"){i = "t"}
                    else if (i == "m"){i = "u"}
                    else if (i == "n"){i = "v"}
                    else if (i == "o"){i = "w"}
                    else if (i == "p"){i = "x"}
                    else if (i == "q"){i = "y"}
                    else if (i == "r"){i = "z"}
                    else if (i == "s"){i = "a"}
                    else if (i == "t"){i = "b"}
                    else if (i == "u"){i = "c"}
                    else if (i == "v"){i = "d"}
                    else if (i == "w"){i = "e"}
                    else if (i == "x"){i = "f"}
                    else if (i == "y"){i = "g"}
                    else if (i == "z"){i = "h"}
                    output += i
                }
        
                else if (shift == "17") {
                    if (i == "a") { i = "j" }
                    else if (i == "b") { i = "k" }
                    else if (i == "c") { i = "l" }
                    else if (i == "d") { i = "m" }
                    else if (i == "e") { i = "n" }
                    else if (i == "f") { i = "o" }
                    else if (i == "g") { i = "p" }
                    else if (i == "h") { i = "q" }
                    else if (i == "i") { i = "r" }
                    else if (i == "j") { i = "s" }
                    else if (i == "k") { i = "t" }
                    else if (i == "l") { i = "u" }
                    else if (i == "m") { i = "v" }
                    else if (i == "n") { i = "w" }
                    else if (i == "o") { i = "x" }
                    else if (i == "p") { i = "y" }
                    else if (i == "q") { i = "z" }
                    else if (i == "r") { i = "a" }
                    else if (i == "s") { i = "b" }
                    else if (i == "t") { i = "c" }
                    else if (i == "u") { i = "d" }
                    else if (i == "v") { i = "e" }
                    else if (i == "w") { i = "f" }
                    else if (i == "x") { i = "g" }
                    else if (i == "y") { i = "h" }
                    else if (i == "z") { i = "i" }                    
                    output += i

                }
                else if (shift == "16") {
                    if (i == "a") { i = "k" }
                    else if (i == "b") { i = "l" }
                    else if (i == "c") { i = "m" }
                    else if (i == "d") { i = "n" }
                    else if (i == "e") { i = "o" }
                    else if (i == "f") { i = "p" }
                    else if (i == "g") { i = "q" }
                    else if (i == "h") { i = "r" }
                    else if (i == "i") { i = "s" }
                    else if (i == "j") { i = "t" }
                    else if (i == "k") { i = "u" }
                    else if (i == "l") { i = "v" }
                    else if (i == "m") { i = "w" }
                    else if (i == "n") { i = "x" }
                    else if (i == "o") { i = "y" }
                    else if (i == "p") { i = "z" }
                    else if (i == "q") { i = "a" }
                    else if (i == "r") { i = "b" }
                    else if (i == "s") { i = "c" }
                    else if (i == "t") { i = "d" }
                    else if (i == "u") { i = "e" }
                    else if (i == "v") { i = "f" }
                    else if (i == "w") { i = "g" }
                    else if (i == "x") { i = "h" }
                    else if (i == "y") { i = "i" }
                    else if (i == "z") { i = "j" }
                    output += i

                }

                else if (shift == "15") {
                    if (i == "a") { i = "l" }
                    else if (i == "b") { i = "m" }
                    else if (i == "c") { i = "n" }
                    else if (i == "d") { i = "o" }
                    else if (i == "e") { i = "p" }
                    else if (i == "f") { i = "q" }
                    else if (i == "g") { i = "r" }
                    else if (i == "h") { i = "s" }
                    else if (i == "i") { i = "t" }
                    else if (i == "j") { i = "u" }
                    else if (i == "k") { i = "v" }
                    else if (i == "l") { i = "w" }
                    else if (i == "m") { i = "x" }
                    else if (i == "n") { i = "y" }
                    else if (i == "o") { i = "z" }
                    else if (i == "p") { i = "a" }
                    else if (i == "q") { i = "b" }
                    else if (i == "r") { i = "c" }
                    else if (i == "s") { i = "d" }
                    else if (i == "t") { i = "e" }
                    else if (i == "u") { i = "f" }
                    else if (i == "v") { i = "g" }
                    else if (i == "w") { i = "h" }
                    else if (i == "x") { i = "i" }
                    else if (i == "y") { i = "j" }
                    else if (i == "z") { i = "k" }
                    output += i
                }

                else if (shift == "14") {
                    if (i == "a") { i = "m" }
                    else if (i == "b") { i = "n" }
                    else if (i == "c") { i = "o" }
                    else if (i == "d") { i = "p" }
                    else if (i == "e") { i = "q" }
                    else if (i == "f") { i = "r" }
                    else if (i == "g") { i = "s" }
                    else if (i == "h") { i = "t" }
                    else if (i == "i") { i = "u" }
                    else if (i == "j") { i = "v" }
                    else if (i == "k") { i = "w" }
                    else if (i == "l") { i = "x" }
                    else if (i == "m") { i = "y" }
                    else if (i == "n") { i = "z" }
                    else if (i == "o") { i = "a" }
                    else if (i == "p") { i = "b" }
                    else if (i == "q") { i = "c" }
                    else if (i == "r") { i = "d" }
                    else if (i == "s") { i = "e" }
                    else if (i == "t") { i = "f" }
                    else if (i == "u") { i = "g" }
                    else if (i == "v") { i = "h" }
                    else if (i == "w") { i = "i" }
                    else if (i == "x") { i = "j" }
                    else if (i == "y") { i = "k" }
                    else if (i == "z") { i = "l" }
                    output += i

                }

                else if (shift == "13") {
                    if (i == "a") { i = "n" }
                    else if (i == "b") { i = "o" }
                    else if (i == "c") { i = "p" }
                    else if (i == "d") { i = "q" }
                    else if (i == "e") { i = "r" }
                    else if (i == "f") { i = "s" }
                    else if (i == "g") { i = "t" }
                    else if (i == "h") { i = "u" }
                    else if (i == "i") { i = "v" }
                    else if (i == "j") { i = "w" }
                    else if (i == "k") { i = "x" }
                    else if (i == "l") { i = "y" }
                    else if (i == "m") { i = "z" }
                    else if (i == "n") { i = "a" }
                    else if (i == "o") { i = "b" }
                    else if (i == "p") { i = "c" }
                    else if (i == "q") { i = "d" }
                    else if (i == "r") { i = "e" }
                    else if (i == "s") { i = "f" }
                    else if (i == "t") { i = "g" }
                    else if (i == "u") { i = "h" }
                    else if (i == "v") { i = "i" }
                    else if (i == "w") { i = "j" }
                    else if (i == "x") { i = "k" }
                    else if (i == "y") { i = "l" }
                    else if (i == "z") { i = "m" }
                    output += i

                }

                else if (shift == "12") {
                    if (i == "a") { i = "o" }
                    else if (i == "b") { i = "p" }
                    else if (i == "c") { i = "q" }
                    else if (i == "d") { i = "r" }
                    else if (i == "e") { i = "s" }
                    else if (i == "f") { i = "t" }
                    else if (i == "g") { i = "u" }
                    else if (i == "h") { i = "v" }
                    else if (i == "i") { i = "w" }
                    else if (i == "j") { i = "x" }
                    else if (i == "k") { i = "y" }
                    else if (i == "l") { i = "z" }
                    else if (i == "m") { i = "a" }
                    else if (i == "n") { i = "b" }
                    else if (i == "o") { i = "c" }
                    else if (i == "p") { i = "d" }
                    else if (i == "q") { i = "e" }
                    else if (i == "r") { i = "f" }
                    else if (i == "s") { i = "g" }
                    else if (i == "t") { i = "h" }
                    else if (i == "u") { i = "i" }
                    else if (i == "v") { i = "j" }
                    else if (i == "w") { i = "k" }
                    else if (i == "x") { i = "l" }
                    else if (i == "y") { i = "m" }
                    else if (i == "z") { i = "n" }
                    output += i

                }

                else if (shift == "11") {
                    if (i == "a") { i = "p" }
                    else if (i == "b") { i = "q" }
                    else if (i == "c") { i = "r" }
                    else if (i == "d") { i = "s" }
                    else if (i == "e") { i = "t" }
                    else if (i == "f") { i = "u" }
                    else if (i == "g") { i = "v" }
                    else if (i == "h") { i = "w" }
                    else if (i == "i") { i = "x" }
                    else if (i == "j") { i = "y" }
                    else if (i == "k") { i = "z" }
                    else if (i == "l") { i = "a" }
                    else if (i == "m") { i = "b" }
                    else if (i == "n") { i = "c" }
                    else if (i == "o") { i = "d" }
                    else if (i == "p") { i = "e" }
                    else if (i == "q") { i = "f" }
                    else if (i == "r") { i = "g" }
                    else if (i == "s") { i = "h" }
                    else if (i == "t") { i = "i" }
                    else if (i == "u") { i = "j" }
                    else if (i == "v") { i = "k" }
                    else if (i == "w") { i = "l" }
                    else if (i == "x") { i = "m" }
                    else if (i == "y") { i = "n" }
                    else if (i == "z") { i = "o" }
                    output += i

                }

                else if (shift == "10") {
                    if (i == "a") { i = "q" }
                    else if (i == "b") { i = "r" }
                    else if (i == "c") { i = "s" }
                    else if (i == "d") { i = "t" }
                    else if (i == "e") { i = "u" }
                    else if (i == "f") { i = "v" }
                    else if (i == "g") { i = "w" }
                    else if (i == "h") { i = "x" }
                    else if (i == "i") { i = "y" }
                    else if (i == "j") { i = "z" }
                    else if (i == "k") { i = "a" }
                    else if (i == "l") { i = "b" }
                    else if (i == "m") { i = "c" }
                    else if (i == "n") { i = "d" }
                    else if (i == "o") { i = "e" }
                    else if (i == "p") { i = "f" }
                    else if (i == "q") { i = "g" }
                    else if (i == "r") { i = "h" }
                    else if (i == "s") { i = "i" }
                    else if (i == "t") { i = "j" }
                    else if (i == "u") { i = "k" }
                    else if (i == "v") { i = "l" }
                    else if (i == "w") { i = "m" }
                    else if (i == "x") { i = "n" }
                    else if (i == "y") { i = "o" }
                    else if (i == "z") { i = "p" }
                    output += i

                }

                else if (shift == "9") {
                    if (i == "a") { i = "r" }
                    else if (i == "b") { i = "s" }
                    else if (i == "c") { i = "t" }
                    else if (i == "d") { i = "u" }
                    else if (i == "e") { i = "v" }
                    else if (i == "f") { i = "w" }
                    else if (i == "g") { i = "x" }
                    else if (i == "h") { i = "y" }
                    else if (i == "i") { i = "z" }
                    else if (i == "j") { i = "a" }
                    else if (i == "k") { i = "b" }
                    else if (i == "l") { i = "c" }
                    else if (i == "m") { i = "d" }
                    else if (i == "n") { i = "e" }
                    else if (i == "o") { i = "f" }
                    else if (i == "p") { i = "g" }
                    else if (i == "q") { i = "h" }
                    else if (i == "r") { i = "i" }
                    else if (i == "s") { i = "j" }
                    else if (i == "t") { i = "k" }
                    else if (i == "u") { i = "l" }
                    else if (i == "v") { i = "m" }
                    else if (i == "w") { i = "n" }
                    else if (i == "x") { i = "o" }
                    else if (i == "y") { i = "p" }
                    else if (i == "z") { i = "q" }

                    output += i

                }

                else if (shift == "8") {
                    if (i == "a") { i = "s" }
                    else if (i == "b") { i = "t" }
                    else if (i == "c") { i = "u" }
                    else if (i == "d") { i = "v" }
                    else if (i == "e") { i = "w" }
                    else if (i == "f") { i = "x" }
                    else if (i == "g") { i = "y" }
                    else if (i == "h") { i = "z" }
                    else if (i == "i") { i = "a" }
                    else if (i == "j") { i = "b" }
                    else if (i == "k") { i = "c" }
                    else if (i == "l") { i = "d" }
                    else if (i == "m") { i = "e" }
                    else if (i == "n") { i = "f" }
                    else if (i == "o") { i = "g" }
                    else if (i == "p") { i = "h" }
                    else if (i == "q") { i = "i" }
                    else if (i == "r") { i = "j" }
                    else if (i == "s") { i = "k" }
                    else if (i == "t") { i = "l" }
                    else if (i == "u") { i = "m" }
                    else if (i == "v") { i = "n" }
                    else if (i == "w") { i = "o" }
                    else if (i == "x") { i = "p" }
                    else if (i == "y") { i = "q" }
                    else if (i == "z") { i = "r" }

                    output += i

                }
                else if (shift == "7") {

                    if (i == "a") { i = "t" }
                    else if (i == "b") { i = "u" }
                    else if (i == "c") { i = "v" }
                    else if (i == "d") { i = "w" }
                    else if (i == "e") { i = "x" }
                    else if (i == "f") { i = "y" }
                    else if (i == "g") { i = "z" }
                    else if (i == "h") { i = "a" }
                    else if (i == "i") { i = "b" }
                    else if (i == "j") { i = "c" }
                    else if (i == "k") { i = "d" }
                    else if (i == "l") { i = "e" }
                    else if (i == "m") { i = "f" }
                    else if (i == "n") { i = "g" }
                    else if (i == "o") { i = "h" }
                    else if (i == "p") { i = "i" }
                    else if (i == "q") { i = "j" }
                    else if (i == "r") { i = "k" }
                    else if (i == "s") { i = "l" }
                    else if (i == "t") { i = "m" }
                    else if (i == "u") { i = "n" }
                    else if (i == "v") { i = "o" }
                    else if (i == "w") { i = "p" }
                    else if (i == "x") { i = "q" }
                    else if (i == "y") { i = "r" }
                    else if (i == "z") { i = "s" }

                    output += i

                }
                else if (shift == "6") {
                    if (i == "a") { i = "u" }
                else if (i == "b") { i = "v" }
                else if (i == "c") { i = "w" }
                else if (i == "d") { i = "x" }
                else if (i == "e") { i = "y" }
                else if (i == "f") { i = "z" }
                else if (i == "g") { i = "a" }
                else if (i == "h") { i = "b" }
                else if (i == "i") { i = "c" }
                else if (i == "j") { i = "d" }
                else if (i == "k") { i = "e" }
                else if (i == "l") { i = "f" }
                else if (i == "m") { i = "g" }
                else if (i == "n") { i = "h" }
                else if (i == "o") { i = "i" }
                else if (i == "p") { i = "j" }
                else if (i == "q") { i = "k" }
                else if (i == "r") { i = "l" }
                else if (i == "s") { i = "m" }
                else if (i == "t") { i = "n" }
                else if (i == "u") { i = "o" }
                else if (i == "v") { i = "p" }
                else if (i == "w") { i = "q" }
                else if (i == "x") { i = "r" }
                else if (i == "y") { i = "s" }
                else if (i == "z") { i = "t" }

                    output += i

                }
                else if (shift == "5") {
                    if (i == "a") { i = "v" }
                    else if (i == "b") { i = "w" }
                    else if (i == "c") { i = "x" }
                    else if (i == "d") { i = "y" }
                    else if (i == "e") { i = "z" }
                    else if (i == "f") { i = "a" }
                    else if (i == "g") { i = "b" }
                    else if (i == "h") { i = "c" }
                    else if (i == "i") { i = "d" }
                    else if (i == "j") { i = "e" }
                    else if (i == "k") { i = "f" }
                    else if (i == "l") { i = "g" }
                    else if (i == "m") { i = "h" }
                    else if (i == "n") { i = "i" }
                    else if (i == "o") { i = "j" }
                    else if (i == "p") { i = "k" }
                    else if (i == "q") { i = "l" }
                    else if (i == "r") { i = "m" }
                    else if (i == "s") { i = "n" }
                    else if (i == "t") { i = "o" }
                    else if (i == "u") { i = "p" }
                    else if (i == "v") { i = "q" }
                    else if (i == "w") { i = "r" }
                    else if (i == "x") { i = "s" }
                    else if (i == "y") { i = "t" }
                    else if (i == "z") { i = "u" }

                    output += i

                }
                else if (shift == "4") {
                    if (i == "a") { i = "w" }
                    else if (i == "b") { i = "x" }
                    else if (i == "c") { i = "y" }
                    else if (i == "d") { i = "z" }
                    else if (i == "e") { i = "a" }
                    else if (i == "f") { i = "b" }
                    else if (i == "g") { i = "c" }
                    else if (i == "h") { i = "d" }
                    else if (i == "i") { i = "e" }
                    else if (i == "j") { i = "f" }
                    else if (i == "k") { i = "g" }
                    else if (i == "l") { i = "h" }
                    else if (i == "m") { i = "i" }
                    else if (i == "n") { i = "j" }
                    else if (i == "o") { i = "k" }
                    else if (i == "p") { i = "l" }
                    else if (i == "q") { i = "m" }
                    else if (i == "r") { i = "n" }
                    else if (i == "s") { i = "o" }
                    else if (i == "t") { i = "p" }
                    else if (i == "u") { i = "q" }
                    else if (i == "v") { i = "r" }
                    else if (i == "w") { i = "s" }
                    else if (i == "x") { i = "t" }
                    else if (i == "y") { i = "u" }
                    else if (i == "z") { i = "v" }

                    output += i

                }
                else if (shift == "3") {
                    if (i == "a") { i = "x" }
                    else if (i == "b") { i = "y" }
                    else if (i == "c") { i = "z" }
                    else if (i == "d") { i = "a" }
                    else if (i == "e") { i = "b" }
                    else if (i == "f") { i = "c" }
                    else if (i == "g") { i = "d" }
                    else if (i == "h") { i = "e" }
                    else if (i == "i") { i = "f" }
                    else if (i == "j") { i = "g" }
                    else if (i == "k") { i = "h" }
                    else if (i == "l") { i = "i" }
                    else if (i == "m") { i = "j" }
                    else if (i == "n") { i = "k" }
                    else if (i == "o") { i = "l" }
                    else if (i == "p") { i = "m" }
                    else if (i == "q") { i = "n" }
                    else if (i == "r") { i = "o" }
                    else if (i == "s") { i = "p" }
                    else if (i == "t") { i = "q" }
                    else if (i == "u") { i = "r" }
                    else if (i == "v") { i = "s" }
                    else if (i == "w") { i = "t" }
                    else if (i == "x") { i = "u" }
                    else if (i == "y") { i = "v" }
                    else if (i == "z") { i = "w" }

                    output += i

                }
                else if (shift == "2") {
                    if (i == "a") { i = "y" }
                    else if (i == "b") { i = "z" }
                    else if (i == "c") { i = "a" }
                    else if (i == "d") { i = "b" }
                    else if (i == "e") { i = "c" }
                    else if (i == "f") { i = "d" }
                    else if (i == "g") { i = "e" }
                    else if (i == "h") { i = "f" }
                    else if (i == "i") { i = "g" }
                    else if (i == "j") { i = "h" }
                    else if (i == "k") { i = "i" }
                    else if (i == "l") { i = "j" }
                    else if (i == "m") { i = "k" }
                    else if (i == "n") { i = "l" }
                    else if (i == "o") { i = "m" }
                    else if (i == "p") { i = "n" }
                    else if (i == "q") { i = "o" }
                    else if (i == "r") { i = "p" }
                    else if (i == "s") { i = "q" }
                    else if (i == "t") { i = "r" }
                    else if (i == "u") { i = "s" }
                    else if (i == "v") { i = "t" }
                    else if (i == "w") { i = "u" }
                    else if (i == "x") { i = "v" }
                    else if (i == "y") { i = "w" }
                    else if (i == "z") { i = "x" }

                    output += i

                }
                else if (shift == "1") {
                    if (i == "a") { i = "z" }
                    else if (i == "b") { i = "a" }
                    else if (i == "c") { i = "b" }
                    else if (i == "d") { i = "c" }
                    else if (i == "e") { i = "d" }
                    else if (i == "f") { i = "e" }
                    else if (i == "g") { i = "f" }
                    else if (i == "h") { i = "g" }
                    else if (i == "i") { i = "h" }
                    else if (i == "j") { i = "i" }
                    else if (i == "k") { i = "j" }
                    else if (i == "l") { i = "k" }
                    else if (i == "m") { i = "l" }
                    else if (i == "n") { i = "m" }
                    else if (i == "o") { i = "n" }
                    else if (i == "p") { i = "o" }
                    else if (i == "q") { i = "p" }
                    else if (i == "r") { i = "q" }
                    else if (i == "s") { i = "r" }
                    else if (i == "t") { i = "s" }
                    else if (i == "u") { i = "t" }
                    else if (i == "v") { i = "u" }
                    else if (i == "w") { i = "v" }
                    else if (i == "x") { i = "w" }
                    else if (i == "y") { i = "x" }
                    else if (i == "z") { i = "y" }

                    output += i

                }

            } 
        }
        else if (eord == "Decrypt"){
            if (direction == "Right") {
                if (shift =="0"){
                    output += i
                }
                else if (shift =="1"){
                    if (i == "a") { i = "z" }
                    else if (i == "b") { i = "a" }
                    else if (i == "c") { i = "b" }
                    else if (i == "d") { i = "c" }
                    else if (i == "e") { i = "d" }
                    else if (i == "f") { i = "e" }
                    else if (i == "g") { i = "f" }
                    else if (i == "h") { i = "g" }
                    else if (i == "i") { i = "h" }
                    else if (i == "j") { i = "i" }
                    else if (i == "k") { i = "j" }
                    else if (i == "l") { i = "k" }
                    else if (i == "m") { i = "l" }
                    else if (i == "n") { i = "m" }
                    else if (i == "o") { i = "n" }
                    else if (i == "p") { i = "o" }
                    else if (i == "q") { i = "p" }
                    else if (i == "r") { i = "q" }
                    else if (i == "s") { i = "r" }
                    else if (i == "t") { i = "s" }
                    else if (i == "u") { i = "t" }
                    else if (i == "v") { i = "u" }
                    else if (i == "w") { i = "v" }
                    else if (i == "x") { i = "w" }
                    else if (i == "y") { i = "x" }
                    else if (i == "z") { i = "y" }
                    
                    output += i
                    
                }

                else if (shift == "2") {
                    if (i == "a") { i = "y" }
                    else if (i == "b") { i = "z" }
                    else if (i == "c") { i = "a" }
                    else if (i == "d") { i = "b" }
                    else if (i == "e") { i = "c" }
                    else if (i == "f") { i = "d" }
                    else if (i == "g") { i = "e" }
                    else if (i == "h") { i = "f" }
                    else if (i == "i") { i = "g" }
                    else if (i == "j") { i = "h" }
                    else if (i == "k") { i = "i" }
                    else if (i == "l") { i = "j" }
                    else if (i == "m") { i = "k" }
                    else if (i == "n") { i = "l" }
                    else if (i == "o") { i = "m" }
                    else if (i == "p") { i = "n" }
                    else if (i == "q") { i = "o" }
                    else if (i == "r") { i = "p" }
                    else if (i == "s") { i = "q" }
                    else if (i == "t") { i = "r" }
                    else if (i == "u") { i = "s" }
                    else if (i == "v") { i = "t" }
                    else if (i == "w") { i = "u" }
                    else if (i == "x") { i = "v" }
                    else if (i == "y") { i = "w" }
                    else if (i == "z") { i = "x" }
                    output += i
                    }

                    else if (shift == "3") {
                        if (i == "a") { i = "x" }
                        else if (i == "b") { i = "y" }
                        else if (i == "c") { i = "z" }
                        else if (i == "d") { i = "a" }
                        else if (i == "e") { i = "b" }
                        else if (i == "f") { i = "c" }
                        else if (i == "g") { i = "d" }
                        else if (i == "h") { i = "e" }
                        else if (i == "i") { i = "f" }
                        else if (i == "j") { i = "g" }
                        else if (i == "k") { i = "h" }
                        else if (i == "l") { i = "i" }
                        else if (i == "m") { i = "j" }
                        else if (i == "n") { i = "k" }
                        else if (i == "o") { i = "l" }
                        else if (i == "p") { i = "m" }
                        else if (i == "q") { i = "n" }
                        else if (i == "r") { i = "o" }
                        else if (i == "s") { i = "p" }
                        else if (i == "t") { i = "q" }
                        else if (i == "u") { i = "r" }
                        else if (i == "v") { i = "s" }
                        else if (i == "w") { i = "t" }
                        else if (i == "x") { i = "u" }
                        else if (i == "y") { i = "v" }
                        else if (i == "z") { i = "w" }
                        output += i
                        }
                    else if (shift == "4") {
                        if (i == "a") { i = "w" }
                        else if (i == "b") { i = "x" }
                        else if (i == "c") { i = "y" }
                        else if (i == "d") { i = "z" }
                        else if (i == "e") { i = "a" }
                        else if (i == "f") { i = "b" }
                        else if (i == "g") { i = "c" }
                        else if (i == "h") { i = "d" }
                        else if (i == "i") { i = "e" }
                        else if (i == "j") { i = "f" }
                        else if (i == "k") { i = "g" }
                        else if (i == "l") { i = "h" }
                        else if (i == "m") { i = "i" }
                        else if (i == "n") { i = "j" }
                        else if (i == "o") { i = "k" }
                        else if (i == "p") { i = "l" }
                        else if (i == "q") { i = "m" }
                        else if (i == "r") { i = "n" }
                        else if (i == "s") { i = "o" }
                        else if (i == "t") { i = "p" }
                        else if (i == "u") { i = "q" }
                        else if (i == "v") { i = "r" }
                        else if (i == "w") { i = "s" }
                        else if (i == "x") { i = "t" }
                        else if (i == "y") { i = "u" }
                        else if (i == "z") { i = "v" }
                        output += i

                    }
                    else if (shift == "5") {
                        if (i == "a") { i = "v" }
                        else if (i == "b") { i = "w" }
                        else if (i == "c") { i = "x" }
                        else if (i == "d") { i = "y" }
                        else if (i == "e") { i = "z" }
                        else if (i == "f") { i = "a" }
                        else if (i == "g") { i = "b" }
                        else if (i == "h") { i = "c" }
                        else if (i == "i") { i = "d" }
                        else if (i == "j") { i = "e" }
                        else if (i == "k") { i = "f" }
                        else if (i == "l") { i = "g" }
                        else if (i == "m") { i = "h" }
                        else if (i == "n") { i = "i" }
                        else if (i == "o") { i = "j" }
                        else if (i == "p") { i = "k" }
                        else if (i == "q") { i = "l" }
                        else if (i == "r") { i = "m" }
                        else if (i == "s") { i = "n" }
                        else if (i == "t") { i = "o" }
                        else if (i == "u") { i = "p" }
                        else if (i == "v") { i = "q" }
                        else if (i == "w") { i = "r" }
                        else if (i == "x") { i = "s" }
                        else if (i == "y") { i = "t" }
                        else if (i == "z") { i = "u" }
                        output += i
                        
                    }
                    else if (shift == "6") {
                        if (i == "a") { i = "u" }
                        else if (i == "b") { i = "v" }
                        else if (i == "c") { i = "w" }
                        else if (i == "d") { i = "x" }
                        else if (i == "e") { i = "y" }
                        else if (i == "f") { i = "z" }
                        else if (i == "g") { i = "a" }
                        else if (i == "h") { i = "b" }
                        else if (i == "i") { i = "c" }
                        else if (i == "j") { i = "d" }
                        else if (i == "k") { i = "e" }
                        else if (i == "l") { i = "f" }
                        else if (i == "m") { i = "g" }
                        else if (i == "n") { i = "h" }
                        else if (i == "o") { i = "i" }
                        else if (i == "p") { i = "j" }
                        else if (i == "q") { i = "k" }
                        else if (i == "r") { i = "l" }
                        else if (i == "s") { i = "m" }
                        else if (i == "t") { i = "n" }
                        else if (i == "u") { i = "o" }
                        else if (i == "v") { i = "p" }
                        else if (i == "w") { i = "q" }
                        else if (i == "x") { i = "r" }
                        else if (i == "y") { i = "s" }
                        else if (i == "z") { i = "t" }
                        output += i

                        
                    }
                    else if (shift == "7") {
                        if (i == "a") { i = "t" }
                        else if (i == "b") { i = "u" }
                        else if (i == "c") { i = "v" }
                        else if (i == "d") { i = "w" }
                        else if (i == "e") { i = "x" }
                        else if (i == "f") { i = "y" }
                        else if (i == "g") { i = "z" }
                        else if (i == "h") { i = "a" }
                        else if (i == "i") { i = "b" }
                        else if (i == "j") { i = "c" }
                        else if (i == "k") { i = "d" }
                        else if (i == "l") { i = "e" }
                        else if (i == "m") { i = "f" }
                        else if (i == "n") { i = "g" }
                        else if (i == "o") { i = "h" }
                        else if (i == "p") { i = "i" }
                        else if (i == "q") { i = "j" }
                        else if (i == "r") { i = "k" }
                        else if (i == "s") { i = "l" }
                        else if (i == "t") { i = "m" }
                        else if (i == "u") { i = "n" }
                        else if (i == "v") { i = "o" }
                        else if (i == "w") { i = "p" }
                        else if (i == "x") { i = "q" }
                        else if (i == "y") { i = "r" }
                        else if (i == "z") { i = "s" }
                        output += i

                        
                    }
                    else if (shift == "8") {
                        if (i == "a") { i = "s" }
                        else if (i == "b") { i = "t" }
                        else if (i == "c") { i = "u" }
                        else if (i == "d") { i = "v" }
                        else if (i == "e") { i = "w" }
                        else if (i == "f") { i = "x" }
                        else if (i == "g") { i = "y" }
                        else if (i == "h") { i = "z" }
                        else if (i == "i") { i = "a" }
                        else if (i == "j") { i = "b" }
                        else if (i == "k") { i = "c" }
                        else if (i == "l") { i = "d" }
                        else if (i == "m") { i = "e" }
                        else if (i == "n") { i = "f" }
                        else if (i == "o") { i = "g" }
                        else if (i == "p") { i = "h" }
                        else if (i == "q") { i = "i" }
                        else if (i == "r") { i = "j" }
                        else if (i == "s") { i = "k" }
                        else if (i == "t") { i = "l" }
                        else if (i == "u") { i = "m" }
                        else if (i == "v") { i = "n" }
                        else if (i == "w") { i = "o" }
                        else if (i == "x") { i = "p" }
                        else if (i == "y") { i = "q" }
                        else if (i == "z") { i = "r" }
                        output += i

                        
                    }
                    else if (shift == "9") {
                        if (i == "a") { i = "r" }
                        else if (i == "b") { i = "s" }
                        else if (i == "c") { i = "t" }
                        else if (i == "d") { i = "u" }
                        else if (i == "e") { i = "v" }
                        else if (i == "f") { i = "w" }
                        else if (i == "g") { i = "x" }
                        else if (i == "h") { i = "y" }
                        else if (i == "i") { i = "z" }
                        else if (i == "j") { i = "a" }
                        else if (i == "k") { i = "b" }
                        else if (i == "l") { i = "c" }
                        else if (i == "m") { i = "d" }
                        else if (i == "n") { i = "e" }
                        else if (i == "o") { i = "f" }
                        else if (i == "p") { i = "g" }
                        else if (i == "q") { i = "h" }
                        else if (i == "r") { i = "i" }
                        else if (i == "s") { i = "j" }
                        else if (i == "t") { i = "k" }
                        else if (i == "u") { i = "l" }
                        else if (i == "v") { i = "m" }
                        else if (i == "w") { i = "n" }
                        else if (i == "x") { i = "o" }
                        else if (i == "y") { i = "p" }
                        else if (i == "z") { i = "q" }
                        output += i

                        
                    }
                    else if (shift == "10") {
                        if (i == "a") { i = "q" }
                        else if (i == "b") { i = "r" }
                        else if (i == "c") { i = "s" }
                        else if (i == "d") { i = "t" }
                        else if (i == "e") { i = "u" }
                        else if (i == "f") { i = "v" }
                        else if (i == "g") { i = "w" }
                        else if (i == "h") { i = "x" }
                        else if (i == "i") { i = "y" }
                        else if (i == "j") { i = "z" }
                        else if (i == "k") { i = "a" }
                        else if (i == "l") { i = "b" }
                        else if (i == "m") { i = "c" }
                        else if (i == "n") { i = "d" }
                        else if (i == "o") { i = "e" }
                        else if (i == "p") { i = "f" }
                        else if (i == "q") { i = "g" }
                        else if (i == "r") { i = "h" }
                        else if (i == "s") { i = "i" }
                        else if (i == "t") { i = "j" }
                        else if (i == "u") { i = "k" }
                        else if (i == "v") { i = "l" }
                        else if (i == "w") { i = "m" }
                        else if (i == "x") { i = "n" }
                        else if (i == "y") { i = "o" }
                        else if (i == "z") { i = "p" }
                        output += i

                        
                    }
                    else if (shift == "11") {
                        if (i == "a") { i = "p" }
                        else if (i == "b") { i = "q" }
                        else if (i == "c") { i = "r" }
                        else if (i == "d") { i = "s" }
                        else if (i == "e") { i = "t" }
                        else if (i == "f") { i = "u" }
                        else if (i == "g") { i = "v" }
                        else if (i == "h") { i = "w" }
                        else if (i == "i") { i = "x" }
                        else if (i == "j") { i = "y" }
                        else if (i == "k") { i = "z" }
                        else if (i == "l") { i = "a" }
                        else if (i == "m") { i = "b" }
                        else if (i == "n") { i = "c" }
                        else if (i == "o") { i = "d" }
                        else if (i == "p") { i = "e" }
                        else if (i == "q") { i = "f" }
                        else if (i == "r") { i = "g" }
                        else if (i == "s") { i = "h" }
                        else if (i == "t") { i = "i" }
                        else if (i == "u") { i = "j" }
                        else if (i == "v") { i = "k" }
                        else if (i == "w") { i = "l" }
                        else if (i == "x") { i = "m" }
                        else if (i == "y") { i = "n" }
                        else if (i == "z") { i = "o" }
                        output += i

                        
                    }
                    else if (shift == "12") {
                        if (i == "a") { i = "o" }
                        else if (i == "b") { i = "p" }
                        else if (i == "c") { i = "q" }
                        else if (i == "d") { i = "r" }
                        else if (i == "e") { i = "s" }
                        else if (i == "f") { i = "t" }
                        else if (i == "g") { i = "u" }
                        else if (i == "h") { i = "v" }
                        else if (i == "i") { i = "w" }
                        else if (i == "j") { i = "x" }
                        else if (i == "k") { i = "y" }
                        else if (i == "l") { i = "z" }
                        else if (i == "m") { i = "a" }
                        else if (i == "n") { i = "b" }
                        else if (i == "o") { i = "c" }
                        else if (i == "p") { i = "d" }
                        else if (i == "q") { i = "e" }
                        else if (i == "r") { i = "f" }
                        else if (i == "s") { i = "g" }
                        else if (i == "t") { i = "h" }
                        else if (i == "u") { i = "i" }
                        else if (i == "v") { i = "j" }
                        else if (i == "w") { i = "k" }
                        else if (i == "x") { i = "l" }
                        else if (i == "y") { i = "m" }
                        else if (i == "z") { i = "n" }
                        output += i

                        
                    }
                    else if (shift == "13") {
                        if (i == "a") { i = "n" }
                        else if (i == "b") { i = "o" }
                        else if (i == "c") { i = "p" }
                        else if (i == "d") { i = "q" }
                        else if (i == "e") { i = "r" }
                        else if (i == "f") { i = "s" }
                        else if (i == "g") { i = "t" }
                        else if (i == "h") { i = "u" }
                        else if (i == "i") { i = "v" }
                        else if (i == "j") { i = "w" }
                        else if (i == "k") { i = "x" }
                        else if (i == "l") { i = "y" }
                        else if (i == "m") { i = "z" }
                        else if (i == "n") { i = "a" }
                        else if (i == "o") { i = "b" }
                        else if (i == "p") { i = "c" }
                        else if (i == "q") { i = "d" }
                        else if (i == "r") { i = "e" }
                        else if (i == "s") { i = "f" }
                        else if (i == "t") { i = "g" }
                        else if (i == "u") { i = "h" }
                        else if (i == "v") { i = "i" }
                        else if (i == "w") { i = "j" }
                        else if (i == "x") { i = "k" }
                        else if (i == "y") { i = "l" }
                        else if (i == "z") { i = "m" }
                        output += i

                        
                    }else if (shift == "14") {
                        if (i == "a") { i = "m" }
                        else if (i == "b") { i = "n" }
                        else if (i == "c") { i = "o" }
                        else if (i == "d") { i = "p" }
                        else if (i == "e") { i = "q" }
                        else if (i == "f") { i = "r" }
                        else if (i == "g") { i = "s" }
                        else if (i == "h") { i = "t" }
                        else if (i == "i") { i = "u" }
                        else if (i == "j") { i = "v" }
                        else if (i == "k") { i = "w" }
                        else if (i == "l") { i = "x" }
                        else if (i == "m") { i = "y" }
                        else if (i == "n") { i = "z" }
                        else if (i == "o") { i = "a" }
                        else if (i == "p") { i = "b" }
                        else if (i == "q") { i = "c" }
                        else if (i == "r") { i = "d" }
                        else if (i == "s") { i = "e" }
                        else if (i == "t") { i = "f" }
                        else if (i == "u") { i = "g" }
                        else if (i == "v") { i = "h" }
                        else if (i == "w") { i = "i" }
                        else if (i == "x") { i = "j" }
                        else if (i == "y") { i = "k" }
                        else if (i == "z") { i = "l" }
                        output += i

                        
                    }else if (shift == "15") {
                        if (i == "a") { i = "l" }
                        else if (i == "b") { i = "m" }
                        else if (i == "c") { i = "n" }
                        else if (i == "d") { i = "o" }
                        else if (i == "e") { i = "p" }
                        else if (i == "f") { i = "q" }
                        else if (i == "g") { i = "r" }
                        else if (i == "h") { i = "s" }
                        else if (i == "i") { i = "t" }
                        else if (i == "j") { i = "u" }
                        else if (i == "k") { i = "v" }
                        else if (i == "l") { i = "w" }
                        else if (i == "m") { i = "x" }
                        else if (i == "n") { i = "y" }
                        else if (i == "o") { i = "z" }
                        else if (i == "p") { i = "a" }
                        else if (i == "q") { i = "b" }
                        else if (i == "r") { i = "c" }
                        else if (i == "s") { i = "d" }
                        else if (i == "t") { i = "e" }
                        else if (i == "u") { i = "f" }
                        else if (i == "v") { i = "g" }
                        else if (i == "w") { i = "h" }
                        else if (i == "x") { i = "i" }
                        else if (i == "y") { i = "j" }
                        else if (i == "z") { i = "k" }
                        output += i

                        
                    }else if (shift == "16") {
                        if (i == "a") { i = "k" }
                        else if (i == "b") { i = "l" }
                        else if (i == "c") { i = "m" }
                        else if (i == "d") { i = "n" }
                        else if (i == "e") { i = "o" }
                        else if (i == "f") { i = "p" }
                        else if (i == "g") { i = "q" }
                        else if (i == "h") { i = "r" }
                        else if (i == "i") { i = "s" }
                        else if (i == "j") { i = "t" }
                        else if (i == "k") { i = "u" }
                        else if (i == "l") { i = "v" }
                        else if (i == "m") { i = "w" }
                        else if (i == "n") { i = "x" }
                        else if (i == "o") { i = "y" }
                        else if (i == "p") { i = "z" }
                        else if (i == "q") { i = "a" }
                        else if (i == "r") { i = "b" }
                        else if (i == "s") { i = "c" }
                        else if (i == "t") { i = "d" }
                        else if (i == "u") { i = "e" }
                        else if (i == "v") { i = "f" }
                        else if (i == "w") { i = "g" }
                        else if (i == "x") { i = "h" }
                        else if (i == "y") { i = "i" }
                        else if (i == "z") { i = "j" }
                        output += i

                        
                    }else if (shift == "17") {
                        if (i == "a") { i = "j" }
                        else if (i == "b") { i = "k" }
                        else if (i == "c") { i = "l" }
                        else if (i == "d") { i = "m" }
                        else if (i == "e") { i = "n" }
                        else if (i == "f") { i = "o" }
                        else if (i == "g") { i = "p" }
                        else if (i == "h") { i = "q" }
                        else if (i == "i") { i = "r" }
                        else if (i == "j") { i = "s" }
                        else if (i == "k") { i = "t" }
                        else if (i == "l") { i = "u" }
                        else if (i == "m") { i = "v" }
                        else if (i == "n") { i = "w" }
                        else if (i == "o") { i = "x" }
                        else if (i == "p") { i = "y" }
                        else if (i == "q") { i = "z" }
                        else if (i == "r") { i = "a" }
                        else if (i == "s") { i = "b" }
                        else if (i == "t") { i = "c" }
                        else if (i == "u") { i = "d" }
                        else if (i == "v") { i = "e" }
                        else if (i == "w") { i = "f" }
                        else if (i == "x") { i = "g" }
                        else if (i == "y") { i = "h" }
                        else if (i == "z") { i = "i" }
                        output += i

                        
                    }else if (shift == "18") {
                        if (i == "a") { i = "i" }
                        else if (i == "b") { i = "j" }
                        else if (i == "c") { i = "k" }
                        else if (i == "d") { i = "l" }
                        else if (i == "e") { i = "m" }
                        else if (i == "f") { i = "n" }
                        else if (i == "g") { i = "o" }
                        else if (i == "h") { i = "p" }
                        else if (i == "i") { i = "q" }
                        else if (i == "j") { i = "r" }
                        else if (i == "k") { i = "s" }
                        else if (i == "l") { i = "t" }
                        else if (i == "m") { i = "u" }
                        else if (i == "n") { i = "v" }
                        else if (i == "o") { i = "w" }
                        else if (i == "p") { i = "x" }
                        else if (i == "q") { i = "y" }
                        else if (i == "r") { i = "z" }
                        else if (i == "s") { i = "a" }
                        else if (i == "t") { i = "b" }
                        else if (i == "u") { i = "c" }
                        else if (i == "v") { i = "d" }
                        else if (i == "w") { i = "e" }
                        else if (i == "x") { i = "f" }
                        else if (i == "y") { i = "g" }
                        else if (i == "z") { i = "h" }
                        output += i

                        
                    }else if (shift == "19") {
                        if (i == "a") { i = "h" }
                        else if (i == "b") { i = "i" }
                        else if (i == "c") { i = "j" }
                        else if (i == "d") { i = "k" }
                        else if (i == "e") { i = "l" }
                        else if (i == "f") { i = "m" }
                        else if (i == "g") { i = "n" }
                        else if (i == "h") { i = "o" }
                        else if (i == "i") { i = "p" }
                        else if (i == "j") { i = "q" }
                        else if (i == "k") { i = "r" }
                        else if (i == "l") { i = "s" }
                        else if (i == "m") { i = "t" }
                        else if (i == "n") { i = "u" }
                        else if (i == "o") { i = "v" }
                        else if (i == "p") { i = "w" }
                        else if (i == "q") { i = "x" }
                        else if (i == "r") { i = "y" }
                        else if (i == "s") { i = "z" }
                        else if (i == "t") { i = "a" }
                        else if (i == "u") { i = "b" }
                        else if (i == "v") { i = "c" }
                        else if (i == "w") { i = "d" }
                        else if (i == "x") { i = "e" }
                        else if (i == "y") { i = "f" }
                        else if (i == "z") { i = "g" }
                        output += i

                        
                    }else if (shift == "20") {
                        if (i == "a") { i = "g" }
                        else if (i == "b") { i = "h" }
                        else if (i == "c") { i = "i" }
                        else if (i == "d") { i = "j" }
                        else if (i == "e") { i = "k" }
                        else if (i == "f") { i = "l" }
                        else if (i == "g") { i = "m" }
                        else if (i == "h") { i = "n" }
                        else if (i == "i") { i = "o" }
                        else if (i == "j") { i = "p" }
                        else if (i == "k") { i = "q" }
                        else if (i == "l") { i = "r" }
                        else if (i == "m") { i = "s" }
                        else if (i == "n") { i = "t" }
                        else if (i == "o") { i = "u" }
                        else if (i == "p") { i = "v" }
                        else if (i == "q") { i = "w" }
                        else if (i == "r") { i = "x" }
                        else if (i == "s") { i = "y" }
                        else if (i == "t") { i = "z" }
                        else if (i == "u") { i = "a" }
                        else if (i == "v") { i = "b" }
                        else if (i == "w") { i = "c" }
                        else if (i == "x") { i = "d" }
                        else if (i == "y") { i = "e" }
                        else if (i == "z") { i = "f" }
                        output += i

                        
                    }else if (shift == "21") {
                        if (i == "a") { i = "f" }
                        else if (i == "b") { i = "g" }
                        else if (i == "c") { i = "h" }
                        else if (i == "d") { i = "i" }
                        else if (i == "e") { i = "j" }
                        else if (i == "f") { i = "k" }
                        else if (i == "g") { i = "l" }
                        else if (i == "h") { i = "m" }
                        else if (i == "i") { i = "n" }
                        else if (i == "j") { i = "o" }
                        else if (i == "k") { i = "p" }
                        else if (i == "l") { i = "q" }
                        else if (i == "m") { i = "r" }
                        else if (i == "n") { i = "s" }
                        else if (i == "o") { i = "t" }
                        else if (i == "p") { i = "u" }
                        else if (i == "q") { i = "v" }
                        else if (i == "r") { i = "w" }
                        else if (i == "s") { i = "x" }
                        else if (i == "t") { i = "y" }
                        else if (i == "u") { i = "z" }
                        else if (i == "v") { i = "a" }
                        else if (i == "w") { i = "b" }
                        else if (i == "x") { i = "c" }
                        else if (i == "y") { i = "d" }
                        else if (i == "z") { i = "e" }
                        output += i

                        
                    }else if (shift == "22") {
                        if (i == "a") { i = "e" }
                        else if (i == "b") { i = "f" }
                        else if (i == "c") { i = "g" }
                        else if (i == "d") { i = "h" }
                        else if (i == "e") { i = "i" }
                        else if (i == "f") { i = "j" }
                        else if (i == "g") { i = "k" }
                        else if (i == "h") { i = "l" }
                        else if (i == "i") { i = "m" }
                        else if (i == "j") { i = "n" }
                        else if (i == "k") { i = "o" }
                        else if (i == "l") { i = "p" }
                        else if (i == "m") { i = "q" }
                        else if (i == "n") { i = "r" }
                        else if (i == "o") { i = "s" }
                        else if (i == "p") { i = "t" }
                        else if (i == "q") { i = "u" }
                        else if (i == "r") { i = "v" }
                        else if (i == "s") { i = "w" }
                        else if (i == "t") { i = "x" }
                        else if (i == "u") { i = "y" }
                        else if (i == "v") { i = "z" }
                        else if (i == "w") { i = "a" }
                        else if (i == "x") { i = "b" }
                        else if (i == "y") { i = "c" }
                        else if (i == "z") { i = "d" }
                        output += i

                        
                    }else if (shift == "23") {
                        if (i == "a") { i = "d" }
                        else if (i == "b") { i = "e" }
                        else if (i == "c") { i = "f" }
                        else if (i == "d") { i = "g" }
                        else if (i == "e") { i = "h" }
                        else if (i == "f") { i = "i" }
                        else if (i == "g") { i = "j" }
                        else if (i == "h") { i = "k" }
                        else if (i == "i") { i = "l" }
                        else if (i == "j") { i = "m" }
                        else if (i == "k") { i = "n" }
                        else if (i == "l") { i = "o" }
                        else if (i == "m") { i = "p" }
                        else if (i == "n") { i = "q" }
                        else if (i == "o") { i = "r" }
                        else if (i == "p") { i = "s" }
                        else if (i == "q") { i = "t" }
                        else if (i == "r") { i = "u" }
                        else if (i == "s") { i = "v" }
                        else if (i == "t") { i = "w" }
                        else if (i == "u") { i = "x" }
                        else if (i == "v") { i = "y" }
                        else if (i == "w") { i = "z" }
                        else if (i == "x") { i = "a" }
                        else if (i == "y") { i = "b" }
                        else if (i == "z") { i = "c" }
                        output += i

                        
                    }
                    else if (shift == "24") {
                        if (i == "a") { i = "c" }
                        else if (i == "b") { i = "d" }
                        else if (i == "c") { i = "e" }
                        else if (i == "d") { i = "f" }
                        else if (i == "e") { i = "g" }
                        else if (i == "f") { i = "h" }
                        else if (i == "g") { i = "i" }
                        else if (i == "h") { i = "j" }
                        else if (i == "i") { i = "k" }
                        else if (i == "j") { i = "l" }
                        else if (i == "k") { i = "m" }
                        else if (i == "l") { i = "n" }
                        else if (i == "m") { i = "o" }
                        else if (i == "n") { i = "p" }
                        else if (i == "o") { i = "q" }
                        else if (i == "p") { i = "r" }
                        else if (i == "q") { i = "s" }
                        else if (i == "r") { i = "t" }
                        else if (i == "s") { i = "u" }
                        else if (i == "t") { i = "v" }
                        else if (i == "u") { i = "w" }
                        else if (i == "v") { i = "x" }
                        else if (i == "w") { i = "y" }
                        else if (i == "x") { i = "z" }
                        else if (i == "y") { i = "a" }
                        else if (i == "z") { i = "b" }
                        output += i

                        
                    }
                    else if (shift == "25") {
                        if (i == "a") { i = "b" }
                        else if (i == "b") { i = "c" }
                        else if (i == "c") { i = "d" }
                        else if (i == "d") { i = "e" }
                        else if (i == "e") { i = "f" }
                        else if (i == "f") { i = "g" }
                        else if (i == "g") { i = "h" }
                        else if (i == "h") { i = "i" }
                        else if (i == "i") { i = "j" }
                        else if (i == "j") { i = "k" }
                        else if (i == "k") { i = "l" }
                        else if (i == "l") { i = "m" }
                        else if (i == "m") { i = "n" }
                        else if (i == "n") { i = "o" }
                        else if (i == "o") { i = "p" }
                        else if (i == "p") { i = "q" }
                        else if (i == "q") { i = "r" }
                        else if (i == "r") { i = "s" }
                        else if (i == "s") { i = "t" }
                        else if (i == "t") { i = "u" }
                        else if (i == "u") { i = "v" }
                        else if (i == "v") { i = "w" }
                        else if (i == "w") { i = "x" }
                        else if (i == "x") { i = "y" }
                        else if (i == "y") { i = "z" }
                        else if (i == "z") { i = "a" }
                        output += i}
                        
                    }
                    
                
            
            
        else if (direction == "Left") {
            if (shift =="0"){
                output += i
            }
            else if (shift =="25"){
                if (i == "a") { i = "z" }
                else if (i == "b") { i = "a" }
                else if (i == "c") { i = "b" }
                else if (i == "d") { i = "c" }
                else if (i == "e") { i = "d" }
                else if (i == "f") { i = "e" }
                else if (i == "g") { i = "f" }
                else if (i == "h") { i = "g" }
                else if (i == "i") { i = "h" }
                else if (i == "j") { i = "i" }
                else if (i == "k") { i = "j" }
                else if (i == "l") { i = "k" }
                else if (i == "m") { i = "l" }
                else if (i == "n") { i = "m" }
                else if (i == "o") { i = "n" }
                else if (i == "p") { i = "o" }
                else if (i == "q") { i = "p" }
                else if (i == "r") { i = "q" }
                else if (i == "s") { i = "r" }
                else if (i == "t") { i = "s" }
                else if (i == "u") { i = "t" }
                else if (i == "v") { i = "u" }
                else if (i == "w") { i = "v" }
                else if (i == "x") { i = "w" }
                else if (i == "y") { i = "x" }
                else if (i == "z") { i = "y" }
                
                output += i
                
            }

            else if (shift == "24") {
                if (i == "a") { i = "y" }
                else if (i == "b") { i = "z" }
                else if (i == "c") { i = "a" }
                else if (i == "d") { i = "b" }
                else if (i == "e") { i = "c" }
                else if (i == "f") { i = "d" }
                else if (i == "g") { i = "e" }
                else if (i == "h") { i = "f" }
                else if (i == "i") { i = "g" }
                else if (i == "j") { i = "h" }
                else if (i == "k") { i = "i" }
                else if (i == "l") { i = "j" }
                else if (i == "m") { i = "k" }
                else if (i == "n") { i = "l" }
                else if (i == "o") { i = "m" }
                else if (i == "p") { i = "n" }
                else if (i == "q") { i = "o" }
                else if (i == "r") { i = "p" }
                else if (i == "s") { i = "q" }
                else if (i == "t") { i = "r" }
                else if (i == "u") { i = "s" }
                else if (i == "v") { i = "t" }
                else if (i == "w") { i = "u" }
                else if (i == "x") { i = "v" }
                else if (i == "y") { i = "w" }
                else if (i == "z") { i = "x" }
                output += i
                }

                else if (shift == "23") {
                    if (i == "a") { i = "x" }
                    else if (i == "b") { i = "y" }
                    else if (i == "c") { i = "z" }
                    else if (i == "d") { i = "a" }
                    else if (i == "e") { i = "b" }
                    else if (i == "f") { i = "c" }
                    else if (i == "g") { i = "d" }
                    else if (i == "h") { i = "e" }
                    else if (i == "i") { i = "f" }
                    else if (i == "j") { i = "g" }
                    else if (i == "k") { i = "h" }
                    else if (i == "l") { i = "i" }
                    else if (i == "m") { i = "j" }
                    else if (i == "n") { i = "k" }
                    else if (i == "o") { i = "l" }
                    else if (i == "p") { i = "m" }
                    else if (i == "q") { i = "n" }
                    else if (i == "r") { i = "o" }
                    else if (i == "s") { i = "p" }
                    else if (i == "t") { i = "q" }
                    else if (i == "u") { i = "r" }
                    else if (i == "v") { i = "s" }
                    else if (i == "w") { i = "t" }
                    else if (i == "x") { i = "u" }
                    else if (i == "y") { i = "v" }
                    else if (i == "z") { i = "w" }
                    output += i
                    }
                else if (shift == "22") {
                    if (i == "a") { i = "w" }
                    else if (i == "b") { i = "x" }
                    else if (i == "c") { i = "y" }
                    else if (i == "d") { i = "z" }
                    else if (i == "e") { i = "a" }
                    else if (i == "f") { i = "b" }
                    else if (i == "g") { i = "c" }
                    else if (i == "h") { i = "d" }
                    else if (i == "i") { i = "e" }
                    else if (i == "j") { i = "f" }
                    else if (i == "k") { i = "g" }
                    else if (i == "l") { i = "h" }
                    else if (i == "m") { i = "i" }
                    else if (i == "n") { i = "j" }
                    else if (i == "o") { i = "k" }
                    else if (i == "p") { i = "l" }
                    else if (i == "q") { i = "m" }
                    else if (i == "r") { i = "n" }
                    else if (i == "s") { i = "o" }
                    else if (i == "t") { i = "p" }
                    else if (i == "u") { i = "q" }
                    else if (i == "v") { i = "r" }
                    else if (i == "w") { i = "s" }
                    else if (i == "x") { i = "t" }
                    else if (i == "y") { i = "u" }
                    else if (i == "z") { i = "v" }
                    output += i

                }
                else if (shift == "21") {
                    if (i == "a") { i = "v" }
                    else if (i == "b") { i = "w" }
                    else if (i == "c") { i = "x" }
                    else if (i == "d") { i = "y" }
                    else if (i == "e") { i = "z" }
                    else if (i == "f") { i = "a" }
                    else if (i == "g") { i = "b" }
                    else if (i == "h") { i = "c" }
                    else if (i == "i") { i = "d" }
                    else if (i == "j") { i = "e" }
                    else if (i == "k") { i = "f" }
                    else if (i == "l") { i = "g" }
                    else if (i == "m") { i = "h" }
                    else if (i == "n") { i = "i" }
                    else if (i == "o") { i = "j" }
                    else if (i == "p") { i = "k" }
                    else if (i == "q") { i = "l" }
                    else if (i == "r") { i = "m" }
                    else if (i == "s") { i = "n" }
                    else if (i == "t") { i = "o" }
                    else if (i == "u") { i = "p" }
                    else if (i == "v") { i = "q" }
                    else if (i == "w") { i = "r" }
                    else if (i == "x") { i = "s" }
                    else if (i == "y") { i = "t" }
                    else if (i == "z") { i = "u" }
                    output += i
                    
                }
                else if (shift == "20") {
                    if (i == "a") { i = "u" }
                    else if (i == "b") { i = "v" }
                    else if (i == "c") { i = "w" }
                    else if (i == "d") { i = "x" }
                    else if (i == "e") { i = "y" }
                    else if (i == "f") { i = "z" }
                    else if (i == "g") { i = "a" }
                    else if (i == "h") { i = "b" }
                    else if (i == "i") { i = "c" }
                    else if (i == "j") { i = "d" }
                    else if (i == "k") { i = "e" }
                    else if (i == "l") { i = "f" }
                    else if (i == "m") { i = "g" }
                    else if (i == "n") { i = "h" }
                    else if (i == "o") { i = "i" }
                    else if (i == "p") { i = "j" }
                    else if (i == "q") { i = "k" }
                    else if (i == "r") { i = "l" }
                    else if (i == "s") { i = "m" }
                    else if (i == "t") { i = "n" }
                    else if (i == "u") { i = "o" }
                    else if (i == "v") { i = "p" }
                    else if (i == "w") { i = "q" }
                    else if (i == "x") { i = "r" }
                    else if (i == "y") { i = "s" }
                    else if (i == "z") { i = "t" }
                    output += i

                    
                }
                else if (shift == "19") {
                    if (i == "a") { i = "t" }
                    else if (i == "b") { i = "u" }
                    else if (i == "c") { i = "v" }
                    else if (i == "d") { i = "w" }
                    else if (i == "e") { i = "x" }
                    else if (i == "f") { i = "y" }
                    else if (i == "g") { i = "z" }
                    else if (i == "h") { i = "a" }
                    else if (i == "i") { i = "b" }
                    else if (i == "j") { i = "c" }
                    else if (i == "k") { i = "d" }
                    else if (i == "l") { i = "e" }
                    else if (i == "m") { i = "f" }
                    else if (i == "n") { i = "g" }
                    else if (i == "o") { i = "h" }
                    else if (i == "p") { i = "i" }
                    else if (i == "q") { i = "j" }
                    else if (i == "r") { i = "k" }
                    else if (i == "s") { i = "l" }
                    else if (i == "t") { i = "m" }
                    else if (i == "u") { i = "n" }
                    else if (i == "v") { i = "o" }
                    else if (i == "w") { i = "p" }
                    else if (i == "x") { i = "q" }
                    else if (i == "y") { i = "r" }
                    else if (i == "z") { i = "s" }
                    output += i

                    
                }
                else if (shift == "18") {
                    if (i == "a") { i = "s" }
                    else if (i == "b") { i = "t" }
                    else if (i == "c") { i = "u" }
                    else if (i == "d") { i = "v" }
                    else if (i == "e") { i = "w" }
                    else if (i == "f") { i = "x" }
                    else if (i == "g") { i = "y" }
                    else if (i == "h") { i = "z" }
                    else if (i == "i") { i = "a" }
                    else if (i == "j") { i = "b" }
                    else if (i == "k") { i = "c" }
                    else if (i == "l") { i = "d" }
                    else if (i == "m") { i = "e" }
                    else if (i == "n") { i = "f" }
                    else if (i == "o") { i = "g" }
                    else if (i == "p") { i = "h" }
                    else if (i == "q") { i = "i" }
                    else if (i == "r") { i = "j" }
                    else if (i == "s") { i = "k" }
                    else if (i == "t") { i = "l" }
                    else if (i == "u") { i = "m" }
                    else if (i == "v") { i = "n" }
                    else if (i == "w") { i = "o" }
                    else if (i == "x") { i = "p" }
                    else if (i == "y") { i = "q" }
                    else if (i == "z") { i = "r" }
                    output += i

                    
                }
                else if (shift == "17") {
                    if (i == "a") { i = "r" }
                    else if (i == "b") { i = "s" }
                    else if (i == "c") { i = "t" }
                    else if (i == "d") { i = "u" }
                    else if (i == "e") { i = "v" }
                    else if (i == "f") { i = "w" }
                    else if (i == "g") { i = "x" }
                    else if (i == "h") { i = "y" }
                    else if (i == "i") { i = "z" }
                    else if (i == "j") { i = "a" }
                    else if (i == "k") { i = "b" }
                    else if (i == "l") { i = "c" }
                    else if (i == "m") { i = "d" }
                    else if (i == "n") { i = "e" }
                    else if (i == "o") { i = "f" }
                    else if (i == "p") { i = "g" }
                    else if (i == "q") { i = "h" }
                    else if (i == "r") { i = "i" }
                    else if (i == "s") { i = "j" }
                    else if (i == "t") { i = "k" }
                    else if (i == "u") { i = "l" }
                    else if (i == "v") { i = "m" }
                    else if (i == "w") { i = "n" }
                    else if (i == "x") { i = "o" }
                    else if (i == "y") { i = "p" }
                    else if (i == "z") { i = "q" }
                    output += i

                    
                }
                else if (shift == "16") {
                    if (i == "a") { i = "q" }
                    else if (i == "b") { i = "r" }
                    else if (i == "c") { i = "s" }
                    else if (i == "d") { i = "t" }
                    else if (i == "e") { i = "u" }
                    else if (i == "f") { i = "v" }
                    else if (i == "g") { i = "w" }
                    else if (i == "h") { i = "x" }
                    else if (i == "i") { i = "y" }
                    else if (i == "j") { i = "z" }
                    else if (i == "k") { i = "a" }
                    else if (i == "l") { i = "b" }
                    else if (i == "m") { i = "c" }
                    else if (i == "n") { i = "d" }
                    else if (i == "o") { i = "e" }
                    else if (i == "p") { i = "f" }
                    else if (i == "q") { i = "g" }
                    else if (i == "r") { i = "h" }
                    else if (i == "s") { i = "i" }
                    else if (i == "t") { i = "j" }
                    else if (i == "u") { i = "k" }
                    else if (i == "v") { i = "l" }
                    else if (i == "w") { i = "m" }
                    else if (i == "x") { i = "n" }
                    else if (i == "y") { i = "o" }
                    else if (i == "z") { i = "p" }
                    output += i

                    
                }
                else if (shift == "15") {
                    if (i == "a") { i = "p" }
                    else if (i == "b") { i = "q" }
                    else if (i == "c") { i = "r" }
                    else if (i == "d") { i = "s" }
                    else if (i == "e") { i = "t" }
                    else if (i == "f") { i = "u" }
                    else if (i == "g") { i = "v" }
                    else if (i == "h") { i = "w" }
                    else if (i == "i") { i = "x" }
                    else if (i == "j") { i = "y" }
                    else if (i == "k") { i = "z" }
                    else if (i == "l") { i = "a" }
                    else if (i == "m") { i = "b" }
                    else if (i == "n") { i = "c" }
                    else if (i == "o") { i = "d" }
                    else if (i == "p") { i = "e" }
                    else if (i == "q") { i = "f" }
                    else if (i == "r") { i = "g" }
                    else if (i == "s") { i = "h" }
                    else if (i == "t") { i = "i" }
                    else if (i == "u") { i = "j" }
                    else if (i == "v") { i = "k" }
                    else if (i == "w") { i = "l" }
                    else if (i == "x") { i = "m" }
                    else if (i == "y") { i = "n" }
                    else if (i == "z") { i = "o" }
                    output += i

                    
                }
                else if (shift == "14") {
                    if (i == "a") { i = "o" }
                    else if (i == "b") { i = "p" }
                    else if (i == "c") { i = "q" }
                    else if (i == "d") { i = "r" }
                    else if (i == "e") { i = "s" }
                    else if (i == "f") { i = "t" }
                    else if (i == "g") { i = "u" }
                    else if (i == "h") { i = "v" }
                    else if (i == "i") { i = "w" }
                    else if (i == "j") { i = "x" }
                    else if (i == "k") { i = "y" }
                    else if (i == "l") { i = "z" }
                    else if (i == "m") { i = "a" }
                    else if (i == "n") { i = "b" }
                    else if (i == "o") { i = "c" }
                    else if (i == "p") { i = "d" }
                    else if (i == "q") { i = "e" }
                    else if (i == "r") { i = "f" }
                    else if (i == "s") { i = "g" }
                    else if (i == "t") { i = "h" }
                    else if (i == "u") { i = "i" }
                    else if (i == "v") { i = "j" }
                    else if (i == "w") { i = "k" }
                    else if (i == "x") { i = "l" }
                    else if (i == "y") { i = "m" }
                    else if (i == "z") { i = "n" }
                    output += i

                    
                }
                else if (shift == "13") {
                    if (i == "a") { i = "n" }
                    else if (i == "b") { i = "o" }
                    else if (i == "c") { i = "p" }
                    else if (i == "d") { i = "q" }
                    else if (i == "e") { i = "r" }
                    else if (i == "f") { i = "s" }
                    else if (i == "g") { i = "t" }
                    else if (i == "h") { i = "u" }
                    else if (i == "i") { i = "v" }
                    else if (i == "j") { i = "w" }
                    else if (i == "k") { i = "x" }
                    else if (i == "l") { i = "y" }
                    else if (i == "m") { i = "z" }
                    else if (i == "n") { i = "a" }
                    else if (i == "o") { i = "b" }
                    else if (i == "p") { i = "c" }
                    else if (i == "q") { i = "d" }
                    else if (i == "r") { i = "e" }
                    else if (i == "s") { i = "f" }
                    else if (i == "t") { i = "g" }
                    else if (i == "u") { i = "h" }
                    else if (i == "v") { i = "i" }
                    else if (i == "w") { i = "j" }
                    else if (i == "x") { i = "k" }
                    else if (i == "y") { i = "l" }
                    else if (i == "z") { i = "m" }
                    output += i

                    
                }else if (shift == "12") {
                    if (i == "a") { i = "m" }
                    else if (i == "b") { i = "n" }
                    else if (i == "c") { i = "o" }
                    else if (i == "d") { i = "p" }
                    else if (i == "e") { i = "q" }
                    else if (i == "f") { i = "r" }
                    else if (i == "g") { i = "s" }
                    else if (i == "h") { i = "t" }
                    else if (i == "i") { i = "u" }
                    else if (i == "j") { i = "v" }
                    else if (i == "k") { i = "w" }
                    else if (i == "l") { i = "x" }
                    else if (i == "m") { i = "y" }
                    else if (i == "n") { i = "z" }
                    else if (i == "o") { i = "a" }
                    else if (i == "p") { i = "b" }
                    else if (i == "q") { i = "c" }
                    else if (i == "r") { i = "d" }
                    else if (i == "s") { i = "e" }
                    else if (i == "t") { i = "f" }
                    else if (i == "u") { i = "g" }
                    else if (i == "v") { i = "h" }
                    else if (i == "w") { i = "i" }
                    else if (i == "x") { i = "j" }
                    else if (i == "y") { i = "k" }
                    else if (i == "z") { i = "l" }
                    output += i

                    
                }else if (shift == "11") {
                    if (i == "a") { i = "l" }
                    else if (i == "b") { i = "m" }
                    else if (i == "c") { i = "n" }
                    else if (i == "d") { i = "o" }
                    else if (i == "e") { i = "p" }
                    else if (i == "f") { i = "q" }
                    else if (i == "g") { i = "r" }
                    else if (i == "h") { i = "s" }
                    else if (i == "i") { i = "t" }
                    else if (i == "j") { i = "u" }
                    else if (i == "k") { i = "v" }
                    else if (i == "l") { i = "w" }
                    else if (i == "m") { i = "x" }
                    else if (i == "n") { i = "y" }
                    else if (i == "o") { i = "z" }
                    else if (i == "p") { i = "a" }
                    else if (i == "q") { i = "b" }
                    else if (i == "r") { i = "c" }
                    else if (i == "s") { i = "d" }
                    else if (i == "t") { i = "e" }
                    else if (i == "u") { i = "f" }
                    else if (i == "v") { i = "g" }
                    else if (i == "w") { i = "h" }
                    else if (i == "x") { i = "i" }
                    else if (i == "y") { i = "j" }
                    else if (i == "z") { i = "k" }
                    output += i

                    
                }else if (shift == "10") {
                    if (i == "a") { i = "k" }
                    else if (i == "b") { i = "l" }
                    else if (i == "c") { i = "m" }
                    else if (i == "d") { i = "n" }
                    else if (i == "e") { i = "o" }
                    else if (i == "f") { i = "p" }
                    else if (i == "g") { i = "q" }
                    else if (i == "h") { i = "r" }
                    else if (i == "i") { i = "s" }
                    else if (i == "j") { i = "t" }
                    else if (i == "k") { i = "u" }
                    else if (i == "l") { i = "v" }
                    else if (i == "m") { i = "w" }
                    else if (i == "n") { i = "x" }
                    else if (i == "o") { i = "y" }
                    else if (i == "p") { i = "z" }
                    else if (i == "q") { i = "a" }
                    else if (i == "r") { i = "b" }
                    else if (i == "s") { i = "c" }
                    else if (i == "t") { i = "d" }
                    else if (i == "u") { i = "e" }
                    else if (i == "v") { i = "f" }
                    else if (i == "w") { i = "g" }
                    else if (i == "x") { i = "h" }
                    else if (i == "y") { i = "i" }
                    else if (i == "z") { i = "j" }
                    output += i

                    
                }else if (shift == "9") {
                    if (i == "a") { i = "j" }
                    else if (i == "b") { i = "k" }
                    else if (i == "c") { i = "l" }
                    else if (i == "d") { i = "m" }
                    else if (i == "e") { i = "n" }
                    else if (i == "f") { i = "o" }
                    else if (i == "g") { i = "p" }
                    else if (i == "h") { i = "q" }
                    else if (i == "i") { i = "r" }
                    else if (i == "j") { i = "s" }
                    else if (i == "k") { i = "t" }
                    else if (i == "l") { i = "u" }
                    else if (i == "m") { i = "v" }
                    else if (i == "n") { i = "w" }
                    else if (i == "o") { i = "x" }
                    else if (i == "p") { i = "y" }
                    else if (i == "q") { i = "z" }
                    else if (i == "r") { i = "a" }
                    else if (i == "s") { i = "b" }
                    else if (i == "t") { i = "c" }
                    else if (i == "u") { i = "d" }
                    else if (i == "v") { i = "e" }
                    else if (i == "w") { i = "f" }
                    else if (i == "x") { i = "g" }
                    else if (i == "y") { i = "h" }
                    else if (i == "z") { i = "i" }
                    output += i

                    
                }else if (shift == "8") {
                    if (i == "a") { i = "i" }
                    else if (i == "b") { i = "j" }
                    else if (i == "c") { i = "k" }
                    else if (i == "d") { i = "l" }
                    else if (i == "e") { i = "m" }
                    else if (i == "f") { i = "n" }
                    else if (i == "g") { i = "o" }
                    else if (i == "h") { i = "p" }
                    else if (i == "i") { i = "q" }
                    else if (i == "j") { i = "r" }
                    else if (i == "k") { i = "s" }
                    else if (i == "l") { i = "t" }
                    else if (i == "m") { i = "u" }
                    else if (i == "n") { i = "v" }
                    else if (i == "o") { i = "w" }
                    else if (i == "p") { i = "x" }
                    else if (i == "q") { i = "y" }
                    else if (i == "r") { i = "z" }
                    else if (i == "s") { i = "a" }
                    else if (i == "t") { i = "b" }
                    else if (i == "u") { i = "c" }
                    else if (i == "v") { i = "d" }
                    else if (i == "w") { i = "e" }
                    else if (i == "x") { i = "f" }
                    else if (i == "y") { i = "g" }
                    else if (i == "z") { i = "h" }
                    output += i

                    
                }else if (shift == "7") {
                    if (i == "a") { i = "h" }
                    else if (i == "b") { i = "i" }
                    else if (i == "c") { i = "j" }
                    else if (i == "d") { i = "k" }
                    else if (i == "e") { i = "l" }
                    else if (i == "f") { i = "m" }
                    else if (i == "g") { i = "n" }
                    else if (i == "h") { i = "o" }
                    else if (i == "i") { i = "p" }
                    else if (i == "j") { i = "q" }
                    else if (i == "k") { i = "r" }
                    else if (i == "l") { i = "s" }
                    else if (i == "m") { i = "t" }
                    else if (i == "n") { i = "u" }
                    else if (i == "o") { i = "v" }
                    else if (i == "p") { i = "w" }
                    else if (i == "q") { i = "x" }
                    else if (i == "r") { i = "y" }
                    else if (i == "s") { i = "z" }
                    else if (i == "t") { i = "a" }
                    else if (i == "u") { i = "b" }
                    else if (i == "v") { i = "c" }
                    else if (i == "w") { i = "d" }
                    else if (i == "x") { i = "e" }
                    else if (i == "y") { i = "f" }
                    else if (i == "z") { i = "g" }
                    output += i

                    
                }else if (shift == "6") {
                    if (i == "a") { i = "g" }
                    else if (i == "b") { i = "h" }
                    else if (i == "c") { i = "i" }
                    else if (i == "d") { i = "j" }
                    else if (i == "e") { i = "k" }
                    else if (i == "f") { i = "l" }
                    else if (i == "g") { i = "m" }
                    else if (i == "h") { i = "n" }
                    else if (i == "i") { i = "o" }
                    else if (i == "j") { i = "p" }
                    else if (i == "k") { i = "q" }
                    else if (i == "l") { i = "r" }
                    else if (i == "m") { i = "s" }
                    else if (i == "n") { i = "t" }
                    else if (i == "o") { i = "u" }
                    else if (i == "p") { i = "v" }
                    else if (i == "q") { i = "w" }
                    else if (i == "r") { i = "x" }
                    else if (i == "s") { i = "y" }
                    else if (i == "t") { i = "z" }
                    else if (i == "u") { i = "a" }
                    else if (i == "v") { i = "b" }
                    else if (i == "w") { i = "c" }
                    else if (i == "x") { i = "d" }
                    else if (i == "y") { i = "e" }
                    else if (i == "z") { i = "f" }
                    output += i

                    
                }else if (shift == "5") {
                    if (i == "a") { i = "f" }
                    else if (i == "b") { i = "g" }
                    else if (i == "c") { i = "h" }
                    else if (i == "d") { i = "i" }
                    else if (i == "e") { i = "j" }
                    else if (i == "f") { i = "k" }
                    else if (i == "g") { i = "l" }
                    else if (i == "h") { i = "m" }
                    else if (i == "i") { i = "n" }
                    else if (i == "j") { i = "o" }
                    else if (i == "k") { i = "p" }
                    else if (i == "l") { i = "q" }
                    else if (i == "m") { i = "r" }
                    else if (i == "n") { i = "s" }
                    else if (i == "o") { i = "t" }
                    else if (i == "p") { i = "u" }
                    else if (i == "q") { i = "v" }
                    else if (i == "r") { i = "w" }
                    else if (i == "s") { i = "x" }
                    else if (i == "t") { i = "y" }
                    else if (i == "u") { i = "z" }
                    else if (i == "v") { i = "a" }
                    else if (i == "w") { i = "b" }
                    else if (i == "x") { i = "c" }
                    else if (i == "y") { i = "d" }
                    else if (i == "z") { i = "e" }
                    output += i

                    
                }else if (shift == "4") {
                    if (i == "a") { i = "e" }
                    else if (i == "b") { i = "f" }
                    else if (i == "c") { i = "g" }
                    else if (i == "d") { i = "h" }
                    else if (i == "e") { i = "i" }
                    else if (i == "f") { i = "j" }
                    else if (i == "g") { i = "k" }
                    else if (i == "h") { i = "l" }
                    else if (i == "i") { i = "m" }
                    else if (i == "j") { i = "n" }
                    else if (i == "k") { i = "o" }
                    else if (i == "l") { i = "p" }
                    else if (i == "m") { i = "q" }
                    else if (i == "n") { i = "r" }
                    else if (i == "o") { i = "s" }
                    else if (i == "p") { i = "t" }
                    else if (i == "q") { i = "u" }
                    else if (i == "r") { i = "v" }
                    else if (i == "s") { i = "w" }
                    else if (i == "t") { i = "x" }
                    else if (i == "u") { i = "y" }
                    else if (i == "v") { i = "z" }
                    else if (i == "w") { i = "a" }
                    else if (i == "x") { i = "b" }
                    else if (i == "y") { i = "c" }
                    else if (i == "z") { i = "d" }
                    output += i

                    
                }else if (shift == "3") {
                    if (i == "a") { i = "d" }
                    else if (i == "b") { i = "e" }
                    else if (i == "c") { i = "f" }
                    else if (i == "d") { i = "g" }
                    else if (i == "e") { i = "h" }
                    else if (i == "f") { i = "i" }
                    else if (i == "g") { i = "j" }
                    else if (i == "h") { i = "k" }
                    else if (i == "i") { i = "l" }
                    else if (i == "j") { i = "m" }
                    else if (i == "k") { i = "n" }
                    else if (i == "l") { i = "o" }
                    else if (i == "m") { i = "p" }
                    else if (i == "n") { i = "q" }
                    else if (i == "o") { i = "r" }
                    else if (i == "p") { i = "s" }
                    else if (i == "q") { i = "t" }
                    else if (i == "r") { i = "u" }
                    else if (i == "s") { i = "v" }
                    else if (i == "t") { i = "w" }
                    else if (i == "u") { i = "x" }
                    else if (i == "v") { i = "y" }
                    else if (i == "w") { i = "z" }
                    else if (i == "x") { i = "a" }
                    else if (i == "y") { i = "b" }
                    else if (i == "z") { i = "c" }
                    output += i

                    
                }
                else if (shift == "2") {
                    if (i == "a") { i = "c" }
                    else if (i == "b") { i = "d" }
                    else if (i == "c") { i = "e" }
                    else if (i == "d") { i = "f" }
                    else if (i == "e") { i = "g" }
                    else if (i == "f") { i = "h" }
                    else if (i == "g") { i = "i" }
                    else if (i == "h") { i = "j" }
                    else if (i == "i") { i = "k" }
                    else if (i == "j") { i = "l" }
                    else if (i == "k") { i = "m" }
                    else if (i == "l") { i = "n" }
                    else if (i == "m") { i = "o" }
                    else if (i == "n") { i = "p" }
                    else if (i == "o") { i = "q" }
                    else if (i == "p") { i = "r" }
                    else if (i == "q") { i = "s" }
                    else if (i == "r") { i = "t" }
                    else if (i == "s") { i = "u" }
                    else if (i == "t") { i = "v" }
                    else if (i == "u") { i = "w" }
                    else if (i == "v") { i = "x" }
                    else if (i == "w") { i = "y" }
                    else if (i == "x") { i = "z" }
                    else if (i == "y") { i = "a" }
                    else if (i == "z") { i = "b" }
                    output += i

                    
                }
                else if (shift == "1") {
                    if (i == "a") { i = "b" }
                    else if (i == "b") { i = "c" }
                    else if (i == "c") { i = "d" }
                    else if (i == "d") { i = "e" }
                    else if (i == "e") { i = "f" }
                    else if (i == "f") { i = "g" }
                    else if (i == "g") { i = "h" }
                    else if (i == "h") { i = "i" }
                    else if (i == "i") { i = "j" }
                    else if (i == "j") { i = "k" }
                    else if (i == "k") { i = "l" }
                    else if (i == "l") { i = "m" }
                    else if (i == "m") { i = "n" }
                    else if (i == "n") { i = "o" }
                    else if (i == "o") { i = "p" }
                    else if (i == "p") { i = "q" }
                    else if (i == "q") { i = "r" }
                    else if (i == "r") { i = "s" }
                    else if (i == "s") { i = "t" }
                    else if (i == "t") { i = "u" }
                    else if (i == "u") { i = "v" }
                    else if (i == "v") { i = "w" }
                    else if (i == "w") { i = "x" }
                    else if (i == "x") { i = "y" }
                    else if (i == "y") { i = "z" }
                    else if (i == "z") { i = "a" }
                    output += i}

        
        }
    }
}
    //outputting output to the paragraph
    p=document.getElementById("p")
    p.innerHTML = output
})

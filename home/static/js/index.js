let language = "spanish"; 

function j() {
    let p1english = document.getElementById('p1-english');
    let p1spanish = document.getElementById('p1-spanish');
    let p2english = document.getElementById('p2-english');
    let p2spanish = document.getElementById('p2-spanish');

    setLanguage(); 

    if (language == "spanish") {
        p1english.style.scale = 0; 
        p2english.style.scale = 0; 
        p1spanish.style.scale = 1; 
        p2spanish.style.scale = 1; 
        
        p1english.style.animation = ""; 
        p2english.style.animation = ""; 
        p1spanish.style.animation = ""; 
        p2spanish.style.animation = "";
         
    } else {
        p1english.style.scale = 1; 
        p2english.style.scale = 1; 
        p1spanish.style.scale = 0; 
        p2spanish.style.scale = 0; 
    }
    

    // alert(language); 
}

function init() {
    language = "spanish";
}

function setLanguage() {
    if (language == "english") {
        language = "spanish";
    } else if (language == "spanish") {
        language = "english"; 
    }

}
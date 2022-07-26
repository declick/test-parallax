//localStorage.setItem("clé","valeur")
//localStorage.getItem("clé")
//localStorage.clear();
//JSON.stringify(objet) // transforme objet en string
//JSON.parse(string)  //transforme string en 


const local = JSON.parse(localStorage.getItem("user"));

if (local != null) {
    
    //un peu de css pour faire jolie
    clear.style.display = "none";
    button.style.display = "none";
    pseudo.style.display = "none";
    h2.textContent = `近Lets Go設${local.player}計`;
}

button.onclick = () => {
    const user = {
        player: pseudo.value,
    }

    localStorage.setItem("user", JSON.stringify(user));
    //permet de rafraichir la page
    document.location.reload();
}

clear.onclick = () => {
    localStorage.clear();
    //permet de rafraichir la page
    document.location.reload();
}

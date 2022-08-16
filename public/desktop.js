const git = document.getElementById("gitPortfolio");
const mainMenu = document.getElementsByClassName("pcwindow")

function showGit() {
    if (git.style.display === "none") {
        document.getElementById("windowsContainer").style.display = "none"

        git.style.display = "flex";
        for(let i = 0; i < mainMenu.length; i++){
            mainMenu[i].style.display = "none";
        }
    } else {
        clearAll()
    }
}

function showMenu(){
    if (mainMenu[0].style.display === "none") {
        clearAll()
        document.getElementById("windowsContainer").style.display = "flex"
        for(let i = 0; i < mainMenu.length; i++){
            mainMenu[i].style.display = "flex";
        }
    } else {
        clearAll()
    }
}

function clearAll(){
    git.style.display = "none";
    for(let i = 0; i < mainMenu.length; i++){
        mainMenu[i].style.display = "none";
    }
    document.getElementById("windowsContainer").style.display = "none";

}


const help = document.getElementById("help");
help.addEventListener("animationend", (ev) => {
    if (ev.type === "animationend") {
        help.style.display = "none";
    }
}, false);



/*Listeners*/
document.getElementById("menuButton").addEventListener('click', showMenu)
document.getElementById("closeButton").addEventListener('click', showGit)
document.getElementById("startup1").addEventListener('click', showGit)
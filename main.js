//two set of elements
// switching between different content sections
const tabLinks = document.getElementsByClassName("tab-links");
// making the content sections corresponding to each tab
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName){
    //removes active class ensure only selected tab is active
    for (tabLink of tabLinks){
        tabLink.classList.remove("active-link")
    }
    for (tabContent of tabContents){
        tabContent.classList.remove("active-tab")
    }
    //then adds active class to clicked tab link to highlight it
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
};

//sidemenu containing navigation links once in a small screen
const sideMenu = document.getElementById("sidemenu");

function openMenu(){
    sideMenu.style.right = "0";
}
function closeMenu(){
    sideMenu.style.right = "-200px";
}
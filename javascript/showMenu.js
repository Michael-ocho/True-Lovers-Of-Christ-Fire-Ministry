// function showMenu(){
//     var menu = document.querySelector('.nav2 ul');
//     menu.style.display = 'flex';
// }


function showMenu() {
    const menu = document.querySelector('.nav2 ul'); // Select the dropdown menu
    if (menu.style.display === 'block') {
        menu.style.display = 'none'; // Hide the menu if it's currently visible
    } else {
        menu.style.display = 'block'; // Show the menu if it's currently hidden
    }
}

function hideMenu(){
    var menu = document.querySelector('.nav2');
    menu.style.display = 'none';
}



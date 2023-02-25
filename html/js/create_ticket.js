document.getElementById('full_screen').onclick = function() {
    let ticket = document.getElementById('ticket');
    ticket.style.width = "100vw";
    ticket.style.height = "100vh";
    ticket.style.position = "fixed";
    ticket.style.top = "0";
    ticket.style.left = "0";

    let full_screen = document.getElementById('full_screen');
    full_screen.style.display = "none"
    full_screen.style.opacity = "0"
    
    let normal_screen = document.getElementById('normal_screen');
    normal_screen.style.display = "block"
    normal_screen.style.opacity = "1";
}

document.getElementById('normal_screen').onclick = function() {
    let ticket = document.getElementById('ticket');
    ticket.style.width = "40%";
    ticket.style.height = "100%";
    ticket.style.position = "relative";

    let full_screen = document.getElementById('full_screen');
    full_screen.style.display = "block"
    full_screen.style.opacity = "1"
    
    let normal_screen = document.getElementById('normal_screen');
    normal_screen.style.display = "none"
    normal_screen.style.opacity = "0";
}
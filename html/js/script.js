var no_akt = true
document.querySelector('.setup-btn').onclick = function() {
    if (no_akt){
        document.getElementById('list').classList.remove("no_aktivate")
        no_akt = false
    } else {
        document.getElementById('list').classList.add("no_aktivate")
        no_akt = true
    }
}
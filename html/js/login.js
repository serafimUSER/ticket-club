var btn_akt = true;
document.getElementById('btn').onclick = function () {
    let i = document.getElementById('i_check');
    if (btn_akt) {
        i.style.opacity = "1";
        document.getElementById('remeber').checked = btn_akt;
        btn_akt = false;
    } else {
        i.style.opacity = "0";
        document.getElementById('remeber').checked = btn_akt;
        btn_akt = true;
    }
}
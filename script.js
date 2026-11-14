const tlacitko = document.getElementById("doporucit");
const vysledek = document.getElementById("vysledek");
const napoje = ["Espresso", "Cappuccino", "Caffè Latte", "Horká čokoláda"];
function doporucKavu() {
 const nahodneCislo = Math.floor(Math.random() * napoje.length);
 vysledek.textContent = "Dnes doporučujeme: " + napoje[nahodneCislo] + " ☕";
}
tlacitko.addEventListener("click", doporucKavu);
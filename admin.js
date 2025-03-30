document.addEventListener("DOMContentLoaded", function () {
    updateBets(); // Load bets on page load
});

// ✅ Admin Winner Set Function
function setResult(color) {
    localStorage.setItem("adminWinner", color);
    alert(`✅ Winner set to ${color.toUpperCase()}!`);
}

// ✅ Bets Update Function
function updateBets() {
    let bets = JSON.parse(localStorage.getItem("bets")) || [];
    
    let redBets = bets.filter(bet => bet.color === "red").length;
    let greenBets = bets.filter(bet => bet.color === "green").length;
    let totalUsers = bets.length;

    document.getElementById("redBets").innerText = redBets;
    document.getElementById("greenBets").innerText = greenBets;
    document.getElementById("totalUsersBet").innerText = totalUsers;

    let betList = document.getElementById("betList");
    betList.innerHTML = "";
    
    bets.forEach((bet, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `User ${index + 1}: Bet ₹${bet.amount} on ${bet.color.toUpperCase()}`;
        betList.appendChild(listItem);
    });

    setTimeout(updateBets, 5000); // Auto refresh every 5 sec
}

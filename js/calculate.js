// Input Value Common Function
function inputValue(inputId) {
	let input = document.getElementById(inputId);
	let inputValue = parseFloat(input.value);
	//   Error Handling
	if (isNaN(inputValue) || inputValue < 0) {
		input.style.border = "2px solid red";
	} else {
		return inputValue;
	}
}
// Calculate Button Function
document.getElementById("btn-calculate").addEventListener("click", function () {
	let playerValue = inputValue("player-rate-field");

	let players = document.getElementById("select-player");
	let playersValue = players.children.length;

	let totalPlayersAmount = playerValue * playersValue;

	let totalAmount = document.getElementById("player-expense");
	totalAmount.innerText = totalPlayersAmount;
});

// Calculate Total Button
document
	.getElementById("btn-total-calculate")
	.addEventListener("click", function () {
		let players = document.getElementById("player-expense");
		let playersAmountTotal = parseFloat(players.innerText);
		let managerAmount = inputValue("manager-fee-field");
		let coachAmount = inputValue("coach-fee-field");

		let totalAmount = playersAmountTotal + managerAmount + coachAmount;

		let total = document.getElementById("total-expense");
		total.innerText = totalAmount;
	});

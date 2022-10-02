// Player List Length Function
function playerLength(playerLength) {
	const playerL = playerLength;
	return playerL;
}
// Player List Find Event Listener
document.getElementById("players").addEventListener("click", function (e) {
	const playerName = e.target.parentNode.childNodes[1].innerText;
	const playerContainer = document.getElementById("select-player");
	const playerList = document.createElement("li");
	playerList.classList.add("player-list");
	playerList.innerText = playerName;
	playerContainer.appendChild(playerList);
	// const playerListE = playerList.parentNode.childNodes.length;
	// if (playerListE.length >= "5") {
	// 	playerList.classList.return("player-list");
	// }
});
// Calculate Event Listener
document.getElementById("btn-calculate").addEventListener("click", function () {
	const perPlayerRateField = document.getElementById("player-rate-field");
	const perPlayerRateString = perPlayerRateField.value;
	const perPlayerRate = parseInt(perPlayerRateString);

	const playerListLengthElement = document.querySelectorAll(".player-list");
	let playerNumber = playerListLengthElement.length;

	const playerExpenseField = document.getElementById("player-expense");
	const playerExpenseString = playerExpenseField.innerText;
	const previousPlayerExpense = parseInt(playerExpenseString);

	const playerNewExpense = previousPlayerExpense + perPlayerRate * playerNumber;
	playerExpenseField.innerText = playerNewExpense;
});
// Total Calculate Event Listener
document
	.getElementById("btn-total-calculate")
	.addEventListener("click", function () {
		const playerListLengthElement = document.querySelectorAll(".player-list");
		let playerNumber = playerListLengthElement.length;

		const playerExpenseField = document.getElementById("player-expense");
		const playerExpenseString = playerExpenseField.innerText;
		const previousPlayerExpense = parseInt(playerExpenseString);

		const managerFeeField = document.getElementById("manager-fee-field");
		const managerFeeFieldString = managerFeeField.value;
		const managerFee = parseInt(managerFeeFieldString);

		const coachFeeField = document.getElementById("coach-fee-field");
		const coachFeeFieldString = coachFeeField.value;
		const coachFee = parseInt(coachFeeFieldString);

		const totalExpenseElement = document.getElementById("total-expense");
		totalExpenseElement.innerText =
			previousPlayerExpense + managerFee + coachFee;
	});

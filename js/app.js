﻿// Player List Length Function
function playerLength(playerLength) {
	const playerL = playerLength;
	return playerL;
}
function getFieldValueById(elementId) {
	const playerExpenseField = document.getElementById(elementId);
	const playerExpenseString = playerExpenseField.innerText;
	const previousPlayerExpense = parseInt(playerExpenseString);
	return previousPlayerExpense;
}
function getElementValueById(elementId) {
	const managerFeeField = document.getElementById(elementId);
	const managerFeeFieldString = managerFeeField.value;
	const managerFee = parseInt(managerFeeFieldString);
	return managerFee;
}
// Player List Find Event Listener
document.getElementById("players").addEventListener("click", function (e) {
	const playerName = e.target.parentNode.childNodes[1].innerText;
	const playerContainer = document.getElementById("select-player");
	const playerList = document.createElement("li");
	playerList.classList.add("player-list");
	playerList.innerText = playerName;
	playerContainer.appendChild(playerList);
});
// Calculate Event Listener
document.getElementById("btn-calculate").addEventListener("click", function () {
	const perPlayerRate = getElementValueById("player-rate-field");

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
		const previousPlayerExpense = getFieldValueById("player-expense");

		const managerFee = getElementValueById("manager-fee-field");
		const coachFee = getElementValueById("coach-fee-field");

		const totalExpenseElement = document.getElementById("total-expense");
		totalExpenseElement.innerText =
			previousPlayerExpense + managerFee + coachFee;
	});

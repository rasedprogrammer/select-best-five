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

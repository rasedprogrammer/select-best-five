// Player List Find Event Listener
document.getElementById("players").addEventListener("click", function (event) {
	const playerContainer = document.getElementById("select-player");
	if (
		event.target.innerText == "Select" &&
		playerContainer.children.length < 5
	) {
		let btn = event.target;
		btn.setAttribute("disabled", "");
		btn.style.backgroundColor = "gray";

		let playerName = event.target.parentElement.firstElementChild.innerText;
		let newList = document.createElement("li");
		newList.innerText = playerName;
		playerContainer.appendChild(newList);
	} else if (
		event.target.innerText == "Select" &&
		playerContainer.children.length >= 5
	) {
		alert("5 Player Selection Done!");
	}
});

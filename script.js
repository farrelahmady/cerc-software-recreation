const checkBox = document.querySelectorAll("input[type=checkbox]");
const resetBtn = document.querySelector("button");

checkBox.forEach((box) => {
	box.addEventListener("change", (e) => {
		if (e.target.checked === true) {
			e.target.disabled = true;
		}
	});
});

resetBtn.addEventListener("click", () => {
	checkBox.forEach((box) => {
		box.checked = false;
		box.disabled = false;
	});
});

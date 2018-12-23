const header = document.querySelector(".rise");
header.innerHTML=spranWrap(header.textContent);

function spranWrap (word) {
return [...word].map(letter => `<span>${letter}</span>`).join("");
}
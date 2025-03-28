const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.textContent = "no";
  setTimeout(() => {
    btn.textContent = "Press me";
  },);
});

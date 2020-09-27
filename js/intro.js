function hideIntro() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("in-game-help-text").style.display = "block";
  document.getElementById("cards-grid").classList.remove("disable-cards-grid");
}

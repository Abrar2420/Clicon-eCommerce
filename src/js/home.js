// storing the banner remove button
const removeBanner = document.querySelector("#remove-banner");
// storing the banner part
const banner = document.querySelector("#banner");
// appling dospaly none when remove banner btn is clicked
removeBanner.addEventListener("click", () => {
  banner.classList.add("hidden");
});

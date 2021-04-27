function toggleMoreLess(moreId, toggleBtn) {
  var moreText = document.getElementById(moreId);
  var aText = document.getElementById(toggleBtn);

  if (moreText.style.display === "inline") {
    aText.innerHTML = '<i class="fa fa-chevron-down" aria-hidden="true"></i> More';
    moreText.style.display = "none";
  } else {
    aText.innerHTML = '<i class="fa fa-chevron-up" aria-hidden="true"></i> Less';
    moreText.style.display = "inline";
  }
}
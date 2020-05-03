function openLink(e) {
  var t = (100 + 100 * localStorage.getItem("counterAds")) / 100;
  localStorage.setItem("counterAds", t);
  var o = (i = JSON.parse(localStorage.getItem("item")))[7],
    a = i[2];

  if ((console.log("admobLimit" + a), "admobRunning" == o && a > 0)) {
    var i = JSON.parse(localStorage.getItem("item"));
    if (localStorage.getItem("counterAds") == (a = i[2])) {
      var n = $(e).attr("webLink");
      localStorage.setItem("openWebUrl", n),
        localStorage.setItem("counterAds", "0"),
        showIndustrialAd();
    } else {
      var n = $(e).attr("webLink");
      window.open(n, "_blank");
    }
  } else {
    var n = $(e).attr("webLink");
    window.open(n, "_blank");
  }
}

function mainarea() {
  if (navigator.network.connection.type == Connection.NONE) {
    StatusBar.hide();
    //$(".loader").removeClass('hide');
    window.location.href = "noconnection.html";
    StatusBar.show();
  } else {
    StatusBar.hide();
    localStorage.setItem("openWebUrl", "");
    localStorage.setItem("openVideoModelId", "0");
    localStorage.setItem("runVideoId", "0");
    localStorage.setItem("category_id_wallpaper", "0");
    localStorage.setItem("runVideoplatform", "0");
    localStorage.setItem("interAdshown", "0");
    localStorage.setItem("runVideoPlayers", "0");
    localStorage.setItem("counterAds", "0");
    cordova.getAppVersion.getPackageName(function(pkgname) {
    functionService.getallFunctions(pkgname);
    });
    //allfunctions load
    StatusBar.show();
    $(".my_lazy_loader").removeClass("hide");
    // setInterval(function(){ ajaxContinuesly();  }, 7000);
  }
}

function ajaxContinuesly() {
  if (navigator.network.connection.type == Connection.NONE) {
    if (confirm("Please check Your Network Connection")) {
      window.location.href = "noconnection.html";
    } else {
      window.location.href = "index.html";
    }
  } else {
    cordova.getAppVersion.getPackageName(function (pkgname) {
      functionService.functionrequestduringIntervel(pkgname);
    });
  }
}

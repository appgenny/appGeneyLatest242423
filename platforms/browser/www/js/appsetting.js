var appSettings = {
  getApplicationSetting: function (o) {
    var a = request.ajaxSettings(
      utility.get_application_setting,
      o,
      utility.base_url_api
    );
    $.ajax(a).done(function (o) {
      console.log(o);
      var a = [];
      1 == o.IsActive
        ? ($("#mainSlider").css("display", "block"),
          $(".latest-blog").css("display", "block"))
        : ($("#mainSlider").css("display", "none"),
          $(".latest-blog").css("display", "none"));
      var r = o.RowDisplay;
      1 == r
        ? a.push("s12")
        : 2 == r
        ? a.push("s6")
        : 3 == r
        ? a.push("s4")
        : 4 == r && a.push("s3");
      var t = o.Log.split("~");
      (t = utility.base_url + t[1]),
        $("#logo_src").attr("src", t),
        $(".model_logo_img").attr("src", t);
      var i = o.LayoutBackGround.split("~");
      (i = utility.base_url + i[1]),
        $(".complete").css("background-image", "url(" + i + ")"),
        $(".getname").html(o.Title),
        "" == o.Discraption || null == o.Discraption
          ? $(".descriptionDiv .entry").css("display", "none")
          : $("#descriptionId").html(o.Discraption),
        $(".navbar").css("display", "block"),
        $(".descriptionDiv").css("display", "block"),
        $(".backgroundClor").css("background-color", o.ActionBarColor),
        $("body").css("background-color", o.ListingItemBackgroundColor),
        $(".slider-slick .overlay").css(
          "background",
          "linear-gradient(to left," + o.ActionBarColor + ", #c4c4c4)"
        ),
        $(".slider-slick .overlay").css(
          "background",
          "-webkit-linear-gradient(to left," + o.ActionBarColor + ", #c4c4c4)"
        ),
        $(".w3-bar").css("background-color", o.ActionBarColor),
        StatusBar.backgroundColorByHexString("#000");
      var s = "5px solid  " + o.ActionBarColor;
      $("#backbutton .main_bar").css("border-bottom", s),
        $(".my_lazy_loader .getname").css(
          "border-bottom",
          "2px solid  " + o.ActionBarColor
        ),
        $(".my_lazy_loader .getname").css("color", o.ActionBarColor),
        $(".exit_app").html(o.Title),
        $(".exit_app").css("color", o.ActionBarColor);
      var l = "-webkit-linear-gradient(#000," + o.ActionBarColor + ")";
      $(".lazy_loader_text").css("background", l),
        $("#searchModel").css("background", l);
      var c = o.NotificationOneSignalId;
      a.push(c);
      var e = o.AdMobLimit;
      a.push(e);
      var n = o.AdMobBannerId;
      a.push(n);
      var d = o.AdMobInterstitialId;
      a.push(d),
        1 == o.IncludeHeader ? a.push("includeTitle") : a.push("withoutTitle");
      var u = o.YouTubeApiKey;
      "" != u ? a.push(u) : a.push("AIzaSyBJYIzXYEbGuYQz303OtNCqtko41QnmpK8"),
        1 == o.AdMob ? a.push("admobRunning") : a.push("admobStop");
      var p = { replace_package: o.ReplacePkg };
      var isYoutubePost = o.IsYoutubePost;
      localStorage.setItem("isYoutubePost", isYoutubePost),
        localStorage.setItem("item", JSON.stringify(a)),
        localStorage.setItem("replacePackage", JSON.stringify(p));
    });
  },
};
function appSettingInterval(o) {
  var a = request.ajaxSettings(
    utility.get_application_setting,
    o,
    utility.base_url_api
  );
  $.ajax(a)
    .done(function (o) {
      var a = o.Log.split("~");
      (a = utility.base_url + a[1]), o.RowDisplay;
      $("#logo_src").attr("src", a),
        $(".model_logo_img").attr("src", a),
        $(".getname").html(o.Title),
        "" == o.Discraption || null == o.Discraption
          ? $(".descriptionDiv .entry").css("display", "none")
          : $("#descriptionId").html(o.Discraption),
        $(".backgroundClor").css("background-color", o.ActionBarColor),
        $("body").css("background-color", o.ListingItemBackgroundColor),
        $(".slider-slick .overlay").css(
          "background",
          "linear-gradient(to left," + o.ActionBarColor + ", #c4c4c4)"
        ),
        $(".slider-slick .overlay").css(
          "background",
          "-webkit-linear-gradient(to left," + o.ActionBarColor + ", #c4c4c4)"
        ),
        $(".w3-bar").css("background-color", o.ActionBarColor);
    })
    .error(function (o) {
      window.location.href = "ajaxissue.html";
    });
}

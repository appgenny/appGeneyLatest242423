function getAllPost(postSize, pakgeName) {
  sliderSettings.getApplicationCarousel(pakgeName);
  var settings = request.ajaxSettings(
    utility.get_all_post,
    pakgeName,
    utility.base_url_api2
  );
  var html = "";
  $.ajax(settings).done(function (response) {
    $.each(response, function (key, myresponse) {
      /* video data */
      var image_url = myresponse.Url.split("~");
      var image = utility.base_url + image_url[1];
      var response = JSON.parse(localStorage.getItem("item"));
      var checkTitle = response[5];
      var subcategoryId = myresponse.SubcategoryId;
      var $title = myresponse.Title;
      if (myresponse.Active == true) {
        if (
          myresponse.Type == "Video" &&
          (myresponse.RedirectApp == "" || myresponse.RedirectApp == null) &&
          (myresponse.WebUrl == "" || myresponse.WebUrl == null)
        ) {
          html +=
            '<a class="single_post_view" data-toggle="modal" id="' +
            myresponse.Id +
            '" onclick="openVideoModel(this)" >';
          html +=
            '<div  style="margin-bottom:3px;" class="col eachsize ' +
            postSize +
            '" >';
          html += '<div class="entry ">';
          if (postSize == "s4") {
            html +=
              '<img class="lazyload" style="min-height:100px" src="img/imageloading.gif" data-src="' +
              image +
              '" alt="" >';
          } else if (postSize == "s6") {
            html +=
              '<img class="lazyload" style="min-height:150px" src="img/imageloading.gif" data-src="' +
              image +
              '" alt="" >';
          } else if (postSize == "s12") {
            html +=
              '<img class="lazyload" style="min-height:150px" src="img/imageloading.gif" data-src="' +
              image +
              '" alt="" >';
          } else {
            html +=
              '<img class="lazyload" style="min-height:150px" src="img/imageloading.gif" data-src="' +
              image +
              '" alt="" >';
          }

          if (checkTitle == "withoutTitle") {
            html += "";
          } else if (
            checkTitle != "withoutTitle" &&
            (myresponse.Title === null || myresponse.Title == "")
          ) {
            html += '<div class="desc">';
            html += '<p style="text-align:center;">No Title</p>';
            html += "</div>";
          } else {
            if ($title.length < 17) {
              html += '<div class="desc">';
              html +=
                '<p style="text-align:center;">' + myresponse.Title + "</p>";
              html += "</div>";
            } else {
              html += '<div class="desc">';
              html +=
                '<p style="text-align:center;">' +
                $title.slice(0, 15) +
                ".." +
                "</p>";
              html += "</div>";
            }
          }
          html += "</div>";
          html += "</div>";
          html += "</a>";
        }

        if (myresponse.Type == "Wallpaper") {
          html +=
            '<a  class="single_post_view" data-toggle="modal" row_id ="' +
            postSize +
            '" category_id ="' +
            subcategoryId +
            '" onclick="openWallpaper(this)" >';
          html +=
            '<div  style="margin-bottom: 5px;" class="col eachsize ' +
            postSize +
            '" >';
          html += '<div class="entry ">';
          if (postSize == "s4") {
            html +=
              '<img class="lazyload" style="min-height:100px" src="img/imageloading.gif" data-src="' +
              image +
              '" alt="" >';
          } else if (postSize == "s6") {
            html +=
              '<img class="lazyload" style="min-height:150px" src="img/imageloading.gif" data-src="' +
              image +
              '" alt="" >';
          } else if (postSize == "s12") {
            html +=
              '<img class="lazyload" style="min-height:150px" src="img/imageloading.gif" data-src="' +
              image +
              '" alt="" >';
          } else {
            html +=
              '<img class="lazyload" style="min-height:150px" src="img/imageloading.gif" data-src="' +
              image +
              '" alt="" >';
          }
          if (checkTitle == "withoutTitle") {
            html += "";
          } else if (
            checkTitle != "withoutTitle" &&
            (myresponse.Title === null || myresponse.Title == "")
          ) {
            html += '<div class="desc">';
            html += '<p style="text-align:center;">No Title</p>';
            html += "</div>";
          } else {
            html += '<div class="desc">';
            html +=
              '<p style="text-align:center;">' + myresponse.Title + "</p>";
            html += "</div>";
          }
          html += "</div>";
          html += "</div>";
          html += "</a>";
        }

        //redierect app
        if (
          myresponse.Type == "Redirect" ||
          (myresponse.Type == "Video" &&
            myresponse.RedirectApp != "" &&
            myresponse.RedirectApp != null)
        ) {
          if (myresponse.RedirectApp != "") {
            html +=
              '<a class="single_post_view" webLink="https://play.google.com/store/apps/details?id=' +
              myresponse.RedirectApp +
              '"  onclick="openLink(this)">';

            html +=
              '<div  style="margin-bottom: 3px;" class="col eachsize ' +
              postSize +
              '" >';
            html += '<div class="entry">';
            if (postSize == "s4") {
              html +=
                '<img class="lazyload" style="min-height:100px" src="img/imageloading.gif" data-src="' +
                image +
                '" alt="" >';
            } else if (postSize == "s6") {
              html +=
                '<img class="lazyload" style="min-height:150px" src="img/imageloading.gif" data-src="' +
                image +
                '" alt="" >';
            } else if (postSize == "s12") {
              html +=
                '<img class="lazyload" style="min-height:150px" src="img/imageloading.gif" data-src="' +
                image +
                '" alt="" >';
            } else {
              html +=
                '<img class="lazyload" style="min-height:150px" src="img/imageloading.gif" data-src="' +
                image +
                '" alt="" >';
            }

            if (checkTitle == "withoutTitle") {
              html += "";
            } else if (
              checkTitle != "withoutTitle" &&
              (myresponse.Title === null || myresponse.Title == "")
            ) {
              html += '<div class="desc">';
              html += '<p style="text-align:center;">No Title</p>';
              html += "</div>";
            } else {
              html += '<div class="desc">';
              html +=
                '<p style="text-align:center;">' + myresponse.Title + "</p>";
              html += "</div>";
            }

            html += "</div>";
            html += "</div>";
            html += "</a>";
          }
        }

        if (
          myresponse.Type == "WebUrl" ||
          (myresponse.Type == "Video" &&
            myresponse.WebUrl != "" &&
            myresponse.WebUrl != null)
        ) {
          if (myresponse.WebUrl != "") {
            html +=
              '<a class="single_post_view" webLink="' +
              myresponse.WebUrl +
              '"  onclick="openLink(this)" >';
            html +=
              '<div  style="margin-bottom: 3px;" class="col eachsize ' +
              postSize +
              '" >';
            html += '<div class="entry">';
            if (postSize == "s4") {
              html +=
                '<img class="lazyload" style="min-height:100px" src="img/imageloading.gif" data-src="' +
                image +
                '" alt="" >';
            } else if (postSize == "s6") {
              html +=
                '<img class="lazyload" style="min-height:150px" src="img/imageloading.gif" data-src="' +
                image +
                '" alt="" >';
            } else if (postSize == "s12") {
              html +=
                '<img class="lazyload" style="min-height:150px" src="img/imageloading.gif" data-src="' +
                image +
                '" alt="" >';
            } else {
              html +=
                '<img class="lazyload" style="min-height:150px" src="img/imageloading.gif" data-src="' +
                image +
                '" alt="" >';
            }

            if (checkTitle == "withoutTitle") {
              html += "";
            } else if (
              checkTitle != "withoutTitle" &&
              (myresponse.Title === null || myresponse.Title == "")
            ) {
              html += '<div class="desc">';
              html += '<p style="text-align:center;">No Title</p>';
              html += "</div>";
            } else {
              html += '<div class="desc">';
              html +=
                '<p style="text-align:center;">' + myresponse.Title + "</p>";
              html += "</div>";
            }

            html += "</div>";
            html += "</div>";
            html += "</a>";
          }
        }
      }
    });
    $("#main_content").html(html);
    lazyload();
    $(".my_lazy_loader").hide();
    $(".complete").removeClass("hide");
  });
}

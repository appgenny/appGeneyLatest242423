function getyoutubeVideoByplaylistSearch(e, o) {
    var response = JSON.parse((localStorage.getItem("item")));
    var youtubekey = response[6];
    var t = {
        async: !0,
        crossDomain: !0,
        url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=" + o + "&playlistId=" + e + "&key=AIzaSyAxfR8e3JY8Xg6WNxmdEiko6p7i0xoKxDU&videoEmbeddable=true&videoSyndicated=true",
        method: "GET",
        headers: {
            "cache-control": "no-cache",
            "Postman-Token": "386e8433-0d24-4ee1-88b2-b0508091c0d7"
        }
    };
    $.ajax(t).done(function(e) {
        var o = e.items,
            t = "";
        console.log(o), $.each(o, function(e, o) {
            var i = o.snippet.resourceId.videoId,
                l = o.snippet.title;
            if (l.length < 50) var a = l;
            else a = l.slice(0, 40) + "...";
            var s = o.snippet.thumbnails.high.url;
            t += '<div style="margin-bottom:10px;" class="col s12 single_post_view">', t += '<div class="entry video_list_div">', t += '<a vedioId="' + i + '" platform="youtube" style="color:#000 !important" onclick="videoModel(this)" >', t += '<img class="lazyloadingImage" src="' + s + '" alt="" style="padding: 4px;border: 1px solid #c4c4c4;width: 100%;max-height: 235px;">', t += "</a>", t += '<div class="desc">', t += '<a vedioId="' + i + '" platform="youtube" style="color:#000 !important" onclick="videoModel(this)" ><h4 style="font-size: 26px;margin-left: 2px;font-family: timenewroman;font-weight: bold;padding-top: 8px;">' + a + "</h4></a>", t += "</div>", t += "</div>"
        }), $("#video_list").html(t), $(".my_lazy_loader").hide(), $("#video_list").css("display", "block"), $("#search_video_list").css("display", "block")
    })
}

function getyoutubeVideoBySearch(e, o, t) {
    var youtubeKey = JSON.parse(localStorage.getItem("item"))[6];
    var i = encodeURI("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + e + "&type=" + o + "&maxResults=" + t + "&key=AIzaSyAxfR8e3JY8Xg6WNxmdEiko6p7i0xoKxDU&videoEmbeddable=true&videoSyndicated=true");
    $.ajax({
        type: "GET",
        url: i,
        success: function(e) {
            var o = e.items,
                t = "";
            $.each(o, function(e, o) {
                var i = o.id.videoId,
                    l = o.snippet.title;
                if (l.length < 50) var a = l;
                else a = l.slice(0, 40) + "...";
                var s = o.snippet.thumbnails.high.url;
                t += '<div style="margin-bottom:10px;" class="col s12 single_post_view">', t += '<div class="entry video_list_div">', t += '<a vedioId="' + i + '" platform="youtube" style="color:#000 !important" onclick="videoModel(this)" >', t += '<img class="lazyloadingImage" src="' + s + '" alt="" style="padding: 4px;border: 1px solid #c4c4c4;width: 100%;max-height: 235px;">', t += "</a>", t += '<div class="desc">', t += '<a vedioId="' + i + '" platform="youtube" style="color:#000 !important" onclick="videoModel(this)" ><h4 style="font-size: 26px;margin-left: 2px;font-family: timenewroman;font-weight: bold;padding-top: 8px;">' + a + "</h4></a>", t += "</div>", t += "</div>"
            }), $("#video_list").html(t), $(".my_lazy_loader").hide(), $("#video_list").css("display", "block"), $("#search_video_list").css("display", "block")
        },
        error: function(e) {
            console.log(e)
        }
    })
}

function getDailymotionBySearch(e, o) {
    var t = encodeURI("https://api.dailymotion.com/videos?search=" + e + "&limit=" + o);
    $.ajax({
        type: "GET",
        url: t,
        success: function(e) {
            var o = e.list,
                t = "";
            $.each(o, function(e, o) {
                var i = o.id,
                    l = o.title;
                if (l.length < 50) var a = l;
                else a = l.slice(0, 50) + "...";
                var s = "https://www.dailymotion.com/thumbnail/video/" + i;
                o.channel;
                t += '<div style="margin-bottom:10px;" class="col s12 single_post_view">', t += '<div class="entry dailymotion video_list_div">', t += '<a vedioId="' + i + '" platform="dailymotion" style="color:#000 !important" onclick="videoModel(this)" ><h4 style="font-size: 26px;margin-left: 2px;font-family: timenewroman;font-weight: bold;padding-top: 8px;">', t += '<img class="lazyloadingImage" src="img/loading.gif" data-src="' + s + '" alt="" style="padding: 4px;border: 1px solid #c4c4c4;width: 100%;max-height: 235px;"></a>', t += '<div class="desc">', t += '<a vedioId="' + i + '" platform="dailymotion" style="color:#000 !important" onclick="videoModel(this)" ><h4 style="font-size: 26px;margin-left: 2px;font-family: timenewroman;font-weight: bold;padding-top: 8px;">' + a + "</h4></a>", t += "</div>", t += "</div>", t += "</div>"
            }), $("#img_link").css("display", "none"), $("#video_list").html(t), $("#video_list").show(), $(".my_lazy_loader").hide(), $("#video_list").css("display", "block"), $("#search_video_list").css("display", "block")
        },
        error: function(e) {
            console.log(e)
        }
    })
}

function videoModel(e) {
    var o = $(e).attr("vedioId"),
        t = $(e).attr("platform"),
        i = (100 + 100 * localStorage.getItem("counterAds")) / 100;
    localStorage.setItem("counterAds", i);
    var l = JSON.parse(localStorage.getItem("item")),
        a = l[7],
        s = l[2],
        d = localStorage.getItem("counterAds");
    if ("admobRunning" == a && s > 0) {
        var n = JSON.parse(localStorage.getItem("item"));
        if ((d = localStorage.getItem("counterAds")) == (s = n[2])) {
            console.log("admobLimit" + s), console.log("counterAds" + d), showIndustrialAdForYoutubeVIdeoPlayer();
            localStorage.setItem("runVideoId", o), localStorage.setItem("runVideoplatform", t), localStorage.setItem("counterAds", "0")
        } else runVideoPlayer(o, t)
    } else runVideoPlayer(o, t)
}

function runVideoPlayer(e, o) {
    "dailymotion" == o && ($("#myModal").css("display", "none"), $("#videoModal").css("display", "block"), initAdmobWithoutBanner(), window.screen.orientation.lock("landscape"), videourl = "https://www.dailymotion.com/embed/video/" + e + "?queue-enable=false", $("#videoplayer").attr("src", videourl)), "youtube" == o && YoutubeVideoPlayer.openVideo(e, function(e) {
        console.log("YoutubeVideoPlayer result = " + e)
    })
}

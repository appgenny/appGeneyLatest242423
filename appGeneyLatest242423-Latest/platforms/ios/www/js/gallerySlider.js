function GallerySLider(a){var e={async:!0,crossDomain:!0,url:"http://api.appgenny.com/api/v1/GetVideo/getAllPost?pakgeName="+a,method:"GET",headers:{"Cache-Control":"no-cache","Postman-Token":"7e06f881-5916-48c3-afd5-579215d9afd5"}};$.ajax(e).done(function(a){var e="",i="",l=0;i+='<div class="item active">            <div class="row">',$.each(a,function(a,t){var c="http://appgenny.com/"+t.Url.split("~")[1],s=t.SubcategoryId;t.Title;e=0==l?"active":"",1==t.Active&&"Slider"!=t.Type&&(l%3==0&&0!=l?i+='</div></div>            <div class="item '+e+'">                  <div class="row">':("Video"==t.Type&&(i+='<div class=" col-xs-4">                    <a class="thumbnail" data-toggle="modal" id="'+t.Id+'" onclick="openModel(this)"><img alt="" src="'+c+'"></a>                  </div>'),"Wallpaper"==t.Type&&(i+='<div class=" col-xs-4">                    <a class="thumbnail" data-toggle="modal" category_id ="'+s+'" onclick="openModelWallpaper(this)"><img alt="" src="'+c+'"></a>                  </div>'),"WebUrl"==t.Type&&""!=t.WebUrl&&(i+='<div class=" col-xs-4">                    <a class="thumbnail" href="'+t.WebUrl+'" target="_blank"  ><img alt="" src="'+c+'"></a>                  </div>'),"Redirect"==t.Type&&""!=t.RedirectApp&&(i+='<div class=" col-xs-4">                    <a class="thumbnail" href="https://play.google.com/store/apps/details?id='+t.RedirectApp+'" target="_blank"  ><img alt="" src="'+c+'"></a>                  </div>'))),l++}),$("#media .carousel-inner").html(i)})}$(document).ready(function(){}),$("#media").on("swipeleft",function(a){$("#right_gallery_image_slider").click()}),$("#media").on("swiperight",function(a){$("#left_gallery_image_slider").click()});
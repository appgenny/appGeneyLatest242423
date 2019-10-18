var functionService = (function(){
    return {
        getallFunctions: function (package_name) {

            appSettings.getApplicationSetting(package_name);
            var response=JSON.parse((localStorage.getItem("item")));
            var replacePkg = JSON.parse((localStorage.getItem("replacePackage")));
            
            if(response == null || response == '' || response.length == 0)
            {
                appSettings.getApplicationSetting(package_name);
                response=JSON.parse((localStorage.getItem("item")));
                replacePkg = JSON.parse((localStorage.getItem("replacePackage")));

                var paramkeyArray=["postRows"];
                CustomConfigParameters.get(function(configData){
                    getAllPost(functionService.getRowsStatus(configData.postRows), package_name);

                },function(err){
                  console.log(err);
              },paramkeyArray);
            }
            else 
            {

                var getReplacePackage = replacePkg.replace_package;
                if(getReplacePackage == '' ||  getReplacePackage == null)
                {
                  sliderSettings.getApplicationCarousel(package_name);
                  getAllPost(response[0], package_name);
                  featuredAppModel(package_name);
              }
              else
              {
                sliderSettings.getApplicationCarousel(getReplacePackage);
                getAllPost(response[0], getReplacePackage);
                featuredAppModel(getReplacePackage);

            }

        }



    },
    getRowsStatus:function(row_id) {
        if(row_id == 1)
        {
            return 's12';
        }
        else if(row_id == 2)
        {
            return 's6';
        }
        else if(row_id == 3)
        {
            return 's4';
        }
        else 
        {
            return 's3';
        }
    }
}

}());
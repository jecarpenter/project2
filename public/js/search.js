$(document).ready(function () {
    var profileContainer = $(".profile-container");
    var profiles;
    var url = window.location.search;
    //This grabs profiles from the database
    function getProfiles() {
        $.get("/api/searchs", function (data) {
            profiles = data;
            console.log(profiles)
            //   initializeRows();
        });
    }

    getProfiles();

})
$(document).ready(function () {
    var url = window.location.search;
    var profileId;
    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var email = $("#email");
    var location = $("#location");
    var title = $("#title");
    var years = $("#years");
    var education = $("#education");
    var bio = $("#bio");
    var profileLink = $("#profileLink");
    var githubLink = $("#githubLink");
    var devregisterForm = $("#devregister")



    $(devregisterForm).on("submit", function handleFormSubmit(event) {
        event.preventDefault();
        // if (!firstName.val().trim() || !lastName.val().trim() || !email.val().trim() ||
        //     !location.val().trim() || !title.val().trim() || years.val().trim() || education.val().trim() ||
        //     bio.val().trim()) {
        //     return;
        // }
        var newProfile = {
            firstname: firstName.val().trim(),
            lastname: lastName.val().trim(),
            email: email.val().trim(),
            location: location.val().trim(),
            title: title.val().trim(),
            years: years.val().trim(),
            education: education.val().trim(),
            bio: bio.val().trim(),
            porfolio: profileLink.val().trim(),
            github: githubLink.val().trim()
        };
        console.log(newProfile);
        // if (updating) {
        //     newProfile.id = profileId;
        //     updateProfile(newProfile);
        // }
        // else {
        submitProfile(newProfile);
        // }
    });

    // Submits a new profile and brings user to index page upon completion
    function submitProfile(Profile) {
        console.log(Profile, " profile in submitprofile")
        $.post("/api/devregisters/", Profile,
            function () {
                window.location.href = "./search.html";
            }
        );
    }

});


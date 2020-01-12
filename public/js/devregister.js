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
        console.log("Made it here");
        // }
    });

    // Submits a new post and brings user to index page upon completion
    function submitProfile(Profile) {
        console.log(Profile, " profile in submitprofile")
        $.post("/api/devregisters/", Profile,
            function () {
                window.location.href = "./search.html";
            }
        );
    }

    // Gets post data for a post if we're editing
    //   function getProfileData(id) {
    //     $.get("/api/devregisters/" + id, function(data) {
    //       if (data) {
    //         // If this post exists, prefill our cms forms with its data
    //         titleInput.val(data.title);
    //         bodyInput.val(data.body);
    //         postCategorySelect.val(data.category);
    //         // If we have a post with this id, set a flag for us to know to update the post
    //         // when we hit submit
    //         updating = true;
    //       }
    //     });
    //   }

    //   // Update a given post, bring user to the blog page when done
    //   function updatePost(post) {
    //     $.ajax({
    //       method: "PUT",
    //       url: "/api/posts",
    //       data: post
    //     })
    //       .then(function() {
    //         window.location.href = "/blog";
    //       });
    //   }
});


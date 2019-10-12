function loadRepos() {
    $("#repos").empty();
    let url = "https://api.github.com/users/voblak2/repos"
    $.ajax({
        url,
        success: displayRepos,
    });
    function displayRepos(respos) {
        for (let repo of respos) {
            let link = $('<a>').text(repo.full_name);
            link.attr('href', repo.html_url);
            $("#repos").append($('<li>').append(link));
        }
    }}
    // .social HoverIN Function 
$(document).ready(function () {
    $('.social').hover(
        function () {
            $(this).css({"width": "75px"});
        },

        function () {
            $(this).css({"width": "40px"});
        }
    );

});
// .social HoverOut Function
$(document).ready(function () {
    $('.social').hover(function () {
            $(this).css({"height": "75px"});
        },

        function () {
            $(this).css({"height": "40px"});
        }
    );

});
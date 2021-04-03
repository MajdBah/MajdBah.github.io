var myVideo = document.getElementById("vid");

function playvid() {
    if (myVideo.paused) {
        myVideo.play();
    } else {
        myVideo.pause();
    }
};

$(document).ready(function() {
    $(function() {
        $("#commentForm").validate();
    });
});
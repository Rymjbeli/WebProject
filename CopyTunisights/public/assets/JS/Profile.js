$(document).ready(function(){
    $("#Editbtn").click(function() {
        alert("bye");
        window.location.href = "https://www.google.com";
    });
    $("#AddBtn").click(function() {
        window.location.href = "https://www.google.com";
    });
    $("#CommentLabel").on('keydown',function(e) {
        if (e.keyCode === 13) {
            let val = $("#CommentLabel").val();
            if(val==""){
                return;
            }
            let i = document.createElement("li");
            i.className = "list-group-item";
            i.textContent = val;
            $("#CommentSection").append(i);
            $(this).val("");
            //Send comment to relevent API
            alert(val);
        }
    });
    $("#LikeBtn").click(function() {
        //Implement like event
        alert("Like");
    });
    /*
    Testing ajax callbacks
        $.ajax({
            url: '../API/Like.php',
            type: 'POST',
            data: { Post_id: '1', },
            xhrFields: {
                withCredentials: true
            },
            success: function(response) {
                alert(response);
            }
        });*/
});
$(document).ready(function () {
    $('#visited-places').on('click', '.delete-place', function () {
        $(this).parent().remove();
    });

    $('#visited-places').on('click', '.edit-place', function () {
        var oldPlace = $(this).parent().find('.place-name').text();
        var newPlace = prompt('Enter the new name for this place:', oldPlace);
        if (newPlace !== null) {
            $(this).parent().find('.place-name').text(newPlace);
        }
    });
});

function addPlace() {
    var placeName = $('#place').val();
    if (placeName !== '') {
        $('#visited-places').append('<li><span class="place-name">' + placeName + '</span>' +
            '<button type="button" class="btn btn-sm btn-primary edit-place">Edit</button>' +
            '<button type="button" class="btn btn-sm btn-danger delete-place">Delete</button></li>');
        $('#place').val('');
        $('#congratulations').show();
        setTimeout(function () {
            $('#congratulations').fadeOut();
        }, 3000);
    }
}

$('#add-place').on('click', addPlace);

$('#place').keypress(function (event) {
    if (event.which === 13) {
        addPlace();
    }
});
function fetchRandomDogImage() {
    // var xhrRequest = new XMLHttpRequest();
    
    // xhrRequest.onload = function() {
    //     console.log(xhrRequest.response);
    //     var responseJSON = JSON.parse(xhrRequest.response);
    //     var imageURL = responseJSON.message;
    //     $('#dog-image').attr('src', imageURL);
    // };

    // xhrRequest.onerror = function() {
    //     console.log('Request Failed');
    // };

    // xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
    // xhrRequest.send();

    //Using jQuery

    //Method 1
    // $.ajax( {
    //     url: 'https://dog.ceo/api/breeds/image/random',
    //     method: 'GET',
    //     success: function(data) {
    //         var imageURL = data.message;
    //         $('#dog-image').attr('src', imageURL);
    //     }
    // }).fail(function() {
    //     console.log('error');
    // });

    //Method 2
    $.get('https://dog.ceo/api/breeds/image/random', function(data) {
        var imageURL = data.message;
        $('#dog-image').attr('src', imageURL);
    }).fail(function(xhr, textStatus, erroeThrown) {
        console.log('Request Failed');
    });
}

$('#fetch-dog-image-button').click(fetchRandomDogImage);
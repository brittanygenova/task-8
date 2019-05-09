jQuery('.btn').on('click',function(){
    var apiBase="https://jsonplaceholder.typicode.com/photos/";
    axios.get(apiBase).then(function(response){
        var imgHTML = response.data.map(function(img){
            var image='<img src="' + img.url + '" alt = "' + img.title + '">' +'<br><p>' + img.title +'</p>';
            return jQuery('<div>').addClass('img').html(image);
            });
    jQuery('#tasks').html(imgHTML);
    });

});
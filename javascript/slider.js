
        
    var sliderImages = document.getElementById('sliderImg');

    var images = [
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.jpg',
        '/images/image4.jpg'
    ];

    var i = 0;
    function slider(){

        if ( i >= images.length ){
            i = 0;
        }

        sliderImages.src = images[i];
        i++;
        setTimeout(slider, 2000);
    };


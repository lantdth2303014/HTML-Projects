document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('.slider');
    var slides = Array.from(slider.children);
    var currentIndex = 0;

    document.querySelector('#prevBtn').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        slider.scrollLeft = slides[currentIndex].offsetWidth * currentIndex;
    });

    document.querySelector('#nextBtn').addEventListener('click', function() {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        slider.scrollLeft = slides[currentIndex].offsetWidth * currentIndex;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.slider-nav a').forEach(function(navLink, index) {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
        
            // Get the slider and all the slides
            var slider = document.querySelector('.slider');
            var slides = Array.from(slider.children);
        
            // Scroll to the slide that corresponds to the navigation link clicked
            slider.scrollLeft = slides[index].offsetWidth * index;
        });
    });
});
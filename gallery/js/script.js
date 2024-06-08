document.addEventListener("DOMContentLoaded", function() {
    // Select all the photo elements
    const photos = document.querySelectorAll('.photos');

    photos.forEach(photo => {
        // Add event listener for mouse over
        photo.addEventListener('mouseover', function() {
            // Select the image, contents, and span within the hovered photo
            const img = photo.querySelector('img');
            const contents = photo.querySelector('.contents');
            const span = photo.querySelector('span');

            // Apply filter to the image
            img.style.filter = 'blur(8px) brightness(15%) grayscale(20%)';
            img.style.transition = 'filter 0.2s ease';

            // Display the span
            span.style.visibility = 'visible';

            // Move contents slightly upward
            contents.style.transform = 'translateY(-10px)';
            contents.style.transition = 'transform 0.3s ease';
        });

        // Add event listener for mouse out
        photo.addEventListener('mouseout', function() {
            // Select the image, contents, and span within the photo
            const img = photo.querySelector('img');
            const span = photo.querySelector('span');

            // Remove filter from the image
            img.style.filter = 'none';

            // Hide the span
            span.style.visibility = 'hidden';

            // Reset the contents position
            const contents = photo.querySelector('.contents');
            contents.style.transform = 'translateY(0)';
        });
    });
});

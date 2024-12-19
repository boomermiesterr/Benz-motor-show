document.addEventListener('DOMContentLoaded', () => {
    // Get all elements
    const detailButtons = document.querySelectorAll('.details-button');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');
    const imageGalleries = document.querySelectorAll('.image-gallery');

    // Open modal when clicking details button
    detailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.car-card');
            const carType = card.dataset.car;
            const modal = document.getElementById(`modal-${carType}`);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when clicking close button or outside
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Image gallery functionality
    imageGalleries.forEach(gallery => {
        const mainImage = gallery.closest('.modal-images').querySelector('img');
        const thumbnails = gallery.querySelectorAll('img');

        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                mainImage.src = thumb.src;
                mainImage.alt = thumb.alt;
            });
        });
    });
});
function OpenModal(url) {
    // Create a div element
    const modal = document.createElement('div');
    modal.id = "image-modal";

    // Apply styles to the div
    Object.assign(modal.style, {
        background: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: "0",
        left: "0",
        zIndex: "1000000" // Ensures it appears on top
    });

    // Add onclick event to remove the modal
    modal.onclick = deleteModal;

    // Create an image element
    const image = document.createElement('img');
    image.src = url;
    image.alt = "modal image";

    // Apply styles to the image
    Object.assign(image.style, {
        maxWidth: "90vw",
        maxHeight: "90vh",
        width: "auto",
        height: "auto"
    });

    // Append the image to the modal
    modal.appendChild(image);

    // Append the modal to the body
    document.body.appendChild(modal);
}

function deleteModal() {
    // Find the modal by ID and remove it
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.remove();
    }
}
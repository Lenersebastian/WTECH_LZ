// Add your JavaScript code here
const fileInput = document.getElementById('fileInput');
const slider = document.getElementById('slider');

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    const fileSize = file.size;
    const maxFileSize = 10 * 1024 * 1024; // 10MB

    // Allowed file extensions
    const allowedExtensions = ['png', 'jpeg', 'jpg'];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
        alert('Only .png, .jpeg, or .jpg files are allowed.');
        this.value = ''; // Reset the file input
        return;
    }

    if (fileSize > maxFileSize) {
        alert('File size exceeds the limit (10MB). Please choose a smaller file.');
        this.value = ''; // Reset the file input
    } else {
        // Calculate the value for the slider based on file size
        const value = (fileSize / maxFileSize) * 100;
        slider.value = value;
    }
});

document.getElementById('btn').addEventListener('click', function() {
    // Clear the file input by setting its value to null
    document.getElementById('fileInput').value = null;
});

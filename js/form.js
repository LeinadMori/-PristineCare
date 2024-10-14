document.getElementById('cleaningServiceForm').addEventListener('submit', function(event) {
    const agreeCheckbox = document.getElementById('agree');
    if (!agreeCheckbox.checked) {
        event.preventDefault();
        alert('Please agree to the terms and conditions before submitting.');
    }
});

<script>
    document.querySelector('form').addEventListener('submit', function(event) {
        let isValid = true;

        // Check if all fields are filled
        document.querySelectorAll('input, textarea').forEach(function(input) {
            if (!input.value) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ccc';
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert('Please fill out all fields.');
        }
    });
</script>
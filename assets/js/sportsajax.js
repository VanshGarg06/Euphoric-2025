$("#registrationForm").submit(function (e) {
    e.preventDefault();
    let validForm = true;
    let msaForm = new FormData(this);

    $('#name, #branch, #year, #admissionId, #phone, #email').each(function () {
        $(this).next('.text-danger').remove();
        if (validateField(this.id) == 0) {
            validForm = false;
        }
    });

    if ($('input[name="sportsEvents[]"]:checked').length === 0) {
        validForm = false;
        new Notify({
            title: 'Validation Error',
            text: 'Please select at least one sports event.',
            status: 'error',
            position: 'right bottom',
        });
    }

    if (validForm) {
        $(':input[type="submit"]').prop('disabled', true);

        $.ajax({
            type: "POST",
            url: "config/sportsapi.php",
            data: msaForm,
            contentType: false,
            processData: false,
            success: function (response) {
                if (response === "success") {
                    new Notify({
                        title: 'Form Status',
                        text: 'Form submitted successfully!',
                        status: 'success',
                        position: 'right bottom',
                    });
                    $('#registrationForm')[0].reset();
                } else {
                    new Notify({
                        title: 'Form Status',
                        text: response, // Display the error message
                        status: 'error',
                        position: 'right bottom',
                    });
                }
                $(':input[type="submit"]').prop('disabled', false);
            },
            error: function () {
                new Notify({
                    title: 'Error',
                    text: 'An error occurred during submission.',
                    status: 'error',
                    position: 'right bottom',
                });
                $(':input[type="submit"]').prop('disabled', false);
            }
        });
    }
});
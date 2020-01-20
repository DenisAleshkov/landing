$( document ).ready(function() {
	$('.form__submit').submit(function(event) {
        event.preventDefault();
        $.ajax({
                type: 'POST',
                url: '/js/pack.php',
                cache: false,
                data: $('.form__submit').serialize(),
            })
            .done(function() {
                Swal.fire(
                    'Good job!',
                    'Your data has been sent successfully!',
                    'success'
                )
            })
            .fail(function() {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href>Why do I have this issue?</a>'
                })
            })
    });
});
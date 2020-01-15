$( document ).ready(function() {
	$('.form__submit').submit(function(event) {
        event.preventDefault();
        $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/ajax/puck.php',
                cache: false,
                data: $('.form__submit').serialize(),
            })
            .done(function() {
               alert('ok');
            })
            .fail(function() {
               console.log($('.form__submit').serialize());
            })
    });
});
//Event Handlers  jQuery
$(window).load(function() {

    var totals = 0;

    $('#checkout').click(function(event) {
        /* Act on the event */
        alert('Send to Back End');
    });

    $('#amount-select').on('change', function() {
        $('#inputAmount').val(this.value);
    });

    $('#addCart1').click(function(event) {
        /* Act on the event */
        var option = $('#donation-type option:selected').val();
        var amount = $('#inputAmount').val();
        $('#cart').append('<p>' + option + '    $' + amount + '</p>');
        totals += parseInt(amount);
        console.log(totals);
        $('#total').html('$ ' + totals);

    });

    $('#addCart2').click(function(event) {
        /* Act on the event */
        var option = $('#product-type option:selected').val();
        $('#cart').append('<p>' + option + '</p>');
        switch (option) {
            case "It's All About The Kids Cards $25":
                totals += 25;
                break;
            case "Donate and Join the University Club $500":
                totals += 500;
                break;
            case "Adopt a College Student $100":
                totals += 100;
                break;
        }
        $('#total').html('$ ' + totals);

    });

});

$(window).scroll(function () {
    if ($(window).scrollTop() > 20) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});
$('.navbar-toggler').click(function () {
    if ($('.navbar-collapse').is(':visible')) {
        $('#toggle-icon').removeClass('bi-x').addClass('bi-list');
    } else {
        $('#toggle-icon').removeClass('bi-list').addClass('bi-x');
    }
});

function reserveTable(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Generate a random table number (between 1 and 20)
    const tableNumber = Math.floor(Math.random() * 20) + 1;

    // Display the reserved message
    const reservedMessage = document.getElementById('reservedMessage');
    reservedMessage.innerHTML = `Table reserved! Your table number is: ${tableNumber}`;


}

function scrollToFooter() {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
}



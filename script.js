window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222'; // Darker background on scroll
        navbar.style.color = 'white'; // Change text color on scroll
    } else {
        navbar.style.backgroundColor = '#333'; // Original background color
        navbar.style.color = 'white'; // Original text color
    }
});
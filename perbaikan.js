document.addEventListener('DOMContentLoaded', function () {
    // Pilih semua link yang ada di navbar
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Pilih semua bagian dengan class 'section'
    const sections = document.querySelectorAll('.section');
    
    // Fungsi untuk menambahkan class 'active' saat scroll ke bagian tertentu
    function onScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.classList.add('active'); // Menambahkan animasi
            } else {
                section.classList.remove('active'); // Menghapus animasi jika tidak dalam jangkauan
            }
        });
    }
    
    // Event listener untuk scroll
    window.addEventListener('scroll', onScroll);

    // Event listener untuk link navbar (smooth scroll)
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Ambil ID dari href
            const targetSection = document.getElementById(targetId);
            
            // Lakukan scroll dengan smooth ke bagian yang dipilih
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Inisialisasi dengan menambahkan animasi di awal
    onScroll();
});

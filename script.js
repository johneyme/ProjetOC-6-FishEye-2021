function clickDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdownsContent = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdownsContent.length; i++) {
            let openDropdown = dropdownsContent[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
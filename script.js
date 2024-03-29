function showDropdown() {
    document.getElementById("dropdown-content").style.display = "block";
}

// Hide the dropdown when the mouse leaves the dropdown area
document.querySelector(".dropdown-container").addEventListener("mouseleave", function() {
    document.getElementById("dropdown-content").style.display = "none";
});



// function toggleDropdown() {
//     var dropdownContent = document.getElementById("dropdown-content");
//     if (dropdownContent.style.display === "flex") {
//         dropdownContent.style.display = "none";
//     } else {
//         dropdownContent.style.display = "block";
//     }
// }



function toggleSearchList() {
    console.log("Click");
    var searchList = document.getElementById("searchList");

    if (searchList.style.display === "none" || searchList.style.display === "") {
        searchList.style.display = "flex";
        console.log("Display is none or empty")
    } else {
        searchList.style.display = "none";
    }
}

function filterSearchList() {
    var input, filter, ul, li, txtValue;
    input = document.querySelector('.main-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchList");
    li = ul.getElementsByTagName("li");

    for (var i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

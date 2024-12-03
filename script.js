function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}

function showTab(contentId) {
    var contents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    document.getElementById(contentId).style.display = "block";
}

function openPDF(pdfFile) {
    window.open(pdfFile, '_blank');
}

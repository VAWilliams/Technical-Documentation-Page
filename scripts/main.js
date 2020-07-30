
var app = angular.module('documentation', []);

app.controller('navigationController', function($scope) {
    
    var vm = $scope;
    var sectionHeaders = Array.from(document.querySelectorAll(".main-section h1"));
    vm.links = [];

    sectionHeaders.forEach(header => {
        var headerId = header.innerText.split(' ').join('_');
        vm.links.push({
            text: header.innerText,
            link: '#' + headerId,
        });

        header
        .closest('.main-section')
        .setAttribute("id", headerId);
    });

});

var scrollToLink = function(event) {
    var id = event.target.toString().split('#')[1];
    window.scrollTo({
        top: document.getElementById(id).clientHeight,
        behavior: "smooth"
    })
}

/* -----------------
    Burger Menu
 ----------------- */
 
 var toggleDisplay = function(element) {
    element.style.display = (element.style.display == "block")
        ? "none"
        : "block"
    ;
};
var burger = document.getElementById("nav-burger"),
    list   = document.getElementById("nav-list"),
    items  = Array.from(list.children)
;

burger.onclick = function() {
    toggleDisplay(list);
    items.forEach(toggleDisplay);
}
var infoButton = document.querySelectorAll('.info-image');
var crossCompany = document.querySelectorAll('.cross');
var companies = document.querySelectorAll('.company-text');
for (var i = 0; i < infoButton.length; i++) {
    var onInfoButtonClick = function (elem1, elem2, elem3) {
        elem1.addEventListener('click', function(evt){
            evt.preventDefault();
            elem2.classList.add('company-text-act');
        });
        elem3.addEventListener('click', function (evt){
            evt.preventDefault();
            elem2.classList.remove('company-text-act');
        })
    };
    onInfoButtonClick(infoButton[i], companies[i], crossCompany[i]);
}
window.addEventListener('resize', function(){
    if (window.innerWidth > 767) {
        for (var c = 0; c < companies.length; c++) {
            companies[c].classList.remove('company-text-act');
        }
    }
})
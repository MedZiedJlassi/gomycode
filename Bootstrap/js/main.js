$('.interet i').on('mouseenter', (e) => {
    $(e.currentTarget.nextSibling).toggleClass('show')
});
$('.interet i').on('mouseleave', (e) => {
    $(e.currentTarget.nextSibling).toggleClass('show')
});

    document.getElementsByTagName('i').onmouseover = function mouseOver(){
        this.nextSibling.toggleClass('show');
};
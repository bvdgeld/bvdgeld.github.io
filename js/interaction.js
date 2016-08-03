$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".navbar").show();
    } else {
        $(".navbar").hide();
    }
    this.previousTop = currentTop;
});
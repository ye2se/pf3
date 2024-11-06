$(function () {
    const tl = gsap.timeline();

    tl
        .from('.intro .circle .left', { x: -200, opacity: 0, duration: 3, })
        .from('.intro .circle .right', { x: 200, opacity: 0, duration: 3 }, "-=")

    $('#content').fullpage({
        anchors: ['intro', 'pf01', 'pf02', 'pf03', 'tranning', 'about'],
        onLeave: function (idx, nidx, dir) {
            console.log(idx, nidx, dir);
            $('#header .gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            $('.section').eq(nidx - 1).addClass('on').siblings().removeClass('on');

            if (nidx == 1) {
                tl.restart();
            }
        }
    });


    $('#header .menu').on('click', function () {
        $(this).toggleClass('on');
        $('#header .cover').toggleClass('on');
    });


    $('#header .cover a').on('click', function () {
        $('#header .cover').removeClass('on');
        $('#header .menu').removeClass('on');
    });


    $('#header .cover').on('wheel', function (e) {
        e.stopPropagation();
    });
})
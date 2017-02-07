jQuery(".slideBox").slide({mainCell:".bd ul",effect:"left",autoPlay:true});

function GGMarguee() {
    if ($("#De").length > 0) {
        $("#De").marquee({
            yScroll: "bottom"
        });
    }
}

GGMarguee();
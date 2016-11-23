var makeSpiderChart = function(){
//Based on a pen by @tedgoas
    var spiderCtx = document.getElementById("myChart").getContext("2d");
    var spiderData = {
        labels: [ "Technology", "Relationships", "Change Mgmt", "Mentorship", "Communication", "Leadership"],
        datasets: [
            {
                label: "Existing Skills",
                fillColor: "rgba(43,176,212,.4)",
                strokeColor: "rgba(43,176,212,1)",
                pointColor: "rgba(43,176,212,1)",
                pointHighlightStroke: "rgba(43,176,212,1)",
                data: [80, 75, 65, 75, 60, 60]
            },
            {
                label: "Growth Skills",
                fillColor: "rgba(140,200,50,.4)",
                strokeColor: "rgba(140,200,50,1)",
                pointColor: "rgba(140,200,50,1)",
                pointHighlightStroke: "rgba(140,200,50,1)",
                data: [90, 95, 85, 90, 90, 90]
            }
        ]
    };
    new Chart(spiderCtx).Radar(spiderData, {
        animationSteps: 30,
        animationEasing: "easeInOutExpo",
        responsive: true,
        showTooltips: true,
        scaleOverride: true,
        scaleSteps: 5,
        scaleStepWidth: 20,
        scaleStartValue: 0,
        scaleLineColor: "rgba(200,200,200,.15)",

        angleShowLineOut: true,
        angleLineWidth : 1,
        angleLineColor : "rgba(200,200,250,.15)",
        pointLabelFontFamily : "'freight-sans-pro', Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif",
        pointLabelFontSize : 14,
        pointLabelFontColor : "#99b",
        pointDot : false,
        datasetStrokeWidth : 1
    });
};


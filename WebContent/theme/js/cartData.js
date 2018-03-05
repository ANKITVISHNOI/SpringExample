var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

var lineChartData = {
    labels : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets : [
        {
            label: "Car",
            fillColor : "rgba(0,0,0,0)",
            strokeColor : "rgb(29, 188, 0)",
            pointColor : "rgb(29, 188, 0)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgb(0, 0, 0)",
            data : [25, 58, 70, 20, 90, 35, 75]
        },
        {
            label: "Air",
            fillColor : "rgba(0,0,0,0)",
            strokeColor : "rgb(0, 130, 188)",
            pointColor : "rgb(0, 130, 188)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgb(0, 0, 0)",
            data : [100, 75, 50, 75, 50, 75, 100]
        },
        {
            label: "Hotel",
            fillColor : "rgba(0,0,0,0)",
            strokeColor : "rgb(188, 0, 7)",
            pointColor : "rgb(188, 0, 7)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgb(0, 0, 0)",
            data : [90, 65, 40, 65, 40, 65, 90]
        }
    ]

}



var doughnutData = [
    {
        value: 300,
        color:"rgb(188, 0, 7)",
        highlight: "#af1519",
        label: "Car"
    },
    {
        value: 50,
        color: "rgb(0, 130, 188)",
        highlight: "rgb(7, 156, 222)",
        label: "Air"
    },
    {
        value: 100,
        color: "rgb(29, 188, 0)",
        highlight: "rgb(33, 211, 0)",
        label: "Hotel"
    },
];

var barChartData = {
    labels : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets : [
        {
            label: "Economy",
            fillColor : "rgb(29, 188, 0)",
            strokeColor : "rgb(29, 188, 0)",
            pointColor : "rgb(29, 188, 0)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        },
        {
            label: "Economy",
            fillColor : "rgb(0, 130, 188)",
            strokeColor : "rgb(0, 130, 188)",
            pointColor : "rgb(0, 130, 188)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        },
        {
            label: "Economy",
            fillColor : "rgb(188, 0, 7)",
            strokeColor : "rgb(188, 0, 7)",
            pointColor : "rgb(188, 0, 7)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        },
        {
            label: "Economy",
            fillColor : "rgb(0,0,0)",
            strokeColor : "rgb(0,0,0)",
            pointColor : "rgb(0,0,0)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }
    ]

}


window.onload = function(){
    
    var ctx = document.getElementById("lineChart").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true,
        scaleShowVerticalLines: false,
        scaleBeginAtZero : true,
        multiTooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
    });
    
    
    
//    document.getElementById("legendDiv").innerHTML = myLine.generateLegend();
    
    
    // Dougnut Chart
    var doctx = document.getElementById("chart-area").getContext("2d");
    window.myDoughnut = new Chart(doctx).Doughnut(doughnutData, {responsive : true});
    
    // Dougnut Chart
    var doctx = document.getElementById("chart-area2").getContext("2d");
    window.myDoughnut = new Chart(doctx).Doughnut(doughnutData, {responsive : true});
    
    // Bar Chart
    var ctx = document.getElementById("chart-bar").getContext("2d");
    window.myBar = new Chart(ctx).Bar(barChartData, {
        responsive : true
    });
    
    
}

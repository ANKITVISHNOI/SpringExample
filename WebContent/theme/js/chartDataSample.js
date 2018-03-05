var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

//get here number of orders recieved weekly 
var doughnutData = [
    {
		value: 100,
        color: "rgb(0, 130, 188)",
        highlight: "rgb(7, 156, 222)",
        label: "Air"
    },
    {
        value: 200,
		color:"rgb(188, 0, 7)",
		highlight: "#af1519",
        label: "Hotel"
    },
    {
        value: 500,
        color: "rgb(29, 188, 0)",
        highlight: "rgb(33, 211, 0)",
        label: "Car"
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
            data : [100, 75, 50, 75, 50, 75, 100]
        },
        {
            label: "Economy",
            fillColor : "rgb(0, 130, 188)",
            strokeColor : "rgb(0, 130, 188)",
            pointColor : "rgb(0, 130, 188)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [100, 75, 50, 75, 50, 75, 45]
        },
        {
            label: "Economy",
            fillColor : "rgb(188, 0, 7)",
            strokeColor : "rgb(188, 0, 7)",
            pointColor : "rgb(188, 0, 7)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [100, 75, 50, 75, 50, 75, 80]
        },
        {
            label: "Economy",
            fillColor : "rgb(0,0,0)",
            strokeColor : "rgb(0,0,0)",
            pointColor : "rgb(0,0,0)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [25, 65, 50, 75, 50, 75, 89]
        }
    ]

}

//get here number of orders recieved Monthly 
var doughnutDataMonthly = [
    {
		value: 300,
        color: "rgb(0, 130, 188)",
        highlight: "rgb(7, 156, 222)",
        label: "Air"
    },
    {
        value: 2000,
		color:"rgb(188, 0, 7)",
		highlight: "#af1519",
        label: "Hotel"
    },
    {
        value: 0,
        color: "rgb(29, 188, 0)",
        highlight: "rgb(33, 211, 0)",
        label: "Car"
    },
];

var barChartDataMonthly = {
    labels : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets : [
        {
            label: "Economy",
            fillColor : "rgb(29, 188, 0)",
            strokeColor : "rgb(29, 188, 0)",
            pointColor : "rgb(29, 188, 0)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [100, 75, 50, 75, 50, 75, 100]
        },
        {
            label: "Economy",
            fillColor : "rgb(0, 130, 188)",
            strokeColor : "rgb(0, 130, 188)",
            pointColor : "rgb(0, 130, 188)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [100, 75, 50, 75, 50, 75, 45]
        },
        {
            label: "Economy",
            fillColor : "rgb(188, 0, 7)",
            strokeColor : "rgb(188, 0, 7)",
            pointColor : "rgb(188, 0, 7)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [100, 75, 50, 75, 50, 75, 80]
        },
        {
            label: "Economy",
            fillColor : "rgb(0,0,0)",
            strokeColor : "rgb(0,0,0)",
            pointColor : "rgb(0,0,0)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [25, 65, 50, 75, 50, 75, 89]
        }
    ]

}


window.onload = function(){
     // Dougnut Chart
    var doctx = document.getElementById("chart-area").getContext("2d");
    window.myDoughnut = new Chart(doctx).Doughnut(doughnutData, {responsive : true});
    
    // Bar Chart
    var ctx = document.getElementById("chart-bar").getContext("2d");
    window.myBar = new Chart(ctx).Bar(barChartData, {
        responsive : true
    });

	// for monthly Data 
	
	   // Dougnut Chart
    var doctx = document.getElementById("chart-area-month").getContext("2d");
    window.myDoughnut = new Chart(doctx).Doughnut(doughnutDataMonthly, {responsive : true});
    
    // Bar Chart
    var ctx = document.getElementById("chart-bar-month").getContext("2d");
    window.myBar = new Chart(ctx).Bar(barChartDataMonthly, {
        responsive : true
    });
    
    
}

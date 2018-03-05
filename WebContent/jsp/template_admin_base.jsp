<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
<title>Admin</title>
<script src="theme/js/jquery.min.js"></script>
<link rel="stylesheet" href="theme/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="theme/css/hamburger.css" />
<script src="theme/js/snap.svg-min.js"></script>
<link rel="stylesheet" href="theme/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/css?family=Hind|Oxygen|Poppins|Roboto|Source+Sans+Pro" rel="stylesheet">

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="theme/css/user-login.css">
<link rel="stylesheet" href="theme/css/bootstrap.min.css">
<link rel="stylesheet" href="theme/css/bootstrap-datepicker.css">
<link rel="stylesheet" href="theme/css/multiple-select.css"/>
<link rel="stylesheet" href="theme/css/fileinput.min.css">
<link rel="stylesheet" href="theme/css/flags.css">
<link rel="stylesheet" href="theme/css/airlines.css">
<link rel="stylesheet" href="theme/css/bootstrap-table.css">
<link rel="stylesheet" href="theme/css/web-icons.min.css">
<link rel="stylesheet" href="theme/fonts/web-icons/web-icons.min.css">
<link rel="stylesheet" href="theme/css/less-plugins/awesome-bootstrap-checkbox.css">
<link rel="stylesheet" href="theme/css/bootstrapValidator.min.css" />
<link rel="stylesheet" href="theme/css/flatpickr.css" />
<link rel="stylesheet" href="theme/css/dark.css" />

<!-- Font Awesome Icons -->
<link rel="stylesheet" href="theme/css/style.css">
<link rel="stylesheet" href="theme/css/jquery-ui.css">

<!-- <link rel="stylesheet" type="text/css" href="theme/plugins/css/tooltipster.bundle.min.css" />
<link rel="stylesheet" type="text/css" href="theme/plugins/css/tooltipster-sideTip-borderless.min.css" /> -->
<link rel="stylesheet" type="text/css" href="theme/css/alertify.css" />

<link rel="stylesheet" href="theme/css/demo.css">
<link rel="stylesheet" href="theme/css/header-login-signup.css">
<link href='http://fonts.googleapis.com/css?family=Cookie'
	rel='stylesheet' type='text/css'>

<link rel="stylesheet" href="theme/css/demo.css">
<link rel="stylesheet"
	href="theme/css/footer-distributed-with-address-and-phones.css">
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">

	<link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css">
 	
<script type="text/javascript" src="theme/js/user-login.js"></script>
<!-- <script type="text/javascript" src="theme/plugins/js/tooltipster.bundle.min.js"></script> -->
<script src="theme/js/salvattore.min.js"></script>
<script src="theme/js/fileinput.js"></script>
<script src="theme/js/Chart.min.js"></script>
<script src="theme/js/bootstrap-datepicker.js"></script>
<script src="theme/js/bootstrap-select.min.js"></script>
<script src="theme/js/jquery.flexslider-min.js"></script>
<script src="theme/js/jquery.validate.min.js"></script>
<script src="theme/js/clockpicker.js"></script>
<script src="theme/js/jquery.bxslider.min.js"></script>
<script src="theme/js/switchery.min.js"></script>
<script src="theme/js/owl.carousel.min.js"></script>
<script src="theme/js/main.js"></script>
<script src="theme/js/bootstrapValidator.min.js"></script>
<script src="theme/js/bootstrap-notify.min.js"></script>
<script src="theme/js/alertify.js"></script>
<script src="theme/js/bootstrap.min.js"></script>
<script src="theme/js/bootstrap-table-all.js"></script>
<script src="theme/js/bootstrap-editable.js"></script>
</head>
<body>
<body>
	<!--************************************
        TOP NOTIFICATION AND LOGOUT
    ****************************************-->

	<div class="main-container clearfix">
		<%-- <tiles:insertAttribute name="sidebar" ignore="true" /> --%>
<!--******************************************************
        MAIN ADMIN AREA
*******************************************************-->

		<!--ADMIN AREA BEGINS-->
		<section id="main-area" class="main-admin-area shrink">
			<tiles:insertAttribute name="header" ignore="true" />
			<tiles:insertAttribute name="body" ignore="true" />
		</section>
<!--******************************************************
        MAIN ADMIN AREA END
*******************************************************-->		

		<tiles:insertAttribute name="footer" ignore="true" />
	</div>
</body>
</html>
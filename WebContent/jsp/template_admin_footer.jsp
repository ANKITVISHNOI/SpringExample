<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>  
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Company<span>logo</span></h3>

				<p class="footer-links">
					<a href="#">Home</a>
					·
					<a href="#">About</a>
					·
					<a href="#">Contact Us</a>
					·
					<a href="#">Blog</a>
					·
					<a href="#">Faq</a>
					·
					<a href="#">Careers</a>
				</p>

				<p class="footer-company-name">AVS Softsol Pvt. Ltd. &copy; 2018</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>21 Revolution Street</span> India, Delhi</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91 8447975440</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
<script>
function showModalPopUp(msg_success,code)
{
	if(code==="e")
		{
			$('#alert_box_info_body').removeClass("alert-success").removeClass("alert-info").removeClass("alert-danger").addClass("alert-danger");
		}
	if(code==="s")
		{
			$('#alert_box_info_body').removeClass("alert-success").removeClass("alert-info").removeClass("alert-danger").addClass("alert-success");
		}
	if(code==="i")
		{
			$('#alert_box_info_body').removeClass("alert-success").removeClass("alert-info").removeClass("alert-danger").addClass("alert-info");
		}
 $('#alert_box_info')
 .find('#alert_box_info_body').html(msg_success).end()
 .modal('show');
 }
 
function createAnotherUpdateMsg(id, statusId,type)
{
	$("#"+id).html('Create Another');
	$("#"+id).val('Create Another');
}
</script>
	
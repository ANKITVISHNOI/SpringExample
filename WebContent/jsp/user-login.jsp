<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<style>
.myTextClass{
"backgroung-color" : "green";
}
</style>	

<div class="container" style="padding-top: 20px;">
        <div class="row">
			<div class="col-md-6 col-md-offset-3">
				<div class="panel panel-login">
					<div class="panel-heading ">
						<div class="center">
							<h1>Login</h1>
						</div>
						<hr>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12">
								<form id="login-form" action="" method="post" role="form" style="display: block;">
									<div class="form-group">
										<input type="text" name="username" id="username" class="form-control myTextClass" placeholder="Username">
									</div>
									<div class="form-group">
										<input type="password" name="password" id="password" class="form-control myTextClass" placeholder="Password">
									</div>
									<div class="form-group text-center">
										<input type="checkbox" tabindex="3" class="" name="remember" id="remember">
										<label for="remember"> Remember Me</label>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="login-submit" id="login-submit" class="form-control btn btn-login" value="Log In">
											</div>
										</div>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-lg-12">
												<div class="text-center">
													<a href="" class="forgot-password">Forgot Password?</a>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

<!-- <script type="text/javascript">
	$(document).ready(function() {
						$('#eventForm').bootstrapValidator(
										{
											// To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
											feedbackIcons : {
												valid : 'fa fa-check',
												invalid : 'fa fa-remove',
												validating : 'fa fa-refresh'
											},
											fields : {
												code : {
													message : 'code is not valid',
													validators : {
														notEmpty : {
															message : 'code is required and cannot be empty'
														},
														stringLength : {
															min : 1,

															message : 'code must be more than 3 and less than 100 characters long'
														}
													}
												},
												name : {
													message : 'Name is not valid',
													validators : {
														notEmpty : {
															message : 'Name is required and cannot be empty'
														},
														stringLength : {
															min : 1,

															message : 'Name must be more than 3 and less than 100 characters long'
														}
													}
												},
											}
										})
								.on('error.form.bv', function(e) {
									// do something if you want to check error 
								})
								.on(
										'success.form.bv',
										function(e) {
											//notifySuccess();
											showModalPopUp(
													"Saving Details, Please wait ..",
													"i");
											e.preventDefault();
											$
													.ajax({
														url : "eventSave",
														type : "POST",
														dataType : 'html',
														data : $("#eventForm")
																.serialize(),
														success : function(data) {
															showModalPopUp(
																	"Event Saved Successfully..",
																	"s");
														},
														error : function(
																request,
																status, error) {
															showModalPopUp(
																	"Event can not be Saved.",
																	"e");
														}
													});

										})
								.on('status.field.bv', function(e, data) {
									if (data.bv.getSubmitButton()) {
										console.debug("button disabled ");
										data.bv.disableSubmitButtons(false);
									}
								});
					});
</script> -->
	
<!-- <script type="text/javascript">
$(document).ready(function(){
	/* $(":input").css("background-color","grey"); */
	$("#username").addClass("myTextClass");
});
</script> -->	

<!-- <style>
.myTextClass{
    background-color: green;
</style> -->
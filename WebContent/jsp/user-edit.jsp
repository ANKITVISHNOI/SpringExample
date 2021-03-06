<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


<style>
#success_message {
	display: none;
}
</style>
<div class="container">

	<form class="well form-horizontal" action="updateUser" method="post"
		id="contact_form">
		<fieldset>

			<!-- Form Name -->
			<center>
				<h1>
					<b>Edit User</b>
				</h1>
			</center>
			<br>

			<!-- Text input-->

			<div class="form-group">
				<label class="col-md-4 control-label">First Name</label>
				<div class="col-md-4 inputGroupContainer">
					<div class="input-group">
						<span class="input-group-addon"><i
							class="glyphicon glyphicon-user"></i></span> <input name="firstName"
							value="${user.firstName}" class="form-control" type="text">
					</div>
				</div>
			</div>

			<!-- Text input-->

			<div class="form-group">
				<label class="col-md-4 control-label">Last Name</label>
				<div class="col-md-4 inputGroupContainer">
					<div class="input-group">
						<span class="input-group-addon"><i
							class="glyphicon glyphicon-user"></i></span> <input name="lastName"
							value="${user.lastName}" class="form-control" type="text">
					</div>
				</div>
			</div>
			
			<div class="form-group">
				<label class="col-md-4 control-label">E-Mail</label>
				<div class="col-md-4 inputGroupContainer">
					<div class="input-group">
						<span class="input-group-addon"><i
							class="glyphicon glyphicon-envelope"></i></span> <input name="email"
							value="${user.email}" class="form-control" type="text">
					</div>
				</div>
			</div>
			
			<!-- Text input-->

			<div class="form-group">
				<label class="col-md-4 control-label">Contact No.</label>
				<div class="col-md-4 inputGroupContainer">
					<div class="input-group">
						<span class="input-group-addon"><i
							class="glyphicon glyphicon-earphone"></i></span> <input
							name="phone" value="${user.phone}" class="form-control"
							type="text">
					</div>
				</div>
			</div>
			
			<div class="form-group">
				<label class="col-md-4 control-label">Alternate Contact No.</label>
				<div class="col-md-4 inputGroupContainer">
					<div class="input-group">
						<span class="input-group-addon"><i
							class="glyphicon glyphicon-earphone"></i></span> <input
							name="alternatePhone" value="${user.alternatePhone}" class="form-control"
							type="text">
					</div>
				</div>
			</div>
			
			<div class="form-group">
				<label class="col-md-4 control-label">Address Line1</label>
				<div class="col-md-4 inputGroupContainer">
					<div class="input-group">
						<span class="input-group-addon"><i
							class="glyphicon glyphicon-user"></i></span> <input name="address1"
							value="${user.address1}" class="form-control" type="text">
					</div>
				</div>
			</div>
			
			<div class="form-group">
				<label class="col-md-4 control-label">Address Line2</label>
				<div class="col-md-4 inputGroupContainer">
					<div class="input-group">
						<span class="input-group-addon"><i
							class="glyphicon glyphicon-user"></i></span> <input name="address2"
							value="${user.address2}" class="form-control" type="text">
					</div>
				</div>
			</div>
			
			<div class="form-group">
				<label class="col-md-4 control-label">Country</label>
				<div class="col-md-4 inputGroupContainer">
					<div class="input-group">
						<span class="input-group-addon"><i
							class="glyphicon glyphicon-user"></i></span> <input name="country"
							value="${user.country}" class="form-control" type="text">
					</div>
				</div>
			</div>
			
			<div class="form-group">
				<label class="col-md-4 control-label">State</label>
				<div class="col-md-4 inputGroupContainer">
					<div class="input-group">
						<span class="input-group-addon"><i
							class="glyphicon glyphicon-user"></i></span> <input name="state"
							value="${user.state}" class="form-control" type="text">
					</div>
				</div>
			</div>
			
			<div class="form-group">
				<label class="col-md-4 control-label">City</label>
				<div class="col-md-4 inputGroupContainer">
					<div class="input-group">
						<span class="input-group-addon"><i
							class="glyphicon glyphicon-user"></i></span> <input name="city"
							value="${user.city}" class="form-control" type="text">
					</div>
				</div>
			</div>
			
			<div class="form-group">
				<label class="col-md-4 control-label">Pin/Zip</label>
				<div class="col-md-4 inputGroupContainer">
					<div class="input-group">
						<span class="input-group-addon"><i
							class="glyphicon glyphicon-user"></i></span> <input name="pinCode"
							value="${user.pinCode}" class="form-control" type="text">
					</div>
				</div>
			</div>

			

			<!-- Select Basic -->

			<!-- Success message -->
			<div class="alert alert-success" role="alert" id="success_message">
				Success <i class="glyphicon glyphicon-thumbs-up"></i> Success!.
			</div>

			<!-- Button -->
			<div class="form-group">
				<label class="col-md-4 control-label"></label>
				<div class="col-md-4">
					<input type="hidden" name="id" value="${user.id}">
					<br>
					&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
					<button type="submit" class="btn btn-warning">
						&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspUpdate <span
							class="glyphicon glyphicon-send"></span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
					</button>
				</div>
			</div>

		</fieldset>
	</form>
</div>

<script>
	$(document)
			.ready(
					function() {
						$('#contact_form')
								.bootstrapValidator(
										{
											// To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
											feedbackIcons : {
												valid : 'glyphicon glyphicon-ok',
												invalid : 'glyphicon glyphicon-remove',
												validating : 'glyphicon glyphicon-refresh'
											},
											fields : {
												firstName : {
													validators : {
														stringLength : {
															min : 2,
														},
														notEmpty : {
															message : 'Please enter your First Name'
														}
													}
												},
												lastName : {
													validators : {
														stringLength : {
															min : 2,
														},
														notEmpty : {
															message : 'Please enter your Last Name'
														}
													}
												},
												/* user_name : {
													validators : {
														stringLength : {
															min : 8,
														},
														notEmpty : {
															message : 'Please enter your Username'
														}
													}
												}, */
												password : {
													validators : {
														stringLength : {
															min : 8,
														},
														notEmpty : {
															message : 'Please enter your Password'
														}
													}
												},
												confirm_password : {
													validators : {
														stringLength : {
															min : 8,
														},
														notEmpty : {
															message : 'Please confirm your Password'
														}
													}
												},
												email : {
													validators : {
														notEmpty : {
															message : 'Please enter your Email Address'
														},
														emailAddress : {
															message : 'Please enter a valid Email Address'
														}
													}
												},
												contact_no : {
													validators : {
														stringLength : {
															min : 12,
															max : 12,
															notEmpty : {
																message : 'Please enter your Contact No.'
															}
														}
													}/* ,
													department : {
														validators : {
															notEmpty : {
																message : 'Please select your Department/Office'
															}
														}
													}, */
												}
											}
										})
								.on(
										'success.form.bv',
										function(e) {
											$('#success_message').slideDown({
												opacity : "show"
											}, "slow") // Do something ...
											$('#contact_form').data(
													'bootstrapValidator')
													.resetForm();

											// Prevent form submission
											e.preventDefault();

											// Get the form instance
											var $form = $(e.target);

											// Get the BootstrapValidator instance
											var bv = $form
													.data('bootstrapValidator');

											// Use Ajax to submit form data
											$.post($form.attr('action'), $form
													.serialize(), function(
													result) {
												console.log(result);
											}, 'json');
										});
					});
</script>
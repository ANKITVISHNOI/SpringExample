<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%-- <tiles:insertAttribute name="header" ignore="true" /> --%>
<link rel="stylesheet" type="text/css"
	href="theme/print-pdf-excel/print-resource/jquery.dataTables.min.css">
<link rel="stylesheet" type="text/css"
	href="theme/print-pdf-excel/print-resource/buttons.dataTables.min.css">

<link rel="stylesheet" type="text/css"
	href="theme/print-pdf-excel/print-resource/jquery.dataTables.min.css">


<script type="text/javascript"
	src="theme/print-pdf-excel/print-resource/ga.js.download"></script>
<script type="text/javascript"
	src="theme/print-pdf-excel/print-resource/jquery.dataTables.min.js.download">
	
</script>
<script type="text/javascript"
	src="theme/print-pdf-excel/print-resource/dataTables.buttons.min.js.download">
	
</script>
<script type="text/javascript"
	src="theme/print-pdf-excel/print-resource/buttons.flash.min.js.download">
	
</script>
<script type="text/javascript"
	src="theme/print-pdf-excel/print-resource/jszip.min.js.download">
	
</script>
<script type="text/javascript"
	src="theme/print-pdf-excel/print-resource/pdfmake.min.js.download">
	
</script>
<script type="text/javascript"
	src="theme/print-pdf-excel/print-resource/vfs_fonts.js.download">
	
</script>
<script type="text/javascript"
	src="theme/print-pdf-excel/print-resource/buttons.html5.min.js.download">
	
</script>
<script type="text/javascript"
	src="theme/print-pdf-excel/print-resource/buttons.print.min.js.download">
	
</script>
<script type="text/javascript"
	src="theme/print-pdf-excel/print-resource/demo.js.download">
	
</script>
<script type="text/javascript"
	src="theme/print-pdf-excel/print-resource/buttons.colVis.min.js">
	
</script>
<script type="text/javascript" class="init">
	$(document).ready(function() {
		var currentDate = (new Date).getTime();
		$('#example').DataTable({
			dom : 'Bfrtip',

			buttons : [ {
				extend : 'copyHtml5',
				exportOptions : {
					columns : "thead th:not(.noExport)"
				}	
			}, {
				extend : 'print',
				exportOptions : {
					columns : "thead th:not(.noExport)"
				},
				filename : currentDate
			}, 'colvis' ]

		});

	});
</script>

<style>
#example_filter input {
	height: 25px;
}

#example_wrapper .dt-buttons {
	padding-top: 10px;
}

.a-tag {
	color: #FF8A33;
}

.a-tag:hover {
	color: #00BFFF;
}
</style>

<section class="wrapper">
<div class="row">
	<div class="col-md-12">
		<div class="card">
			<div class="pnl">
				<div class="hd clearfix">
					<h5 class="pull-left">Product List</h5>
					<div class="set pull-right">
						<a href="addProductForm" class="plus-icon"> <span class="tooltipp"
							title="Add Product"> <img alt="" class="img-responsive icon"
								src="theme/png_icons/add1.png"></span></a>
					</div>
				</div>
				<div class="cnt cnt-table">
					<div class="fw-container no-table-css">
						<div class="fw-body">
							<div class="content">
								<div id="example_wrapper" class="dataTables_wrapper">
									<table id="example"
										class="display nowrap dataTable table-bordered"
										cellspacing="0" width="100%" role="grid"
										aria-describedby="example_info" style="width: 100%;">
										<thead>
											<tr class="border-radius border-color" role="row">
												<th>S.No</th>
												<th>Product Name</th>
												<th>Product Code</th>
												<th>Product Price</th>
												<th>Product Qty</th>
												<th style="width: 50px;">
													<div class="center"
														style="font-size: 18px; position: relative; top: 2px;">
														<i class="fa fa-cog" aria-hidden="true"></i>
													</div>
												</th>
											</tr>
										</thead>
										<tbody id="result_body">
											<c:forEach items="${productList}" var="product"
												varStatus="status">
												<tr id="row_88715" class="block-highlight-dark">
													<td data-title="S.No">${status.index + 1}</td>
													<td data-title="Product Name">${product.name}</td>
													<td data-title="Product Code">${product.code}</td>
													<td data-title="Product Price">${product.price}</td>
													<td data-title="Product Qty">${product.qty}</td>
													<td data-title="Setting"><a class="a-tag"
														href="${pageContext.request.contextPath}/editProduct?id=${product.id}"
														target=""> <i class="icon-eye-open"></i> &nbsp;Edit
													</a> | <a class="a-tag"
														href="${pageContext.request.contextPath}/deleteProduct?id=${product.id}">
															<i class="icon-trash"></i> &nbsp;Delete
													</a></td>
												</tr>
											</c:forEach>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<%-- <div class="modal fade" id="add_event" role="dialog">
						<div class="modal-dialog">
							<!-- Modal content-->
							<div class="modal-content">
								<div class="modal-header bg-primary">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h2 class="modal-title">Add New Event</h2>
								</div>
								<div class="modal-body ">
									<form name="eventForm" id="eventForm" method="post"
										class="form-horizontal">


										<h5 class="m-t-lg with-border">Details</h5>

										<div class=" row">
											<div class="col-md-6">
												<label class="form-control-label" for="prependedInput">Event
													Name </label>
												<div class="controls">
													<div class="form-group">
														<div class="col-md-12">
															<input type="text" name="eventName" id="eventName"
																placeholder="Event Name" class="form-control" />
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<label class="form-control-label" for="prependedInput">Event
													Type </label>
												<div class="controls">
													<div class="form-group">
														<div class="col-md-12">
															<select class="form-control input-lg" name="eventTypeId"
																id="eventTypeId">
																<option selected="selected" value="">Select
																	Event Type</option>
																<c:forEach items="${eventTypeList}" var="type">
																	<option value="${type.id}">${type.name}</option>
																</c:forEach>
															</select>
														</div>
													</div>
												</div>
											</div>

										</div>
										<div class="row">
											<div class="col-md-6">
												<label class="form-control-label" for="prependedInput">Description
												</label>
												<div class="controls">
													<div class="form-group">
														<div class="col-md-12">
															<textarea name="description" id="description"
																placeholder="Description" class="form-control"></textarea>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<label class="form-control-label" for="prependedInput">Is
													External Organizer/Incharge ? </label>
												<div class="controls">
													<div class="form-group">
														<div class="col-md-12">
															<input class="form-control" id="external" name="external"
																type="checkbox">
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<label class="form-control-label" for="prependedInput">Select
													Organizer/Incharge Name </label>
												<div class="controls">
													<div class="form-group">
														<div class="col-md-12">
															<select class="form-control input-lg" name="userId"
																id="userId">
																<option selected="selected" value="">Select
																	User</option>
																<c:forEach items="${userList}" var="user">
																	<option value="${user.id}">${user.firstName}
																		${user.lstName}</option>
																</c:forEach>
															</select>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="row" id="showExt" style="display: none;">
											<div class="col-md-6">
												<label class="form-control-label" for="prependedInput">Organizer/Incharge
													Name </label>
												<div class="controls">
													<div class="form-group">
														<div class="col-md-12">
															<input type="text" name="organizerName"
																id="organizerName" placeholder="Organizer/Incharge Name"
																class="form-control">
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<label class="form-control-label" for="prependedInput">
													Organizer/Incharge Mobile </label>
												<div class="controls">
													<div class="form-group">
														<div class="col-md-12">
															<input type="text" name="organizerMobile"
																id="organizerName" placeholder="Organizer/Incharge Name"
																class="form-control">
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<label class="form-control-label" for="prependedInput">Start
													Date </label>
												<div class="controls">
													<div class="form-group">
														<div class="col-md-12">
															<input type="text" name="startDate" id="startDate"
																placeholder="Start Date" class="form-control"
																data-provide="datepicker">
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<label class="form-control-label" for="prependedInput">End
													Date </label>
												<div class="controls">
													<div class="form-group">
														<div class="col-md-12">
															<input type="text" name="endDate" id="endDate"
																placeholder="End Date" class="form-control"
																data-provide="datepicker">
														</div>
													</div>
												</div>
											</div>

										</div>

										<div class="row">
											<div class="col-md-6">
												<label class="form-control-label" for="prependedInput">Event
													For </label>
												<div class="controls">
													<div class="form-group">
														<div class="col-md-12">
															<select name="eventFor" id="eventFor"
																class="form-control input-lg">
																<option value="" selected>Please Select</option>
																<option value="ForALL">For ALL</option>
																<option value="Course">Selected Course</option>
																<option value="Department">Department</option>
															</select>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="row" id="course" style="display: none;">
											<div class="col-md-6">
												<label class="form-control-label" for="prependedInput">Select
													Course </label>
												<div class="controls">
													<div class="form-group">
														<div class="col-md-12">
															<select name="batchId" id="batchId"
																class="form-control input-lg"
																onchange="javascript:getSectionListJsonByBatchId()">
																<option value="" selected>Select</option>
																<c:forEach items="${batchList}" var="batch">
																	<option value="${batch.id}">${batch.programType.name}(${batch.name})</option>
																</c:forEach>
															</select>
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-md-6">
													<label class="form-control-label" for="prependedInput">Select
														Section </label>
													<div class="controls">
														<div class="form-group">
															<div class="col-md-12">
																<select class="form-control input-lg" name="sectionId"
																	id="sectionId">
																	<option value="" selected>Select</option>
																</select>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="row" id="department" style="display: none;">
											<div class="col-md-6">
												<label class="form-control-label" for="prependedInput">Department
												</label>
												<div class="controls">
													<div class="form-group">
														<div class="col-md-12">
															<select class="form-control input-lg" name="departmentId"
																id="departmentId">
																<option selected="selected" value="">Select
																	Department</option>
																<c:forEach items="${departmentList}" var="dep">
																	<option value="${dep.id}">${dep.name}</option>
																</c:forEach>
															</select>
														</div>
													</div>
												</div>
											</div>
										</div>
										<hr>
										<div class="set" style="margin-bottom: 20px;">
											<div class="form-actions">
												<button type="submit" class="btn btn-default"
													data-dismiss="modal" style="float: left;">Cancel</button>
												<button type="submit" class="btn btn-primary pull-right"
													id="eventSubmitBtn">Save</button>
											</div>
										</div>
									</form>
									<br>
								</div>
							</div>
						</div>
					</div> --%>
			</div>
		</div>
	</div>
</div>
</section>

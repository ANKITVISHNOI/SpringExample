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
					<h5 class="pull-left">User List</h5>
					<!-- <div class="set pull-right">
						<a href="addProductForm" class="plus-icon" data-toggle="modal"
							data-target="#add_event"> <span class="tooltipp"
							title="Add Product"> <img alt="" class="img-responsive icon"
								src="theme/png_icons/add1.png"></span></a>
					</div> -->
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
												<th>First Name</th>
												<th>Last Name</th>
												<th>Email</th>
												<th>Contact No.</th>
												<th>Address Line1</th>
												<th>Address Line2</th>
												<th>Country</th>
												<th>City</th>
												<th>State</th>
												<th>Pin/Zip</th>
												<th style="width: 50px;">
													<div class="center"
														style="font-size: 18px; position: relative; top: 2px;">
														<i class="fa fa-cog" aria-hidden="true"></i>
													</div>
												</th>
											</tr>
										</thead>
										<tbody id="result_body">
											<c:forEach items="${userList}" var="user"
												varStatus="status">
												<tr id="row_88715" class="block-highlight-dark">
													<td data-title="S.No">${status.index + 1}</td>
													<td data-title="First Name">${user.firstName}</td>
													<td data-title="Last Name">${user.lastName}</td>
													<td data-title="Email">${user.email}</td>
													<td data-title="Contact No.">${user.phone}</td>
													<td data-title="Address Line1">${user.address1}</td>
													<td data-title="Address Line2">${user.address2}</td>
													<td data-title="Country">${user.country}</td>
													<td data-title="City">${user.city}</td>
													<td data-title="State">${user.state}</td>
													<td data-title="Pin/Zip">${user.pinCode}</td>
													<td data-title="Setting"><a class="a-tag"
														href="${pageContext.request.contextPath}/editUser?id=${user.id}"
														target=""> <i class="icon-eye-open"></i> &nbsp;Edit
													</a> | <a class="a-tag"
														href="${pageContext.request.contextPath}/deleteUser?id=${user.id}">
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
				</div>
		</div>
	</div>
</div>
</section>

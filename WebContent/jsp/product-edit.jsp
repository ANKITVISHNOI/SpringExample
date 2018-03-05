<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<section class="wrapper">
<div class="row">
	<div class="col-md-12">
		<div class="card">
			<div class="pnl">
				<div class="hd clearfix">
					<h5 class="pull-left">Product Edit</h5>
					<div class="set pull-left"></div>
					<div class="set pull-right">
						<div class="dropdown">
							<div class="btn-group">
								<a class="btn btn-xs btn-success dropdown-toggle"
									data-toggle="dropdown" style="padding: 3px 6px;"> <i
									class="fa fa-cog fa-lg" aria-hidden="true"></i></a>
								<ul class="dropdown-menu dropdown-info pull-right align-left">
									<li class=""><a class="" href="listProduct"><span
											class="glyphicon glyphicon-list"></span>Product List </a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12">
					<div class="card-block">
						<form name="productForm" id="productForm" method="post"
							action="updateProduct" class="form-horizontal">


							<h5 class="m-t-lg with-border">Details</h5>

							<div class=" row">
								<div class="col-md-6">
									<label class="form-control-label" for="prependedInput">
										Name </label>
									<div class="controls">
										<div class="form-group">
											<div class="col-md-12">
												<input type="text" name="name" id="name"
													value="${product.name}" class="form-control" />
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<label class="form-control-label" for="prependedInput">
										Code </label>
									<div class="controls">
										<div class="form-group">
											<div class="col-md-12">
												<input type="text" name="code" id="code"
													value="${product.code}" class="form-control" />
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class=" row">
								<div class="col-md-6">
									<label class="form-control-label" for="prependedInput">
										Price </label>
									<div class="controls">
										<div class="form-group">
											<div class="col-md-12">
												<input type="text" name="price" id="price"
													value="${product.price}" class="form-control" />
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<label class="form-control-label" for="prependedInput">
										Quantity </label>
									<div class="controls">
										<div class="form-group">
											<div class="col-md-12">
												<input type="text" name="qty" id="qty"
													value="${product.qty}" class="form-control" />
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="set pull-right"
								style="margin-bottom: 20px; margin-top: 7px;">
								<div class="form-actions">
									<input type="hidden" name="id" value="${product.id}">
									<button class="btn btn-default btn-danger" type="reset"
										id="productCancelBtn">Reset</button>
									<button type="submit" class="btn btn-primary"
										id="productSubmitBtn">Update</button>
								</div>
							</div>
						</form>
						<br>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</section>
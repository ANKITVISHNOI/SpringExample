<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<section class="wrapper">
<div class="row">
	<div class="col-md-12">
		<div class="card">
			<div class="pnl">
				<div class="hd clearfix">
					<h5 class="pull-left">Product Add</h5>
					<div class="set pull-left"></div>
					<div class="set pull-right">
						<!-- <div class="dropdown">
								<div class="btn-group">
									<a class="btn btn-xs btn-success dropdown-toggle"
										data-toggle="dropdown" style="padding: 3px 6px;"> <i
										class="fa fa-cog fa-lg" aria-hidden="true"></i></a>
									<ul class="dropdown-menu dropdown-info pull-right align-left">
										<li class=""><a class="" href="listProduct"><span
												class="glyphicon glyphicon-list"></span>Product List </a></li>
									</ul>
								</div>
							</div> -->
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12">
					<div class="card-block">
						<form name="productForm" id="productForm" method="post"
							action="saveProduct" class="form-horizontal">


							<h5 class="m-t-lg with-border">Details</h5>

							<div class=" row">
								<div class="col-md-6">
									<label class="form-control-label" for="prependedInput">
										Name </label>
									<div class="controls">
										<div class="form-group">
											<div class="col-md-12">
												<input type="text" name="name" id="name"
													placeholder="Product Name" class="form-control" />
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
													placeholder="Product Code" class="form-control" />
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
													placeholder="Product price" class="form-control" />
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
													placeholder="Product Qty" class="form-control" />
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="set pull-right"
								style="margin-bottom: 20px; margin-top: 7px;">
								<div class="form-actions">
									<button class="btn btn-default btn-danger" type="reset"
										id="productCancelBtn">Reset</button>
									<button type="submit" class="btn btn-primary"
										id="productSubmitBtn">Save</button>
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

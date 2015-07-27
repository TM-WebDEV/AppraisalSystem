<%@ include file="header.jsp"%>
<div class="container">
	<div class="row">
		<div class="col-md-12 col-md-offset-2">
			<h2>LIST OF KEY OBJECTIVE/GOAL</h2>
		</div>
	</div>

	<div class="row">

		<div class="col-md-3">
			<form class="form-inline">
				<div class="form-group">
					<input type="text" name="txt-search" id="txt-search"
						class="form-control" placeholder="Search by name ...">
				</div>
			</form>
		</div>

		<div class="col-md-3">
			<select class="form-control" name="class-name" id="class-name">
				<option value="">All Class</option>
				<option value="PP">Phnom Penh</option>
				<option value="SR">Siem Reap</option>
				<option value="BTB">Battambang</option>
				<option value="KPS">Kompong Som</option>
			</select>
		</div>

		<div class="col-md-6">
			<button class="btn btn-success pull-right" data-toggle="modal"
				data-target="#bootstrapModal" id="add-modal">Add Student</button>
		</div>
	</div>

	<div class="row">
		<div class="col-md-12 table-responsive" id="student-info"></div>
	</div>


</div>
<%@ include file="footer.jsp"%>
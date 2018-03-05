
function showGuestForm(roomId, roomGuestId)
{
	var preRoomGuestId = parseInt(roomGuestId) - 1;

	var newGuestFormContentRow = "<tr id='dynamicGuestAddFormRow"+roomId+""+roomGuestId+"'>"+
	+"<td></td>"
	+"<td id='newGuest"+roomId+""+roomGuestId+"'>New Guest</td>"
	+"<td><select name='title' id='title"+roomId+""+roomGuestId+"' class='form-control'>"
	+"<option>Mr</option><option>Miss</option><option>Mrs</option></select></td>"+
	+"<td></td>"
	+"<td><input type='text' name='firstName' id='firstName"+roomId+""+roomGuestId+"' class='form-control' placeholder='Name' /> </td>"
	+"<td><input type='text' name='lastName' id='lastName"+roomId+""+roomGuestId+"' class='form-control' placeholder='Surname' /> </td>"
	+"<td><input type='text' name='dateOfBirth' id='dateOfBirth"+roomId+""+roomGuestId+"' class='form-control dob"+roomId+""+roomGuestId+"' placeholder='DOB' /></td>"
	+"<td><select name='paxType' id='paxType"+roomId+""+roomGuestId+"' class='form-control'>"
	+"<option>ADT</option><option>CHILD</option><option>SENIOR</option>"
	+"</select></td>"
	+"<td><input type='button' value='Add' class='btn btn-info' onclick='submitNewGuestData("+roomId+","+roomGuestId+");' /> </td>"
	+"</tr>";

	$("#guestTabel > tbody > tr#guestBtnRow"+roomId).before(newGuestFormContentRow); 
	$("#guestTabel > tbody > tr#guestBtnRow"+roomId).hide();

	$(".dob"+roomId+""+roomGuestId).datepicker({
		dateFormat : "yy-mm-dd"
	});	
}



function submitNewGuestData(roomId, roomGuestId){
	var nextRoomId = parseInt(roomId) + 1;
	var preRoomId = parseInt(roomId) - 1;
	var nextRoomGuestId = parseInt(roomGuestId) + 1;
	var preRoomGuestId = parseInt(roomGuestId) - 1;

	var orderId = $("#orderId").val();
	var title = $("#title"+roomId+""+roomGuestId).val();
	var firstName = $("#firstName"+roomId+""+roomGuestId).val();
	var lastName = $("#lastName"+roomId+""+roomGuestId).val();
	var dateOfBirth = $("#dateOfBirth"+roomId+""+roomGuestId).val();
	var paxType = $("#paxType"+roomId+""+roomGuestId).val();
	var totalRoomGuest = $("#totalRoomGuest").val();


	var totalRoomGuest = parseInt($("#totalRoomGuest").val()) + 1;
	$("#totalRoomGuest").val(totalRoomGuest);

	//remove guest add form row
	$("#guestTabel > tbody > tr#dynamicGuestAddFormRow"+roomId+""+roomGuestId).remove();

	// show guest add button
	$("#guestTabel > tbody > tr#guestBtnRow"+roomId).show();

	var newAddGuestBtnRow = "<input type='button' style='display:none;' value='Add Guest' id='addRoomGuestBtn"+roomId+"' onclick='showGuestForm("+roomId+","+nextRoomGuestId+");' class='btn btn-info btn-xs' />";
	$("#addRoomGuestBtn"+roomId).replaceWith(newAddGuestBtnRow);

	var replaceNewAddRoomBtn = "<td> <input type='button' id='addRoomBtn' value='Add Room' onclick='addNewRoom("+nextRoomId+","+nextRoomGuestId+");' class='btn btn-success btn-xs' /></td>"
	+"<td><input type='button' id='deleteRoomBtn' value='Delete Room' onclick='deleteRoom("+preRoomId+","+roomGuestId+");' class='btn btn-danger btn-xs' /></td>";
	$("#roomRow").html(replaceNewAddRoomBtn);	 

	// show new guest data row
	var titleSelectOption = getSelectedTitle(title, roomId, roomGuestId);
	var paxTypeSelectOption = getSelectedPaxType(paxType, roomId, roomGuestId);

	$(".dob"+roomId+""+roomGuestId).datepicker({
		dateFormat : "yy-mm-dd"
	});	

	var Obj_data = {
			orderId : orderId,
			roomId : roomId,
			title : title,
			firstName : firstName,
			lastName : lastName,
			dateOfBirth : dateOfBirth,
			paxType : paxType,
			totalRoomGuest : totalRoomGuest
	};
	$.ajax({
		type: "POST",
		url: '<%=request.getContextPath()%>/addTourOrderGuest.action',
		data : Obj_data,
		success: function(response)
		{  
//			alert("response"+response.roomAndGuestId);
			var newEditContentRow = "<tr id='roomGuestDataRow"+roomId+""+roomGuestId+"'>"+
			+"<td></td>"
			+"<td><input type='text' value='New Guest' class='form-control' disabled=disabled /></td>"
			+titleSelectOption
			+"<td><input type='text' name='firstName' id='firstName"+roomId+""+roomGuestId+"' value='"+firstName+"' class='form-control' placeholder='Name' readonly='readonly' /> </td>"
			+"<td><input type='text' name='lastName' id='lastName"+roomId+""+roomGuestId+"' value='"+lastName+"' class='form-control' placeholder='Surname' readonly='readonly' /> </td>"
			+"<td><input type='text' name='dateOfBirth' id='dateOfBirth"+roomId+""+roomGuestId+"' value='"+dateOfBirth+"' class='form-control dob' placeholder='DOB' readonly='readonly' />"
			+"<input type='hidden' id='title"+roomId+""+roomGuestId+"' />"
			+"<input type='hidden' id='paxType"+roomId+""+roomGuestId+"' />"
			+"</td>"
			+paxTypeSelectOption
			+"<td>"
			+"<input type='hidden' id='roomAndGuestId"+roomId+""+roomGuestId+"' value='"+response.roomAndGuestId+"' />"
			+"<div id='updateBtnDiv"+roomId+""+roomGuestId+"' style='display:none;'>"
			+"<button onclick='updateRoomGuest("+roomId+","+roomGuestId+")' class='btn btn-success'>"
			+"Update</button></div>"
			+"<div id='editBtnDiv"+roomId+""+roomGuestId+"'>"
			+"<button onclick='editRoomGuest("+roomId+","+roomGuestId+")'>"
			+"<span class='glyphicon glyphicon-edit'></span></button>"
			+"<button onclick='deleteRoomGuest("+roomId+","+roomGuestId+")'>"
			+"<span class='glyphicon glyphicon-trash'></span>"
			+"</button></div></td>"
			+"</tr>";
			$("#guestBtnRow"+roomId).before(newEditContentRow);

			var totalRoom = parseInt($("#totalRoom").val());
			if(totalRoom == 1)
			$("#deleteRoomBtn").hide();
			//alert(response.totalGuestPerRoom);
			if(response.totalGuestPerRoom < 4)
				$("#addRoomGuestBtn"+roomId).show();
		}
	});             

}


/* Add room*/ 
function addNewRoom(roomId, roomGuestId)
{ 
	var preRoomId = parseInt(roomId) - 1;
	var nextRoomId = parseInt(roomId) + 1;
	var nextRoomGuestId = parseInt(roomGuestId) + 1;


	var orderId = $("#orderId").val();
	var totalRoom = parseInt($("#totalRoom").val())+1;
	var newGuestRoom = "<tr id='roomDataRow"+roomId+"'>"
	+"<td data-title='<s:text name='tgi.label.room' />"
	+"${loop.count}'><strong><s:text name='tgi.label.room' /> "+totalRoom+" </strong>"
	+"<input type='hidden' id='deleteRoomId"+roomId+"' value='"+roomId+"' /></td>";
	+"<td><strong></strong></td>"
	+"<td><strong></strong></td></tr>";

	// save total room no as a temprary storage
	$("#totalRoom").val(totalRoom);

	var newRoomAddData = newGuestRoom
	+"<tr id='guestBtnRow"+roomId+"'>"
	+"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
	+"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
	+"<td>"
	+"<input type='button' value='Add Guest' id='addRoomGuestBtn"+roomId+"' onclick='showGuestForm("+roomId+","+roomGuestId+");' class='btn btn-info btn-xs' />"
	+"</td>"
	+"</tr>";
	$("#guestTabel > tbody > tr#guestBtnRow"+preRoomId).after(newRoomAddData);

	var replaceNewAddRoomBtn = "";
	if(totalRoom == 4)
	{
		replaceNewAddRoomBtn = "<td><input type='button' style='display:none;' id='addRoomBtn' value='Add Room' onclick='addNewRoom("+nextRoomId+","+roomGuestId+");' class='btn btn-success btn-xs' /></td>"
		+"<td><input type='button' id='deleteRoomBtn' value='Delete Room' onclick='deleteRoom("+roomId+","+roomGuestId+");' class='btn btn-danger btn-xs' /></td>";
	}
	else
	{
		replaceNewAddRoomBtn = "<td><input type='button' id='addRoomBtn' value='Add Room' onclick='addNewRoom("+nextRoomId+","+roomGuestId+");' class='btn btn-success btn-xs' /></td>"
		+"<td><input type='button' id='deleteRoomBtn' value='Delete Room' onclick='deleteRoom("+roomId+","+roomGuestId+");' class='btn btn-danger btn-xs' /></td>";	
	}
	$("#roomRow").html(replaceNewAddRoomBtn);

	var Obj_data = {
			orderId : orderId,
			totalRoom : totalRoom
	};
	$.ajax({
		type: "POST",
		url: '<%=request.getContextPath()%>/addTourOrderRoom.action',
		data : Obj_data,
		success: function(response)
		{  
			$("#deleteRoomId"+roomId).val(response.roomId);
		}
	});             

}


function editRoomGuest(roomId, roomGuestId)
{
	// enable room guest edit form
	disableRoomGuestForm(false, roomId, roomGuestId);

	$("#editBtnDiv"+roomId+""+roomGuestId).hide();
	$("#updateBtnDiv"+roomId+""+roomGuestId).show();
}

function disableRoomGuestForm(status, roomId, roomGuestId)
{
	$("#title"+roomId+""+roomGuestId).attr('disabled', status);
	$("#firstName"+roomId+""+roomGuestId).attr('readonly', status);
	$("#lastName"+roomId+""+roomGuestId).attr('readonly', status);
	$("#dateOfBirth"+roomId+""+roomGuestId).attr('readonly', status);
	$("#paxType"+roomId+""+roomGuestId).attr('disabled', status);
}


function updateRoomGuest(roomId, roomGuestId)
{
	var orderId = $("#orderId").val();
	var title = $("#title"+roomId+""+roomGuestId).val();
	var firstName = $("#firstName"+roomId+""+roomGuestId).val();
	var lastName = $("#lastName"+roomId+""+roomGuestId).val();
	var dateOfBirth = $("#dateOfBirth"+roomId+""+roomGuestId).val();
	var paxType = $("#paxType"+roomId+""+roomGuestId).val();
	var roomAndGuestId = $("#roomAndGuestId"+roomId+""+roomGuestId).val();

	// disable room guest edit form
	disableRoomGuestForm(true, roomId, roomGuestId);
	$("#editBtnDiv"+roomId+""+roomGuestId).show();
	$("#updateBtnDiv"+roomId+""+roomGuestId).hide();

	var Obj_data = {
			orderId : orderId,
			roomId : roomId,
			title : title,
			firstName : firstName,
			lastName : lastName,
			dateOfBirth : dateOfBirth,
			paxType : paxType,
			roomAndGuestId : roomAndGuestId
	};       
	$.ajax({
		type: "POST",
		url: '<%=request.getContextPath()%>/updateTourOrderGuest.action',
		data : Obj_data,
		success: function(response)
		{  

		}
	});
}



function deleteRoomGuest(roomId, roomGuestId)
{
	var roomAndGuestId = $("#roomAndGuestId"+roomId+""+roomGuestId).val();
	$("#roomGuestDataRow"+roomId+""+roomGuestId).remove(); 
	var Obj_data = {
			roomAndGuestId : roomAndGuestId
	};  
	$.ajax({
		type: "POST",
		url: '<%=request.getContextPath()%>/deleteTourOrderGuest.action',
		data : Obj_data,
		success: function(response)
		{ 
			// alert(roomId+" = "+response.totalGuestPerRoom);
			if(response.totalGuestPerRoom < 4)
				$("#addRoomGuestBtn"+roomId).show();
		}
	});      
}



function deleteRoom(roomId, roomGuestId)
{
	var orderId = $("#orderId").val();
	var deleteRoomId = $("#deleteRoomId"+roomId).val();

	var Obj_data = {
			roomId : deleteRoomId,
			orderId : orderId
	};  
	$.ajax({
		type: "POST",
		url: '<%=request.getContextPath()%>/deleteTourOrderRoom.action',
		data : Obj_data,
		success: function(response)
		{  
			// alert(response.roomId);	

			$("#roomDataRow"+roomId).remove();
			$("#roomGuestDataRow"+roomId+""+roomGuestId).remove();
			$("#guestBtnRow"+roomId).remove();
			location.reload();
			/* var nextRoomId = parseInt(roomId) + 1;

             	var replaceNewAddRoomBtn = "<td><input type='button' value='Add Room' onclick='addNewRoom("+nextRoomId+","+roomGuestId+");' class='btn btn-success btn-xs' /></td>"
				  +"<td><input type='button' value='Delete Room' onclick='deleteRoom("+response.roomId+","+roomGuestId+");' class='btn btn-danger btn-xs' /></td>";
					$("#roomRow").html(replaceNewAddRoomBtn); */
		}
	});      
}



function getSelectedTitle(title, roomId, roomGuestId)
{
	var titleSelectOption = "";
	if(title == 'Mr')
	{
		titleSelectOption = "<td><select name='title' id='title"+roomId+""+roomGuestId+"' class='form-control' disabled='disabled'>"
		+"<option selected='selected'>Mr</option><option>Miss</option><option>Mrs</option></select></td>";
	}
	else if(title == 'Mrs')
	{
		titleSelectOption = "<td><select name='title' id='title"+roomId+""+roomGuestId+"' class='form-control' disabled='disabled'>"
		+"<option>Mr</option><option>Miss</option><option selected='selected'>Mrs</option></select></td>";
	}
	else if(title == 'Miss')
	{
		titleSelectOption = "<td><select name='title' id='title"+roomId+""+roomGuestId+"' class='form-control' disabled='disabled'>"
		+"<option selected='selected'>Mr</option><option selected='selected'>Miss</option><option>Mrs</option></select></td>";
	}
	return titleSelectOption;
}

function getSelectedPaxType(paxType, roomId, roomGuestId)
{
	var paxTypeSelectOption = "";
	if(paxType == 'ADT')
	{
		paxTypeSelectOption = "<td><select name='paxType' id='paxType"+roomId+""+roomGuestId+"' class='form-control' disabled='disabled'>"
		+"<option selected='selected'>ADT</option><option>CHILD</option><option>SENIOR</option></select></td>";
	}
	else if(paxType == 'CHILD')
	{
		paxTypeSelectOption = "<td><select name='paxType' id='paxType"+roomId+""+roomGuestId+"' class='form-control' disabled='disabled'>"
		+"<option>ADT</option><option selected='selected'>CHILD</option><option>SENIOR</option></select></td>";
	}
	else if(paxType == 'SENIOR')
	{
		paxTypeSelectOption = "<td><select name='paxType' id='paxType"+roomId+""+roomGuestId+"' class='form-control' disabled='disabled'>"
		+"<option>ADT</option><option>CHILD</option><option selected='selected'>SENIOR</option></select></td>";
	}
	return paxTypeSelectOption;
}


$(document).ready(function()
		{
	var totalRoom = parseInt($("#totalRoom").val());
	if(totalRoom == 4)
	{
		$("#addRoomBtn").hide();
	}
	else if(totalRoom < 4)
	{
		$("#addRoomBtn").show();
		if(totalRoom == 1)
			$("#deleteRoomBtn").hide();
		else
		{
			$("#deleteRoomBtn").show();	
		}
	}
		});

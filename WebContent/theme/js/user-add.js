$(":file").filestyle({placeholder: "No file"});

$(document).ready(function(){
    $(".mar-check7").click(function(){
        $(".mark-list7").toggle(500);
    });
    $(".mar-check8").click(function(){
        $(".mark-list8").toggle(500);
    });
    $(".mar-check9").click(function(){
        $(".mark-list9").toggle(500);
    });
});
	
$(function () {
    $("#working").click(function () {
        if ($(this).is(":checked")) {
         
            $("#is-working").show();
        } else {
        	   $("#is-working").hide();
        }
    });
});



	function getProgramType() {
		$('#programTypeId').find('option').remove().end().append(
				'<option value=""> Select Program Type</option>').val('');
		var programTypeId = $('#qualificationType').val();
		$.ajax({
			url : "getProgramTypeJsonList?id=" + programTypeId,
			type : "GET",
			success : function(response) {
				$.each(response, function(index, value) {
					console.debug(value.name);
					$('#programTypeId').append(
							new Option(value.name + " (" + value.code + ")",
									value.id));
				});
			}
		});
	}

	function getSectionType() {
		$('#sectionTypeId').find('option').remove().end().append(
				'<option value=""> Select Section Type</option>').val('');
		var programTypeId = $('#programTypeId').val();
		$.ajax({
			url : "getSectionTypeJsonList?programTypeId=" +programTypeId,
			type : "GET",
			success : function(response) {
				$.each(response, function(index, value) {
					console.debug(value.name);
					$('#sectionTypeId').append(
							new Option(value.name, value.id));
				});
			}
		});
	}
	
	/* function getSectionType() {
		$('#subProgramTypeId').find('option').remove().end().append(
				'<option value=""> Select Section Type</option>').val('');
		$.ajax({
			url : "getSubProgramTypeJsonList",
			type : "GET",
			success : function(response) {
				$.each(response, function(index, value) {
					console.debug(value.name);
					$('#sectionTypeId').append(
							new Option(value.name, value.id));
				});
			}
		});
	} */

	var SubProgramType = {
			url: "getSubProgramTypeJsonList.action?data=subProgram",
			getValue: "subProgram",
			list: {
				match: {
					enabled: true
				}
			}
		};
		$("#sub-program-type").easyAutocomplete(SubProgramType);
	


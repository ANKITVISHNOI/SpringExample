$(document).ready(function() {
	init();
	doTracking('take attendance view', 'success', 'take attendance view success');

	$(window).resize(function() {
		changeAttendanceButtons();
	});

});

function init() {
	initCalendar();
	// $(".save-attendance-button").click(function(){$("#attendance_form").submit();});
	// //populateCalendarDays();

	// if ($("#has_draggables").val() == 1) {
	// 	initDraggables();
	// }
	// if ($("#is_compact").val() == 1) {
	// 	initCompact();
	// }

 //    $("#delete_attendance_button").unbind();
 //    $("#delete_attendance_button").click(function(event) {
 //    	event.preventDefault();
 //    	switchToDeletingButton(this);
	// 	$("#delete_class_id").val($("#class").val());
	// 	return true;
 //    });

 //    $("#save_attendance_button").unbind();
 //    $("#save_attendance_button").click(function(event) {
	// 	//doTracking('attendance save', 'success', 'attendance save success');
	// 	event.preventDefault();
	// 	switchToSavingButton(this);
	// 	saveAttendance(false);
	// });
	// $('#add_note').on('shown.bs.modal', function (e) {
	// 	$("#add_note_text").focus();
	// });
	// $('#edit_note').on('shown.bs.modal', function (e) {
	// 	$("#edit_note_text").focus();
	// });
 //    $("#submit_edit_note").unbind();
 //    $("#submit_edit_note").click(function(event) {
 //        event.preventDefault();
 //        $("#notes").val($("#edit_note_text").val());
 //        $("#note_text").html($("#edit_note_text").val());
 //        $("#edit_note").modal("hide");
 //        return true;
 //    });
 //    $("#submit_add_note").unbind();
 //    $("#submit_add_note").click(function(event) {
 //        event.preventDefault();
 //        $("#notes").val($("#add_note_text").val());
 //        $("#note_text").html($("#add_note_text").val());
 //        $("#add_note").modal("hide");
 //        return true;
 //    });

    $("#class").unbind();
    $("#class").chosen().change(function() {
    	changeClass(this);
    });
	$(".chosen-drop").css({'width':'auto', 'white-space': 'nowrap', 'maxWidth':'400px'});
    $("#day_type_select").chosen();
    $(".attendance_taking_div button").click(function() {
    	$("#attend_"+$(this).closest("div.attendance_taking_div").attr("student_id")).val($(this).attr("attendance_category_id"));
    });
    $(".attendance_taking_div div:nth-of-type(2) button").click(function(){ clickAttendanceButton(this, 'primary'); });
    $(".attendance_taking_div div:nth-of-type(3) button").click(function(){ clickAttendanceButton(this, 'success'); });
    $(".attendance_taking_div div:nth-of-type(4) button").click(function(){ clickAttendanceButton(this, 'warning'); });
    $(".attendance_taking_div div:nth-of-type(5) button").click(function(){ clickAttendanceButton(this, 'info'); });
    $(".attendance_taking_div div:nth-of-type(6) button").click(function(){ clickAttendanceButton(this, 'danger'); });
    $(".attendance_taking_div div:nth-of-type(7) button").click(function(){ clickAttendanceButton(this, 'plain'); });

    $(".time_selection").click(function(){
    	$(this).closest("div").find("span.time-span").html($(this).attr("time_label"));
    	$("#time_"+$(this).closest("div.attendance_taking_div").attr("student_id")).val($(this).attr("time_min"));
	});

	$(".time-span").each(function() {
		if ($("#time_"+$(this).closest("div.attendance_taking_div").attr("student_id")).val()) {
			$(this).html($(this).closest("div.btn-group").find('.time_selection[time_min="'+$("#time_"+$(this).closest("div.attendance_taking_div").attr("student_id")).val()+'"]').attr("time_label"));
		}
		// $(this).closest("div.attendance_taking_div").attr("student_id");
	});
    $("#save_attendance_button").click(function() {
    	switchToSavingButton(this);
    	if ($("#day_type_select").val()) {
    		$("#day_type").val($("#day_type_select").val());
    	}
    	doTracking('attendance save', 'success', 'attendance save success');
    	$("#attendance_form").submit();
    });
    $("#save_attendance_button_top").click(function() {
    	switchToSavingButton(this);
    	if ($("#day_type_select").val()) {
    		$("#day_type").val($("#day_type_select").val());
    	}
    	doTracking('attendance save', 'success', 'attendance save success');
    	$("#attendance_form").submit();
    });
    $("#confirm_delete_button").click(function() {
    	switchToDeletingButton(this);
    	$("#attendance_delete_form").submit();
    });
    $(".attendance-btn[is_selected='1']").click();
    $("[rel='tooltip']").tooltip();

	$('#modal-add_student_note').on('shown.bs.modal', function (e) {
		$("#add_student_note_text").val($("#notes_"+$(e.relatedTarget).attr("student_id")).val());
		$("#add_note_student_id").val($(e.relatedTarget).attr("student_id"));
		$("#add_student_note_text").focus();
	});
	$('#modal-confirm_delete').on('shown.bs.modal', function (e) {
        $("#attendance_delete_formdate").val($("#formdate").val());
        $("#attendance_delete_class_id").val($("#class").val());
	});

	$("#add_class_note_button").click(function() {
		$("#notes").val($("#add_class_note_text").val());
		if ($("#add_class_note_text").val()) {
			$("#class_note_button").addClass("btn-primary").removeClass("btn-default");
		} else {
			$("#class_note_button").addClass("btn-default").removeClass("btn-primary");
		}
		$("#modal-add_class_note").modal('hide');
	});
	$("#add_student_note_button").click(function() {
		$("#notes_"+$("#add_note_student_id").val()).val($("#add_student_note_text").val());
		if ($("#add_student_note_text").val()) {
			$("#note_button_"+$("#add_note_student_id").val()).addClass("btn-primary").removeClass("btn-default");
		} else {
			$("#note_button_"+$("#add_note_student_id").val()).addClass("btn-default").removeClass("btn-primary");
		}
		$("#add_note_student_id").val('');
		$("#add_student_note_text").val('');
		$("#modal-add_student_note").modal('hide');
	});
	changeAttendanceButtons();
	$("#student_filter_button").click(function() {
		$("#student_filter_button").toggleClass("btn-primary");
		$("#student_filter_button").toggleClass("btn-default");
		$("#student_filter").unbind();
		if ($("#student_filter_button").hasClass("btn-primary")) {
			$("#student_filter").focus();
			$("#student_filter").keyup(function() {
				if ($("#student_filter").val()) {
					$(".student-name").each(function() {
						if ($(this).html().toLowerCase().indexOf($("#student_filter").val().toLowerCase()) >= 0) {
							$(this).closest("div.student_attendance_row").show();
						} else {
							$(this).closest("div.student_attendance_row").hide();
						}
					});
				} else {
					$(".student-name").each(function() {
						$(this).closest("div.student_attendance_row").show();
					});
				}
			});
			$("#remove_student_filter").click(function() {
				$(".student-name").each(function() {
					$(this).closest("div.student_attendance_row").show();
				});
				$("#student_filter").val("");
				$("#student_filter_button").click();
			});
		}
	});
	// if ($("#student_filter").length > 0) {
	// 	$("#student_filter").keyup(function() {
	// 		if ($("#student_filter").val()) {
	// 			$(".student-name").each(function() {
	// 				if ($(this).html().indexOf($("#student_filter").val()) >= 0) {
	// 					$(this).closest("div.student_attendance_row").show();
	// 				} else {
	// 					$(this).closest("div.student_attendance_row").hide();
	// 				}
	// 			});
	// 		} else {
	// 			$(".student-name").each(function() {
	// 				$(this).closest("div.student_attendance_row").show();
	// 			});
	// 		}
	// 	});
	// }
    $(".attendance-mark-all").click(function() {
        $("button[attendance_category_id='"+$(this).attr('data-attendance-id')+"']").click();
    });
}

function changeAttendanceButtons() {
    var windowW = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
    $(".attendance-btn").each(function() {
        if (windowW > 991) {
        	$(this).html($(this).attr("attendance_name"));
        	$(".attendance-btn").css("margin-right", "10px");
        } else {
        	$(this).html($(this).attr("attendance_ind"));
        	$(".attendance-btn").css("margin-right", "3px");
        }
    });
}

function clickAttendanceButton(button, buttonType) {
	$(button).parents('div.attendance_taking_div').find('div.btn-group button').removeClass(function(){return 'btn btn-success btn-danger btn-primary btn-info btn-warning btn-plain';}).addClass('btn').addClass('btn-default');
	$(button).parents('div.attendance_taking_div').find('div.btn-group a').removeClass(function(){return 'btn btn-success btn-danger btn-primary btn-info btn-warning btn-plain';}).addClass('btn').addClass('btn-default');
	$(button).toggleClass('btn-default').toggleClass('btn-'+buttonType);
	if ($(button).next('div.btn-group').length > 0) {
		$(button).next('div.btn-group').find('a').first().toggleClass('btn-default').toggleClass('btn-'+buttonType);
		setAttendanceTime(button, buttonType, true);
	} else {
		setAttendanceTime(button, false);
	}
}

function setAttendanceTime(button, buttonType, needTime) {
	if ($(button).hasClass('btn-'+buttonType) && $('#default_time').val() && needTime) {
		$(button).parents("div.attendance_taking_div").find("span.time-span").html($(button).parents('div.attendance_taking_div').find('.time_selection[time_min="'+$('#default_time').val()+'"]').attr('time_label'));
		$("#time_"+$(button).parents("div.attendance_taking_div").attr("student_id")).val($('#default_time').val());
	} else {
		$(button).parents("div.attendance_taking_div").find("span.time-span").html('Time');
		$("#time_"+$(button).closest("div.attendance_taking_div").attr("student_id")).val('');
	}
}

// function initDraggables() {
//     $( ".attendance-column" ).sortable({
//       connectWith: ".attendance-column"
//     });

//     $(".attendance-column").droppable({
//     	accept: ".widget",
//     	tolerance: "pointer",
//     	drop: function( event, ui ) {
//     		updateHeaderCounts();
//     		$("#attend_"+$(ui.draggable).attr("student_id")).val($(this).attr("attendance_ind"));
//     	}
//     });

//     $(".column").disableSelection();
// }

// function initCompact() {
//     if ($(".student-row .btn-present").length > 0) {
//             $(".student-row .btn-present").each(function() {
//                 setAttendanceButtonClick(this, 'P', 'btn-primary');
//             });
//     }
//     if ($(".student-row .btn-absent").length > 0) {
//             $(".student-row .btn-absent").each(function() {
//                 setAttendanceButtonClick(this, 'A', 'btn-warning');
//             });
//     }
//     if ($(".student-row .btn-tardy").length > 0) {
//             $(".student-row .btn-tardy").each(function() {
//                 setAttendanceButtonClick(this, 'T', 'btn-inverse');
//             });
//     }
// 	if ($(".student-row .btn-1").length > 0) {
// 			$(".student-row .btn-1").each(function() {
// 				setAttendanceButtonClick(this);
// 			});
// 	}
// 	if ($(".student-row .btn-2").length > 0) {
// 			$(".student-row .btn-2").each(function() {
// 				setAttendanceButtonClick(this);
// 			});
// 	}
// 	if ($(".student-row .btn-3").length > 0) {
// 			$(".student-row .btn-3").each(function() {
// 				setAttendanceButtonClick(this);
// 			});
// 	}
// 	if ($(".student-row .btn-4").length > 0) {
// 			$(".student-row .btn-4").each(function() {
// 				setAttendanceButtonClick(this);
// 			});
// 	}
// 	if ($(".student-row .btn-5").length > 0) {
// 			$(".student-row .btn-5").each(function() {
// 				setAttendanceButtonClick(this);
// 			});
// 	}
// 	if ($(".student-row .btn-6").length > 0) {
// 			$(".student-row .btn-6").each(function() {
// 				setAttendanceButtonClick(this);
// 			});
// 	}
// }

// function setAttendanceButtonClick(item, attendanceInd, enabledClass) {
// 	if (!attendanceInd) {
// 		attendanceInd = $(item).attr("attendance_ind");
// 	}
// 	if (!enabledClass) {
// 		enabledClass = "btn-custom-" + $(item).attr("attendance_counter");
// 	}
// 	var studentId = $(item).parent().attr("student_id");
//     $(item).click(function(event) {
//     	event.preventDefault();
//         $('#attend_'+studentId).val(attendanceInd);
//         $(item).parent().find(".btn").removeClass("btn-primary")
// 									 .removeClass("btn-warning")
// 									 .removeClass("btn-inverse")
// 									 .removeClass("btn-custom-1")
// 									 .removeClass("btn-custom-2")
// 									 .removeClass("btn-custom-3")
// 									 .removeClass("btn-custom-4")
// 									 .removeClass("btn-custom-5")
// 									 .removeClass("btn-custom-6");
//         $(item).addClass(enabledClass);
//     });
// }

/*
 * Initialize the calendar.
 */
function initCalendar() {
    /* initialize the calendar
     -----------------------------------------------------------------*/

    var formDate = new Date($("#formdate").val());
    var d = formDate.getDate();
    var m = formDate.getMonth();
    var y = formDate.getFullYear();
    $('#calendar').fullCalendar('destroy');
    $('#calendar').fullCalendar({
        dayClick: function(date, allDay, jsEvent, view) {
	        $(".fc-widget-content").removeClass('fc-state-highlight');
	        $(".fc-widget-content").removeClass('fc-day-selected');
	        //$(this).addClass('fc-state-highlight');
	        $(this).addClass('fc-day-selected');
	        //changeDate((date.getMonth()+1) + "/" + date.getDate() + "/" + (date.getYear()+1900));
	        changeDate(date.format("MM/DD/YYYY"));
    	},
    	defaultDate: new Date($("#formdate").val()),
    	fixedWeekCount: false,
    	header: {
            left: 'prev,next',
            center: 'title',
            right: 'today'
        },
        editable: false,
        droppable: false,
        eventAfterAllRender: function(view) {
       		populateCalendarDays($("#calendar").fullCalendar('getDate').format("MM/DD/YYYY"));
       		$('.fc-day[data-date="'+$('#calendar').fullCalendar('getDate').format("YYYY-MM-DD")+'"]').addClass("fc-day-selected");
        }
    });
	// $('#calendar').fullCalendar('gotoDate', formDate);
    // $("td").not(".fc-other-month").find(".fc-day-number").filter(function() { return $(this).text() == d; }).parents("td").addClass("fc-day-selected");
    $(".fc-next-button").click(function() {
    	$("#formdate").val($("#calendar").fullCalendar('getDate').format("MM/DD/YYYY"));
    	$(".fc-widget-content").removeClass("fc-day-attendance-saved");
    	$(".fc-widget-content").removeClass("fc-day-missed");
    	$(".fc-widget-content").removeClass("fc-day-selected");
    });
    $(".fc-prev-button").click(function() {
    	$("#formdate").val($("#calendar").fullCalendar('getDate').format("MM/DD/YYYY"));
    	$(".fc-widget-content").removeClass("fc-day-attendance-saved");
    	$(".fc-widget-content").removeClass("fc-day-missed");
    	$(".fc-widget-content").removeClass("fc-day-selected");
    });
}

// function updateHeaderCounts() {
// 	$(".attendance-column").each(function() {
// 		var count = $(this).find(".student").not(".ui-sortable-helper").size();
// 		$(this).siblings(".attendance-title").find("span").html(count);
// 	});
// }

function populateCalendarDays(date, classId, updateTimeArea) {

	if (!date) { date = $("#formdate").val(); }
	if (!classId) { classId = $("#class").val(); }
	if (!classId) {
		return;
	}

	// var loadingGritterId = addLoadingNotice('Updating calendar...');
	var loadingAlert = addNotice('Updating', 'Updating calendar...', '', '', '', false);

	// $('.ui-state-default').each(function(index) {
	// 	if (!$(this).hasClass('ui-state-highlight')) {
	// 		$(this).css('background', '');
	// 	}
	// });
	$.post(baseUrl+'/attendance/get-calendar-days', {'is_ajax':'1','class_id':classId,'date':date},
		function(resp, responseText) {
			if (resp.result != 'failure') {
				$(resp.days).each(function(index) {
					var dayWithData = resp.days[index];
					if (dayWithData) {
						$('td.fc-day').not(".fc-other-month").each(function(index) {
							var dateObj = new Date(date);
							dateObj.setDate(dayWithData);
							var dateString = moment(dateObj).format("YYYY-MM-DD");
							$(".fc-day-grid").find('.fc-day[data-date="'+dateString+'"]').addClass('fc-day-attendance-saved');
							// if (dayWithData == $(this).find(".fc-day-number").html() && !$(this).hasClass('fc-day-selected')) {
							// 	$(this).addClass('fc-day-attendance-saved');
							// }
						})
					}
				}).promise().done(function() {
					    if ($("#meets_sunday").val() == 1) { $("td.fc-sun.fc-past").not(".fc-day-attendance-saved").not(".fc-other-month").addClass("fc-day-missed"); }
					    if ($("#meets_monday").val() == 1) { $("td.fc-mon.fc-past").not(".fc-day-attendance-saved").not(".fc-other-month").addClass("fc-day-missed"); }
					    if ($("#meets_tuesday").val() == 1) { $("td.fc-tue.fc-past").not(".fc-day-attendance-saved").not(".fc-other-month").addClass("fc-day-missed"); }
					    if ($("#meets_wednesday").val() == 1) { $("td.fc-wed.fc-past").not(".fc-day-attendance-saved").not(".fc-other-month").addClass("fc-day-missed"); }
					    if ($("#meets_thursday").val() == 1) { $("td.fc-thu.fc-past").not(".fc-day-attendance-saved").not(".fc-other-month").addClass("fc-day-missed"); }
					    if ($("#meets_friday").val() == 1) { $("td.fc-fri.fc-past").not(".fc-day-attendance-saved").not(".fc-other-month").addClass("fc-day-missed"); }
					    if ($("#meets_saturday").val() == 1) { $("td.fc-sat.fc-past").not(".fc-day-attendance-saved").not(".fc-other-month").addClass("fc-day-missed"); }
				});
				$(resp.day_counts).each(function(index) {
					var dayCount = resp.day_counts[index];
					if (dayCount) {
						$(dayCount.data).each(function(index) {
							$(".fc-day-grid").find('.fc-day[data-date="'+dayCount.day+'"]').append('<div class="attendance-badge-container"><span class="label '+(dayCount.data[index].is_monitored == '1' ? 'label-danger' : 'label-default')+'">'+dayCount.data[index].ind+' : '+dayCount.data[index].count+'</span></div>');
						});
					}
				});
				// if (updateTimeArea) {
				// 	timeHtml = resp.time_table_html;
				// 	if (timeHtml) {
				// 		$('#tutor_time_area').html(timeHtml);
				// 		//$('#your_time').html('Your time for ' + resp.month_name);
				// 	}
				// }
			} else {

			}
			//removeLoadingNotice(loadingGritterId);
			loadingAlert.alert("close");
	}, 'json');
}

function changeDate(newDate) {
	if (!$('#class').val()) {
		// $("#calendar").fullCalendar('select', newDate, newDate);
		$("#formdate").val(newDate);
		// alert('Please select a ' + lClassLabel + ' before changing dates!');
		return false;
	}
	//addInfoMessage("Loading...");
	// var loadingGritterId = addLoadingNotice('Getting attendance data...');
	var loadingAlert = addNotice('Fetching...', 'Fetching attendance data...', '', '', '', false);
	$.post(baseUrl+'/attendance/get-date', {'format': 'xml', 'newdate':newDate,'class_id':$("#class").val()},
		function(resp) {
			if (resp) {
				var ind = 0;
//				if (resp.indexOf("!!!") > 0) {
//					var dayType = resp.substring(0,resp.indexOf("!!!"));
//					if (dayType == 'N') {
//						ind = 0;
//					} else if (dayType == 'E') {
//						ind = 1;
//					} else if (dayType == 'L') {
//						ind = 2;
//					} else if (dayType == 'S') {
//						ind = 3;
//					}
//					resp = resp.substring(resp.indexOf("!!!")+3);
//				}
		// 		teacherTimeHtml = $(resp).find('teacherTimeArea').text();
		// 		if (teacherTimeHtml) {
		// 			if ($('#tutor_time_entry_form').length > 0) {
		// 				$('.right_guts_23_1 .portlet:first').replaceWith(teacherTimeHtml);
		// 			} else {
		// 				$('.right_guts_23_1').prepend(teacherTimeHtml);
		// 			}
		// 			$(".right_guts_23_1 .portlet:first").addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
		// 			.find(".portlet-header")
		// 				.addClass("ui-widget-header ui-corner-top")
		// //				.prepend('<span class="ui-icon ui-icon-triangle-1-n"></span>')
		// 				.end()
		// 			.find(".portlet-content");
		// 		} else {
		// 			if ($('.right_guts_23_0').length > 0) {
		// 				$('.right_guts_23_0').remove();
		// 			} else {
		// 				if ($('#tutor_time_entry_form').length > 0) {
		// 					$('.right_guts_23_1 .portlet:first').remove();
		// 				}
		// 			}
		// 		}
				$('#attendance_main').replaceWith(resp);//$(resp).find('html').text());
                $("#attendance_date").html($("#formatted_date").val());
				// $("#class").trigger('liszt:updated');
				// $('#right_guts_23_div').html($(resp).find('html').text());
				// $('#right_portlet_icon_1').attr('src', $(resp).find('right_portlet_icon').text());
				notes = $(resp).find('notes').text();
				if (notes) {
					$('#notes').val(notes);
					$('#add_class_note_text').val(notes);
					$("#class_note_button").addClass("btn-primary").removeClass("btn-default");
				} else {
					$('#notes').val('');
				}
                if ($(".day-type-select-div").length > 0) {
                    $(".day-type-select-div").removeClass('hidden');
                    if ($(resp).find('day_type').text()) {
                        $("#day_type_select").val($(resp).find('day_type').text());
                    }
                }
                // var quickLinks = $(resp).find('quick_links').text();
				// if (quickLinks) {
				// 	$('#quick_links').html(quickLinks);
				// } else {
				// 	$('#quick_links').html('');
				// }
//				if ($('no_data') && $('message')) {
//					$('message').addClass('nodata').setHTML('This day\'s attendance has not been saved.');
//				}
				//init_slider('notesdiv','shownotes');
//				init_items();
//				init_calendar();
				//init_scroll_event();
				//init_scroll_areas();
//				if (!direction) {
//					$('newdate').value = saveDate;
//				}
				//populateCalendarDays($('#formdate').val(), $('#class').val(), true);
				init();
				//clearMessageArea();
				//$('#edit_notes_link').removeClass('hidden');
			}
			//removeLoadingNotice(loadingGritterId);
			loadingAlert.alert("close");
	}, 'html');
}




















// function updateAttendance() {
// 	if (!$('#class').val()) {
// 		addErrorMessage('Please select a ' + lClassLabel + ' before changing dates!');
// 		return false;
// 	}
// 	// addInfoMessage("Loading...");
// 	$.post(baseUrl+'ajax.pl', {'action':'ajaxgetdate','newdate':newDate,'class_id':$("#class").val(),'direction':''},
// 		function(resp) {
// 			if (resp) {
// 				var ind = 0;
// //				if (resp.indexOf("!!!") > 0) {
// //					var dayType = resp.substring(0,resp.indexOf("!!!"));
// //					if (dayType == 'N') {
// //						ind = 0;
// //					} else if (dayType == 'E') {
// //						ind = 1;
// //					} else if (dayType == 'L') {
// //						ind = 2;
// //					} else if (dayType == 'S') {
// //						ind = 3;
// //					}
// //					resp = resp.substring(resp.indexOf("!!!")+3);
// //				}
// 				teacherTimeHtml = $(resp).find('teacherTimeArea').text();
// 				if (teacherTimeHtml) {
// 					if ($('#tutor_time_entry_form').length > 0) {
// 						$('.right_guts_23_1 .portlet:first').replaceWith(teacherTimeHtml);
// 					} else {
// 						$('.right_guts_23_1').prepend(teacherTimeHtml);
// 					}
// 					$(".right_guts_23_1 .portlet:first").addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
// 					.find(".portlet-header")
// 						.addClass("ui-widget-header ui-corner-top")
// 		//				.prepend('<span class="ui-icon ui-icon-triangle-1-n"></span>')
// 						.end()
// 					.find(".portlet-content");
// 				} else {
// 					if ($('.right_guts_23_0').length > 0) {
// 						$('.right_guts_23_0').remove();
// 					} else {
// 						if ($('#tutor_time_entry_form').length > 0) {
// 							$('.right_guts_23_1 .portlet:first').remove();
// 						}
// 					}
// 				}
// 				$('#right_guts_23_div').html($(resp).find('html').text());
// 				$('#right_portlet_icon_1').attr('src', $(resp).find('right_portlet_icon').text());
// 				notes = $(resp).find('notes').text();
// 				if (notes) {
// 					$('#notes_text').html(notes);
// 					$('#notes_portlet').val($(resp).find('notes').text());
// 					$('#notes').val($(resp).find('notes').text());
// 					$('#notes_ts').html("Last Updated: " + $(resp).find('notes_ts').text());
// 				} else {
// 					$('#notes_text').html('No notes for today');
// 					$('#notes_portlet').val('');
// 					$('#notes').val('');
// 					$('#notes_ts').html("");
// 				}
// 				var quickLinks = $(resp).find('quick_links').text();
// 				if (quickLinks) {
// 					$('#quick_links').html(quickLinks);
// 				} else {
// 					$('#quick_links').html('');
// 				}
// //				if ($('no_data') && $('message')) {
// //					$('message').addClass('nodata').setHTML('This day\'s attendance has not been saved.');
// //				}
// 				//init_slider('notesdiv','shownotes');
// //				init_items();
// //				init_calendar();
// 				//init_scroll_event();
// 				//init_scroll_areas();
// //				if (!direction) {
// //					$('newdate').value = saveDate;
// //				}
// 				populateCalendarDays($('#formdate').val(), $('#class').val(), true);
// 				init();
// 				clearMessageArea();
// 				$('#edit_notes_link').removeClass('hidden');
// 			}
// 	}, 'xml');

// }

















// function dateSelected(dateText, inst) {
// 	changeDate(dateText);
// }

// function monthYearChanged(year, month, inst) {
// 	populateCalendarDays(month+'/1/'+year, $('#class').val(), true);
// }

// // function populateCalendarDays(date, classId, updateTimeArea) {
// // 	$('.ui-state-default').each(function(index) {
// // 		if (!$(this).hasClass('ui-state-highlight')) {
// // 			$(this).css('background', '');
// // 		}
// // 	});
// // 	$.post(baseUrl+'ajax.pl', {'action':'ajaxgetcalendardays','class_id':classId,'date':date},
// // 		function(resp) {
// // 			if (resp.result != 'failure') {
// // 				$(resp.days).each(function(index) {
// // 					dayWithData = resp.days[index];
// // 					$('.ui-state-default').each(function(index) {
// // 						if (dayWithData == $(this).html() && !$(this).hasClass('ui-state-highlight')) {
// // 							$(this).css('background', '#e6e6e6 url(/css/profi_admin/smoothness/images/ui-bg_glass_75_dffbdf_1x400.png) repeat-x scroll 50% 50%');
// // 						}
// // 					});
// // 				});
// // 				if (updateTimeArea) {
// // 					timeHtml = resp.time_table_html;
// // 					if (timeHtml) {
// // 						$('#tutor_time_area').html(timeHtml);
// // 						//$('#your_time').html('Your time for ' + resp.month_name);
// // 					}
// // 				}
// // 			}
// // 	}, 'json');
// // }

// // function init() {
// // 	setAttendanceTdHeight();
// // 	initPageButtons();
// // 	initClassChange();
// // 	initDraggables();
// // 	initDroppables();
// // 	initHeaderCounts();
// // 	if ($("#present_cart").length > 0) {
// // 		$("#present_cart").attr({ot:$("#present_cart").offset().top, ol:$("#present_cart").offset().left});
// // 		////$("#present_cart").css({left: $("#present_cart").offset().left, top: $("#present_cart").offset().top});
// // 		menuYloc = parseInt($("#present_cart").offset().top);
// // 		$(window).scroll(function () {
// // 			if ($("#present_lock").attr("locked") == "false") {
// // 				if ($(document).scrollTop() - 300 > 0 && $(document).scrollTop() < $("#cart_corral").height() + 100) {
// // 					offset =  parseInt($(document).scrollTop() - 300); // + parseInt($("#present_cart").attr('ot'));
// // 				} else if ($(document).scrollTop() - 300 < 0) {
// // 					offset = 0;//$(document).scrollTop(); //$("#present_cart").attr('ot');
// // 				}
// // 				$("#present_cart").animate({top:offset+"px"},{duration:500,queue:false});
// // 			}
// // 		});
// // 	}
// // 	if ($("#absent_cart").length > 0) {
// // 		$("#absent_cart").attr({ot:$("#absent_cart").offset().top, ol:$("#absent_cart").offset().left});
// // 		////$("#absent_cart").css({left: $("#absent_cart").offset().left, top: $("#absent_cart").offset().top});
// // 		menuYloc = parseInt($("#absent_cart").offset().top);
// // 		$(window).scroll(function () {
// // 			if ($("#absent_lock").attr("locked") == "false") {
// // 				if ($(document).scrollTop() - 300 > 0 && $(document).scrollTop() < $("#cart_corral").height() + 100) {
// // 					offset =  parseInt($(document).scrollTop() - 300);// + parseInt($("#absent_cart").attr('ot'));
// // 				} else if ($(document).scrollTop() - 300 < 0) {
// // 					offset = 0;//$(document).scrollTop(); //$("#absent_cart").attr('ot');
// // 				}
// // 				$("#absent_cart").animate({top:offset+"px"},{duration:500,queue:false});
// // 			}
// // 		});
// // 	}
// // 	if ($("#tardy_cart").length > 0) {
// // 		$("#tardy_cart").attr({ot:$("#tardy_cart").offset().top, ol:$("#tardy_cart").offset().left});
// // 		////$("#tardy_cart").css({left: $("#tardy_cart").offset().left, top: $("#tardy_cart").offset().top});
// // 		menuYloc = parseInt($("#tardy_cart").offset().top);
// // 		$(window).scroll(function () {
// // 			if ($("#tardy_lock").attr("locked") == "false") {
// // 				if ($(document).scrollTop() - 300 > 0 && $(document).scrollTop() < $("#cart_corral").height() + 100) {
// // 					offset =  parseInt($(document).scrollTop() - 300);// + parseInt($("#tardy_cart").attr('ot'));
// // 				} else if ($(document).scrollTop() - 300 < 0) {
// // 					offset = 0;//$(document).scrollTop(); //$("#tardy_cart").attr('ot');
// // 				}
// // 				$("#tardy_cart").animate({top:offset+"px"},{duration:500,queue:false});
// // 			}
// // 		});
// // 	}
// // 	if ($("#excused_absent_cart").length > 0) {
// // 		$("#excused_absent_cart").attr({ot:$("#excused_absent_cart").offset().top, ol:$("#excused_absent_cart").offset().left});
// // 		////$("#excused_absent_cart").css({left: $("#excused_absent_cart").offset().left, top: $("#excused_absent_cart").offset().top});
// // 		menuYloc = parseInt($("#excused_absent_cart").offset().top);
// // 		$(window).scroll(function () {
// // 			if ($("#excused_absent_lock").attr("locked") == "false") {
// // 				if ($(document).scrollTop() - 300 > 0 && $(document).scrollTop() < $("#cart_corral").height() + 100) {
// // 					offset =  parseInt($(document).scrollTop() - 300);// + parseInt($("#excused_absent_cart").attr('ot'));
// // 				} else if ($(document).scrollTop() - 300 < 0) {
// // 					offset = 0;//$(document).scrollTop(); //$("#excused_absent_cart").attr('ot');
// // 				}
// // 				$("#excused_absent_cart").animate({top:offset+"px"},{duration:500,queue:false});
// // 			}
// // 		});
// // 	}
// // 	if ($("#leftearly_cart").length > 0) {
// // 		$("#leftearly_cart").attr({ot:$("#leftearly_cart").offset().top, ol:$("#leftearly_cart").offset().left});
// // 		////$("#excused_absent_cart").css({left: $("#excused_absent_cart").offset().left, top: $("#excused_absent_cart").offset().top});
// // 		menuYloc = parseInt($("#leftearly_cart").offset().top);
// // 		$(window).scroll(function () {
// // 			if ($("#leftearly_lock").attr("locked") == "false") {
// // 				if ($(document).scrollTop() - 300 > 0 && $(document).scrollTop() < $("#cart_corral").height() + 100) {
// // 					offset =  parseInt($(document).scrollTop() - 300);// + parseInt($("#excused_absent_cart").attr('ot'));
// // 				} else if ($(document).scrollTop() - 300 < 0) {
// // 					offset = 0;//$(document).scrollTop(); //$("#excused_absent_cart").attr('ot');
// // 				}
// // 				$("#leftearly_cart").animate({top:offset+"px"},{duration:500,queue:false});
// // 			}
// // 		});
// // 	}
// // 	if ($("#present_lock").length > 0) {
// // 		////$("#present_cart").css("position", "absolute");
// // 		$("#present_lock").click(
// // 			function() {
// // 				if ($("#present_lock").attr("locked") == "true") {
// // 					$("#present_cart").css({"position":"absolute", "z-index":"101", "top":"0"});
// // 					//$("#tardy_cart").css("position", "absolute");
// // 					//$("#excused_absent_cart").css("position", "absolute");
// // 					$("#present_lock").attr("src", "/images/aspneticons/unlock_16x16.gif")
// // 					$("#present_lock").attr("locked", "false");
// // 				} else {
// // 					$("#present_cart").css({"position":"", "z-index":'100'});
// // 					//$("#tardy_cart").css("position", "");
// // 					//$("#excused_absent_cart").css("position", "");
// // 					$("#present_lock").attr("src", "/images/aspneticons/lock_16x16.gif");
// // 					$("#present_lock").attr("locked", "true");
// // 					$("#present_cart").animate({top:$("#present_cart").attr('ot')},{duration:500,queue:false});
// // 					//$("#excused_absent_cart").attr({ot:$("#excused_absent_cart").offset().top});
// // 					//$("#excused_absent_cart").css({top: $("#excused_absent_cart").offset().top});
// // 				}
// // 			}
// // 		);
// // 	}
// // 	$("#absent_lock").click(
// // 		function() {
// // 			if ($("#absent_lock").attr("locked") == "true") {
// // 				$("#absent_cart").css({"position":"absolute", "z-index":"101", "top":($("#tardy_cart").height() > 0 ? $("#tardy_cart").height() +72 : '0')+"px"});
// // 				$("#absent_lock").attr({"src":"/images/aspneticons/unlock_16x16.gif", "locked":"false"});
// // 				$("#tardy_cart").css({"position":"absolute", "top":"0px"});
// // 				$("#leftearly_cart").css({"position":"absolute", "top":($("#tardy_cart").height() + 72 +$("#absent_cart").height() + 72 )+"px"});
// // 				$("#excused_absent_cart").css("position", "absolute");
// // 				$("#excused_absent_cart").css({"top":($("#tardy_cart").height()+72+$("#absent_cart").height()+72 )+"px"});
// // 			} else {
// // 				$("#absent_cart").css({"position":"", "z-index":"100"});
// // 				$("#absent_lock").attr({"src":"/images/aspneticons/lock_16x16.gif", "locked":"true"});
// // 				$("#absent_cart").animate({top:($("#tardy_cart").height() > 0 ? $("#tardy_cart").height() +72 : '0')+"px"},{duration:500,queue:false});

// // 				$("#tardy_cart").css("position", "");
// // 				$("#leftearly_cart").css("position", "");
// // 				$("#excused_absent_cart").css("position", "");
// // 				$("#excused_absent_cart").attr({ot:$("#excused_absent_cart").offset().top});
// // 				$("#excused_absent_cart").css({"top":($("#tardy_cart").height()+72+$("#absent_cart").height()+72 )+"px"});
// // 			}
// // 		}
// // 	);
// // 	$("#tardy_lock").click(
// // 		function() {
// // 			if ($("#tardy_lock").attr("locked") == "true") {
// // 				$("#tardy_cart").css({"position":"absolute", "z-index":"101"});
// // 				$("#tardy_lock").attr({"src":"/images/aspneticons/unlock_16x16.gif", "locked":"false"});
// // 				$("#absent_cart").css({"position":"absolute", "top":($("#tardy_cart").height() +72 )+"px"});
// // 				$("#leftearly_cart").css({"position":"absolute", "top":($("#tardy_cart").height() + 72 +$("#absent_cart").height() + 72 )+"px"});
// // 				$("#excused_absent_cart").css({"position":"absolute", "top":($("#tardy_cart").height()+72+$("#absent_cart").height()+72 )+"px"});
// // 			} else {
// // 				$("#tardy_cart").css({"position":"", "z-index":'100'});
// // 				$("#tardy_lock").attr({"src":"/images/aspneticons/lock_16x16.gif", "locked":"true"});
// // 				$("#tardy_cart").animate({top:'0px'},{duration:500,queue:false});
// // 				$("#absent_cart").css("position", "");
// // 				$("#absent_cart").css({top: $("#absent_cart").offset().top});
// // 				$("#absent_cart").attr({ot:$("#absent_cart").offset().top});
// // 				$("#leftearly_cart").css("position", "");
// // 				$("#leftearly_cart").css({top: $("#leftearly_cart").offset().top});
// // 				$("#leftearly_cart").attr({ot:$("#leftearly_cart").offset().top});
// // 				$("#excused_absent_cart").css("position", "");
// // 				$("#excused_absent_cart").css({top: $("#excused_absent_cart").offset().top});
// // 				$("#excused_absent_cart").attr({ot:$("#excused_absent_cart").offset().top});
// // 			}
// // 		}
// // 	);
// // 	$("#excused_absent_lock").click(
// // 		function() {
// // 			if ($("#excused_absent_lock").attr("locked") == "true") {
// // 				$("#excused_absent_cart").css({"position":"absolute", "z-index":"101", "top":($("#tardy_cart").height()+72+$("#absent_cart").height()+72 )+"px"});
// // 				$("#absent_cart").css({"position":"absolute", "top":($("#absent_cart").height()+72)+"px"});
// // 				$("#tardy_cart").css({"position":"absolute", "top":"0"});
// // 				$("#leftearly_cart").css({"position":"absolute", "top":"0"});
// // 				$("#excused_absent_lock").attr("src", "/images/aspneticons/unlock_16x16.gif")
// // 				$("#excused_absent_lock").attr("locked", "false");
// // 			} else {
// // 				$("#excused_absent_cart").css({"position":"", "z-index":"100"});
// // 				$("#absent_cart").css("position", "");
// // 				$("#tardy_cart").css("position", "");
// // 				$("#leftearly_cart").css("position", "");
// // 				$("#excused_absent_lock").attr({"src":"/images/aspneticons/lock_16x16.gif", "locked":"true"});
// // 				$("#excused_absent_cart").animate({top:$("#excused_absent_cart").attr('ot')},{duration:500,queue:false});
// // 			}
// // 		}
// // 	);
// // 	$("#leftearly_lock").click(
// // 		function() {
// // 			if ($("#leftearly_lock").attr("locked") == "true") {
// // 				$("#leftearly_cart").css({"position":"absolute", "z-index":"101", "top":($("#tardy_cart").height()+72+$("#absent_cart").height()+72)+"px"});
// // 				$("#absent_cart").css({"position":"absolute", "top":($("#absent_cart").height()+72)+"px"});
// // 				$("#tardy_cart").css({"position":"absolute", "top":"0"});
// // 				$("#leftearly_lock").attr({"src": "/images/aspneticons/unlock_16x16.gif", "locked": "false"});
// // 			} else {
// // 				$("#leftearly_cart").css({"position":"", "z-index":"100"});
// // 				$("#absent_cart").css("position", "");
// // 				$("#tardy_cart").css("position", "");
// // 				$("#leftearly_lock").attr({"src":"/images/aspneticons/lock_16x16.gif", "locked":"true"});
// // 				$("#leftearly_cart").animate({top:$("#excused_absent_cart").attr('ot')},{duration:500,queue:false});
// // 			}
// // 		}
// // 	);
// // 	$('.cart_item[title]').qtip({
// // 								style: { name: 'blue', tip: true },
// // 								position: {
// // 									corner: {
// // 										 target: 'bottomMiddle',
// // 										 tooltip: 'topMiddle'
// // 									}
// // 								}});
// // 	$('.student_cart_info_icon').each(function(index) {
// // 		$(this).click(function() {
// // 			$("#student_info_cart").html('Loading...');
// // 			link = this;
// // 			$.post(baseUrl+'ajax.pl', {'action':'ajaxgetstudentinfo','student_id':$(link).attr('studentid')},
// // 				function(resp) {
// // 					if (resp != 'failure') {
// // 						$("#student_info_cart").html(resp);
// // 					}
// // 			});
// // 		});
// // 	});
// //     if ($(".student_row .present_inactive").length > 0) {
// //             $(".student_row .present_inactive").each(function() {
// //                 setPresentClick($("#present_box_"+$(this).attr("student_id")));
// //                 setAbsentClick($("#absent_box_"+$(this).attr("student_id")));
// //                 setTardyClick($("#tardy_box_"+$(this).attr("student_id")));
// //             });
// //     }
// //     if ($(".student_row .absent_inactive").length > 0) {
// //             $(".student_row .absent_inactive").each(function() {
// //             	setAbsentClick($("#absent_box_"+$(this).attr("student_id")));
// //                 setPresentClick($("#present_box_"+$(this).attr("student_id")));
// //                 setTardyClick($("#tardy_box_"+$(this).attr("student_id")));
// //             });
// //     }
// //     if ($(".student_row .tardy_inactive").length > 0) {
// //             $(".student_row .tardy_inactive").each(function() {
// //             	setAbsentClick($("#absent_box_"+$(this).attr("student_id")));
// //                 setPresentClick($("#present_box_"+$(this).attr("student_id")));
// //                 setTardyClick($("#tardy_box_"+$(this).attr("student_id")));
// //             });
// //     }

// // }

// // function initPageButtons() {
// // 	if ($("#tutor_time_save_button").length > 0) {
// // 		initTutorTimeForm();
// // 	}
// // 	$("#top_save_button").click(function() { saveAttendance(true); return false; });
// // 	$("#bottom_save_button").click(function() { saveAttendance(true); return false; });
// // 	$("#bottom_delete_button").click(function() { deleteAttendance(); return false; });
// // 	$("#edit_notes_link").unbind("click");
// // 	$("#edit_notes_link").click(function() { $('#notes_portlet').toggleClass('hidden'); return false; });
// // }

// var properDayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// var dayNames = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
// function saveAttendance(mustCheck) {
// 	if (mustCheck && $('#has_meeting_days').val() == 1) {
// 		formDate = new Date($("#formdate").val());
// 		if ($("#meets_"+dayNames[formDate.getDay()]).val() == 1) {
// 			doTracking('attendance save', 'success', 'attendance save success');
// 			$('#save_attendance_form').submit();
// 		} else {
// 			really = confirm("That " + lClassLabel + " doesn't meet on "+properDayNames[formDate.getDay()]+"s.\nAre you sure you want to save attendance?");
// 			if (really) {
// 				saveAttendance(false);
// 			}
// 		}
// 	} else {
// 		doTracking('attendance save', 'success', 'attendance save success');
// 		$('#save_attendance_form').submit();
// 	}
// }

// function initTutorTimeForm() {
// 	$("#save_tutor_time_form").validate({messages: {own_tutor_time: "Please select your time.",other_tutor_time: "Please select the tutor's time."}});
// 	$("#tutor_time_save_button").click(function() {
// 		if ($("#save_tutor_time_form").valid()) {
// 			addInfoMessage('Saving Time Entry...');
// 			$.post(baseUrl+'ajax.pl', {'action':'ajaxsavetutortime','class_id':$('#class').val(),'formdate':$('#formdate').val(),'own_tutor_time':$("#own_tutor_time").val(),'other_tutor_id':($("#other_tutor_id").length > 0 ? $("#other_tutor_id").val() : ""),'other_tutor_time': ($("#other_tutor_time").length > 0 ? $("#other_tutor_time").val() : "")},
// 				function(resp) {
// 					if (resp != 'failure') {
// 						$("#tutor_time_entry_form").html(resp);
// 						addSuccessMessage('Time saved!');
// 						initTutorTimeForm();
// 					}
// 			});
// 		}
// 		return false;
// 	});
// 	if ( $("#staff_time_table .delete_icon").length > 0 ) {
// 			$("#staff_time_table .delete_icon").click(function() {
// 				deleteTimeEntry(this);
// 				return false;
// 			});
// 	}
// }

// // function initClassChange() {
// // 	$("#class").change(
// // 		function() {
// // 				if (!$('#class').val() && (!$('#newdate') || !$('#newdate').val())) {
// // 					return;
// // 				}
// // 				$('#eventbox').html('<p id="info" class="info"><span class="info_inner">Loading...</span></p>');
// // 				params = 'action=ajaxgetstudents&class_id='+$('#class').val();
// // 				var savedDate;
// // 				if ($('#newdate') && $('#newdate').val()) {
// // 					params = params + "&newdate="+$('#newdate').val();
// // 					savedDate = $('#newdate').val();
// // 				} else if ($('#formdate') && $('#formdate').val()) {
// // 					params = params + "&formdate="+$('#formdate').val();
// // 					savedDate = $('#formdate').val();
// // 				}
// // 				$.post(baseUrl+'ajax.pl', params,
// // 					function(resp) {
// // 						if (resp && $(resp).val() != 'failure') {
// // 							//var ind = 0;
// // //							if (resp.indexOf("!!!") > 0) {
// // //								var dayType = resp.substring(0,resp.indexOf("!!!"));
// // //								if (dayType == 'N') {
// // //									ind = 0;
// // //								} else if (dayType == 'E') {
// // //									ind = 1;
// // //								} else if (dayType == 'L') {
// // //									ind = 2;
// // //								} else if (dayType == 'S') {
// // //									ind = 3;
// // //								}
// // //								resp = resp.substring(resp.indexOf("!!!")+3);
// // //							}
// // //							$('#right_guts_23_div').html(resp);
// // 							$('#right_guts_23_div').html($(resp).find('html').text());
// // 							$('#right_portlet_icon_1').attr('src', $(resp).find('right_portlet_icon').text());
// // 							notes = $(resp).find('notes').text();
// // 							if (notes) {
// // 								$('#notes_text').html(notes);
// // 								$('#notes_portlet').val($(resp).find('notes').text());
// // 								$('#notes').val($(resp).find('notes').text());
// // 							} else {
// // 								$('#notes_text').html('No notes for today');
// // 								$('#notes_portlet').val('');
// // 								$('#notes').val('');
// // 							}
// // 							var quickLinks = $(resp).find('quick_links').text();
// // 							if (quickLinks) {
// // 								$('#quick_links').html(quickLinks);
// // 							} else {
// // 								$('#quick_links').html('');
// // 							}
// // 							if (savedDate) {
// // 								$('#newdate').val(savedDate);
// // 								$('#formdate').val(savedDate);
// // 							}
// // 							populateCalendarDays($('#formdate').val(), $('#class').val(), true);
// // 							teacherTimeHtml = $(resp).find('teacherTimeArea').text();
// // 							if (teacherTimeHtml) {
// // 								if ($('#tutor_time_entry_form').length > 0) {
// // 									$('.right_guts_23_1 .portlet:first').replaceWith(teacherTimeHtml);
// // 								} else {
// // 									$('.right_guts_23_1').prepend(teacherTimeHtml);
// // 								}
// // 								$(".right_guts_23_1 .portlet:first").addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
// // 								.find(".portlet-header")
// // 									.addClass("ui-widget-header ui-corner-top")
// // 					//				.prepend('<span class="ui-icon ui-icon-triangle-1-n"></span>')
// // 									.end()
// // 								.find(".portlet-content");
// // 							} else {
// // 								if ($('#tutor_time_entry_form').length > 0) {
// // 									$('.right_guts_23_1 .portlet:first').remove();
// // 								}
// // 							}
// // 							init();
// // 							$('#eventbox').empty();
// // 							$('#edit_notes_link').removeClass('hidden');
// // 						}
// // 				});
// // 		}
// // 	);
// // }

// // function initHeaderCounts() {
// // 	$("#absent_count").html($("#absent_cart_items div").size());
// // 	$("#present_count").html($("#present_cart_items div").size());
// // 	$("#tardy_count").html($("#tardy_cart_items div").size());
// // 	$("#excused_absent_count").html($("#excused_absent_cart_items div").size());
// // 	$("#student_count").html($("#students_cart_items div").size());
// // 	$("#leftearly_count").html($("#leftearly_cart_items div").size());
// // }

// // function changeDate(newDate) {
// // 	if (!$('#class').val()) {
// // 		addErrorMessage('Please select a ' + lClassLabel + ' before changing dates!');
// // 		return false;
// // 	}
// // 	addInfoMessage("Loading...");
// // 	$.post(baseUrl+'ajax.pl', {'action':'ajaxgetdate','newdate':newDate,'class_id':$("#class").val(),'direction':''},
// // 		function(resp) {
// // 			if (resp) {
// // 				var ind = 0;
// // //				if (resp.indexOf("!!!") > 0) {
// // //					var dayType = resp.substring(0,resp.indexOf("!!!"));
// // //					if (dayType == 'N') {
// // //						ind = 0;
// // //					} else if (dayType == 'E') {
// // //						ind = 1;
// // //					} else if (dayType == 'L') {
// // //						ind = 2;
// // //					} else if (dayType == 'S') {
// // //						ind = 3;
// // //					}
// // //					resp = resp.substring(resp.indexOf("!!!")+3);
// // //				}
// // 				teacherTimeHtml = $(resp).find('teacherTimeArea').text();
// // 				if (teacherTimeHtml) {
// // 					if ($('#tutor_time_entry_form').length > 0) {
// // 						$('.right_guts_23_1 .portlet:first').replaceWith(teacherTimeHtml);
// // 					} else {
// // 						$('.right_guts_23_1').prepend(teacherTimeHtml);
// // 					}
// // 					$(".right_guts_23_1 .portlet:first").addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
// // 					.find(".portlet-header")
// // 						.addClass("ui-widget-header ui-corner-top")
// // 		//				.prepend('<span class="ui-icon ui-icon-triangle-1-n"></span>')
// // 						.end()
// // 					.find(".portlet-content");
// // 				} else {
// // 					if ($('.right_guts_23_0').length > 0) {
// // 						$('.right_guts_23_0').remove();
// // 					} else {
// // 						if ($('#tutor_time_entry_form').length > 0) {
// // 							$('.right_guts_23_1 .portlet:first').remove();
// // 						}
// // 					}
// // 				}
// // 				$('#right_guts_23_div').html($(resp).find('html').text());
// // 				$('#right_portlet_icon_1').attr('src', $(resp).find('right_portlet_icon').text());
// // 				notes = $(resp).find('notes').text();
// // 				if (notes) {
// // 					$('#notes_text').html(notes);
// // 					$('#notes_portlet').val($(resp).find('notes').text());
// // 					$('#notes').val($(resp).find('notes').text());
// // 					$('#notes_ts').html("Last Updated: " + $(resp).find('notes_ts').text());
// // 				} else {
// // 					$('#notes_text').html('No notes for today');
// // 					$('#notes_portlet').val('');
// // 					$('#notes').val('');
// // 					$('#notes_ts').html("");
// // 				}
// // 				var quickLinks = $(resp).find('quick_links').text();
// // 				if (quickLinks) {
// // 					$('#quick_links').html(quickLinks);
// // 				} else {
// // 					$('#quick_links').html('');
// // 				}
// // //				if ($('no_data') && $('message')) {
// // //					$('message').addClass('nodata').setHTML('This day\'s attendance has not been saved.');
// // //				}
// // 				//init_slider('notesdiv','shownotes');
// // //				init_items();
// // //				init_calendar();
// // 				//init_scroll_event();
// // 				//init_scroll_areas();
// // //				if (!direction) {
// // //					$('newdate').value = saveDate;
// // //				}
// // 				populateCalendarDays($('#formdate').val(), $('#class').val(), true);
// // 				init();
// // 				clearMessageArea();
// // 				$('#edit_notes_link').removeClass('hidden');
// // 			}
// // 	}, 'xml');
// // }

// // function deleteAttendance() {
// // 	yorn = confirm("Are you sure you want to delete this day's attendance?");
// // 	if (yorn) {
// // 		addInfoMessage('Deleting attendance...');
// // 		scrollToTop('fast');
// // 		$.post(baseUrl+'ajax.pl', {'action':'ajaxdeleteattendance','form_date':$('#formdate').val(),'class_id':$("#class").val()},
// // 			function(resp) {
// // 				if (resp != 'failure') {
// // 					changeDate($('#formdate').val());
// // 				}
// // 		});
// // 	}
// // }

// // function setAttendanceTdHeight() {
// // 	if ($("#present_cart").length > 0) {
// // 		newHeight = $("#attendance_td_1").height();
// // 		td1Height = parseInt($("#attendance_td_1").css("height").substring(0, $("#attendance_td_1").css("height").length - 2));
// // 		presentCartHeight = parseInt($("#present_cart").css("height").substring(0, $("#present_cart").css("height").length - 2));
// // 		absentCartHeight = parseInt($("#absent_cart").css("height").substring(0, $("#absent_cart").css("height").length - 2));
// // 		//
// // 		tardyCartHeight = 0;
// // 		excusedAbsentCartHeight = 0;
// // 		unexcusedAbsentCartHeight = 0;
// // 		if ($("#tardy_cart").length > 0) {
// // 			tardyCartHeight = parseInt($("#tardy_cart").css("height").substring(0, $("#tardy_cart").css("height").length - 2));
// // 		}
// // 		if ($("#excused_absent_cart").length > 0) {
// // 			excusedAbsentCartHeight = parseInt($("#excused_absent_cart").css("height").substring(0, $("#excused_absent_cart").css("height").length - 2));
// // 		}
// // 		if ($("#unexcused_absent_cart").length > 0) {
// // 			unexcusedAbsentCartHeight = parseInt($("#unexcused_absent_cart").css("height").substring(0, $("#unexcused_absent_cart").css("height").length - 2));
// // 		}
// // 		//
// // 		if (newHeight < presentCartHeight) {
// // 			newHeight = presentCartHeight;
// // 		}
// // 		if (newHeight < (absentCartHeight + tardyCartHeight + excusedAbsentCartHeight + unexcusedAbsentCartHeight)) {
// // 			newHeight = absentCartHeight + tardyCartHeight + excusedAbsentCartHeight + unexcusedAbsentCartHeight;
// // 		}
// // 		//if (newHeight > td1Height) {
// // 			$("#attendance_td_1").css("height", newHeight + "px");
// // 		//}
// // 	}
// // }

// function deleteTimeEntry(link) {
// 	$(link).parents("tr").css({ "background-color" : "#fbcdcd" }, 'fast');
// 	really = confirm('Are you sure you want to delete this Time Entry?');
// 	if (really)	{
// 		addInfoMessage('Deleting Time Entry...');
// 		$.post(baseUrl+'ajax.pl', {'action':'ajaxdeletetutortime','teacher_id':$(link).attr('teacherid'),'class_id':$('#class').val(),'formdate':$('#formdate').val()},
// 			function(resp) {
// 				if (resp != 'failure') {
// 					$(link).parents("tr").fadeOut("fast");
// 					addSuccessMessage('Time Entry deleted!');
// 				}
// 		});
// 	} else {
// 		$(link).parents("tr").css({ "background-color" : "#fff" }, 'fast');
// 	}
// 	return false;
// }

function changeClass(selectBox) {
	if (!$('#class').val() && (!$('#newdate') || !$('#newdate').val())) {
		return;
	}

	// var loadingGritterId = addLoadingNotice('Loading info for ' + $("#class option:selected").text() + '.');
	var loadingAlert = addNotice('Loading', 'Loading info for ' + $("#class option:selected").text() + '.', '', '', '', false);

	// $('#eventbox').html('<p id="info" class="info"><span class="info_inner">Loading...</span></p>');
	params = 'action=ajaxgetstudents&class_id='+$('#class').val();
	var savedDate;
	if ($('#newdate') && $('#newdate').val()) {
		params = params + "&newdate="+$('#newdate').val();
		savedDate = $('#newdate').val();
	} else if ($('#formdate') && $('#formdate').val()) {
		params = params + "&formdate="+$('#formdate').val();
		savedDate = $('#formdate').val();
	}
    $.post(baseUrl+'/attendance/get-date', {'format': 'xml', 'newdate':savedDate,'class_id':$("#class").val()},
		function(resp) {
			if (resp && $(resp).val() != 'failure') {
				// $('#right_guts_23_div').html($(resp).find('html').text());
				// $('#right_portlet_icon_1').attr('src', $(resp).find('right_portlet_icon').text());
				$('#attendance_main').replaceWith(resp);//.find('html').text());
                $("#attendance_date").html($("#formatted_date").val());
                if ($(".day-type-select-div").length > 0) {
                    $(".day-type-select-div").removeClass('hidden');
                    //$("#day_type_select").val();
                }
				// notes = $(resp).find('notes').text();
				// if (notes) {
				// 	$('#note_text').html(notes);
				// 	// $('#notes_portlet').val($(resp).find('notes').text());
				// 	$('#edit_note_text').val($(resp).find('notes').text());
				// } else {
				// 	$('#notes_text').html('No notes for today');
				// 	$('#notes_portlet').val('');
				// 	$('#notes').val('');
				// }
				// // var quickLinks = $(resp).find('quick_links').text();
				// // if (quickLinks) {
				// // 	$('#quick_links').html(quickLinks);
				// // } else {
				// // 	$('#quick_links').html('');
				// // }
				// if (savedDate) {
				// 	$('#newdate').val(savedDate);
				// 	$('#formdate').val(savedDate);
				// }
				// populateCalendarDays($('#formdate').val(), $('#class').val(), true);
		// 		teacherTimeHtml = $(resp).find('teacherTimeArea').text();
		// 		if (teacherTimeHtml) {
		// 			if ($('#tutor_time_entry_form').length > 0) {
		// 				$('.right_guts_23_1 .portlet:first').replaceWith(teacherTimeHtml);
		// 			} else {
		// 				$('.right_guts_23_1').prepend(teacherTimeHtml);
		// 			}
		// 			$(".right_guts_23_1 .portlet:first").addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
		// 			.find(".portlet-header")
		// 				.addClass("ui-widget-header ui-corner-top")
		// //				.prepend('<span class="ui-icon ui-icon-triangle-1-n"></span>')
		// 				.end()
		// 			.find(".portlet-content");
		// 		} else {
		// 			if ($('#tutor_time_entry_form').length > 0) {
		// 				$('.right_guts_23_1 .portlet:first').remove();
		// 			}
		// 		}
				init();
				// $('#eventbox').empty();
				// $('#edit_notes_link').removeClass('hidden');
			} else {

			}
			//removeLoadingNotice(loadingGritterId);
			loadingAlert.alert("close");
	});
}

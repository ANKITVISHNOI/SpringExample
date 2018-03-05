

$('#tp-starttime').timepicker();
    $('#tp-endtime').timepicker();


    function addperiod() {
        var subjectname = $('#subjectid option:selected').text();
        var subjectid = $('#subjectid option:selected').val();
        var starttime = $('#tp-starttime').val();
        var endtime = $('#tp-endtime').val();


        $('#periodtabledisplay tbody').append('<tr><td data-id="' + subjectid + '">' + subjectname + '-</td><td>' + starttime + '</td><td>' + endtime + '</td><td><a href="#"><img src="admin/plugins/images/delete.png"></a></td></tr>');


    }

    function checkprerequest() {
        if ($('#courseid option:selected').text() === "Select Course") {
        	showModalPopUp("Please Select Course","e");
            return 1;
        }
        else if ($('#batchid option:selected').text() === "") {
            alert("Please Select Batch");
            return 1;
        }
        else
            return 0;

    }
    function checkatleasta_day() {
        var atLeastOneIsChecked = $('input[name="chk[]"]:checked').length > 0;
        if (atLeastOneIsChecked == true)
            return 0;
        else
        {
        	showModalPopUp("Program Type Saved Successfully..","s");
            return 1;
        }
    }


    function showeekdays() {
        var result = checkprerequest();
        if (result == 0)
            $('#setWeekdays').modal('show');
    }
    function showtimings() {
        var result = checkatleasta_day();
        if (result == 0)
            $('#setClassTimings').modal('show');

    }
    var keycolumn = 0;
    function createtableview() {
        var id = $('#dayid').val();
        var rowCount = $('#periodtabledisplay tr').length;
        $('#finish_table tbody tr[data-id=' + id + ']').find("td:gt(0)").remove();//remove all time table of that particular day except e day name column when any one clicks the insert button more than once.
        $('#periodtabledisplay tr').each(function (row, tr) {
            var selectfaculty;
            var fn = $(tr).find('td:eq(0)').text();
            var subid = $(tr).find('td:eq(0)').data("id");//////////////

            if ($(tr).find('td:eq(0)').text() === "BREAK-") {
                selectfaculty = $(tr).find('td:eq(0)').text();

            }
            else {
                selectfaculty = $(tr).find('td:eq(0)').text() + '<br><a id="location' + keycolumn + '" href="javascript:selectfacultyfn(\'' + subid + "','" + keycolumn + '\');">Select Faculty</a>';
                keycolumn = keycolumn + 1;
            }
            $('#finish_table tbody tr[data-id=' + id + ']').append('<td><p style="font-style: italic">' + $(tr).find('td:eq(1)').text() + '-' + $(tr).find('td:eq(2)').text() + '</p><p style="font-weight: bold">' + selectfaculty + '<input type="hidden" value="' + $(tr).find('td:eq(0)').data("id") + '" id="subjectidcell"></p></td>');

        });

    }
    function createdays() {
        $("#finish_table thead tr").empty();
        $("#finish_table tbody").empty();

        if ($('#sundaycheck').is(":checked")) {
            $('#finish_table tbody').append("<tr data-id='1'><td>Sunday <br> <a href ='javascript:assign(1);' >Assign</a></td></tr>");
        }

        if ($('#mondaycheck').is(":checked")) {
            $('#finish_table tbody').append("<tr data-id='2'><td>Monday <br> <a href ='javascript:assign(2);' >Assign</a></td></tr>");
        }

        if ($('#tuesdaycheck').is(":checked")) {
            $('#finish_table tbody').append("<tr data-id='3'><td>Tuesday <br> <a href ='javascript:assign(3);' >Assign</a></td></tr>");
        }
        if ($('#wednesdaycheck').is(":checked")) {
            $('#finish_table tbody').append("<tr data-id='4'><td>Wednesday <br> <a href ='javascript:assign(4);' >Assign</a></td></tr>");
        }

        if ($('#thursdaycheck').is(":checked")) {
            $('#finish_table tbody').append("<tr data-id='5'><td>Thursday <br> <a href ='javascript:assign(5);' >Assign</a></td></tr>");
        }

        if ($('#fridaycheck').is(":checked")) {
            $('#finish_table tbody').append("<tr data-id='6'><td>Friday <br> <a href ='javascript:assign(6);' >Assign</a></td></tr>");
        }

        if ($('#saturdaycheck').is(":checked")) {
            $('#finish_table tbody').append("<tr data-id='7'><td>Saturday <br> <a href ='javascript:assign(7);' >Assign</a></td></tr>");
        }
    }

    function assign(id) {
        var week;
        $('#setClassTimings').modal('show');
        if (id == 1)
            week = "Sunday";
        if (id == 2)
            week = "Monday";
        if (id == 3)
            week = "Tuesday";
        if (id == 4)
            week = "Wednesday";
        if (id == 5)
            week = "Thursday";
        if (id == 6)
            week = "Friday";
        if (id == 7)
            week = "Saturday";


        $('#dayid').val(id);
        $('#timingtitle').html("Create Period Timings for " + week);

    }
    var tablelocation = 0;
    function selectfacultyfn(subject, tablelocation2) {
        var timestring = $("#location" + tablelocation2).parent().parent().find('p:first').text();
        var myday = $("#location" + tablelocation2).parent().parent().parent().find('td:first').text();
        myday = myday.replace('  Assign', '');
        myday = '"' + myday + '"';
        var res = timestring.split("-");//02:45 PM-3:10PM
        var starttime = res[0];   //02:45 PM
        var x = res[0].split(" ");//02:45
        var startampm = x[1];
        var y = x[0].split(":");
        var starthour = y[0];

        starthour = parseInt(starthour);
        if (startampm === "PM") {
            if (starthour === 12) {
            }
            else {
                starthour = starthour + 12;
            }
        }
        var startminute = y[1];

        var endtime = res[1];
        var x1 = res[1].split(" "); //endtime
        var endampm = x1[1];
        var y1 = x1[0].split(":");
        var endhour = y1[0];
        endhour = parseInt(endhour);
        if (endampm === "PM") {

            if (endhour === 12) {
            }
            else {
                endhour = endhour + 12;
            }
        }
        var endminute = y1[1];
        if (starthour > endhour) {
            alert("Please Check Start and End Hours");
            return;
        }
        if (starthour === endhour) {
            if (startminute > endminute) {
                alert("Please Check Start and End Minutes");
                return;
            }
        }
        if (res[0] === res[1]) {
            alert("Please Check Time");
            return;
        }

        tablelocation = tablelocation2;
        $("#assignfaculty").empty();
        $.ajax({
            type: "POST",
            url: "getfaculty",
            data: {subject: subject, starttime: x, endtime: x1, day: myday, courseid: $('#courseid option:selected').val(), batchid: $('#batchid option:selected').val()},
            dataType: "html",
            success: function (data) {
                if (data == "error") {

                }else {
                    $("#assignfaculty").append(data);
                    $('#facultymodal').modal('show');
                }
            }

        });

    }
    function savefaculty() {
        console.log("location" + tablelocation);
        var changetoid = "#location" + tablelocation;
        $(changetoid).text($('#assignfaculty option:selected').text());
        $(changetoid).attr("data-myval", $('#assignfaculty option:selected').val());
    }
    function savett() {

        if ($('#timetablename').val() === "") {
            alert("Please Enter a Name for the Time table");
            return;
        }
        $.ajax({
            type: "POST",
            url: "checkname",
            data: {name: $('#timetablename').val()},
            dataType: "html",
            success: function (data) {
                if (data === "error") {
                    alert("Time Table Already Saved!")

                }
                else {

                    var items = [];
                    var _courseid = $('#courseid option:selected').val();
                    if (_courseid === "") {
                        alert("Please Select Course");
                        return;
                    }
                    items.push(_courseid);
                    var _batchid = $('#batchid option:selected').val();
                    if (_batchid === "") {
                        alert("Please Select Batch");
                        return;
                    }
                    items.push(_batchid);
                    $('#finish_table tbody tr').each(function (key, value) {
                        var $tds = $(this).find('td');
                        var flag = 0;
                        console.log("start");
                        $.each($tds, function () {
                            var res = $(this).text().replace('  Assign', '');
                            res = res.replace('Select Faculty', '');
                            var employeeid = $(this).find('a').data("myval");
                            var subjectid = $(this).find('input').val();
                            if (flag == 0) {
                                items.push("#");
                                flag = 1;
                            }
                            items.push(res);
                            /////////////////////////////////////
                            var inputString = res;
                            var findme = "BREAK";

                            if (inputString.indexOf(findme) > -1) {
                                items.push('0');
                                items.push('0');
                            } else {
                            }



                            ////////////////////////////////////
                            if (employeeid)
                                items.push(employeeid);
                            if (subjectid) {
                                if (employeeid) {
                                }
                                else {

                                    items.push("0");
                                }

                            }
                            if (subjectid)
                                items.push(subjectid);
                            else {
                                if (employeeid) {
                                }
                            }
                            // Prints out the text within the <td>
                        });

                    });
                    console.log(items);
                    $.ajax({
                        type: "POST",
                        url: "savetimetable",
                        data: {data: JSON.stringify(items), name: $('#timetablename').val()},
                        dataType: "html",
                        success: function (data) {
                            alert(data);
                        }
                    });
                }
            }
        });
    }


    $(function () {
        $('#periodtabledisplay').on('click', 'tr a', function (e) {
            e.preventDefault();
            $(this).parents('tr').remove();
        });
    });
    $("#timetablename").on('change keyup paste mouseup', function () {

        $.ajax({
            type: "POST",
            url: "checkname",
            data: {name: $('#timetablename').val()},
            dataType: "html",
            success: function (data) {
                if (data === "error") {
                    alert("This Name Already Exist, Please use a Different Name");
                }
            }

        });

    });

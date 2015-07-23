"use strict";
$(document).ready(function () {  
	
    var keyword = $('#txt-search'),
    className = $('#class-name'),
    studentInfo = $('div#student-info'),
    txtId = $('#txt-id'),
    txtName = $('#txt-name'),
    cboGender = $('#cbo-gender'),
    cboUniversity = $('#cbo-university'),
    cboClass = $('#cbo-class'),
    btnAdd = $('#add-new-student'),
    alertId = $('#alert-id'),
    validateId = $('#validate-id'),
    alertName = $('#alert-name'),
    validateName = $('#validate-name');
    
    /* Load data into Table */
    list();
    
    function list() {
        $.ajax({
            url: 'liststudent.eze',
            method: 'POST',
            data: {
                stuName: keyword.val(),
                className: className.val(),
            },
            success: function (data) {
                studentInfo.html(listDetail(data));

            }
        });
    }

    function listDetail(data) {
        var str = "";
        str += '<table class="table table-hover">' +
                    '<tr>' +
                        '<th>Goal ID</th>' +
                        '<th>Goals/Objectives</th>' +
                        '<th>KPIs</th>' +
                        '<th>Resource</th>' +
                        '<th>Status</th>' +
                        '<th>Period</th>' +
                    '</tr>';
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                str += '<tr>' +
                            '<td>' + data[i].goal + '</td>' +
                            '<td>' + data[i].kpi + '</td>' +
                            '<td>' + data[i].resource + '</td>' +
                            '<td>' + data[i].status + '</td>' +
                            '<td>' + data[i].period + '</td>' +
                       '</tr>';
            }
        }
        else{
            str += '<tr>' +
                        '<td class="text-center" colspan="6">' +
                            '-- No Record --' +
                        '</td>' +
                   '</tr>';
        }
        str += '</table>';
        return str;
    }

    
 
    
   
});
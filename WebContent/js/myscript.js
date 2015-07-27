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
            url: 'listgoal.eze',
            method: 'POST',
            data: {
                stuName: keyword.val(),
                className: className.val(),
            },
            success: function (data) {
                studentInfo.html(listDetail(data));
                
                /* Button for show Update Modal */
                $('img.edit-goal').click(function(){
                    txtId.prop('readonly',true);
                    var td = $(this).parents('tr').find('td');
                    var gender = td.eq(2).text();
                    gender = (gender == "Male") ? 1 : 0;
                    txtId.val(td.eq(0).text());
                    txtName.val(td.eq(1).text());
                    cboGender.val(gender);
                    cboUniversity.val(td.eq(3).text());
                    cboClass.val(td.eq(4).text());
                    btnAdd.text("Update");
                    btnAdd.unbind('click');
                    btnAdd.click(function(){
                        updateStudent(td);
                    });
                });
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
                        '<th>Result/Output</th>' +
                        '<th>Resource</th>' +
                        '<th>Status</th>' +
                        '<th>Period</th>' +
                        '<th>Action</th>' +
                    '</tr>';
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                str += '<tr>' + 
                '<td>' + data[i].goalID + '</td>' +
                            '<td>' + data[i].goal + '</td>' +
                            '<td>' + data[i].kpi + '</td>' +
                            '<td>' + data[i].result + '</td>' +
                            '<td>' + data[i].resource + '</td>' +
                            '<td>' + data[i].status + '</td>' +
                            '<td>' + data[i].period + '</td>' +
                            '<td>' +
                            '<img src="images/edit.png" class="edit-goal" data-toggle="modal" data-target="#bootstrapModal" width="10%">' +
                            '<img src="images/delete.png" class="delete-student" width="10%">' +
                        '</td>' +
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
$(function (){
    $.fn.dataTable.ext.errMode = 'throw';
    $('#table').DataTable({
        responsive: true,
        autoWidth: false,
        destroy: true,
        deferRender: true,
        ajax:{
            url: window.location.pathname,
            type: 'POST',
            data: {
                'action': 'searchdata'
            },
            dataSrc: ""
        },
        columns:[
            {"data": "id"},
            {"data": "name"},
            {"data": "desc"},
            {"data": "desc"},
        ],
        columnDefs:[
            {
                targets: [-1],
                class: 'text-center',
                orderable: false,
                render: function (data, type, row){
                    var buttons = '<a href="/erp/category/update/'+row.id+'/" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit text-white"></i></a> ';
                    buttons += '<a href="/erp/category/delete/'+row.id+'/" type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt text-white"></i></a>';
                    return buttons;
                }
            }  ,
        ],
        initComplete: function (settings, json){

        }
    });
});
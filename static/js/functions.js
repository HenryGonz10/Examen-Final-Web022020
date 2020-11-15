function message_error(obj) {
    var html = '';
    if (typeof (obj) === 'object') {
        html = '<ul style="text-align: left;">';
        $.each(obj, function (key, value) {
            html += '<li>' + key + ': ' + value + '</li>';
        });
        html += '</ul>';
    }
    else{
        html = '<p>'+obj+'</p>';
    }
    Swal.fire({
        title: 'Error!',
        html: html,
        icon: 'error'
    });
}

function submit_with_ajax(url, titulo, contenido, parameters, callback){

    console.log(parameters);
    $.confirm({
        theme: 'material',
        title: titulo,
        icon: 'fa fa-info',
        content: contenido,
        columnClass:'medium',
        typeAnimated: true,
        cancelButtonClass: 'btn-primary',
        draggable: true,
        dragWindowBorder: false,
        buttons: {
            info:{
                text: "Si",
                btnClass: 'btn-success',
                action: function (){
                    $.ajax({
                        url: url,
                        type: "POST",
                        data: parameters,
                        dataType: "json",
                        processData: false,
                        contentType: false,
                    }).done(function (data) {
                            console.log(data);
                            if (!data.hasOwnProperty('error')) {
                                callback(data);
                                return false;
                            }
                            message_error(data.error);
                    }).fail(function(jqXHR, textStatus, errorThrown){
                            message_error(data.error);
                    });
                }
            },
            danger:{
                text: "No",
                btnClass: 'btn-danger',
                action: function (){

                }
            }
        }
    });
}

function alert_action(titulo, contenido, callback, cancel){
    $.confirm({
        theme: 'material',
        title: titulo,
        icon: 'fa fa-info',
        content: contenido,
        columnClass:'medium',
        typeAnimated: true,
        cancelButtonClass: 'btn-primary',
        draggable: true,
        dragWindowBorder: false,
        buttons: {
            info:{
                text: "Si",
                btnClass: 'btn-success',
                action: function (data){
                    callback(data);
                }
            },
            danger:{
                text: "No",
                btnClass: 'btn-danger',
                action: function (){
                    cancel();
                }
            }
        }
    });
}
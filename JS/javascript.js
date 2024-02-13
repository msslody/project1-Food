$(document).ready(function(){
    $('#accept_order').click(()=>{
        var name = $("#_name").val();
        var email = $("#_email").val();
        var phone = $("#_phone").val();
        var address = $("#_address").val();
        var qty = $("#_qty").val();
        var food = $("#_food").val();

        if( name != "" && email != "" && phone != "" && address != "" && qty != "" && food != ""){
            alert("Order accepted !");
            $('#_name').val("");
            $('#_email').val("");
            $('#_phone').val("");
            $('#_address').val("");
            $('#_qty').val("");
            $('#_food').val("");
        }
        else{
            alert("Please input all information");
        }
    })
})

  
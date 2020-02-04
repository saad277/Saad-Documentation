window.onload=function(){





    $.ajax({

        type:"GET",
        url:"tweets.json",
        success: function(data){

            console.log(data);
        },
        error: function(a,b,error){

            console.log("error");

        }




    });



}



//STATES

//  0- Request Not Initialized
//  1- Request Has been set up
//  2- Request HAs been sent
//  3- Request is in process
//  4- Request is complete


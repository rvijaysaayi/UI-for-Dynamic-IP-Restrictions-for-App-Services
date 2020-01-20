
function validateTextBoxes(id) {


    if (isNaN($("#" + id)[0].value) || Number($("#" + id)[0].value) == 0) {
        alert(id + "should be a number between 1 and 4294967295 ");
        $("#submit_button").attr("disabled", true);
    }
    else {
        $("#submit_button").attr("disabled", false);
    }

}

$(document).ready(function ()
{
    $("#cb_enableLogging")[0].checked ? $("#denyAction").attr("disabled", true) : $("#denyAction").attr("disabled", false);
    $("#maxConcurrentRequests")[0].addEventListener('change', function () {
        validateTextBoxes('maxConcurrentRequests');
    });
    $("#maxRequests")[0].addEventListener('change', function () {
        validateTextBoxes('maxRequests');
    });
    $("#requestInterval")[0].addEventListener('change', function () {
        validateTextBoxes('requestInterval');
    });
    
    
    document.getElementById("first").click();
    document.getElementById("submit_button").addEventListener('click', function () {

        alert('Updating the configuration. Please restart the App Service for the changes to reflect')

    });

    document.getElementById("cb_enableLogging").addEventListener('change', function () {
        if (this.checked) {
            $("#denyAction").attr("disabled", true);
        }
        else {
            $("#denyAction").attr("disabled", false);
        }
    })
    if (document.getElementById("restartButton"))
    {
        document.getElementById("restartButton").addEventListener('click', function (event)
        {
            var $button = $(event.target);

            $button.button("loading");

            $.ajax({
                type: "DELETE",
                url: "/api/processes/-1"
            }).always(function () {
                setTimeout(function () {
                    $button.button("reset");

                    location.reload(true);
                }, 5000);
            });


        })

    }

});


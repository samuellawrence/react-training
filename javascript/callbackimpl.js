function sendEmail(){
    console.log("Email Sending....");
}

function sendSms(){
    console.log("SMS Sending........");
}

function sendMessage(){
    console.log("Send message initiated...");
    setTimeout(function(){
        sendSms();
        sendEmail();
    }, 2000);

    console.log("Message send already");
}

sendMessage();

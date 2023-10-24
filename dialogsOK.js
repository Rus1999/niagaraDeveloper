require(['baja!', 'dialogs'], function(baja, dialgos){
    dialgos.showOk("Click OK to log concole")
        .ok(function(){
            console.log("The OK button as been clicked");
        });
});
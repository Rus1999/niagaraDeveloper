// dialog with OK button
require(['baja!', 'dialogs'], function(baja, dialgos){
    dialogs.showOk("Click OK to log concole")
        .ok(function(){
            console.log("The OK button as been clicked");
        });
});

// dialog with HTML element
require(['baja!', 'dialogs'], function(baja, dialogs){
    dialogs.showOk({
        title: "Title",
        content: '<form><label for="firstname">Firstname:</label><input type="text"name="firstname"required><br><label for="lastname">Lastname:</label><input type="text"name="lastname"required><br><label for="email">email:</label><input type="email"name="email"required><br><label for="password">password:</label><input type="password"name="password"required><br><input type="submit"value="Login!"></form>'
    }).ok(function () {
        console.log("The OK button has been clicked");
    });
});

// dialog with Yes, No, Cancel
require(['baja!', 'dialogs'], function(baja, dialogs){
    dialogs.showYesNoCancel("Yes/No/Cancel dialog box")
        .yes(function (){
            console.log("Yes");
        })
        .no(function() {
            console.log("No");
        })
        .cancel(function() {
            console.log("Cancel");
        })
})

// loading dialog box box and have it close after the AJAX vall has finished
require(['baja!', 'dialogs'], function(baja, dialogs){
    dialogs.showLoading(0, $.ajax(uri, options));
});

// use promises o show a loading dialog box and then pop up another dialog
require(['baja!', 'dialogs'], function(baja, dialogs){
    var dlg = dialogs.showLoading();
    // after 2 seconds, close the loading box.
    setTimeout(function() {
        dlg.close();
    }, 2000);
    dlg.promise().then(([dlg,buttonClicked]) => {
        // Print 'ok'
        console.log(buttonClicked);

        dialogs.showOk("The foobar has finished loading!");
    });
})
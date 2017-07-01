// toggle function

$("[class$=-toggle]").click(function(event){
    var prefixClass = event.target.className
    var regex = "^[a-z0-9]*"
    var prefix = prefixClass.match(regex)[0];

    var toggleActiveClassName = prefix + "-active";

    var toggleTargetClassName = prefix + "-target";
    var toggleTargetDivName = "." + toggleTargetClassName;

    $(event.target).toggleClass(toggleActiveClassName);
    $(prefixClass).toggleClass(toggleActiveClassName);
    $(toggleTargetDivName).toggleClass(toggleActiveClassName);
});

// group function

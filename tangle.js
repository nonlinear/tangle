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

var tabDivs  = $(".tabs *");
tabDivs.click(function(event){
    var contentDivs = $(".content *");
    var eventClass = event.target.className;
    var regex = "[1-9a-zA-Z]*$";
    var suffix = eventClass.match(regex)[0];
    var newActiveContentClass = "." + "tab-target-" + suffix;

    contentDivs.removeClass("tab-active");
    $(newActiveContentClass).addClass("tab-active");

    tabDivs.removeClass("tab-active");
    $(event.target).addClass("tab-active");
});

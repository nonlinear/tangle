// (`ㅅ`)づ get prefix function

function getPrefix(event){
    var prefixClass = event.target.className;
    var regex = "^[a-z0-9]*";
    var prefix = prefixClass.match(regex)[0];
    return prefix;
}

// (`ㅅ`)づ toggle function

$("[class$=-toggle]").click(function(event){
    var prefix = getPrefix(event);
    var toggleActiveClassName = prefix + "-active";

    var toggleTargetClassName = prefix + "-target";
    var toggleTargetDivName = "." + toggleTargetClassName;

    $(event.target).toggleClass(toggleActiveClassName);
    $(event.target.className).toggleClass(toggleActiveClassName);
    $(toggleTargetDivName).toggleClass(toggleActiveClassName);
});

// (`ㅅ`)づ group function

var groupTrigger = $("[class*=-group-]");
groupTrigger.click(function(event){
    var prefix = getPrefix(event);
    var groupTarget = $("[class*=-target-]");
    var activeClass = prefix + "-active";

    groupTarget.removeClass(activeClass);
    groupTrigger.removeClass(activeClass);

    var eventClass = event.target.className;
    var regex = "[1-9a-zA-Z]*$";
    var suffix = eventClass.match(regex)[0];
    var newActiveContentClass = "." + prefix + "-target-" + suffix;

    $(newActiveContentClass).addClass(activeClass);
    $(event.target).addClass(activeClass);
});

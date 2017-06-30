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

// // off function

// $("[class$=-off]").click(function(event){
//     var prefixClass = event.target.className
//     var regex = "^[a-z0-9]*"
//     var prefix = prefixClass.match(regex)[0];

//     var removeActiveClassName = prefix + "-active";

//     var removeTargetClassName = prefix + "-target";
//     var removeTargetDivName = "." + removeTargetClassName;

//     $(prefixClass).removeClass(removeActiveClassName);
//     $(removeTargetDivName).removeClass(removeActiveClassName);
// });

// // on function

// $("[class$=-on]").click(function(event){
//     var prefixClass = event.target.className
//     var regex = "^[a-z0-9]*"
//     var prefix = prefixClass.match(regex)[0];

//     var addActiveClassName = prefix + "-active";

//     var addTargetClassName = prefix + "-target";
//     var addTargetDivName = "." + addTargetClassName;

//     $(prefixClass).addClass(addActiveClassName);
//     $(addTargetDivName).addClass(addActiveClassName);
// });

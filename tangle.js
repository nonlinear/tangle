// $(".red-toggle").click(function(){
// });

$("[class$=-toggle]").click(function(event){
    var prefixClass = event.target.className
    var regex = "^[a-z]*"
    var prefix = prefixClass.match(regex)[0];

    var toggleActiveClassName = prefix + "-active";

    var toggleTargetClassName = prefix + "-target";
    var toggleTargetDivName = "." + toggleTargetClassName;

    $(prefixClass).toggleClass(toggleActiveClassName);
    $(toggleTargetDivName).toggleClass(toggleActiveClassName);
})
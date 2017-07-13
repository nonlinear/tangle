## About

Tangle is a JS library that extends CSS triggers.

## Requirements and Installation

Tangle needs [jQuery](https://jquery.com) to function.

### Bower Installation

- Run `bower install jquery`
- Run `bower install tangle`
- add jquery and tangle js to your html

# Toggle

Toggles `.title-active` class on any object with either `.title-toggle` or `.title-target` when `.title-toggle` is clicked.

As any toggle, clicking 1st on `.title-target` adds `.title-active` and clicking 2nd time yanks it.

Add complex functions writing only CSS and HTML:

-  `.title-target` is hidden, and `.title-target.title-active` is visible
- `.title-toggle` is (more examples here)

Need different functions on the same page? you can have different prefixes, like `.modal-*` for a modal function, `.sidebar-*` for a sidebar, etc. Prefixes are self contained.

# New

- [ ] Add `.*-out` silent class for 500ms when yanking `.*-active`. for `out` animation states.
= [ ] Build case for `*-on` and `*-off` function (sidebar)
- [x] Group action: `.*-active` travels thru `.*-group` list of objects. for collapse, tabs
- [ ] generify group action
- [ ] any refactoring? reusing variables between functions?
- [ ] Sequence action: user defines number, and `*-active-N` cycles thru sequence: for galleries, slideshows
- [ ] Other triggers: for now `_click` is default. Expand triggers with hover, swipe, double-click, on press, etc
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

# Future States

- `.*-out` silent class when yanking `.*-active`. for `out` animation states.
- group trigger: `.*-active` travels thru `.*-group` list of objects. for collapse, tabs.
- sequence: user defines number, and `*-active-N` cycles thru sequence: for galleries, slideshows.
- reset toggle function
- other inputs: for now `_click` is default. Add `_hover`, `_swipe`, maybe.
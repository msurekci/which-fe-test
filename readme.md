# Which? Javascript Exercise

## Technical Decisions and reasons
__Framework__: I installed React to this project as I assumed this was required. For the given task it is also a good choice as it can be very performant when updating the UI as it can utilise the virtual DOM to update only the necessary sections of the page.

__Project layout__: All code related to the exercise lives in the src/ directory. There is a components folder which is intended for pure/dumb components primarily. I placed the stateful component under a `cointainers` folder; this could be named differently. 

__Testing__: Tests are co-located with the react components apart from the app.js test file (I only left it there as it was already in there, it can easily be moved to be co-located too).

I installed `Enzyme` as the testing library. `react-testing-library` was also in the cards but, I went with Enzyme as I had been working more with it recently. Both are great libraries.

__Design__: I stuck with pure CSS rather than installing something like Sass or Less as it was a simple design. 

The structure of the CSS is intended to be mobile-first and the breakpoints are taken from Bootstrap.

__Performance & Accessibility__: Small performance optimization was made in the Multiples component to avoid recalculating the multiples of a given number. It can be further improved it is a very simplistic approach.

In terms of accessibility I tried to avoid Red and Green as the colours as they are the most common among color-blind people.



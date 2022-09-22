# Name Tracker
[![CircleCI](https://circleci.com/gh/yiqu/name-tracker/tree/master.svg?style=svg)](https://circleci.com/gh/yiqu/name-tracker/tree/master)

## Concepts practiced

- ```useRef(initState)``` - setting a reference to a element to access it later for read operations.
- ```useState(currentState, setStateFunction)``` - setting states and updating states.
- ```ReactDOM.createPortal(content, elementToPortalTo)``` - portaling a child/element to another element via portal's ID.
- ```<React.Fragment />``` - placeholder to avoid div soup
- ```useEffect``` - Runs after every render, and will be triggered by the dependencies array. Clean up runs before useEffect.
- ```useReducer``` - Managing complex states with initial state and dispatching actions to modify states.
- ```useContext``` - Easy to pass states down to nested components without props chaining.

### Hook Rules

There are 3 rules for hooks:

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional
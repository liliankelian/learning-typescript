"use strict";
// S => state
// T => type
// K => key
// V => value
// E => Element
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState = useState();
newState.setState("123");
console.log(newState.getState());
newState.setState(456);
console.log(newState.getState());

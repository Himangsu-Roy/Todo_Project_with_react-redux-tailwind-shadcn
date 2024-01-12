const Logger = (state: { getState: () => any; }) => (next: (arg0: any) => void) => (action: any) => {
    console.log("Current State => ", state.getState());
    console.log("Action => ", action);
    next(action);
    console.log("Next State => ", state.getState());

}

export default Logger;
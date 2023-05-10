import { useState } from "react";
import { createContext } from "react";

const PrioritiesContext = createContext({
    priorities: [],
    totalPriorities: 0,
    addPriority: (priorityErrand) => {},
    removePriority: (errandId) => {},
    itemIsPriority: (errandId) => {},
});

export function PrioritiesContextProvider(props) {
    const [userPriorities, setUserPriorities] = useState([]);

    function addPriorityHandler(priorityErrand) {
        setUserPriorities((prevUserPriorities) => {
            return prevUserPriorities.concat(priorityErrand);
        });
    }

    function removePriorityHandler(errandId) {
        setUserPriorities(prevUserPriorities => {
            return prevUserPriorities.filter(errand => errand.id !== errandId);
        });
    }

    function itemIsPriorityHandler(errandId) {
        return userPriorities.some(errand => errand.id === errandId);
    }

    const context = {
        priorities: userPriorities,
        totalPriorities: userPriorities.length,
        addPriority: addPriorityHandler,
        removePriority: removePriorityHandler,
        itemIsPriority: itemIsPriorityHandler,
    };

    return <PrioritiesContext.Provider value={context}>
        {props.children}
    </PrioritiesContext.Provider>
}

export default PrioritiesContext;
import { useState } from "react";
import { createContext } from "react";

const CompletedContext = createContext({
    completed: [],
    totalCompleted: 0,
    addCompleted: (completedErrand) => {},
    removeCompleted: (errandId) => {},
    itemIsCompleted: (errandId) => {},
});

export function CompletedContextProvider(props) {
    const [userCompleted, setUserCompleted] = useState([]);

    function addCompletedHandler(completedErrand) {
        setUserCompleted((prevUserCompleted) => {
            return prevUserCompleted.concat(completedErrand);
        });
    }

    function removeCompletedHandler(errandId) {
        setUserCompleted(prevUserCompleted => {
            return prevUserCompleted.filter(errand => errand.id !== errandId);
        });
    }

    function itemIsCompletedHandler(errandId) {
        return userCompleted.some(errand => errand.id === errandId);
    }

    const context = {
        completed: userCompleted,
        totalCompleted: userCompleted.length,
        addCompleted: addCompletedHandler,
        removeCompleted: removeCompletedHandler,
        itemIsCompleted: itemIsCompletedHandler,
    };

    return <CompletedContext.Provider value={context}>
        {props.children}
    </CompletedContext.Provider>
}

export default CompletedContext;
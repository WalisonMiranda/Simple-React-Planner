import { createContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { getDataFromLocalStorage, saveDataToLocalStorage } from '../helpers/helpers';

export const Context = createContext();

export function ContextProvider({children}) {
    const [ task, setTask ] = useState('');
    const [ weekDay, setWeekDay ] = useState('Segunda');
    const [ tasks, setTasks ] = useState(getDataFromLocalStorage('tasks') || []);  
    
    const addTask = () => {  
        const newTasks = [{ id: uuidv4(), content: task, day: weekDay }, ...tasks];
 
        if(tasks) {
            setTasks(newTasks);
            saveDataToLocalStorage('tasks', newTasks);
        } else {
            setTasks(newTasks);
            saveDataToLocalStorage('tasks', tasks);
        }
    }

    const handleDelete = (id) => {
        const prevTasks = JSON.parse(localStorage.getItem('tasks'));

        const newTasks = prevTasks.filter(task => task.id !== id);

        localStorage.setItem('tasks', JSON.stringify(newTasks));
        setTasks(JSON.parse(localStorage.getItem('tasks')));
    }

    useEffect(() => {
        getDataFromLocalStorage('tasks');
    }, [tasks]);

    return (
        <Context.Provider value={{ addTask, 
                                    tasks, 
                                    task, setTask, 
                                    weekDay, 
                                    setWeekDay, 
                                    handleDelete }}
        >
            {children}
        </Context.Provider>
    )
}

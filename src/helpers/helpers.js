export const getDataFromLocalStorage = value => {
    const data = localStorage.getItem(value);
    
    let tasks = null;

    try {
        const parsedJson = JSON.parse(data);

        if(Array.isArray(parsedJson)) tasks = parsedJson;
    } catch (error) {
        tasks = [];
    }

    return tasks;
}

export const saveDataToLocalStorage = (value, data) => localStorage.setItem(value, JSON.stringify(data));

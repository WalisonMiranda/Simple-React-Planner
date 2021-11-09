import { useTasks } from '../../hooks/useTasks';

import { MdBookmark } from 'react-icons/md';

import styles from  './taskForm.module.css';

export function TaskForm() {
    const { task, setTask, addTask, weekDay, setWeekDay } = useTasks();

    const weekDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

    const handleInputChange = (e) => {
        setTask(e.target.value);
    }

    const handleDaySelect = (e) => {
        setWeekDay(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(task.trim() === '') return console.log('Nenhuma tarefa descrita');

        if(weekDay.trim() === '') return console.log('Selecione um dia');

        addTask(task);

        setTask('');
        e.target.reset();
    }


    return (
        <aside>
            <h1>
                <MdBookmark className={styles.titleIcon}/> 
                Planner
            </h1>
            <div className={styles.taskForm}>
                <form
                    onSubmit={handleSubmit} 
                >
                    <input 
                        type="text" 
                        onChange={(e) => handleInputChange(e)}
                        value={task}
                        placeholder="Escrever tarefa"
                    />

                    <label htmlFor="days">Dia da semana</label>
                    <select name="days" id="days" onChange={(e) => handleDaySelect(e)}>
                        {
                            weekDays.map((day, index) => {
                                return (
                                    <option key={index} defaultValue="Segunda" value={day}>{day}</option>
                                )
                            })
                        }
                    </select>

                    <button className={styles.taskformButton}>Adicionar</button>
                </form>
            </div>
      </aside>
    )
}

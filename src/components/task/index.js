import { useTasks } from '../../hooks/useTasks';

import { MdOutlineDelete } from 'react-icons/md';

import styles from './task.module.css';

export function Task({ task }) {
    const { handleDelete } = useTasks();
    const { id, content } = task;

    return (
        <div className={styles.task}>
            <p>
                {content}
            </p>
            <button onClick={() => handleDelete(id)}>
                <span>
                    <MdOutlineDelete className={styles.buttonIcon} /> 
                </span>
            </button>
        </div>
    )
}

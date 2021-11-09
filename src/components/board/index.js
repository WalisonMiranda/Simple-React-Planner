import { useTasks } from "../../hooks/useTasks";

import { Task } from "../index";

import styles from "./board.module.css";

export function Board() {
  const { tasks } = useTasks();

  const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

  return (
    <main>
      <div className={styles.board}>
        {days.map((day, index) => {
          return (
            <div key={index} className={styles.card}>
              <h1>{day}</h1>
              <div className={styles.tasks}>
                {tasks
                  .filter((task) => task.day === day)
                  .map((task) => {
                    return <Task key={task.id} task={task} />
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

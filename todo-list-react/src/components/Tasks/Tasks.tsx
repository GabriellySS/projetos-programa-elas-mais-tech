import { SubmitEvent, useState, useContext } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Tasks: React.FC = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const { tasks, setTasks } = useContext(TasksContext);

    // Função disparada quando o usuáro está querendo adicionar uma nova tarefa
    function handleSubmitAddTask(event: SubmitEvent) {
        event.preventDefault();

        if (taskTitle.length < 3) {
            alert("Não é possive adicionar uma tarefa com menos de 3 letras.");
            return;
        }

        // Adiciona a tarefa
        const newTasks = [
            ...tasks, // Pega todas as tarefas que já existam e coloca nesse novo valor do estado de tarefas
            { id: new Date().getTime(), title: taskTitle, done: false },
        ];
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));

        setTaskTitle("");
    }

    function handleToggleTaskStatus(taskId: number) {
        const newTasks = tasks.map((task) => {
            if (taskId === task.id) {
                return {
                    ...task,
                    done: !task.done,
                };
            }

            return task;
        });

        setTasks(newTasks);
    }

    // Utilizar o filter para remover a tarefa do array de tarefas
    function handleRemoveTask(taskId: number) {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    }

    return (
        <section className={styles.container}>
            <form onSubmit={handleSubmitAddTask}>
                <div>
                    <label htmlFor="task-title">Adicionar tarefa</label>
                    <input
                        value={taskTitle}
                        onChange={(event) => setTaskTitle(event.target.value)}
                        type="text"
                        id="task-title"
                        placeholder="Título da tarefa"
                    />
                </div>
                <button type="submit">Adicionar</button>
            </form>
            <ul>
                {tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <input
                                type="checkbox"
                                id={`task-${task.id}`}
                                onChange={() => handleToggleTaskStatus(task.id)}
                            />
                            <label
                                htmlFor={`task-${task.id}`}
                                className={task.done ? styles.done : ""}
                            >
                                {task.title}
                            </label>
                            <button onClick={() => handleRemoveTask(task.id)}>
                                Remover
                            </button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

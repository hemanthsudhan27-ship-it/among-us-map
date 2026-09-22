import { useState, useCallback, useEffect } from 'react';
import { Task } from '../types/game';
import { initialTasks } from '../data/tasks';

export function useGameState() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const [currentFloor, setCurrentFloor] = useState<1 | 2>(1);

  const completeTask = useCallback((taskId: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
    setActiveTaskId(null);
  }, []);

  return {
    tasks,
    activeTaskId,
    setActiveTaskId,
    completeTask,
    currentFloor,
    setCurrentFloor,
  };
}

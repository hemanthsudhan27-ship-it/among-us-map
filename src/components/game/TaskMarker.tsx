import React from 'react';
import { Task } from '../../types/game';

interface TaskMarkerProps {
  task: Task;
  onInteract: (taskId: string) => void;
}

export function TaskMarker({ task, onInteract }: TaskMarkerProps) {
  return (
    <div
      className="absolute z-40 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group"
      style={{ left: task.x, top: task.y }}
      onClick={(e) => {
        e.stopPropagation();
        onInteract(task.id);
      }}
    >
      <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all transform group-hover:scale-110 ${
        task.completed 
          ? 'bg-green-500 border-green-700' 
          : 'bg-yellow-400 border-yellow-600 animate-pulse shadow-[0_0_20px_rgba(250,204,21,0.6)]'
      }`}>
        <span className="text-2xl drop-shadow-md">
          {task.completed ? '✓' : '!'}
        </span>
      </div>
      
      <div className="mt-2 text-sm font-black text-white bg-black/80 px-2 py-1 rounded shadow-lg whitespace-nowrap border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
        {task.name}
      </div>
    </div>
  );
}

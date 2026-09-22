import React from 'react';
import { Task } from '../../types/game';

interface GameHUDProps {
  tasks: Task[];
  currentFloor: 1 | 2;
  onFloorChange: (floor: 1 | 2) => void;
}

export function GameHUD({ tasks, currentFloor, onFloorChange }: GameHUDProps) {
  const floorTasks = tasks.filter(t => t.floor === currentFloor);
  const completedCount = floorTasks.filter(t => t.completed).length;
  const totalCount = floorTasks.length;
  const progress = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;

  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      {/* Top Left: Floor Toggle */}
      <div className="absolute top-6 left-6 flex flex-col gap-4 pointer-events-auto">
        <div className="bg-black/90 border-2 border-gray-700 rounded-xl p-4 shadow-2xl flex flex-col gap-3">
          <h1 className="text-white font-black text-2xl tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 drop-shadow-sm">
            BASE
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => onFloorChange(1)}
              className={`px-4 py-2 font-black text-lg rounded-lg border-2 transition-colors ${
                currentFloor === 1 
                  ? 'bg-yellow-400 border-yellow-600 text-black shadow-[0_0_15px_rgba(250,204,21,0.5)]'
                  : 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              FLOOR 1
            </button>
            <button
              onClick={() => onFloorChange(2)}
              className={`px-4 py-2 font-black text-lg rounded-lg border-2 transition-colors ${
                currentFloor === 2 
                  ? 'bg-yellow-400 border-yellow-600 text-black shadow-[0_0_15px_rgba(250,204,21,0.5)]'
                  : 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              FLOOR 2
            </button>
          </div>
        </div>
      </div>

      {/* Top Right: Tasks */}
      <div className="absolute top-6 right-6 flex flex-col gap-2 w-72 pointer-events-auto">
        <div className="bg-black/90 border-2 border-gray-700 rounded-xl p-4 shadow-2xl">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-white font-black text-xl tracking-wide">F{currentFloor} TASKS</h2>
            <div className="text-green-400 font-black text-lg">
              {completedCount} <span className="text-gray-500">/</span> {totalCount}
            </div>
          </div>
          
          <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden mb-4 border-2 border-gray-900 shadow-inner">
            <div 
              className="bg-green-500 h-full transition-all duration-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
            {floorTasks.map(task => (
              <div key={task.id} className="flex items-center gap-3 p-2 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <span className={`font-black text-lg ${task.completed ? 'text-green-500' : 'text-yellow-400'}`}>
                  {task.completed ? '✓' : '!'}
                </span>
                <span className={`text-sm font-bold truncate ${task.completed ? 'text-gray-500 line-through' : 'text-gray-200'}`}>
                  {task.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Right: Controls Hint */}
      <div className="absolute bottom-6 right-6 bg-black/80 rounded-lg px-4 py-3 border border-gray-700 shadow-xl">
        <div className="text-white text-sm font-bold space-y-2">
          <div className="flex items-center gap-2">
            <kbd className="bg-gray-800 px-2 py-1 rounded text-yellow-400 border border-gray-600 shadow">Scroll</kbd>
            <span>to zoom</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="bg-gray-800 px-2 py-1 rounded text-yellow-400 border border-gray-600 shadow">Drag</kbd>
            <span>to pan map</span>
          </div>
        </div>
      </div>
    </div>
  );
}

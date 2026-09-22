'use client';

import React, { useState, useEffect } from 'react';
import { useGameState } from '../../hooks/useGameState';
import { useMapCamera } from '../../hooks/useMapCamera';
import { WORLD_WIDTH, WORLD_HEIGHT } from '../../data/mapData';

import { TaskMarker } from './TaskMarker';
import { FloorMap } from './FloorMap';
import { GameHUD } from './GameHUD';

export function GameMap() {
  const {
    tasks,
    activeTaskId,
    setActiveTaskId,
    completeTask,
    currentFloor,
    setCurrentFloor,
  } = useGameState();

  // Viewport dimensions tracking
  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  useEffect(() => {
    setViewport({ w: window.innerWidth, h: window.innerHeight });
    const handleResize = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { zoom, offset } = useMapCamera(viewport.w, viewport.h);

  const activeFloorTasks = tasks.filter(t => t.floor === currentFloor);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black touch-none select-none cursor-grab active:cursor-grabbing">
      <GameHUD 
        tasks={tasks} 
        currentFloor={currentFloor} 
        onFloorChange={setCurrentFloor} 
      />
      
      {/* The World Space */}
      <div 
        className="absolute transform-gpu origin-top-left"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
          width: WORLD_WIDTH,
          height: WORLD_HEIGHT,
        }}
      >
        <FloorMap floor={currentFloor} />

        {activeFloorTasks.map(task => (
          <TaskMarker
            key={task.id}
            task={task}
            onInteract={setActiveTaskId}
          />
        ))}
      </div>

      {/* Task Interaction Panel */}
      {activeTaskId && (
        <div className="absolute inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm cursor-default">
          <div className="bg-gray-800 border-4 border-gray-600 rounded-2xl w-full max-w-lg p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative">
            <button 
              onClick={(e) => { e.stopPropagation(); setActiveTaskId(null); }}
              className="absolute top-4 right-4 w-10 h-10 bg-red-500 rounded-full text-white font-bold text-xl flex items-center justify-center hover:bg-red-400 border-2 border-black transition-colors"
            >
              ×
            </button>
            <h2 className="text-3xl font-black text-white mb-8 text-center uppercase tracking-wider">
              {tasks.find(t => t.id === activeTaskId)?.name}
            </h2>
            <div className="bg-gray-900 rounded-xl p-8 mb-8 flex items-center justify-center border-2 border-gray-700 shadow-inner">
              <div className="w-32 h-32 rounded-full border-8 border-yellow-500 flex items-center justify-center animate-[spin_3s_linear_infinite] shadow-[0_0_30px_rgba(234,179,8,0.4)]">
                <span className="text-5xl drop-shadow-md">⚙️</span>
              </div>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); completeTask(activeTaskId); }}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-black text-2xl py-4 rounded-xl border-4 border-green-700 shadow-[0_6px_0_rgb(21,128,61)] active:translate-y-2 active:shadow-none transition-all"
            >
              COMPLETE TASK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

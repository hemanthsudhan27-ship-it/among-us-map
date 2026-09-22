import { Task } from '../types/game';

export const initialTasks: Task[] = [
  // Floor 1 Tasks
  {
    id: 'f1-library',
    name: 'Scan Documents (Library)',
    floor: 1,
    x: 1400,
    y: 470,
    completed: false,
  },
  {
    id: 'f1-mid-left',
    name: 'Fix Wiring (Corridor)',
    floor: 1,
    x: 1100,
    y: 880,
    completed: false,
  },
  {
    id: 'f1-bottom-left',
    name: 'Clean Vent (Storage)',
    floor: 1,
    x: 1050,
    y: 1300,
    completed: false,
  },
  {
    id: 'f1-bottom-mid',
    name: 'Empty Garbage (Hallway)',
    floor: 1,
    x: 1400,
    y: 1320,
    completed: false,
  },
  
  // Floor 2 Tasks
  {
    id: 'f2-top-right',
    name: 'Calibrate Distributor',
    floor: 2,
    x: 1720,
    y: 450,
    completed: false,
  },
  {
    id: 'f2-mid-left-top',
    name: 'Align Engine Output',
    floor: 2,
    x: 1000,
    y: 980,
    completed: false,
  },
  {
    id: 'f2-mid-left-bottom',
    name: 'Inspect Sample',
    floor: 2,
    x: 1000,
    y: 1140,
    completed: false,
  },
  {
    id: 'f2-bottom-left-dark',
    name: 'Unlock Manifolds',
    floor: 2,
    x: 1000,
    y: 1215,
    completed: false,
  },
  {
    id: 'f2-above-library',
    name: 'Upload Data',
    floor: 2,
    x: 1290,
    y: 680,
    completed: false,
  },
  {
    id: 'f2-bottom-mid',
    name: 'Swipe Card',
    floor: 2,
    x: 1275,
    y: 1180,
    completed: false,
  }
];

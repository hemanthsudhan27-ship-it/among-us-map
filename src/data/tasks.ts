import { Task } from '../types/game';

export const initialTasks: Task[] = [
  // Floor 1 Tasks
  {
    id: 'f1-extra-room',
    name: 'Check Storage (New Room)',
    floor: 1,
    x: 770,
    y: 990,
    completed: false,
  },
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
    id: 'f2-above-library',
    name: 'Upload Data',
    floor: 2,
    // Top gray rectangle center: local (300, 535) + translate(900,350) = (1200, 885)
    x: 1200,
    y: 885,
    completed: false,
  },
  {
    id: 'f2-top-right',
    name: 'Calibrate Distributor',
    floor: 2,
    // Right of vertical wall line: local (610, 60) + translate(900,350) = (1510, 410)
    x: 1510,
    y: 410,
    completed: false,
  },
  {
    id: 'f2-mid-left-top',
    name: 'Align Engine Output',
    floor: 2,
    x: 760,
    y: 1010,
    completed: false,
  },
  {
    id: 'f2-mid-left-bottom',
    name: 'Inspect Sample',
    floor: 2,
    x: 760,
    y: 1180,
    completed: false,
  },
  {
    id: 'f2-bottom-left-dark',
    name: 'Unlock Manifolds',
    floor: 2,
    x: 760,
    y: 1240,
    completed: false,
  },
  {
    id: 'f2-bottom-mid',
    name: 'Swipe Card',
    floor: 2,
    x: 770,
    y: 1330,
    completed: false,
  }
];

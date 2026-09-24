import { Task } from '../types/game';

export const initialTasks: Task[] = [
  // Floor 1 Tasks
  {
    id: 'f1-extra-room',
    name: 'Throw',
    floor: 1,
    x: 770,
    y: 990,
    completed: false,
  },
  {
    id: 'f1-library',
    name: 'Book Game',
    floor: 1,
    x: 1400,
    y: 470,
    completed: false,
  },
  {
    id: 'f1-mid-left',
    name: 'Arrange Colour',
    floor: 1,
    x: 1050,
    y: 520,
    completed: false,
  },
  {
    id: 'f1-top-left-new',
    name: 'table tennis',
    floor: 1,
    x: 950,
    y: 560,
    completed: false,
  },
  {
    id: 'f1-bottom-left',
    name: 'Find an object',
    floor: 1,
    x: 1050,
    y: 1300,
    completed: false,
  },
  {
    id: 'f1-bottom-mid',
    name: 'Cleaning',
    floor: 1,
    x: 1400,
    y: 1320,
    completed: false,
  },
  {
    id: 'f1-bottom-right-new',
    name: 'qr game',
    floor: 1,
    x: 1600,
    y: 1250,
    completed: false,
  },

  // Floor 2 Tasks
  {
    id: 'f2-above-library',
    name: 'solar counter',
    floor: 2,
    // Top gray rectangle center: local (300, 535) + translate(900,350) = (1200, 885)
    x: 1200,
    y: 885,
    completed: false,
  },
  // (f2-top-right 'Calibrate Distributor' removed — was inside the deleted RED section)
  {
    id: 'f2-top-right-corner',
    name: 'reactor game',
    floor: 2,
    // Top-right corner of hull: local (700, 310) + translate(900,350) = world (1600, 660)
    x: 1600,
    y: 660,
    completed: false,
  },
  {
    id: 'f2-puzzle-game',
    name: 'puzzle game',
    floor: 2,
    x: 1450,
    y: 660,
    completed: false,
  },

  {
    id: 'f2-stair-wire-game',
    name: 'wire game',
    floor: 2,
    // Near yellow hazard strip of stairwell: stairwell at local(215,620)+hazard(y=765) + translate(900,350) = world (1210, 1115)
    x: 1210,
    y: 1115,
    completed: false,
  },
  {
    id: 'f2-mid-left-bottom',
    name: 'Potato race',
    floor: 2,
    x: 760,
    y: 1180,
    completed: false,
  },
  {
    id: 'f2-bottom-left-dark',
    name: 'Electrical Room',
    floor: 2,
    x: 760,
    y: 1240,
    completed: false,
  },
  {
    id: 'f2-bottom-mid',
    name: 'stacking cup',
    floor: 2,
    // Slanted bottom-LEFT corner of hull: local (10,1010)→(80,1090) + translate(900,350) = world ~(945, 1400)
    x: 945,
    y: 1400,
    completed: false,
  }
];

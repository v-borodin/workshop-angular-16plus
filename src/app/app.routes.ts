import { Routes } from '@angular/router';
import {
  AutoSaveViewComponent,
  Challenge1ViewComponent,
  Challenge2ViewComponent,
  Challenge3ViewComponent,
  Challenge4ViewComponent,
  Challenge5ViewComponent,
  ExpanderViewComponent,
} from './routes';

export const routes: Routes = [
  {
    path: 'challenge-1',
    component: Challenge1ViewComponent,
  },
  {
    path: 'challenge-2',
    component: Challenge2ViewComponent,
  },
  {
    path: 'challenge-3',
    component: Challenge3ViewComponent,
  },
  {
    path: 'challenge-4',
    component: Challenge4ViewComponent,
  },
  {
    path: 'challenge-5',
    component: Challenge5ViewComponent,
  },
  {
    path: 'expander',
    component: ExpanderViewComponent,
  },
  {
    path: 'autosave',
    component: AutoSaveViewComponent,
  },
];

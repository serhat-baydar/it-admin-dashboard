import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { ApiComponent } from './views/api/api.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'alpha',
        loadChildren: () => import('./views/alpha/routes').then((m) => m.routes)
      },

      {
        path: 'duyurular',
        loadChildren: () => import('./views/duyurular/routes').then((m) => m.routes)
      },
      {
        path: 'platform/tanzu',
        loadChildren: () => import('./views/platform/tanzu/routes').then((m) => m.routes)
      },
      {
        path: 'platform/openshift',
        loadChildren: () => import('./views/platform/openshift/routes').then((m) => m.routes)
      },
      {
        path: 'bulut/azure',
        loadChildren: () => import('./views/bulut/azure/routes').then((m) => m.routes)
      },
      {
        path: 'bulut/gcp',
        loadChildren: () => import('./views/bulut/gcp/routes').then((m) => m.routes)
      },
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      },
      {
        path: 'api',
        component: ApiComponent
      },
    
    ]
  }
];
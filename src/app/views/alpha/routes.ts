import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Alpha Teams'
    },
    children: [
      {
        path: 'ekibimiz',
        loadComponent: () => import('../alpha/ekibimiz/ekibimiz.component').then(m => m.EkibimizComponent),
        data: {
          title: 'Ekibimiz'
        }
      },
      {
        path: 'vizyon',
        loadComponent: () => import('../alpha/vizyon/vizyon.component').then(m => m.VizyonComponent),
        data: {
          title: 'Vizyon'
        }
      },
      {
        path: 'misyon',
        loadComponent: () => import('../alpha/misyon/misyon.component').then(m => m.MisyonComponent),
        data: {
          title: 'Misyon'
        }
      },
      {
        path: 'degerlerimiz',
        loadComponent: () => import('../alpha/degerlerimiz/degerlerimiz.component').then(m => m.DegerlerimizComponent),
        data: {
          title: 'Değerlerimiz'
        }
      },
    ]
  }
];

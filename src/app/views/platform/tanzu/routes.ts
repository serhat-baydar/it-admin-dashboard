import { Routes } from '@angular/router';
import { EnvanterComponent } from './envanter/envanter.component';
import { GuvenlikComponent } from './guvenlik/guvenlik.component';
import { MaliyetComponent } from './maliyet/maliyet.component';
import { KapasiteComponent } from './kapasite/kapasite.component';
import { AlarmlarComponent } from './alarmlar/alarmlar.component';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tanzu Platform'
    },
    children: [
      {
        path: 'envanter',
        component: EnvanterComponent,
        data: {
          title: 'Envanter'
        }
      },
      {
        path: 'guvenlik',
        component: GuvenlikComponent,
        data: {
          title: 'Güvenlik'
        }
      },
      {
        path: 'maliyet',
        component: MaliyetComponent,
        data: {
          title: 'Maliyet'
        }
      },
      {
        path: 'kapasite',
        component: KapasiteComponent,
        data: {
          title: 'Kapasite'
        }
      },
      {
        path: 'alarmlar',
        component: AlarmlarComponent,
        data: {
          title: 'Alarmlar'
        }
      }
    ]
  }
];

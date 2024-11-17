import { RouterModule, Routes } from '@angular/router';
import { DuyurularComponent } from './duyurular.component';

export const routes: Routes = [
  { path: '', component: DuyurularComponent },
  { path: 'detay/:id', component: DuyurularComponent } // Örnek detay sayfası
];
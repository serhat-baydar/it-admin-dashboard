import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ekibimiz',
  templateUrl: './ekibimiz.component.html',
  styleUrls: ['./ekibimiz.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class EkibimizComponent {
  public teamMembers = [
    { name: 'Serhat Baydar', role: 'Team Leader', avatar: './assets/images/avatars/foto1.jpg' },
    { name: 'Ersoy Emanet ', role: 'Expert', avatar: 'assets/images/avatars/2.jpg' },
    { name: 'Osman Kocakoç', role: 'Expert', avatar: 'assets/images/avatars/3.jpg' },
    { name: 'Gürkan Şentürk', role: 'Cloud Admin', avatar: 'assets/images/avatars/6.jpg' },
    { name: 'Gülfidan Baltacı', role: 'Cloud Admin', avatar: 'assets/images/avatars/5.jpg' }
  ];
}
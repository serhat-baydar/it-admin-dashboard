import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-duyurular',
  templateUrl: './duyurular.component.html',
  styleUrls: ['./duyurular.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class DuyurularComponent implements OnInit {
  duyurular = [
    { id: 1, baslik: 'Microsoft News', aciklama: 'https://news.microsoft.com' },
    { id: 2, baslik: 'Google News', aciklama: 'https://news.google.com' },
    { id: 3, baslik: 'Vmware News', aciklama: 'https://news.vmware.com' },
    { id: 4, baslik: 'Redhat News', aciklama: 'https://news.redhat.com' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Bileşen yüklendiğinde yapılacak işlemler
  }
}
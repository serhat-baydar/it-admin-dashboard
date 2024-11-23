import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-azure-icon',
  templateUrl: './azure-icon.component.html',
  styleUrl: './azure-icon.component.scss'
})
export class AzureIconComponent {
  @Input() iconName: string;

  constructor() { }
}
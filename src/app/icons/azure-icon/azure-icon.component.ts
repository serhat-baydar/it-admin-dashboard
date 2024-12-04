import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-azure-icon',
  templateUrl: './azure-icon.component.html',
  styleUrls: ['./azure-icon.component.scss']
})
export class AzureIconComponent {
  @Input() iconName: string;

  constructor() { }
}
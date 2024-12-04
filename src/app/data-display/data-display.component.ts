import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    const url = 'https://management.azure.com/subscriptions/7c55bebc-a78b-46ba-ad12-3f66bd1f5c2c/providers/Microsoft.Security/assessments?api-version=2020-01-01&$expand=statusEvaluationDates';
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Inp4ZWcyV09OcFRrd041R21lWWN1VGR0QzZKMCIsImtpZCI6Inp4ZWcyV09OcFRrd041R21lWWN1VGR0QzZKMCJ9'; // Replace with your actual token

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get(url, { headers }).subscribe(
      data => {
        console.log('API request successful', data); // Add this line to log the data
        this.data = data;
      },
      error => {
        console.error('Error occurred while fetching data', error);
      }
    );
  }

  trackById(index: number, post: any): string {
    return post.id;
  }
}

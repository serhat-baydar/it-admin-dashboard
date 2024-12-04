import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class ApiComponent implements OnInit {
  data: any;
  error: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData().subscribe(
      response => {
        console.log('API Response:', response); // Yanıtı konsola yazdır
        this.data = response;
      },
      error => {
        this.error = error;
        console.error('There was an error!', error);
      }
    );
  }

  getData(): Observable<any> {
    const url = 'https://management.azure.com/subscriptions/7c55bebc-a78b-46ba-ad12-3f66bd1f5c2c/providers/Microsoft.Security/assessments?api-version=2020-01-01&$expand=statusEvaluationDates';
    const headers = new HttpHeaders({
      'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Inp4ZWcyV09OcFRrd041R21lWWN1VGR0QzZKMCIsImtpZCI6Inp4ZWcyV09OcFRrd041R21lWWN1VGR0QzZKMCJ9'
    });
    return this.http.get(url, { headers }).pipe(
      catchError((error: any) => {
        console.error('Error occurred:', error);
        return throwError(error);
      })
    );
  }
}

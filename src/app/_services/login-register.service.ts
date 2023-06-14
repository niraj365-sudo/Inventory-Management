import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginRegisterService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post<any>(`${this.apiUrl}/register`, data);
  }

  login(username: any, password: any) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJqdGkiOiJlMDZiYmU2OS05M2YwLTQyMWEtODhmNS04OTgzYWYwYTc1MDUiLCJjb21wYW55Y29kZSI6InBiZyIsInVzZXJuYW1lIjoiYWRtaW4iLCJ1c2VyZ3JvdXBpZCI6IjIiLCJ1c2VyZ3JvdXBjb2RlIjoiU0EiLCJleHAiOjE2ODYzNjI1ODMsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NjE5NTUiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ.OIoxDMHI-ynmQwLhEQB-9bgmRQZrqgX-WWijDUHELQ0'
    });
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, {username: username, password: password}, {
      headers: reqHeader,
    });
  }
}

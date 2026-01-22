import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';


  constructor(
    private http:HttpClient
  ) { }

  getComments(userId:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/comments?postId=${userId}`);
  }

  getAlbums(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/albums?userId=${userId}`);
  }

  getPhotos(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/photos?albumId=${userId}`);
  }

  getTodos(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/todos?userId=${userId}`);
  } 

  createPost(body: any) {
  return this.http.post(`${this.baseUrl}/posts`, body);
}

  updatePost(id: number, body: any) {
  return this.http.put(`${this.baseUrl}/posts/${id}`, body);
}

deletePost(id: number) {
  return this.http.delete(`${this.baseUrl}/posts/${id}`);
}

}

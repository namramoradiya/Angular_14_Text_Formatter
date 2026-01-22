import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css']
})
export class APIsComponent implements OnInit {

  userId: string = '';
  responseData: any;
  errorMsg: string = '';
  inputBody: string = '';
  isPhotoResponse=false;


  constructor(
    private apiService:ApiService
  ) { }

  ngOnInit(): void {
  }
    validateUserId(): boolean {
    if (!this.userId) {
      this.errorMsg = 'User Id should not be empty';
      this.responseData = '';
      return false;
    }
    this.errorMsg = '';
    return true;
  }

    fetchComments() {
    if (!this.validateUserId()) return;

    this.apiService.getComments(+this.userId).subscribe({
      next: res => {this.responseData = res,
      this.isPhotoResponse=false},
      error: () => this.errorMsg = 'Error fetching comments'
    });
  }

  fetchAlbums() {
    if (!this.validateUserId()) return;

    this.apiService.getAlbums(+this.userId).subscribe({
      next: res =>{ this.responseData = res,
      this.isPhotoResponse=false},
      error: () => this.errorMsg = 'Error fetching albums'
    });
  }

  fetchPhotos() {
    if (!this.validateUserId()) return;

    this.apiService.getPhotos(+this.userId).subscribe({
      next: res => {this.responseData = res,
        this.isPhotoResponse=true
      },
      error: () => this.errorMsg = 'Error fetching photos'
    });
  }

  fetchTodos() {
    if (!this.validateUserId()) return;

    this.apiService.getTodos(+this.userId).subscribe({
      next: res => {this.responseData = res,
      this.isPhotoResponse=false},
      error: () => this.errorMsg = 'Error fetching todos'
    });
  }


  create() {
  // if (!this.validateUserId()) return;

  if (!this.inputBody) {
    this.errorMsg = 'Input Body should not be empty';
    return;
  }

  const body = {
    userId: this.userId,
    body: this.inputBody
  };

  this.apiService.createPost(body).subscribe({
    next: res => {
      this.responseData = res;
      this.errorMsg = '';
      this.isPhotoResponse=false
    },
    error: () => this.errorMsg = 'Error creating data'
  });
}


update() {
  if (!this.validateUserId()) return;

  if (!this.inputBody) {
    this.errorMsg = 'Input Body should not be empty';
    return;
  }

  const body = {
    id: this.userId,
    body: this.inputBody
  };

  this.apiService.updatePost(+this.userId, body).subscribe({
    next: res => {
      this.responseData = res;
      this.errorMsg = '';
      this.isPhotoResponse=false
    },
    error: () => this.errorMsg = 'Error updating data'
  });
}
delete() {
  if (!this.validateUserId()) return;

  this.apiService.deletePost(+this.userId).subscribe({
    next: res => {
      this.responseData = res;
      this.errorMsg = '';
      this.isPhotoResponse=false
    },
    error: () => this.errorMsg = 'Error deleting data'
  });
}


}

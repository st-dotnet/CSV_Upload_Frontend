import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { uploadFile } from '../store/file-upload.actions';
import { Observable } from 'rxjs';
import { AppState, success, failure } from '../store/user.selectors';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  uploadProgress = false;
  errorMessage: string | null = null;
  uploadSuccess$: Observable<any>;
  uploadFailure$: Observable<any>;

  constructor(private store: Store<AppState>) { 
    this.uploadSuccess$ = this.store.pipe(select(success));
    this.uploadFailure$ = this.store.pipe(select(failure));
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.uploadProgress = true;
      this.errorMessage = null;
  
      this.store.dispatch(uploadFile({ file: this.selectedFile }));
    }
  }  
  onRemoveFile() {
    this.uploadProgress = false;
    this.selectedFile = null;
    (document.getElementById('fileInput') as HTMLInputElement).value = ''; 
    this.errorMessage = 'File Uploaded Successfully!';
  }
  ngOnInit() {
    this.uploadSuccess$.subscribe(state => {
      if (state.uploadSuccess) {
        this.onRemoveFile();
      }
    });
    this.uploadFailure$.subscribe(state => {
      if (state.uploadFailure) {
        this.errorMessage = state.error; 
        this.uploadProgress = false;
      }
    });
  }
}

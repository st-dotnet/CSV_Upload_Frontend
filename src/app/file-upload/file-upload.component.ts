import { Component } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  uploadProgress = false;
  errorMessage: string | null = null;

  constructor(private fileUploadService: FileUploadService) {}

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
  
      this.fileUploadService.uploadFile(this.selectedFile).subscribe(
        (response) => {
          console.log('Upload successful', response);
          this.uploadProgress = false;
          this.selectedFile = null;
          (document.getElementById('fileInput') as HTMLInputElement).value = ''; 
        },
        (error) => {
          console.error('Upload failed', error);
          this.errorMessage = error;  // Use the detailed error message
          this.uploadProgress = false;
        }
      );
    }
  }  
}

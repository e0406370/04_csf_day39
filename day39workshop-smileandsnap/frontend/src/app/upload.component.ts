import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from './services/photo.service';
import { dataURLtoFile } from './utility/utils';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css',
})
  
export class UploadComponent implements OnInit {

  photo: string = '';

  photoSvc = inject(PhotoService);
  router = inject(Router);

  ngOnInit() {
    
    if (!this.photoSvc.photo) {
      this.router.navigate(['/']);
      return;
    }

    this.photo = this.photoSvc.photo;
  }

  upload() {

    const f = dataURLtoFile(this.photo)
    firstValueFrom(this.photoSvc.upload(f))
      .then(() => alert('uploaded'))
      .catch(error => alert(JSON.stringify(error)))
  }
}

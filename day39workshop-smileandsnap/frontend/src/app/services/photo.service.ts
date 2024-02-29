import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { dataURItoBlob } from '../utility/utils';

@Injectable({

  providedIn: 'root',
})
  
export class PhotoService {

  photo: string = '';

  private httpClient: HttpClient = inject(HttpClient);

  upload(f: File): Observable<any> {

    const formData = new FormData();
    formData.set('file', f);

    return this.httpClient.post<any>('/upload', formData);
  }

  uploadV2(dataUrl: string) {

    const blob = dataURItoBlob(dataUrl)
    const file = new File([blob], 'captured.jpg', { type: 'image/jpg'})
    console.info('>> file: ', file)

    // multipart/form-data
    const form = new FormData()

    // <input type="file" name="image">
    form.set('image', file)

    // <input type="text" name="title">
    form.set('title', 'this is my image')

    return firstValueFrom(
      this.httpClient.post<any>('http://localhost:8080/picture', form)
    )
  }
}

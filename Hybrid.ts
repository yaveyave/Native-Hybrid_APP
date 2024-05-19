// Código híbrido en Ionic (Angular) para acceder a la cámara
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public capturedImage: string;

  constructor(private camera: Camera) {}

  captureImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.capturedImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Manejar el error
      console.log("Error al capturar la imagen: ", err);
    });
  }
}

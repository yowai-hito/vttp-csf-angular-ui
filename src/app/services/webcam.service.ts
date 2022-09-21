import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class WebcamService {

  constructor(private http: HttpClient) { }

  headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

  postWebcamImage(imgDataUrl : String, caption : String) {

    const reqBody = {
      'image' : imgDataUrl,
      'caption' : caption
    }
    console.log(reqBody);
    //Database not created yet.
    // return this.http.post( environment.backend_hostname + '/csf/assignments/webcam/save', reqBody, { headers: this.headers })
  }
}
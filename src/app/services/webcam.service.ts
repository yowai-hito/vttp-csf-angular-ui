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
    // return this.http.post('http://localhost:8080/csf/assignments/webcam/save', reqBody, { headers: this.headers })
  }
}
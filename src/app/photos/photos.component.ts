import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['photos.component.scss']
})
export class PhotosComponent implements OnInit {
    photos: any[];
    constructor(
        private http: Http
    ) {
        this.http
            .get('https://jsonplaceholder.typicode.com/photos?albumId=')
            .subscribe(
                (response: Response) => {
                    this.photos = response.json();
                },
                (error: Response) => {
                    console.log('Error occurred at PhotosComponent');
                }
            )
    }

    ngOnInit() {
    }

}

import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({
    selector: 'app-photo-details',
    templateUrl: './photo-details.component.html',
    styleUrls: ['photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {
    photoDetails: any[];
    constructor(
        private http: Http
    ) {
        this.http
            .get('https://jsonplaceholder.typicode.com/photos/%3CID%3E')
            .subscribe(
                (response: Response) => {
                    this.photoDetails = response.json();
                },
                (error: Response) => {
                    console.log('Error occurred at PhotoDetailsComponent');
                }
            )
    }

    ngOnInit() {
    }

}

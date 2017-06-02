import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['photos.component.scss']
})
export class PhotosComponent implements OnInit {
    photos: any[];
    id: number;
    private sub: any;

    constructor(
        private http: Http,
        private activatedRoute: ActivatedRoute
    ) {
        this.http
            .get('https://jsonplaceholder.typicode.com/photos?albumId=')
            .subscribe(
                (response: Response) => {
                    this.photos = response.json();
                },
                (err: Response) => {
                    console.log('Error occurred at PhotosComponent');
                }
            )
    }
    ngOnInit() {
        // subscribe to router event
        this.activatedRoute.params.subscribe((params: Params) => {
            let userId = params['userId'];
            console.log(userId);
        });
    }

}

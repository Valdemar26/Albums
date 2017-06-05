import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['photos.component.scss'],
    providers: [ Location ]
})
export class PhotosComponent implements OnInit {
    photos: any[];
    private id: any;

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        public location: Location
    ) {
        this.id = this.route.params.subscribe(params => {
            this.http
                .get('https://jsonplaceholder.typicode.com/photos?albumId=' +params['id'])
                .subscribe(
                    (response: Response) => {
                        this.photos = response.json();
                    },
                    (err: Response) => {
                        console.log('Error occurred at PhotosComponent');
                    }
                )
        });
    };
    
    ngOnInit() {
    }

    goBack(): void {
        this.location.back();
    }

}

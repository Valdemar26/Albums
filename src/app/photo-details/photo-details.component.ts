import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
    selector: 'app-photo-details',
    templateUrl: './photo-details.component.html',
    styleUrls: ['photo-details.component.scss'],
    providers: [ Location ]
})
export class PhotoDetailsComponent implements OnInit {
    photoDetails: any[];
    private id: any;

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        public location: Location
    ) {
        this.id = this.route.params.subscribe(params => {
            this.http
                .get('https://jsonplaceholder.typicode.com/photos/' +params['id'])
                .subscribe(
                    (response: Response) => {
                        this.photoDetails = response.json();
                    },
                    (err: Response) => {
                        console.log('Error occurred at PhotoDetailsComponent');
                    }
                )
        });

    }
    //  decide didn't create service.ts, because it's overhead for one get-request

    ngOnInit() {
    }

    goBack(): void {
        this.location.back();
    }

}

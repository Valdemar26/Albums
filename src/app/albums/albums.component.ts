import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['albums.component.scss']
})
export class AlbumsComponent implements OnInit {
    albums: any[];

    constructor(
        private http: Http
    ) {
        this.http
            .get('https://jsonplaceholder.typicode.com/albums')
            .subscribe(
                (response: Response) => {
                    this.albums = response.json();
                },
                (err: Response) => {
                    this.albums = [];
                    console.log('Error occurred at AlbumsComponent');
                }
            )
    }
    //  decide didn't create service.ts, because it's overhead for one get-request

    ngOnInit() {

    }

}
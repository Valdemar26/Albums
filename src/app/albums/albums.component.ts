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
                (error: Response) => {
                    console.log('Error occurred at AlbumsComponent');
                }
            )
    }

  ngOnInit() {
  }

}

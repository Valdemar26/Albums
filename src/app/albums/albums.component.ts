import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['albums.component.scss']
})
export class AlbumsComponent implements OnInit {
    albums: any[];
    id: number;
    private sub: any;

    constructor(
        private http: Http,
        private route: ActivatedRoute
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
      this.sub = this.route.params.subscribe(params => {
          this.id = +params['id']; // (+) converts string 'id' to a number

          // In a real app: dispatch action to load the details here.
      });
  }

}

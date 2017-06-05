import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import {NgxPaginationModule} from '../../node_modules/ngx-pagination';

const routes: Routes = [
    { path: '', component: AlbumsComponent },
    { path: 'album/:id', component: PhotosComponent },
    { path: 'photo/:id' , component: PhotoDetailsComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        AlbumsComponent,
        PhotosComponent,
        PhotoDetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        NgxPaginationModule
    ],
    exports: [
        RouterModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
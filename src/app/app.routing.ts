import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { EventComponent } from './components/event/event.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'gallery', component: GalleryComponent },
    { path: 'rsvp', component: RsvpComponent },
    { path: 'event', component: EventComponent },
    { path: 'index', component: ComponentsComponent },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
    exports: []
})
export class AppRoutingModule {}

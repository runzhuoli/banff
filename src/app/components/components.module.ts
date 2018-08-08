import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';

import { RsvpService } from '../services/rsvp.service';
import { ComponentsComponent } from './components.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { AgmCoreModule } from '@agm/core';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { NgxGalleryModule } from 'ngx-gallery';
import { EventComponent } from './event/event.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        NgxGalleryModule,
        RouterModule,
        JWBootstrapSwitchModule,
        HttpClientModule,
        AngularMultiSelectModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyC9krRPlk6GukGHiq89AplMVeRfOeuEcv4'
        })
    ],
    declarations: [ComponentsComponent, HomeComponent, GalleryComponent, RsvpComponent, EventComponent],
    providers: [RsvpService],
    exports: [ComponentsComponent]
})
export class ComponentsModule {}

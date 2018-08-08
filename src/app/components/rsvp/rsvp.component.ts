import { RsvpService } from '../../services/rsvp.service';
import { AgmCoreModule } from '@agm/core';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-rsvp',
    templateUrl: './rsvp.component.html',
    styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
    public lat = 43.6534399;
    public lng = -79.3840901;
    public dropdownSettings: any = [];
    public comeList = [{ id: 1, itemName: 'Going' }, { id: 2, itemName: `Cannot go` }];
    public peopleList = [
        { id: 1, itemName: 1 },
        { id: 2, itemName: 2 },
        { id: 3, itemName: 3 },
        { id: 4, itemName: 4 },
        { id: 5, itemName: 5 }
    ];

    public name: string;
    public people = [{ id: 1, itemName: 1 }];
    public come = [{ id: 1, itemName: 'Going' }];
    // public fromDate: any = { day: 29, month: 6, year: 2018 };
    // public toDate: any = { day: 2, month: 7, year: 2018 };
    public message: string = undefined;
    public confirmMessage: string = undefined;

    constructor(private rsvpService: RsvpService) {
        this.dropdownSettings = {
            singleSelection: true,
            enableSearchFilter: false,
            selectionLimit: 1,
            autoUnselect: true
        };
    }

    ngOnInit() {
        this.confirmMessage = undefined;
    }

    public onItemDeSelect(item: any, type: string) {
        switch (type) {
            case 'people':
                this.people.push(item);
                return;
            case 'come':
                this.come.push(item);
                return;
            default:
                return;
        }
    }
    public submit(): void {
        const rsvp = {
            name: this.name,
            come: this.come[0].id,
            people: this.people[0].id,
            // fromDate: JSON.stringify(this.fromDate),
            // toDate: JSON.stringify(this.toDate),
            message: this.message
        };
        if (this.name) {
            this.rsvpService.sendRsvp(rsvp).subscribe((data) => {
                if (data) {
                    if (data.come === 1) {
                        this.confirmMessage = `Thank you! We are looking forward to seeing you on our marriage ceremony!`;
                    } else {
                        this.confirmMessage = `Thank you for your response!`;
                    }
                }
            });
        }
    }
}

import { Component, OnInit } from '@angular/core';
import { GetlocationsService } from './getlocations.service';

@Component({
  selector: 'app-getlocations',
  templateUrl: './getlocations.component.html',
  styleUrls: ['./getlocations.component.scss'],
})

export class GetlocationsComponent implements OnInit {
    public LocationTags:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        latitude: '',
        longitude: '',
        geoname: '',
    }

    constructor (
        private getlocationsService: GetlocationsService,
    ) { }

    ngOnInit() {
        this.LocationTags.created_by = sessionStorage.getItem('email') || ''; 
    }
}
/*
import { Directive, ElementRef, OnInit } from '@angular/core';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

import * as googleMaps from '@google/maps';
import { } from '@types/googlemaps';

@Directive({
  selector: '[google-place]'
})
export class GooglePlacesDirective implements OnInit {
  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    //elRef will get a reference to the element where
    //the directive is placed
    this.element = elRef.nativeElement;
  }

  ngOnInit() {
    const autocomplete = new google.maps.places.Autocomplete(this.element);
  }

}
*/

import { Directive, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

declare var google:any;

@Directive({
  selector: '[google-place]'
})
export class GooglePlacesDirective implements OnInit {
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  private element: HTMLInputElement;

  constructor(elRef: ElementRef) {
    //elRef will get a reference to the element where
    //the directive is placed
    this.element = elRef.nativeElement;
  }

  getFormattedAddress(place) {
    //@params: place - Google Autocomplete place object
    //@returns: location_obj - An address object in human readable format

    console.log("getFormattedAddress");
    let location_obj = {};
    for (let i in place.address_components) {
      let item = place.address_components[i];
      
console.log(place.formatted_address);

      location_obj['formatted_address'] = place.formatted_address;
      if(item['types'].indexOf("locality") > -1) {
        location_obj['locality'] = item['long_name']
      } else if (item['types'].indexOf("administrative_area_level_1") > -1) {
        location_obj['admin_area_l1'] = item['short_name']
      } else if (item['types'].indexOf("street_number") > -1) {
        location_obj['street_number'] = item['short_name']
      } else if (item['types'].indexOf("route") > -1) {
        location_obj['route'] = item['long_name']
      } else if (item['types'].indexOf("country") > -1) {
        location_obj['country'] = item['long_name']
      } else if (item['types'].indexOf("postal_code") > -1) {
        location_obj['postal_code'] = item['short_name']
      }
     
    }
    return location_obj;
  }

  ngOnInit() {
    const autocomplete = new google.maps.places.Autocomplete(this.element);
    //Event listener to monitor place changes in the input
    google.maps.event.addListener(autocomplete, 'place_changed', () => {

      console.log( autocomplete.getPlace());
      //Emit the new address object for the updated place
//      this.onSelect.emit(this.getFormattedAddress(autocomplete.getPlace()));
//      this.onSelect.emit(autocomplete.getPlace());
      this.onSelect.emit(this.element.value);

    });
  }

}
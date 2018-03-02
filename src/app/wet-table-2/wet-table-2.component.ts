import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-wet-table-2',
  templateUrl: './wet-table-2.component.html',
  styleUrls: ['./wet-table-2.component.css']
})
export class WetTable2Component implements OnInit {
  @ViewChild('tabsRef') tabsRef: ElementRef;

  constructor() { }

  ngOnInit() {
    // this.tabsRef.nativeElement.trigger("wb-init.wb-tabs");
    console.log(this.tabsRef.nativeElement);
    // this.tabsRef.nativeElement.dispatchEvent(new Event("wb-init.wb-tabs"));
    //$(this.tabsRef.nativeElement).trigger("wb-init.wb-tabs");
    $( ".wb-tabs" ).trigger( "wb-init.wb-tabs" );
  }

}

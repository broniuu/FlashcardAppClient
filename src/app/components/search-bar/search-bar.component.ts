import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{
  public filterText: string = '';
  @Output() name = new EventEmitter<string>();
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filterText = params['name'];
      this.sendFilter();
    });
  }

  sendFilter(): void {
    this.name.emit(this.filterText);
    this.router.navigate(['flashcards'], {
      queryParams: {name: this.filterText}
    });
  }
}

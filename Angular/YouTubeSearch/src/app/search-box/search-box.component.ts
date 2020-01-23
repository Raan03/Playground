import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
import { SearchResult } from '../search-result/search-result';
import { YouTubeSearchService } from '../Search/search.service';
import { fromEvent, Observable } from 'rxjs';
import { map, filter, debounceTime, tap, switchMap, switchAll } from 'rxjs/operators';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService, private el: ElementRef) {
  }

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value), // extract value input
        filter((text: string) => text.length > 1), // filter empties
        debounceTime(250),
        tap(() => this.loading.emit(true)),
        map((query: string) => this.youtube.search(query)),
        switchAll()
    ).subscribe(
      (results: SearchResult[]) =>
      {
        this.loading.emit(false);
        this.results.emit(results);
      },
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      () =>
      {
      this.loading.emit(false);
    });    
  }
}

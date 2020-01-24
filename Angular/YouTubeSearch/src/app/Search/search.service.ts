import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SearchResult } from '../search-result/search-result';
import { Observable } from 'rxjs/internal/Observable';

export let YOUTUBE_API_KEY: string = "AIzaSyCRyehmGSGafvlWoJADvdP04eLHVNhwfsM";
export let YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

@Injectable()
export class YouTubeSearchService {
  constructor(private http: HttpClient, @Inject(YOUTUBE_API_KEY) private apiKey: string, @Inject(YOUTUBE_API_URL) private apiUrl: string) {

  }

  search(query: string): Observable<SearchResult[]>
  {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`,
    ].join('&');

    const queryUrl = `${this.apiUrl}?${params}`;

    return this.http.get(queryUrl).pipe(map(response => {
      return <any>response['items'].map(item => {
        return new SearchResult({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url
        })
      });
    }));
  }
}

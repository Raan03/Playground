import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	articles: Article[];
	
	constructor(){
		this.articles = [
					new Article('Raan03', 'http://www.raan03.be', 9001),
					new Article('Raan04', 'http://www.raan04.be', 20),
					new Article('Raan02', 'http://www.raan02.be', 141)
		]
	}
	
	addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
		this.articles.push(new Article(title.value, link.value, 1));
		console.log(`Adding article title: ${title.value} and link: ${link.value}`);
		
		return false;
	}
}

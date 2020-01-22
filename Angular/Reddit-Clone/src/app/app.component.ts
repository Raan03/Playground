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
					new Article('Raan03', 'http://www.raan03.be', 25),
					new Article('Raan04', 'http://www.raan04.be', 20),
					new Article('Raan02', 'http://www.raan02.be', 22)
		]
	}
	
	addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
		console.log(`Adding article title: ${title.value} and link: ${link.value}`);
		
		this.articles.push(new Article(title.value, link.value, 1));
		
		// clear form on submit, to prevent double entries
		title.value = '';
		link.value = '';
		
		return false;
	}
	
	sortedArticles(): Article[]{
		return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
	}
}

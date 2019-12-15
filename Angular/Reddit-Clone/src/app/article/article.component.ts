import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  votes: number;
  title: string;
  link: string;
  
  constructor() {
	  this.title = "RAAN03";
	  this.link = "http://www.raan03.be";
	  this.votes = 9001;

	  }

	voteUp() : boolean{
		this.votes += 1;
		return false;
	}
	voteDown() : boolean{
		this.votes -= 1;
		return false;
	}
  ngOnInit() {
  }

}

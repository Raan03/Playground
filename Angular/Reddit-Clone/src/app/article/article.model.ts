export class Article {
	title: string;
	link: string;
	votes: number;
	
	constructor(title: string, link: string, votes?: number)
	{
		this.title = title;
		this.link = link;
		this.votes = votes || 0;
	}
	
	voteUp() : void
	{
		this.votes += 1;
	}
	
	voteDown() : void
	{
		this.votes -= 1;
	}
	
	domain() : string 
	{
		try {
			// e.g. http://www.raan03.be/path/to/whatever
			// catch www.raan03.be/path/to/whatever
			const domainAndPath: string = this.link.split('//')[1];
			
			// return www.raan03.be
			return domainAndPath.split('/')[0]
		}catch(err){
			return null;
		}
	}
}
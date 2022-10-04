class Movie{
    constructor(title,rating,studio="PG"){
        this.title=title;
        this.rating=rating;
        this.studio=studio;
    }
    static getpg(arr){
        let pgarray=arr.filter((Movie)=>Movie.rating=="PG");
        return pgarray;
    }
}

var a=new Movie("harry potter","PG13","Leavesden");
var b=new Movie("Pirates of the caribbean","PG","Walt Disney");
var c=new Movie("Avengers","PG","marvel");
var d=new Movie("Karate Kid","R","Delphi II");

console.log(Movie.getpg([a,b,c,d]));
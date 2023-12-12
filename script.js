//class movie

class movie{
    constructor( title,studio, rating ="pg"){
      this.title = title; 
      this.studio = studio; 
      this.rating = rating; 

    } 
    static getPGMovies(Movies) {
        const pgMovies = [];
        for (const movie of Movies) {
            if (movie.rating === "PG") {
                pgMovies.push(movie);
            }
        }
        return pgMovies;
    }

}
const casinoroyal = new movie("casino royal","Eon production","pg-13");
console.log(casinoroyal.title);
console.log(casinoroyal.studio);
console.log(casinoroyal.rating);

Constmovies = new movie("casino royal","Eon production","pg-13"); console.log(casinoroyal.title); console.log(casinoroyal.studio); console.log(casinoroyal.rating);


//!Class
class person{
    constructor(name,age,gender,salary){
      this.name = name; 
      this.age = age; 
      this.gender = gender; 
      this.salary = salary; 
    } 
}  
    const person1 = new person("leo",25,"male",500);
    console.log(person1.name);
    console.log(person1.age);
    console.log(person1.gender);
    console.log(person1.salary);

// class circle
class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
        this.radius = radius;
    }
    get colorCircle(){
        return this.color;
    }   
    set colorCircle(color){
        this.color = color;
    }
    get toString(){
        return `"Circle[radius=${this.radius},color=${this.color}]"`
        
    }   A
    get areaCircle(){
        return Math.PI * this.radius * this.radius;//pir2
    }    
    get circumferenceCircle(){
        return 2 * Math.PI * this.radius; //2pir
    }
}
var obj1 = new Circle(1.0,"red");// get radiuscircle
console.log(obj1.radiusCircle);
obj1.radiusCircle =2.2
console.log(obj1.radiusCircle);// set radiuscircle

console.log(obj1.colorCircle);//get colorcircle
obj1.colorCircle = "blue";
console.log(obj1.colorCircle);//set colorcircle

console.log(obj1.toString);// get tostring

console.log(obj1.areaCircle);//get areacircle 

console.log(obj1.circumferenceCircle);// get circumference circle


// uber price

 class UberPrice{
    constructor(kilometer,price=50){
      this.kilometer = kilometer;
      this.price = price;
    }
    get Price(){
      return this.kilometer*this.price;
    }
  }
  var uber1 = new UberPrice(5);
  var uber2 = new UberPrice(5,125)
  console.log(uber1.Price);
  console.log(uber2.Price);
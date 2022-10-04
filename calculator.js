class Calculator{
    add(x,y){
        this.x=x;
        this.y=y;
        return this.x + this.y;
    }

    sub(x,y){
        this.x=x;
        this.y=y;
        return this.x - this.y;
    }

    multi(x,y){
        this.x=x;
        this.y=y;
        return this.x * this.y;
    }

    div(x,y){
        this.x=x;
        this.y=y;
        return this.x / this.y;

    }
    
}

let a=new Calculator();

console.log("add",a.add(10,2));
console.log("sub",a.sub(10,2));
console.log("multi",a.multi(10,2));
console.log("div",a.div(10,2));

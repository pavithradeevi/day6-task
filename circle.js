class Circle{
    constructor(...arr){
        this.radius=arr[0];
        this.color=arr[1];

        this.arr=arr.filter((i)=>i!=undefined);

        if(this.arr.length==0){
            console.log("empty")
        
        }
        else if(this.arr.lenth==1){
            console.log(`Radius:${this.radius}`)
        }
        else{
            console.log(`Radius:${this.radius},color:${this.color}`)
        }
    }

    getradius(){
        return this.radius

    }

    getcolor(){
        return this.color
    }

    setradius(radi){
        this.radius=radi;
    }

    setcolor(col){
        this.color=col;
    }

    toString(){
        return `Radius:${this.radius},color:${this.color}`
    }

    getarea(){
        return Math.PI*Math.pow(this.radius*this.getradius);
    }

}

var a=new Circle()
var b=new Circle(8.0)
var c=new Circle(9,'orange')

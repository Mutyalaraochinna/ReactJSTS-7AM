/*
    class class_one{
        private sub_one:string;
        private sub_two:string;
        private sub_three:string;

        constructor(){
            this.sub_one = "ReactJS";
            this.sub_two = "NodeJS";
            this.sub_three = "MongoDB";
        };

        public getSubOne():string{
            return this.sub_one;
        };

        public getSubTwo():string{
            return this.sub_two;
        };

        public getSubThree():string{
            return this.sub_three;
        };

    };


    let obj:class_one = new class_one();
    console.log( obj.getSubOne(), obj.getSubTwo(), obj.getSubThree() );

    //ReactJS NodeJS MongoDB
*/



/*
    class class_one{
        constructor(public arg1:string,
                    public arg2:string,
                    public arg3:string){}
    };
    let mean:class_one = new class_one("Angular","NodeJS","MongoDB");
    console.log( mean.arg1 , mean.arg2, mean.arg3 ) ;

    //if constructor members have public modifier, we cab access by using objects
    let mern:class_one = new class_one("ReactJS","NodeJS","MongoDB");
    console.log( mern.arg1, mern.arg2, mern.arg3 );


    let mevn:class_one = new class_one("VueJS","NodeJS","MongoDB");
    console.log( mevn.arg1, mevn.arg2, mevn.arg3 );
*/

/*
    //getting the properties from parent class to child class called as inheritance
    //single level inheritance
    class class_one{
        public var_one:string;
        constructor(){
            this.var_one = "Hello_1";
        };
    };
    class class_two extends class_one{
        public var_two:string;
        constructor(){
            super();
            this.var_two = "Hello_2";
        };
    };

    //parent class contain(class_one) only one variable
    //child class contain (class_two) two variables

    let obj1:class_one = new class_one();
    console.log( obj1.var_one );                    //Hello_1

    let obj2:class_two = new class_two();
    console.log( obj2.var_one, obj2.var_two );          //Hello_1 Hello_2
*/


/*
    class class_one{
        private sub_one:string;
        constructor(){
            this.sub_one = "ReactJS";
        };
        public getSubOne():any{
            return this.sub_one;
        };
    };
    class class_two extends class_one{
        private sub_two:string;
        constructor(){
            super();
            this.sub_two = "MERN Stack";
        };
        public getSubTwo():any{
            return this.sub_two;
        }
    };
    let p:class_one = new class_one();
    console.log( p.getSubOne() );

    let c:class_two = new class_two();
    console.log( c.getSubOne(), c.getSubTwo() );

*/


class Parent{
    public getSubOne():string{
        return "MEAN Stack";
    };
};

class Child extends Parent{
    public getSubTwo():string{
        return "MERN Stack";
    }
};

class SubChild extends Child{
    public getSubThree():string{
        return "MEVN Stack";
    };
};

//Parent class contain only one function
//@getSubOne()


//Child class contains two function
//@getSubOne()
//getSubTwo()


//SubChild class contain three functions
//@getSubOne()
//@getSubTwo()
//@getSubThree()

let p:Parent = new Parent();
console.log( p.getSubOne() );                       //MEAN Stack


let c:Child = new Child();
console.log( c.getSubOne(), c.getSubTwo() );            //MEAN Stack MERN Stack


let s:SubChild = new SubChild();
console.log( s.getSubOne(), s.getSubTwo(), s.getSubThree() );       //MEAN Stack MERN Stack MEVN Stack





























































































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
var class_one = /** @class */ (function () {
    function class_one(arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }
    return class_one;
}());
;
var mean = new class_one("Angular", "NodeJS", "MongoDB");
console.log(mean.arg1, mean.arg2, mean.arg3);
//if constructor members have public modifier, we cab access by using objects
var mern = new class_one("ReactJS", "NodeJS", "MongoDB");
console.log(mern.arg1, mern.arg2, mern.arg3);
var mevn = new class_one("VueJS", "NodeJS", "MongoDB");
console.log(mevn.arg1, mevn.arg2, mevn.arg3);

function add(lstNum){
    var sum=0;
    for ( i=0; i<lstNum.length; i++ ) {
        sum=sum+parseInt(lstNum[i])
    }
    return sum
}

function addPrices(lstNum){
    var sum=0.0;
    for ( i=0; i<lstNum.length; i++ ) {
        sum=sum+parseFloat(lstNum[i])
    }
    return sum
}

function calcTotal(lstNum) {
    var sum= addPrices(lstNum);
    var vat=0.2*sum
    console.log("sum: "+sum);
    console.log("VAT:" + vat);
    console.log("Total: "+sum+vat)
}

function countMatch(words) {
    main_str = words[0];
    srch_str = words[1];
    console.log(main_str+ " "+ srch_str)
    counter =0;
    for (i=0; i<main_str.length-srch_str.length; i++) {
        if (main_str[i] == srch_str) {
            counter++;
        }
    }
    return counter;

}

class Person {
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
}

function sortByAge( lst) {
     prsn1= new Person(lst[1],parseInt(lst[2]));
     prsn2= new Person(lst[3],parseInt(lst[4]));
     min_age = parseInt(lst[0]);

     if(prsn1.age >= min_age){
        console.log(prsn1)
     } 
     if(prsn2.age >= min_age)
        console.log(prsn2)
}

function stringOfNums(num) {
    var nums="";
    for(i=1; i<=num; i++) 
        nums=nums+i;
    
    return nums
}



function calcArea(sides){
    var max_h, max_w, min_h, min_w, area=0;
    lst=[];
    for(i=0; i<sides.length; i++) {
            
            lst.push(parseInt(sides[i]))
    }
    if(lst[0]>lst[2]){
        max_h=lst[0];
        min_h=lst[0]-lst[2];
    }else {
        max_h=lst[2];
        min_h=lst[2]-lst[0];
    }
    if(lst[1]>lst[3]){
        max_w=lst[1];
        min_w=lst[1]-lst[3];
    }else {
        max_w=lst[3];
        min_w=lst[3]-lst[1];
    }
    area= (max_h*max_w)-(min_h*min_w)
    return (area)
    
}

function getNextDate(dateString){
    var old_date = new Date(Number(dateString[0]),Number(dateString[1],Number(dateString[2])));
    console.log("Old date: "+ old_date);
    old_date.setDate(old_date.getDate()+ 1);
    console.log("Next date: "+old_date);
}

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}
function calcDistanceBtwnPoints(coordinates){
    point1=new Point(Number(coordinates[0]),Number(coordinates[1]));
    point2=new Point(Number(coordinates[2]),Number(coordinates[3]));

    var x=point1.x-point2.x;
    x = (x < 0) ? x * -1 : x;

    var y=point1.y-point2.y;
    y= (y < 0) ? y * -1 : y;

    var dist=(x*x)+(y*y);
    dist=Math.sqrt(dist);
    return dist;
}

function sleepIn(weekday, vacation){
    if (weekday==false) {
        return true;
    }else
        return false;
}

console.log("Problem1");
var nums = ['2','4','3','7'];
console.log(add(nums));

console.log();
console.log();
console.log("Problem2");
nums=['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']
calcTotal(nums);
calcTotal(['1.20','2.60','3.50']);

console.log();
console.log();
console.log("Problem3");
console.log("Total count is: "+countMatch(["hello","l"]));

console.log();
console.log();
console.log("Problem4");
sortByAge(['12', 'John', '15', 'Alfred', '19']);

console.log();
console.log();
console.log("Problem5");
console.log(stringOfNums(11))

console.log();
console.log();
console.log("Problem6");
console.log("Area of figure: "+calcArea(['2','4','5','3']));
console.log("Area of figure: "+calcArea(['13','2','5','8']));

console.log();
console.log();
console.log("Problem7");
getNextDate(['2016',"9","30"]);

console.log();
console.log();
console.log("Problem8");
console.log("Distance between two points : "+ calcDistanceBtwnPoints(['2','4','5','0']));
console.log("Distance between two points : "+ calcDistanceBtwnPoints(['2.34','15.66','-13.55','-2.9985']));


console.log(sleepIn(false,false));
console.log(sleepIn(true,false));
console.log(sleepIn(false,true));


function monkeyTrouble(asmile,bsmile){
    return !((asmile && !bsmile ) ||  (!asmile && bsmile))

}

console.log(monkeyTrouble(false,false));
console.log(monkeyTrouble(true,true));
console.log(monkeyTrouble(true,false));
console.log(monkeyTrouble(false,true));


var today=new Date()
document.write(today + "<br>")
var monthnames=["january","feburary","march","april","may","june","july","august","september","octuber","november","december"]
var a=today.getMonth();
alert("current month:"+ monthnames[a])

var daynames=["sun","mon","tues","wed","thurs","fri","sat"]
var a =today.getDay();
alert("today is "+ daynames[a])
var user =new Date()  .getDay
if(user=saturday &&sunday){document.write("its funday")


}


var user=new Date().getDate();
if(user>16){
    alert("last fifthteen days of the month")

}else{
    alert("its first fifthteen days of month")
}
var present=new Date()
var past=new Date("jan,1 ,1970")
var diff=present-past
document.write(" elipsed minute since 1jan,1970:"+ today.getTime()/(1000*60));
document.writr("elipsed milisec sinve 1 jan , 1970:"+ today .getTime()/(1000*60*60))
var  b=new Date().getHours();
if(b<12) 
    {alert("its AM");}
else{alert("its PM ");}

var laterDate = new Date("dec,31,2020")

document.write(laterDate)
var ramzan = new Date("3 ,1 ,2024")
var res = today.getTime() - ramzan.getTime()

document.write(Math.floor(res/(1000*60*60*24)))
document.write(  today)
var eclipse =new Date("12 1 2015")
var tim = today .getTime() - eclipse.getTime()
document.write(Math.floor(tim/(1000)) + "seconds had passed since beginning of 2015")
var hundred = new Date( "6 28 1994 " + "<br>")
alert("current date:" + hundred +"100 years back it wAS:" + hundred);
document.write(" current date :"+ today +"<br>");
document.write("current hour : " + today.getHours() + "<br>");
document.write( " 1 hour ago:" + today.getHours() - 1 + hundred +"<br>");
var dob = prompt("whats your age?")
document.write( "your age is :" + dob + "<br>")
var y = today.getFullYear() - dob+ "<br>"
document.write("your birth year is:"+ y+"<br>" )
document.write(<h2> K- Electric Bill</h2>)
var username = prompt( " whats your name?")
document.write( "customer name :"+ username+ "<br>")
var month = prompt(" enter your billing month?")
document.write(" currenr month: "+ month +"<br>")
var units = prompt(" enter your units?")
document.write=("current units:"+ units + "<br>")
var charge=+prompt("enter your charges per unit")
document.write(" charge per month: "+charge +"<br>")

var net=+prompt("your net amount with(due date)")
document.write(" net amount: "+net+"<br>")
var late=+prompt("enter your late payment surcharge")
document.write(" late paymet surcharge: "+late +"<br>")


var grosscharge=+prompt(" your gross charges after due date")
document.write(" gros charges: "+grosschargecharge +"<br>")



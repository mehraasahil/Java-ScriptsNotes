
//  1 .function example
// function sahil(){
//     console.log('sahil')
    
// }
// sahil();


// 2. function with parameter 

// function data(name,age){
//     console.log('hello' + name + 'my age is '+ age)
// }

// data('sahil','23');


// 3. function with return

// function sum(math,sci,eng){
//     var s = math+sci+eng
//     return s;
// }



// function percentage(tt){
//     var per = tt/300*100;
//    console.log(per)
// }
// var total = sum(15,23,44);
// percentage(total)


// 4 .Funnctions for Basic events
// function hello(){
//     document.write('hello')
// }

// function hmouse(){
//     alert('onmouseenter event')
// }


// 5. loop

// while loop 
// var a= 1;
// while (a <= 10){
//     document.write('hello this while loop')
//     a = a + 1;
// }


//For loop 

// for (var a = 1 ; a <= 10 ; a++){
//     document.write( a +" " +'this is for forloop <br>')
// }



// for (var b = 1; b <= 10; b++ ){
//     document.write( b +" "+'this is just practice<br>')
// }


// if else with for loop
// loop for odd
//  for (var a = 1 ; a<=10; a++){
//     if (a%2==0){
//     document.write(a + " " +"This is even <br>" )
    
//     }
//  }


// loop for odd
//  for (var a = 1 ; a<=10; a++){
//     if (a%2!=0){
//     document.write(a + " " +"This is even <br>" )
    
//     }
//  }



// for ( a=0;a<10;a++){
//     if ( a %2== 0){
//         document.write( a +" "+'this is even')
//           }
//       else{
//         document.write('not')
//     }
    
// }


 // Nested Loop
//  for (var a =1; a<=100; a= a +10){
//     for (var b = a; b<a+10; b++){
//         document.write(b+" " +'')
//     }
//     document.write('<br>')
//  }

// Nested loop easy example
// for (var a = 1; a<=10; a++){
//     for (var b =1 ; b<=a;b++){
//         document.write(b)
//     }
//     document.write('</br>')
// }


// ARRAY

// single line array with loop
// var ary = [
//     ['sahil','Mehr a',24],   // 0
//     ['aashima','gupta',23],  // 1
// ]

// for( var a = 0;a<2;a++){
    
//     document.write(ary[a]);
// }

// loop for array
// var ary = [10,20,30,40,50]
// sum = 0
// for (a=0;a<=4;a++){
//     document.write(ary[a]+"<br>")
//     sum = sum + ary[a]
   
// }

// document.write(sum)

// Loop for store new variable
// var ary = new Array();
// ary[0]='ddccd'
// for (a=0;a<=4;a++){
//     document.write(ary[a]+"<br>")
//     sum = sum + ary[a]
   
// }

// document.write(sum)



// Loop for prompt
// var ary = new Array();
// for (var g = 0; g<3; g++){
//     ary[g]=prompt('enter the val')
// }

// for (a=0;a<3;a++){
//     document.write(ary[a]+"<br>")
// }
   
// array  methods sort

// var a = [ 'sahil','mehra','fzr']
// a.sort()
// document.write(a)


// oject emample with this 
// var a = {
//    fname : 'sahil',
//    country: 'india',
//    state:'punjab',
//    age:'24',
//    salary:function(){
//     return 30000;
//    },
//    data: function(){
//     return this.fname
//    }
// }
// document.write(a.salary())
// document.write(a.fname)
// document.write(a.data())

// Map function

// var ary = [11,4,5,8];

// var b  = ary.map(test);
// document.write(b);

// function test(x){
//     return x * 10 
// }


// var tp = [1,2,3]
// var mp = tp.map(tm);
// document.write(mp)

// function tm(p){
//     return p*10
// }






// Map With multiple object
// var ary = [
//     {fname:'sahil',lname:'mehra'},
//     {fname:'Asshima',lname:'gupta'}
// ]
// var b  = ary.map(test);
// document.write(b);

// function test(x){
//     return x.fname
// }












// const sah=[{name:'sahil'}];

// function df(x){
//     return x.name;
// }

// const out = sah.map(df)
// console.log(out)


// DOM TOPICS

// document.getElementById('header').onclick=abc;

// function abc(){
//   document.getElementById('header').style.background = 'green ';

// }
// document.getElementByClassName('header').onclick=abc;

// function abc(){
//     document.getElementByClassName('header').style.background='green';
// }


// document.getElementById('header').addEventListener('click',abc)
// function abc(){
//    document.getElementById('header').style.background = 'green';
    
//  }






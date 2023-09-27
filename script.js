// JavaScript is a sync single threading language if it gets something async send it to the web api setTimeOut()
//constructor function: ek normal function jisme this lga ho and usko call krte time app new keyword ka istemal kr rhe ho
//why used: jab apke pass mauka ho ki same properties ke bht sare element bna rhe ho tb ap constructor function use kr skte hai
//iife: a function which we don't call it seperatly is gets called when it created
//uses: when we want to create private variable we create iife function, we give them method to access variable
// prototype: prototype contains many helper properties and methods which we can se to complete our task
// prototype: many properties and methods are already available to use built by JavaScript creators inside prototype or every object.
// let mai = {
//     height: 5.5,
//     canSpeakEng: true,
//     Engineer: true,
//     doJob: true,
//     canSmoke: false,
//     canAbuse: false,
// }


// let mySon = {
//     govJob: true,
//     drivePlane: true,
//     controlCrime: true,
//     shootMan: false,
// }
// mySon.__proto__ = mai;
// function abcd(a,b,c){
//     console.log(this,a,b,c);
// }
// let obj = {name: "rizwan"};
// // abcd.apply(obj, [40,20,30]);
// // abcd.call(obj, 10,20,30);
// let bindedfun = abcd.bind(obj,[1,2,3],[10,20,30],[40,50,60]);
// bindedfun();
//pure and impure function
//impure function
// function abcd(val){
//     return Math.random(val * 2)
// }

// let ans1 = abcd(5);
// let ans2 = abcd(5);

//pure
// function abcd(a, b){
//     return a * b;
// }
// let ans1 = abcd(5,2);
// let ans2 = abcd(5,2);

// practice
//promises(sbse phle gr pr aao)
// then catch and async await
// async function abcd(){
//    let row = await fetch(`https://randomuser.me/api/`)
//    let ans =  await row.json();
//    console.log(ans);
// }

// abcd();
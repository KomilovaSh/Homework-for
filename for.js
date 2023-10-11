// 1-masala;
// let n=prompt("n ni kiriting:");
// for (let i=1; i<=n; i++) {
//     document.writeln(i);
// }

// let n=prompt("n ni kiriting:");
// for (let i = n; i >= n; --i) {
//      document.writeln(i);
// }


//  3-masala
// let n=prompt("n ni kiriting:");
// let sum=0;
// for (let i=1; i<=n; i++) {
//    sum +=i;
// }
// document.writeln(sum);

//  4-masala
// let n=prompt("n ni kiriting:")
// let sum=0;
// for (let i=1; i<=n; i++){
//     if(i%2==0){
//         sum +=i;
//     }
// }
// document.write(sum);


// 5-masala
// let n=prompt("n ni kiriting:")
// let sum=0;
// for (let i=1; i<=n; i++){
//     if(i%2==1){
//         sum +=i;
//     }
// }
// document.write(sum);

// 6-masala
//  let a=prompt("a sonnni kiriting");
//  a=+a;
//  for(let i=1;i<=a;i++){
//     if(a%i==0){
//    document.writeln(i);
//  }
// }


// 7-masala
let a=prompt("a sonni kiriting:");
a=+a;
let sum=0;
let count=0;
for(let i=1; i<=a; i++){
    if(a%i==0){
        document.writeln(i);
        sum+=i;
        count++;
    }
}
document.write("Sonning bo'luvchilari yigindisi:"+sum);
document.writeln("Sonning bo'luvchilari soni:"+count);



// For1
// let k = prompt("k sonni kiriting:");
// let n = prompt("n sonni kiriting:");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     if (k <= n) {
//         sum += k;
//         document.writeln(k);
//     } else if (k >= n) {
//         sum += n;
//        document.writeln(n);
//     }
// }


//  For2
// let a = prompt("a ning qiymatini kiriting:");
// let b = prompt("b ning qiymatini kiriting:");
// let count = 0;
// if (a < b) {
//     for (let i = a; i <= b; i++) {
//         document.writeln(i);
//         count += 1;
//     }
//     document.write("Orasidagi sonlar soni:"  +count);
// } 


//  For3
// let a = prompt("a ning qiymatini kiriting:");
// let b = prompt("b ning qiymatini kiriting:");
// let count = 0;
// if (a < b) {
//   for (let i = b; i > a; i--) {
//     document.writeln(i);
//     count += 1
//   }
//  document.writeln( "Sonlar soni:" + count );
// }
// else {
//    document.writeln(" a<b shart bajarilmadi");
// }


//  For4
// let narx = prompt("Konfetning narxini kiriting:");
// for (let i = 1; i <= 10; i++) {
//    let res =  i * narx;
//    document.write( "Konfetni kg narxi:", res);
// }


//  For5
// let narx = prompt("Konfetning narxini kiriting:");
// for (let i = 0.1; i <= 1; i += 0.1) {
//    let res =  i * narx;
//    document.write( "Konfetni kg narxi:", res);
// }


// For6
// let narx = prompt("Konfetning narxini kiriting:");
// for (let i = 1.2; i <= 2; i += 0.2) {
//    let res =  i * narx;
//    document.writeln( "Konfetni kg narxi:", res);
// }


// For7
// let a = prompt("a ning qiymatini kiriting:");
// let b = prompt("b ning qiymatini kiriting:");
// let sum = 0;
// if (a < b) {
//     for (let i = a; i <= b; i++) {
//         sum += i;
//     }
//    document.write("Yeg'indisi:" + sum);
// } 


// For8
// let a = prompt("a ning qiymatini kiriting:");
// let b = prompt("b ning qiymatini kiriting:");
// let sum = 1;
// if (a < b) {
//     for (let i = a; i <= b; i++) {
//        sum *= i;
//     }
//     document.write("Ularning ko'paytmasi:" + sum);
// } 


// For9
// let a = prompt("a ning qiymatini kiriting:");
// let b = prompt("b ning qiymatini kiriting:");
// let sum = 0;
// if (a < b) {
//     for (let i = a; i <= b; i++) {
//         sum += i*i;
//     }
//    document.write("Ularning kvadratlari yig'indisi:" + sum);
// } 


// For10
// let n = prompt(" n butun son kiriting:");
// let s = 0;
// let sum = 0;
// if ( n > 0 ){
//    for( let i=0; i<n; i++){
//       s= 1/(1+i);
//       sum += s;
//    }
//   document.write(sum);
// }


// For11
// let n = prompt(" n butun son kiriting:");
// let s = 0;
// let sum = 0;
// if ( n > 0 ){
//    for( let i=0; i<n; i++){
//       s =(n+i)**2;
//       sum += s;
//    }
//    document.write(sum);
// }


// For12
// let n = prompt(" n butun son kiriting:");
// let s = 0;
// let sum = 1;
// if ( n > 0){
//      for ( let i=1; i<=n; i++){
//         s= 1+i/10;
//        sum *= s;
//      }
//      document.write(sum);
// }

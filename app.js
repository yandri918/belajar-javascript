//console.log(1)
//console.log(2)
//console.log(3)
//console.log(4)
//console.log(5)
//console.log(6)
//console.log(7)
//console.log(8)
//console.log(9)
//console.log(10)
//for (let i =1 ; i<=8 ; i++){
  //  console.log("saya ada di  dalam sini");
  //  console.log(i)
//}
//for (let i = 20 ; i>=0 ; i -=2 ){
//    console.log("saya ada di  dalam sini");
 //   console.log(i)
//
//const animal = [ "rusa","bebek","deer", "horse"]
//for (let i=0 ; i < animal.length ; i+=1){
 //   console.log(i + 1,animal[i]);
//}
//const pilihan = 'abcd';
//for (let i=1 ; i <=10 ; i++){
 // console.log (`${i}. soal nomor ${i}:`);
//  for (let j = 0 ; j < pilihan.length; j++)
//    console.log(`${pilihan[j]}. pilihan Jawaban`);
//}
//const studentRow =[
 // ['anwar', 'budi','charlie','doni'],
 // ['eko','fajar','gani','ike'],
 // ['joni','kurniawan','melani','noni']
//]
//for (let i= 0; i < studentRow.length ; i++){
 // const row = studentRow[i];
 // console.log(`seat row #${i + 1}`);
 // for (let j=0 ; j< row.length ; j++){
   // console.log(`   ${row[j]}`)
 // }
//}
//let num =0 ;
//while (num < 10 ){
  //console.log(num);
  //num++;
//}
//const Pasword = 'Pass123';
//let guess = prompt('enter the pasword')
 // while (guess !== Pasword){
 //   guess = prompt('enter the pasword ')
 // }
//  alert ('congrats !the pasword is correct')
 // let input = prompt('hei , say something')
 //   while (true){
 //     input = prompt(input);
//      if (input.toLowerCase=== 'stop')break;
//    }
//    alert ('ok')
//    for (let i = 0 ; i <1000 ; i++){
 //   console.log(i);
 // if (i === 50) break ; }
  //let maximum = parseInt(prompt('masukkan nilai maksimal '))
  //while(!maximum){
    //  maximum = parseInt(prompt('masukkan nilai maksimal'))
 // }
  //const targetNum = Math.floor(Math.random()* maximum)+1;
 // console.log(targetNum) ;

  //let guess = parseInt(prompt('isikan tebakan  pertama kamu'))

  //while (guess !== targetNum){
   // if (guess > targetNum){
    //  guess = prompt(' terlalu tinggi ! tebak lagi');
   //}
   //else {
    //  guess = prompt ('terlalu rendah !tebak lagi')
   //}
  //}
  //alert ('selamat tebakan anda benar')
  const fruits = ['banana', 'orange', 'Apple', 'mango'];

  for (let fruit of fruits){
    console.log(`buah ${fruits}`)
  }
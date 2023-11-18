function encrypt(){

var x = document.getElementById("textgiris").value;
var z = document.getElementById("keygiris").value;

if(x == ""){
    alert("User input cannot be left blank!")
    return false;
}
if(z == ""){
    alert("User input cannot be left blank!")
    return false;
}

var kelime = x;
var sifre = z;

var text = kelime.toLowerCase();
var key = sifre.toLowerCase();
//##### TEXT-KEY Harf Karakter Sayısı Eşitleme //
for(j=0; j < text.length; j++){

}

var s = key.repeat(j);
var f = s.length - text.length;
var son = s.length - f;
var sonuc = s.substring(0,son);

// TEXT-KEY Harf Karakter Sayısı Eşitleme #####//

//var alphabet = [1=a,b=2,c=3,d=4,e=5,f=6,g=7,h=8,i=9,j=10,k=11,l=12,m=13,n=14,o=15,p=16,q=17,r=18,s=19,t=20,u=21,v=22,w=23,x=24,y=25,z=26];
var alphabet = {0:" ",1:"a",2:"b",3:"c",4:"d",5:"e",6:"f",7:"g",8:"h",9:"i",10:"j",11:"k",12:"l",13:"m",14:"n",15:"o",16:"p",17:"q",18:"r",19:"s",20:"t",21:"u",22:"v",23:"w",24:"x",25:"y",26:"z"};
var numeric = {" ":0,"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10,"k":11,"l":12,"m":13,"n":14,"o":15,"p":16,"q":17,"r":18,"s":19,"t":20,"u":21,"v":22,"w":23,"x":24,"y":25,"z":26};
var alplength = Object.keys(alphabet).length // Alfabemizin uzunluğu(length) 26
                              
//##### TEXT HARF DEĞERLERİ YAZDIRMAK //
var textsplit = text.split(""); //sonuc text değeri splitlenir ["e","r","a","y","e","r","a"]
var textarr = [];
for(x=0; x < textsplit.length; x++){ // x değerini, keyimizin kaç harfli olduğunu kontrol etmek için ayarladık.
    for(alp=0; alp<=alplength; alp++){
        if(textsplit[x] == alphabet[alp]){
            textarr[x] = alp;
        }
    }
}
// Sonuç değişkenimiz textarr[] altında depolanmakta
// TEXT HARF DEĞERLERİ YAZDIRMAK #####//

//##### KEY HARF DEĞERLERİ YAZDIRMAK //
var keysplit = sonuc.split(""); //sonuc key değeri splitlenir ["e","r","a","y","e","r","a"]
var keyarr = [];
for(y=0; y < keysplit.length; y++){ // x değerini, keyimizin kaç harfli olduğunu kontrol etmek için ayarladık.
    for(alph=0; alph<=alplength; alph++){
        if(keysplit[y] == alphabet[alph]){
            keyarr[y] = alph;
        }
    }
}
// Sonuç değişkenimiz keyarr[] altında depolanmakta
// KEY HARF DEĞERLERİ YAZDIRMAK ##### //

// Butona bastığında şifreleme işlemini çalıştır #####//

    var encryptednumber = [];
    for(sayilar=0; sayilar<textarr.length; sayilar++){
        var encryptsonuc = textarr[sayilar] + keyarr[sayilar];
        encryptednumber[sayilar] = encryptsonuc;
    }
    //document.getElementById("textinput").innerHTML = "Şifrelenecek metin: " + text;
    //document.getElementById("keyinput").innerHTML = "Şifreleme anahtarı: " + sifre;

    document.getElementById("sifrelendiwarn").innerHTML = "Encrypted Text:"
    document.getElementById("encryptedsonuc").innerHTML = encryptednumber;
}
// Son olarak text değerleri ve key değerleri toplanarak şifreli metine ulaşılır. Şifreli metin encryptednumber[] içerisindedir.
//##### Butona bastığında şifreleme işlemini çalıştır //

// Panoya kopyala //

function copyToclipboard(){
    // Get the text field
  var copyText = document.getElementById("encryptedsonuc");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Encrypted text was copied!");
}

function copyToclipboardd(){
    // Get the text field
  var copyText = document.getElementById("decryptedsonuc");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Decrypted text was copied!");
}



// ####################################################################################
// ####################################################################################
// ####################################################################################
// Decryption 
// ####################################################################################
// ####################################################################################
// ####################################################################################

function decrypt(){

var x = document.getElementById("encrygiris").value;
var z = document.getElementById("ekeygiris").value;

if(x == ""){
    alert("Girdi boş bırakılamaz!")
    return false;
}
if(z == ""){
    alert("Girdi boş bırakılamaz!")
    return false;
}

var kelime = x;
var sifre = z;
var key = sifre.toLowerCase();

//##### TEXT-KEY Harf Karakter Sayısı Eşitleme //
var encryptedkelime = [];

encryptedkelime = kelime;
var sonuckelime = encryptedkelime.split(",");

for(j=0; j < sonuckelime.length; j++){
}

var s = key.repeat(j);
var f = s.length - sonuckelime.length;
var son = s.length - f;
var sonuc = s.substring(0,son); // Eşitlenmiş key değeri


// TEXT-KEY Harf Karakter Sayısı Eşitleme #####//

var alphabet = {0:" ",1:"a",2:"b",3:"c",4:"d",5:"e",6:"f",7:"g",8:"h",9:"i",10:"j",11:"k",12:"l",13:"m",14:"n",15:"o",16:"p",17:"q",18:"r",19:"s",20:"t",21:"u",22:"v",23:"w",24:"x",25:"y",26:"z"};
var alplength = Object.keys(alphabet).length // Alfabemizin uzunluğu(length) 26



//##### KEY SAYI DEĞERLERİ YAZDIRMAK //
var keysplit = sonuc.split(""); //sonuc key değeri splitlenir ["e","r","a","y","e","r","a"]
var keyarr = [];
for(y=0; y < keysplit.length; y++){ // y değerini, keyimizin kaç harfli olduğunu kontrol etmek için ayarladık.
    for(alph=0; alph <= alplength; alph++){
        if(keysplit[y] == alphabet[alph]){
            keyarr[y] = alph;
        }
    }
}

// Sonuç değişkenimiz keyarr[] altında depolanmakta
// KEY SAYI  DEĞERLERİ YAZDIRMAK ##### //


// Butona bastığında şifreleme işlemini çalıştır #####//

var decryptednumber = [];
for(sayilar=0; sayilar<sonuckelime.length; sayilar++){
    var decryptsonuc = sonuckelime[sayilar] - keyarr[sayilar];
    decryptednumber[sayilar] = decryptsonuc;
} // Sayıları birbirinden çıkarttı ve decryptednumber[] içerisinde yerleştirdi. [13,5,18,8,1,2,1]



for(w=0; w < decryptednumber.length; w++){ // w değerini, keyimizin kaç harfli olduğunu kontrol etmek için ayarladık.

    for(m=0; m < alplength; m++){
        if(decryptednumber[w] == m){
            decryptednumber[w] = alphabet[m];
        }
    }
}
var hagayret = decryptednumber.toString();

var sondecryptednumber = hagayret.replace(/,/gi,"");


document.getElementById("sifrelendiwarn").innerHTML = "Decrypted Text:"
document.getElementById("decryptedsonuc").innerHTML = sondecryptednumber;


    

}

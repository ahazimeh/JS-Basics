
const stringSize = (text) => {
    return text.length;

}
const replaceCharacterE = (text) => {
    for(index=0;index<text.length;index++){
        if(text[index]=='e')
        break;
    }
    if(index==text.length)
    return text;
    text = text.substring(0, index) + ' ' + text.substring(index + 1);
    return text;
}
const concatString = (text1, text2) => {
return text1+text2;
}
const showChar5 = (text) => {
    return text[4];
}
const showChar9 = (text) => {
    return text.substring(0,9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    if(typeof text=='string')
    return true;
    else
    return false;
}

const getExtension = (text) => {
    var ext=text.split('.');
    return ext[ext.length-1];
}
const countSpaces = (text) => {
    var count=0;
    for(i=0;i<text.length;i++)
    if(text[i]==' ')
    count++;
    return count;
}
const InverseString = (text) => {
    var s='';
    for(i=text.length-1;i>=0;i--){
        s=s+text[i];
    }
    return s;
}

const power = (x, y) => {
    if(y==0)
    return 1;
    var a=x;
    for(i=1;i<y;i++){
        a=a*x;
    }
    return a;
}
const absoluteValue = (num) => {
    if(num>0)
    return num;
    return -num;
}
const absoluteValueArray = (array) => {
    for(i=0;i<array.length;i++){
        if(array[i]<0)
        array[i]*=-1;
    }
    return array;
}
const circleSurface = (radius) => {
    return Math.round(radius*radius*Math.PI);
}
const hypothenuse = (ab, ac) => {
    return Math.sqrt(ab*ab+ac*ac);
}
const BMI = (weight, height) => {
return Math.round((weight*100/(height*height)))/100; 

}

const createLanguagesArray = () => {
    return ["Html","CSS","Java","PHP"];
}

const createNumbersArray = () => {
    return [0,1,2,3,4,5];
}

const replaceElement = (languages) => {
    languages[2]="Javascript";
    return languages;
}

const addElement = (languages) => {
    languages.push("Ruby","Python");
    return languages;
}

const addNumberElement = (numbers) => {
    var n=[-2,-1];
    for(i=0;i<numbers.length;i++){
        n.push(numbers[i]);
    }
    return n;
}

const removeFirst = (languages) => {
    var n=[];
    for(i=1;i<languages.length;i++){
        n.push(languages[i]);
    }
    return n;
}

const removeLast = (languages) => {
    var n=[];
    for(i=0;i<languages.length-1;i++){
        n.push(languages[i]);
    }
    return n;
}

const convertStrToArr = (social_arr) => {
    return social_arr.split(',');
}

const convertArrToStr = (languages) => {
    var n='';
    for(i=0;i<languages.length;i++){
        // alert(languages[i]);
        n=n+languages[i]+',';
    }
    n=n.substring(0,n.length-1);
    return n;
}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    var inv=[];
    var k=0;
    for(i=social_arr.length-1;i>=0;i--){
        inv[k]=social_arr[i];
        k++;
    }
    return inv;
}
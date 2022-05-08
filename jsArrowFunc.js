//    ******** ARROW FUNCTION  **********



// Arrow Function Expression

const square = (num) => {
    return num*num;
}
console.log(square(4)); //16

const square1 = num => (num*num);
console.log(square1(5)); //25


window.name="Iris";

const person = {
    name:"Deniz",
    tellName : function(){
        console.log(this); //{name: 'Deniz', tellName: ƒ}
        console.log(this.name); //Deniz
    }
}
person.tellName();

//Arrow function'un kendine ait bir dizini olmadığı için obje içinde olsa da window'u referans alır

const person1 = {
    name:"Gümüş",
    tellName : () => {
        console.log(this); //Window {window: Window, self: Window, document: document, name: 'Iris', location: Location, …}
        console.log(this.name); //Iris
    }
}
person1.tellName();


// tellMe fonksiyonu arrow fonk olarak tanımlansaydı window'u referans alacaktı. Bu şekilde fonk oluşturara
// setTimeout metodunu da kendine referans olarak almasını sağladı ve Artemis çıktısı aldı.
const person2 = {
    name : "Artemis",
    tellMe : function () {
        console.log(this); //{name: 'Artemis', tellMe: ƒ}
        console.log(this.name); //Artemis

        setTimeout(() => {
            console.log(this);//{name: 'Artemis', tellMe: ƒ}
            console.log(this.name);//Artemis
        }, 2000)
    }

}
person2.tellMe();

// --- Call Func ----
//Başka bir nesneye ait olan metodu kullanmak

const student = {
    examResult : function () {
        return this.name + " " + this.grade;
    }
}

const student1 = {
    name:"Artemis",
    grade:80
}
const student2 = {
    name:"Deniz",
    grade:80
}

console.log(student.examResult.call(student1));
console.log(student.examResult.call(student2));
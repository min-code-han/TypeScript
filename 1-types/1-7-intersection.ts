{
  // Unuion 이 or 같은 특징을 가졌다면, 
  //Intersection Types : and 같은 개념이에요. 이거랑 그리고 저거

 type Student = {
   name: string;
   score : number;
 };

 type Worker = {
   employeeId :number;
   work:()=>void;
 }

 function internWork (person:Student & Worker){
   console.log(person.name)
 }

 internWork({
   name:'mo',
   score:1,
   employeeId:99,
   work:()=>{}
 })
 // Student에도 해당되고 Worker에도 해당되기 때문에 그 안의 내용들이 있어야 에러가 나지 않음.



}
import React ,{ Component }from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Display} from './App';
class Sample extends Component{
    state={
       employee:[
            {name:"Venkatesh",age:24},{name:"Nirmal",age:22},{name:"Adarsh",age:40}],order:"asc"};
sortingByName = () => {
    let a = [...this.state.employee];
let b=(this.state.order);
if(b=="asc"){
     a.sort( (x,y) => {
         const comp1=x.name;
         const comp2=y.name;
         let comparision = 0;
         if (comp1 > comp2){
            comparision = 1;
         }
         else if(comp1 < comp2){
             comparision = -1;
         }
         return comparision;
    })
    this.setState({ employee:a,order:"desc"})
}
if(b=="desc"){
    a.sort( (x,y) => {
        const comp1=x.name;
        const comp2=y.name;
        let comparision = 0;
        if (comp1 < comp2){
           comparision = 1;
        }
        else if(comp1 > comp2){
            comparision = -1;
        }
        return comparision;
   })
   this.setState({ employee:a,order:"asc"})
}
}
sortingByAge = () => {
    let a = [...this.state.employee];
let b=(this.state.order);
console.log(b);
if(b=="asc"){
     a.sort( (x,y) => {
         const comp1=x.age;
         const comp2=y.age;
         let comparision = 0;
         if (comp1 > comp2){
            comparision = 1;
         }
         else if(comp1 < comp2){
             comparision = -1;
         }
         return comparision;
    })
    this.setState({ employee:a,order:"desc"})
}
if(b=="desc"){
    a.sort( (x,y) => {
        const comp1=x.age;
        const comp2=y.age;
        let comparision = 0;
        if (comp1 < comp2){
           comparision = 1;
        }
        else if(comp1 > comp2){
            comparision = -1;
        }
        return comparision;
   })
   this.setState({ employee:a,order:"asc"})
}
}
 render(){
     return(
         <div>
             <button onClick={this.sortingByName}>Sort by Name</button>
             <button onClick={this.sortingByAge}>Sort by Age</button>
     <Display name={this.state.employee[0].name} age={this.state.employee[0].age} />
     <Display name={this.state.employee[1].name} age={this.state.employee[1].age} />
     <Display name={this.state.employee[2].name} age={this.state.employee[2].age} />
     </div>
     );
 }
}
ReactDOM.render(<Sample />, document.getElementById('root'));
registerServiceWorker();

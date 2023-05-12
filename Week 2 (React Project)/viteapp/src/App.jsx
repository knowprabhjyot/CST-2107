import React from 'react';
import  { collegeName, collegeStudentName } from './constant';

// Class based
class App extends React.Component {

    render() {
        return (
            <div>
                {/* You can inject a variable in HTML by wrapping it inside a curly brace */}
                {collegeStudentName} studies in this {collegeName} college
            </div>
        )
    }
}

// export class MyClass extends React.Component {
//     render() {
//         return (
//             <div>
//                 My Class HTML
//             </div>
//         )
//     }
// }
 
export default App;


// Function Based





// class Vehicle {
//     constructor(numberOfTires, model, make) {
//         this.numberOfTires = numberOfTires;
//         this.model = model;
//         this.make = make;
//     }
// }


// class Bike extends Vehicle {
//     constructor() {
//         super()
//     }
// }
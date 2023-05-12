
// function App() {
//   return (
//     <h1>Hello World!</h1>
//   )
// }

import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";


// Header - Component
// Banner Section - Component
// Footer Section - Component

const App = () => {
  return (
    <div>
        <Header />
        <Banner />
        {/* You have to create a footer component and add it here */}
        {/* Your footer component can have Social Media Links, Some Quick actions
         like Terms & Condition  */}
    </div>
  )
}

export default App;

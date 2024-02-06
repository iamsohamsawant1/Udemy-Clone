import Coursel from "./Component/Coursel"
import Product from "./Component/Product"
function App() {

  return (
    <>
    <nav className="py-2 bg-slate-300">
    <h1 className="text-red-500 text-3xl font-bold text-center">Modern Learn</h1>
    <p className="text-center font-bold">React Application</p>
    </nav>
    <Coursel num={1}/>
    <Coursel num={2}/>
    </>
  )
}

export default App

// import { useRef } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";

function App() {
  // const input=useRef<HTMLInputElement>(null)
  function handleSave(data:unknown){
    const extractedData=data as {name:string, age:string}
    console.log(extractedData)
  }
  return (
    <main>
      <Form onSave={handleSave}>
        <Input label="Name" id="name" type="text"></Input>
        <Input label="Age" id="age" type="number"></Input>
        <Button el="button">Save</Button>
      </Form>
    </main>
  )
}

export default App;

import * as Y from "yjs"
import { WebsocketProvider } from "y-websocket";
// WebSocket URL.
const WS_PORT = 8081;
const wsProtocol = location.protocol.replace(/^http/, "ws");
const wsURL = wsProtocol + "//" + location.hostname + ":" + WS_PORT;
// console.log("wsURL: " + wsURL);



enum DogObedience {
  UNKNOWN = 0,
  BAD = 1,
  OKAY = 2,
  GOOD = 3,
}
var doc = new Y.Doc();
const wsProvider = 
  new WebsocketProvider(wsURL, "", doc);
// TODO: Create a thing called "Dog" that has the properties that is contained in "Animal".
// It has an extra variable that is called "obedience" that takes in "DogObedience"



// TODO: Create something called "Cat" that has the properties from "Animal" in previous task.
// It has an extra variable that is called "purrs" that takes in "booleans"




(async function () {
  
  // You can decleare global variables here

  // Refresh the display when the yjs state changes, possibly
  // due to a message from another replica.
  const display3 = document.getElementById("display3")!;
  const display1 = document.getElementById("display1")!;
  const display2 = document.getElementById("display2")!;
  function refreshDisplay() {
    
    display1.innerHTML = "TODO: return the animal type(Cat or Dog) and status of its special feature (by whatever form you like).";
    display2.innerHTML = "TODO: return the animalName.";
    display3.innerHTML = "TODO: return the hight of animal.";
  }
  
  // When observe states updates on other replicas, call refreshDisplay
  doc.on("update", refreshDisplay);
  
  const form: HTMLFormElement = <HTMLFormElement>document.querySelector('#myform');
  const radioButtons = document.querySelectorAll('input[name="Animal"]');
  form.onsubmit = () => {
    var animal_kind : number;
    for (const radioButton of radioButtons) {
      const buttons = <HTMLFormElement>radioButton;
      if (buttons.checked) {
        animal_kind = +buttons.value;
        break;
      }
    }
    //Animal_kind saves 1 if it is a Dog, saves 2 if it is a Cat.
    
    
    const formData = new FormData(form);
    var animal_name = formData.get('animal_name') as string;
    const height_string = formData.get('height') as string;
    if (animal_name.length === 0){
      animal_name = " ";
    }
   
    return false; // prevent reload
  };
})();
   
import * as Y from "yjs"
import { WebsocketProvider } from "y-websocket";
import { stringify } from "querystring";
// WebSocket URL.
const WS_PORT = 8081;
const wsProtocol = location.protocol.replace(/^http/, "ws");
const wsURL = wsProtocol + "//" + location.hostname + ":" + WS_PORT;

// Bind yjs to WebSocket
var doc = new Y.Doc();
const wsProvider = new WebsocketProvider(wsURL, "", doc);

enum DogObedience {
  UNKNOWN = 0,
  BAD = 1,
  OKAY = 2,
  GOOD = 3,
}



(async function () {
 
  
  // TODO: Declare collaborative variables here. (You can also add things outside the async function)

  const display3 = document.getElementById("display3")!;
  const display0 = document.getElementById("display0")!;
  const display1 = document.getElementById("display1")!;
  const display2 = document.getElementById("display2")!;
  
  function refreshDisplay() {
    // This function is called when the Collab state changes, possibly
    // due to a message from another replica.
    // You may also need to call this function in other cases.
    display0.innerHTML = "TODO: return the list index (-1 for nothing in list"
    display1.innerHTML = "TODO: return the animal type(Cat or Dog) and status of its special feature (by whatever form you like).";
    display2.innerHTML = "TODO: return the animalName.";
    display3.innerHTML = "TODO: return the hight of animal.";
  }
    
  
  

  // When observe states updates, you call refreshDisplay
  doc.on('afterTransaction', refreshDisplay);
  
  
  const form: HTMLFormElement = <HTMLFormElement>document.querySelector('#myform');
  const radioButtons = document.querySelectorAll('input[name="Animal"]');
  form.onsubmit = () => { // adding animal
    let animal_kind : number = 0;
    for (const radioButton of radioButtons) {
      const buttons = <HTMLFormElement>radioButton;
      if (buttons.checked) {
        animal_kind = +buttons.value;
        break;
      }
    }
   
    
    const formData = new FormData(form);
    let animal_name = formData.get('animal_name') as string;
    const height_string = formData.get('height') as string;
    if (animal_name.length === 0){
      animal_name = " ";
    }
    
    const obedience = formData.get('dog_obedience') as string; //read the dog obedience value
    const purrs = formData.get('cat_purrs') as string; //read the purrs value
    // TODO: add an animal to your list
    // animal_kind is 1 if it is a Dog, is 2 if it is a Cat.
    // animal_name contains the name of animal and height contains the hight of the animal
    
    return false; // prevent reload
  };

  const form1: HTMLFormElement = <HTMLFormElement>document.querySelector('#myform1');
  
  form1.onsubmit = () => { // editing animal
    const formData = new FormData(form1);
    let animal_name = formData.get('animal_name') as string;
    const height_string = formData.get('height') as string;
    if (animal_name.length === 0){
      animal_name = " ";
    }
    

    const obedience = formData.get('dog_obedience') as string; // read the new dog obedience value
    const purrs = formData.get('cat_purrs') as string; // read the new purrs value

    //TODO: edit the animal that is currently shown.
    
    return false; // prevent reload
  };

  document.getElementById("prev")!.onclick = () => {
    // TODO: show the previous element on the list
  };
  document.getElementById("next")!.onclick = () => {
    // TODO: show the next element on the list
  };
  
  
})();
   
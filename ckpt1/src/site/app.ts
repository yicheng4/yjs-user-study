import * as Y from "yjs"
import { WebsocketProvider } from "y-websocket";
// WebSocket URL.
const WS_PORT = 8081;
const wsProtocol = location.protocol.replace(/^http/, "ws");
const wsURL = wsProtocol + "//" + location.hostname + ":" + WS_PORT;

// Bind yjs to WebSocket
var doc = new Y.Doc();
const wsProvider = 
  new WebsocketProvider(wsURL, "", doc);



(async function () {
  
  // TODO: Declare collaborative variables here. (You can also add things outside the async function)
  
  const display1 = document.getElementById("display1")!;
  const display2 = document.getElementById("display2")!;
  function refreshDisplay() {
    // This function is called when the Collab state changes, possibly
    // due to a message from another replica.
    display1.innerHTML = "TODO: call a function to return the animalName.";
    display2.innerHTML = "TODO: call a function to return the hight of animal.";
  }
  
  // When yjs state changes, call refreshDisplay
  doc.on('afterTransaction', refreshDisplay);
  
  const form: HTMLFormElement = <HTMLFormElement>document.querySelector('#myform');
  const radioButtons = document.querySelectorAll('input[name="Animal"]');
  form.onsubmit = () => {
    const formData = new FormData(form);
    const animal_name = formData.get('animal_name') as string;
    const height_string = formData.get('height') as string;
    let height: number = +height_string;
    // animal_name contains the name of animal and height contains the hight of the animal
    //TODO: apply new values to the animal
    
  };
  
})();
   
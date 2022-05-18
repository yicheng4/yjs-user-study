import * as Y from "yjs"
import { WebsocketProvider } from "y-websocket";
// WebSocket URL.
const WS_PORT = 8081;
const wsProtocol = location.protocol.replace(/^http/, "ws");
const wsURL = wsProtocol + "//" + location.hostname + ":" + WS_PORT;
var doc = new Y.Doc();
const wsProvider = 
  new WebsocketProvider(wsURL, "", doc);

// TODO: // design a thing that contains animal name and its height.


(async function () {
  
  // You can decleare global variables here

  // Refresh the display when the yjs state changes, possibly
  // due to a message from another replica.
  const display1 = document.getElementById("display1")!;
  const display2 = document.getElementById("display2")!;
  function refreshDisplay() {
    display1.innerHTML = "TODO: call a function to return the animalName.";
    display2.innerHTML = "TODO: call a function to return the hight of animal.";
  }
  
  // Refresh the display when the animal state changes
 
  doc.on("update", refreshDisplay);
  
  const form: HTMLFormElement = <HTMLFormElement>document.querySelector('#myform');
  const radioButtons = document.querySelectorAll('input[name="Animal"]');
  form.onsubmit = () => {
    // update the animal
    const formData = new FormData(form);
    var animal_name = formData.get('animal_name') as string;
    const height_string = formData.get('height') as string;
    if (animal_name.length === 0){
      animal_name = " ";
    }
    
    // animal_name contains the name of animal and height contains the hight of the animal
    //TODO: apply new values to the animal shown on the screen
    
    return false; // prevent reload
  };
  
})();
   
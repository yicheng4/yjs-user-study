import * as Y from "yjs"
import { WebsocketProvider } from "y-websocket";
import { stringify } from "querystring";
// WebSocket URL.
const WS_PORT = 8081;
const wsProtocol = location.protocol.replace(/^http/, "ws");
const wsURL = wsProtocol + "//" + location.hostname + ":" + WS_PORT;


var doc = new Y.Doc();
const wsProvider = new WebsocketProvider(wsURL, "", doc);

enum DogObedience {
  UNKNOWN = 0,
  BAD = 1,
  OKAY = 2,
  GOOD = 3,
}

//TODO: copy your task2 code here and find a place to define your list of animals.

(async function () {
 
  
  var index = -1;
  // You can decleare global variables here

  
  // Refresh the display when the Collab state changes, possibly
  // due to a message from another replica.
  const display3 = document.getElementById("display3")!;
  const display0 = document.getElementById("display0")!;
  const display1 = document.getElementById("display1")!;
  const display2 = document.getElementById("display2")!;
  
  function refreshDisplay() {
    display0.innerHTML = "TODO: return the list index (-1 for nothing in list"
    display1.innerHTML = "TODO: return the animal type(Cat or Dog) and status of its special feature (by whatever form you like).";
    display2.innerHTML = "TODO: return the animalName.";
    display3.innerHTML = "TODO: return the hight of animal.";
  }
    
  
  

  // Hint: when you observe states updates, you need to call refreshDisplay
  // Yjs function observeDeep may be helpful
  
  
  const form: HTMLFormElement = <HTMLFormElement>document.querySelector('#myform');
  const radioButtons = document.querySelectorAll('input[name="Animal"]');
  form.onsubmit = (e) => { // adding animal
    console.log("click\n");
    e.preventDefault();
    
    var animal_kind : number = 0;
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
    //TODO: add an animal to your list
    const obedience = formData.get('dog_obedience') as string; //read the dog obedience value
    const purrs = formData.get('cat_purrs') as string; //read the purrs value
    
    return false; // prevent reload
  };

  const form1: HTMLFormElement = <HTMLFormElement>document.querySelector('#myform1');
  
  form1.onsubmit = (e) => { // editting animal
    e.preventDefault();
    const formData = new FormData(form1);
    var animal_name = formData.get('animal_name') as string;
    const height_string = formData.get('height') as string;
    if (animal_name.length === 0){
      animal_name = " ";
    }
    // TODO: edit the animal that is shown on the screen.
    const obedience = formData.get('dog_obedience') as string; //read the dog obedience value
    const purrs = formData.get('cat_purrs') as string; // read the purrs value
    return false; // prevent reload
  };

  document.getElementById("prev")!.onclick = () => {
    //TODO: show the previous element on the list
  };
  document.getElementById("next")!.onclick = () => {
    //TODO: show the next element on the list
  };
  

  
  //DO NOT CHANGE BELOW THIS LINE  
  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
  // Wait for the container to load the previous saved state,
  // if any.
  // Observe that unlike CRDTApp.load, we don't need to provide
  // the save data ourselves, and the method is async.
  

  // Display the loaded state.
  refreshDisplay();

  

  
})();
   
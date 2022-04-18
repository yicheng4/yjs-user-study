import * as Y from "yjs"
import { WebsocketProvider } from "y-websocket";
// WebSocket URL.
const WS_PORT = 8081;
const wsProtocol = location.protocol.replace(/^http/, "ws");
const wsURL = wsProtocol + "//" + location.hostname + ":" + WS_PORT;
// console.log("wsURL: " + wsURL);

var doc = new Y.Doc();
const wsProvider = new WebsocketProvider(wsURL, "", doc);


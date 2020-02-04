// imports always go first - if we're importing anything

import ChatMessage from "./modules/ChatMessage.js";

const socket = io();

function setUserId({sID, message}){
    debugger;
    vm.socketID:
    // console.log(packet);
}

function runDisconnectMessage(packet) {
    debugger;
    console.log(packet);
}

function runDisconnectMessage(packet) {
    // debugger
    console.log(packet);
}

function appendNewMessage(msg {

})

// this is our main Vue instance
const vm = new Vue({
    data: {
       socketId:"",
       messages:[],
       message: "",
       nickName: ""
    },

    methods{
        dispatchMessages() {
            // emi6 a message event and send the message to the server
            console.log("handle send message");

            socket.emit('chat_message' , {
                content: this.message,
                name: this.nickname || "anonyumous"
                // || is called a double pipe operator or an "or" operator
                // if this.nickName is set, use it as the value
                // or just make name "anonymous"
            })

            
        }
    }

    compoments: {
       peanuts: ChatMessage
    },

    mounted: function(){
        console.log('mounted');
    }
}).$mount("#app");

// some event handling -> these events are coming from the server
socket.addEventListener('connected', setUserId);
socket.addEventListener('user_disconnect', runDisconnectMessage);
socket.addEventListener('new_message', appendNewMessage);

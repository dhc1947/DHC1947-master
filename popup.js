console.log('Popup.js started successfully');

let helloWorldPopup = undefined;

// Open the popup when we enter a given zone
WA.onEnterZone('popup', () => {
console.log('EnterPopup started successfully');
    helloWorldPopup = WA.openPopup("popuprectangle", 'Willkommen im Pfingstlager 2021. Mal schauen, in welchem Team du bist...', [{
        label: "Weiter",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            helloWorldPopup = WA.openPopup("popuprectangle", 'Team 1: ', [{
                label: "Weiter",
                className: "primary",
                callback: (popup) => {
                    // Close the popup when the "Close" button is pressed.
                    popup.close();
                    helloWorldPopup = WA.openPopup("popuprectangle", 'Team 2: ', [{
                        label: "Weiter",
                        className: "primary",
                        callback: (popup) => {
                            // Close the popup when the "Close" button is pressed.
                            popup.close();
                            helloWorldPopup = WA.openPopup("popuprectangle", 'Team 3:', [{
                                label: "Weiter",
                                className: "primary",
                                callback: (popup) => {
                                    // Close the popup when the "Close" button is pressed.
                                    popup.close();
                                    helloWorldPopup = WA.openPopup("popuprectangle", 'Team 4: ', [{
                                        label: "Weiter",
                                        className: "primary",
                                        callback: (popup) => {
                                            // Close the popup when the "Close" button is pressed.
                                            popup.close();
                                            helloWorldPopup = WA.openPopup("popuprectangle", 'Team 5: ', [{
                                                label: "Schließen",
                                                className: "primary",
                                                callback: (popup) => {
                                                    // Close the popup when the "Close" button is pressed.
                                                    popup.close();
                                                }
                                            }]);
                                        }
                                    }]);
                                }
                            }]);
                        }
                    }]);
                }
            }]);
        }
    }]);
});


// Close the popup when we leave the zone.
WA.onLeaveZone('popup', () => {
    helloWorldPopup.close();
});




// Open the popup when we enter a given zone
WA.onEnterZone('popup2', () => {
console.log('EnterPopup2 started successfully');
    helloWorldPopup = WA.openPopup("rectangle2", 'ITS DANGEROUS TO GO ALONE! TAKE THIS.', [{
        label: "Thanks",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});


// Close the popup when we leave the zone.
WA.onLeaveZone('popup2', () => {
    helloWorldPopup.close();
});



// Open the popup when we enter a given zone
WA.onEnterZone('popup3', () => {
console.log('EnterPopup3 started successfully');
    helloWorldPopup = WA.openPopup("rectangle3", 'Es gibt erst Essen, wenn die Kuhglocke laeutet!', [{
        label: "Ok...",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});


// Close the popup when we leave the zone.
WA.onLeaveZone('popup3', () => {
    helloWorldPopup.close();
});


// Open the popup when we enter a given zone
WA.onEnterZone('popup4', () => {
console.log('EnterPopup4 started successfully');
    helloWorldPopup = WA.openPopup("rectangle4", 'Wie lautet die Losung?', [{
        label: "Keine Ahnung!",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            helloWorldPopup = WA.openPopup("rectangle4", 'Falsch!', [{
                label: "Ok",
                className: "primary",
                callback: (popup) => {
                    // Close the popup when the "Close" button is pressed.
                    popup.close();
                }
            }]);
        }
    }]);
});


// Close the popup when we leave the zone.
WA.onLeaveZone('popup4', () => {
    helloWorldPopup.close();
});

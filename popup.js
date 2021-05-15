console.log('Popup.js started successfully');

let helloWorldPopup = undefined;

// Open the popup when we enter a given zone
WA.onEnterZone('popup', () => {
console.log('EnterPopup started successfully');
    helloWorldPopup = WA.openPopup("popuprectangle", 'Team 1', [{
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
                    helloWorldPopup = WA.openPopup("popuprectangle", 'Team 3: ', [{
                        label: "Weiter",
                        className: "primary",
                        callback: (popup) => {
                            // Close the popup when the "Close" button is pressed.
                            popup.close();
                            helloWorldPopup = WA.openPopup("popuprectangle", 'Team 4:', [{
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
});


// Close the popup when we leave the zone.
WA.onLeaveZone('popup', () => {
    helloWorldPopup.close();
});

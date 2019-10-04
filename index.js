window.addEventListener('load', () => {
    // const sounds = document.querySelectorAll(".sound");
    const buttons = document.querySelectorAll(".button-group div");

    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('serviceWorker.js');
            console.log("Service Worker Registered");
        } catch (error) {
            console.log("Service Worker Registration Failed");
        }
    }
    
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (button.id.length > 0) {
                switch (true) {
                    case button.id === "hell":
                        const hell = document.getElementById("hell-sound");
                        hell.currentTime = 0;
                        hell.play();
                    break;
                    case button.id === "shut":
                        const shut = document.getElementById("shut-sound");
                        shut.currentTime = 0;
                        shut.play();
                    break;
                    case button.id === "kiss":
                        const kiss = document.getElementById("kiss-sound");
                        kiss.currentTime = 0;
                        kiss.play();
                    break;
                }
            }
        });
    });
})
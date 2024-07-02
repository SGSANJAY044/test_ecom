const checkPermission = () => {
    if (!('serviceWorker' in navigator)) {
        throw new Error("No support for service worker!")
    }
    if (!('Notification' in window)) {
        throw new Error("No support for Notification API!")
    }
}

const registerSW = () => {
    navigator.serviceWorker.register('/serviceWorker.js').then(() => {
        return navigator.serviceWorker.ready;
    }).then(registration => {
        registration.active.postMessage(localStorage.getItem("user"));
        console.log(registration);
    })
    // return registration
}

const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
        throw new Error("Notification Permission denied!")
    }
}

const main = async () => {
    checkPermission()
    await registerSW()
    // reg.showNotification("New Notification")
    requestNotificationPermission()
}

main()


const urlBase64ToUint8Array = base64String => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        // eslint-disable-next-line no-useless-escape
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
}

const saveSubscription = async (subscription) => {
    console.log(self.email);
    const response = await fetch('http://localhost:1810/notification/subscription', {
        method: 'post',
        headers: { 'Content-type': "application/json", 'Authorization': 'Bearer ' + self.token },
        body: JSON.stringify({ email: self.email, subscription })
    })
    return response.json()
}

self.addEventListener('message', async (event) => {
    var data = JSON.parse(event.data);
    console.log("SW Received Message:");
    console.log(data);
    self.email = data.email;
    self.token = data.token;
    console.log(self.email);

    const subscription = await self.registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array("BAEdRxtcRb0sUv7GAJ3cR_PNjf_M8l9LKXrJ9p4eSDNIzUoLnVK1UYbqkp4alEiT8fhzmG3yO63Ud8H-wr8cxQI")
    })
    const response = await saveSubscription(subscription)
    console.log(response)
})

self.addEventListener("push", e => {
    e.waitUntil(self.registration.showNotification("SparrowMart", { body: e.data.text() }))
})

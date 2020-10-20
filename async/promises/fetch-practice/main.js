let promise = fetch('coffee.jpg');

let promise2 = promise.then(butt => {
    if (!butt.ok) {
        throw new Error(`HTTP error! Status: ${butt.status}`);
    } else {
        return butt.blob();
    }
});

let promise3 = promise2.then(yourBlob => {
    let objectURL = URL.createObjectURL(yourBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
});

let errorCase = promise3.catch(e => {
    console.log(`There has been a problem with your fetch operation: ${e.message}`);
});
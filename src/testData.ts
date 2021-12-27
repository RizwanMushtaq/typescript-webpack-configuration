export const testData = () => {
    console.log('testData found')
    
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => console.log(data));

    return "testdata"
}
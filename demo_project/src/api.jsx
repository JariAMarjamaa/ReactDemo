//vanha tapa
export const fetchData = () =>{
    fetch("https://api.github.com").then(resp => {
        resp.json().then(data => {
            console.log("Haettu data: ", data);
        });
    });
}; 

//uusi tapa
export const asynkkiFetch = async () => {
    const resp = await  fetch("https://api.github.com");
    const data = await resp.json();
    console.log("Asynkki respi: ", data);
}
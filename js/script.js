const customers = document.getElementById("customers");

//while (true) {
    fetch(
        "https://aw6522wv.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27statistics%27%5D"
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((allData) => {
            customers.innerText = customers.innerText + ' ' + allData.result[0].total;
        })


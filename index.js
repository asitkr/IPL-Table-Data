async function ipldata() {
    let response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');

    let data = await response.json();
    data.sort((a,b) => a.NRR - b.NRR);

    let tablebody = document.getElementsByTagName('tbody')[0];
    data.forEach(element => {
        let addDataToTable = `
        <tr>
        <td>${element.No}</td>
        <td>${element.Team}</td>
        <td>${element.Matches}</td>
        <td>${element.Won}</td>
        <td>${element.Lost}</td>
        <td>${element.Tied}</td>
        <td>${element.NRR}</td>
        <td>${element.Points}</td>
        </tr>
        `
        tablebody.innerHTML += addDataToTable;
    });
}

ipldata();
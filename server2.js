const hostname = '127.0.0.1';
const url = require('url')
const port = 3000;
const http = require('http');



const students = [
    {
        name: "shivam",
        rollno: 23,
        branch: "cse",

    },
    {
        name: "Amit",
        rollno: 3,
        branch: "eee",

    },
    {
        name: "pulkit",
        rollno: 18,
        branch: "cse",

    },
    {
        name: "rishabh",
        rollno: 20,
        branch: "mech",

    }
]
const server = http.createServer((req, res) => {
    // console.log(req.url);
    const queryObject = url.parse(req.url, true).query;
    // console.log(queryObject);
    const baseURL = req.url.substring(0, req.url.indexOf('?'));
    // console.log(baseURL)
    if (req.url === '/') {
        res.write('go to /students for details')
        res.end();
    }
    else if (req.url === '/students' && req.method == 'GET') {

        var html ="<table border = '1'>";
        for(var i = 0 ; i < students.length; i++){
            html+="<tr>";
            html+="<td>"+students[i].name+"</td>";
            html+="<td>"+students[i].rollno+"</td>";
            html+="<td>"+students[i].branch+"</td>";
            html+= "</tr>";
        }
        html+="</table>"
        res.write(html)

        // res.writeHead(200, { "Content-Type": "application/json" });
        // res.write(JSON.stringify(students));
        res.end();

    }
    else if (baseURL === '/students' && req.method == 'GET') {
        console.log(queryObject.branch);
        let student = [];
        students.find(item =>{
            if(item.branch.includes(queryObject.branch)){
                student.push(item);

            }
        })

        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(student));
        res.end();

    }


});




server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});













 // var col = [];
        // for(var i = 0;i<students.length; i++){
        //   for(var key in students[i]){
        //       if(col.indexOf(key) === -1){
        //           col.push(key)
        //           }
        //   }   
        // }
        // var table = document.createElement("table")

        // var tr = table.insertRow(-1);

        // for(var i = 0; i<col.length; i++){
        //     var th = document.createElement("th");    
        //     th.innerHTML = col[i];
        //     tr.appendChild(th);
        // }
        // for (var i = 0; i < students.length; i++) {

        //     tr = table.insertRow(-1);

        //     for (var j = 0; j < col.length; j++) {
        //         var tabCell = tr.insertCell(-1);
        //         tabCell.innerHTML = students[i][col[j]];
        //     }
        //     var divContainer = document.getElementById("showData");
        //     divContainer.innerHTML = "";
        //     divContainer.appendChild(table);
        // }
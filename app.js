

// function wOpen() {
// 	var name = document.getElementById('name');
// 	var sub = document.getElementById('sub');
// 	console.log(name)
//     window.open("index2.html","_blank");

// }


// function input() {
//     inp1 = document.getElementById("name").value;
//     console.log(inp1);
//     var myName = 'My name ' + inp1;
//     localStorage.setItem('myName', inp1);

//     window.open("index2.html","_blank");
// }

var chemicals = [
        
        {
            code : "MZ01",
            desc : "Acetic",
            Iqty: 5000,
            stock:0,
            Rqty : 0,
            pac  : "Gallon",
            lot : 012345,
            dept : "Reservoir Service",
            country : "Nigeria",
            manu_date : new Date(2018, 6, 5),
            exp_date: new Date(2019, 10, 8)
        },
        {
            code : "MZ02",
            desc : "Calcium",
            Iqty : 3000,
            stock:0,
            Rqty : 0,
            pac : "Drum",
            lot : 012346,
            dept : "Thames",
            country : "Congo",
            manu_date : new Date(2016, 5, 20),
            exp_date: new Date(2019, 6, 10)
        },
           {
            code : "MZ03",
            desc : "Chlorine",
            Iqty : 3200,
            stock:0,
            Rqty : 0,
            pac : "Bag",
            lot  : 012347,
            dept : "Thames",
            country : "Germany",
            manu_date : new Date(2019, 1, 15),
            exp_date: new Date(2020, 10, 8)
        },
        
        
        
        
        ]

    var getTotal = document.getElementById('getTotal');
    var initialQ = document.getElementById('initialQ')
    var requestedQ = document.getElementById('requestedQ');
    var stockQ = document.getElementById('stockQ');
    
    console.log(initialQ);
    
     // getTotal.addEventListener('click', function(){
        
     //    var val1 = Number(initialQ.value);
     //    var val2 = Number(requestedQ.value);
     //    subAll(val1,val2);
     //    // stockQ.innerText = subAll(val1,val2);
     // })
     
     // substracts request quantity from Initial quantity
     function subAll(a,b){
         var result = a - b;
         console.log(result);
         stockQ.innerText = result; // updates Stock Quantity field
         return result;
     }

     //

    var html = "";
    html += '<table class="table table-hover">'
    html += '<tr><th>Chemical Code</th><th>chemical Description</th><th>Initial Quantity</th><th>Stock</th>' 
    
    
    html += '<th>Quantity Requested</th> <th>Package Type</th><th>LOT Number</th>'
    html += '<th>Department</th><th>Country</th><th>Manu Date</th><th>Exp Date</th>'
    console.log(chemicals)
 for(var i=0; i< chemicals.length; i++){
    
    console.log(chemicals[i]['code'])
    console.log(chemicals[i]['desc'])
    console.log(chemicals[i]['Iqty'])
        html += '<tr><td name="code">'+chemicals[i]["code"]+'</td>';
        html += '<td name="desc">'+chemicals[i]["desc"]+'</td>';
        html += '<td name="Iqty" id="initialQ" >'+chemicals[i]["Iqty"]+'</td>';
        html += '<td name="stock" id="stokeQ" >'+chemicals[i]["stock"]+'</td>';
        html += '<td name="Rqty" id="reqQ" >'+chemicals[i]["Rqty"]+'</td>';
        html += ' <td name="pac">'+chemicals[i]["pac"]+'</td>';
        html += '<td name="lot">'+chemicals[i]["lot"]+'</td>';
        html += '<td name="dept">'+chemicals[i]["dept"]+'</td>';
        html += '<td name="country">'+chemicals[i]["country"]+'</td>';
        html += '<td name="manu_date">'+chemicals[i]["manu_date"]+'</td>';
        html += '<td name="exp_date">'+chemicals[i]["exp_date"]+'</td>';
   }
     document.getElementById('output').innerHTML = html;
   
    var reqQ = document.getElementById('reqQ');
    var initialQ = document.getElementById('initialQ')
    var stockQ = document.getElementById('stockQ');
    console.log(reqQ)
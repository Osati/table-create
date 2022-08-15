var fname,lname,email,table_ref,insert_row,fname_col,lname_col,email_col,action_col;
var tr1,tr2,cell_value1,cell_value2,cell_value3;

function createNewData(){
   fname = document.getElementById("fname").value;
   lname = document.getElementById("lname").value;
   email = document.getElementById("email").value;
   table_ref = document.getElementById("info_table").getElementsByTagName("tbody")[0];
   insert_row = table_ref.insertRow(table_ref.rows.length); 
   fname_col = insert_row.insertCell(0).innerHTML = fname;
   lname_col = insert_row.insertCell(1).innerHTML = lname;
   email_col = insert_row.insertCell(2).innerHTML = email;
   action_col = insert_row.insertCell(3).innerHTML = '<td><a class="btn btn-success" >Edit</a><a class="btn btn-danger" >Delete</a></td>';
   $("#creatProduct").modal('hide');
   
}

function edit1(){
   tr1 = document.getElementById("tr1");
   cell_value1 = tr1.cells[0].innerHTML;
   cell_value2 = tr1.cells[1].innerHTML;
   cell_value3 = tr1.cells[2].innerHTML;
   tr1.innerHTML = '<td><input type="text" name="fname1" id="fname1" value='+cell_value1+' class="form-control"></td>'+
   '<td><input type="text" name="lname1" id="lname1" value='+cell_value2+' class="form-control"></td>'+
   '<td><input type="text" name="email1" id="email1" value='+cell_value3+' class="form-control"></td>'+
   '<td><button type="button" class="btn btn-success" id="savebtn" name="submit" value="Save" onclick="updateinfo()">Save</button></td>'
   
}

function updateinfo(){
   cell_value1 = document.getElementById("fname1").value;
   cell_value2 = document.getElementById("lname1").value;
   cell_value3 = document.getElementById("email1").value;
   tr1.innerHTML = '<td>'+cell_value1+'</td>'+
                   '<td>'+cell_value2+'</td>'+
                   '<td>'+cell_value3+'</td>'+
                   '<td><a class="btn btn-success" id="edit1" onclick="edit1()">Edit</a>'+
                   '<a class="btn btn-danger" onclick="delete1()" >Delete</a>'+
                   '</td>'
}

function edit2(){
   tr2 = document.getElementById("tr2");
   cell_value1 = tr2.cells[0].innerHTML;
   cell_value2 = tr2.cells[1].innerHTML;
   cell_value3 = tr2.cells[2].innerHTML;
   tr2.innerHTML = '<td><input type="text" name="fname1" id="fname2" value='+cell_value1+' class="form-control"></td>'+
   '<td><input type="text" name="lname1" id="lname2" value='+cell_value2+' class="form-control"></td>'+
   '<td><input type="text" name="email1" id="email2" value='+cell_value3+' class="form-control"></td>'+
   '<td><button type="button" class="btn btn-success" id="savebtn" name="submit" value="Save" onclick="updateinfo2()">Save</button></td>'
   
}

function updateinfo2(){
   cell_value1 = document.getElementById("fname2").value;
   cell_value2 = document.getElementById("lname2").value;
   cell_value3 = document.getElementById("email2").value;
   tr2.innerHTML = '<td>'+cell_value1+'</td>'+
                   '<td>'+cell_value2+'</td>'+
                   '<td>'+cell_value3+'</td>'+
                   '<td><a class="btn btn-success" id="edit1" onclick="edit1()">Edit</a>'+
                   '<a class="btn btn-danger" onclick="delete1()" >Delete</a>'+
                   '</td>'
}


function delete1(){
   var r = confirm("Press Ok delete this row");
   if(r==true){
         document.getElementsByTagName("tbody")[0].deleteRow(0);
   }
}
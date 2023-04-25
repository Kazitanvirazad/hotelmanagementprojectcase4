/**
* author:Kazi tanvir azad
*/

/**
* creating reference for main container
*/
let form_cont = document.getElementById('form_cont');

/**
* creating reference for search button
*/
// let searchBttn = document.getElementById('searchBttn');
let searchBttn = document.getElementById('searchBtn');


/**
* adding an event listener to the search button onclick
*/
searchBttn.addEventListener('click', getBookingList);

/**
* creating reference for form input
*/
let phoneDataInp = document.getElementById('mobile');

/**
* creating a div container for
* bookings list table view
*/
let cont = document.createElement('div');

/**
* adding cont to the main container
*/
form_cont.appendChild(cont);

/**
* Creating a HTML element to display message returned 
* from the server
*/
let resultMessage = document.createElement('h2');
resultMessage.style.color = "white";
resultMessage.style.textAlign = "center";
resultMessage.style.backgroundColor='#4d4d4f';

/**
* adding resultMessage element to the cont
*/
cont.appendChild(resultMessage);

/**
* This function uses ajax api to get the invoice data
* from the server as a view and renders in the Document
* @param {this event} event 
*/
function getInvoiceTable(event) {
	
	let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:8088/data/invoice?bookId=${event.value}`, true);

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            window.document.write(xhr.response);
        }
    };
    xhr.setRequestHeader('Content_Type', 'application/x-www-form-urlencoded');
    xhr.send();
	
    //console.log(event.value);
    
}


/**
 * This function uses ajax api to get the booking
 * data for the customer using phone number
 * as the parameter. When server responds with
 * JSON data it creates a table view to 
 * display the data
 */
function getBookingList() {
    //console.log(typeof (phoneDataInp.value));
	if (phoneDataInp.value === "") {
		alert('Enter phone number');
		return;
	}
	if(isValid(phoneDataInp.value)){
		let xhr = new XMLHttpRequest();
		
		
		xhr.open('GET', `http://localhost:8088/data/validate?phone=${phoneDataInp.value}`, true);
		
		xhr.onreadystatechange = () => {
			if (xhr.status == 200 && xhr.readyState == 4) {
				generateBookListView(JSON.parse(xhr.responseText));
				console.log(xhr.responseText);
			}
		};
		xhr.setRequestHeader('Content_Type', 'application/x-www-form-urlencoded');
		xhr.send();
	}else{
		if (document.getElementById('tab') != null) {
			let oldTab = document.getElementById('tab');
			oldTab.remove();
        }
		resultMessage.innerHTML="Not a Valid 10 digit phone number";
	}
    

}

/**
 * This function creates booking list table view
 * with the data from the javascript object passes as
 * an argument
 * @param {data object} data 
 * @returns void
 */
function generateBookListView(data) {
    if (document.getElementById('tab') != null) {
        let oldTab = document.getElementById('tab');
        oldTab.remove();
    }

    if (data.status === 0) {
        resultMessage.innerHTML = "No Bookings found";

        cont.style.backgroundColor = "#333";
        cont.style.color = "white";
        cont.style.textAlign = "center";
        return;
    }

    resultMessage.innerHTML = `Welcome - ${data.f_name} ${data.l_name}`;
    
    createBookListTable();

    populateBookListTable(data.book_details);

}

/**
 * This function populates the bookings
 * table with the data received in as an argument
 * @param {data object} data 
 */
function populateBookListTable(data) {
    for (let val of data) {
        let table = document.getElementById('tab');
        let tr = document.createElement('tr');
        table.appendChild(tr);

        let bookTd=document.createElement('td');
        bookTd.innerHTML=val.book_id;
        tr.appendChild(bookTd);
        let tdCkin = document.createElement('td');
        tdCkin.innerHTML=generateDate(val.checkin);
        tr.appendChild(tdCkin);
        let tdCkout = document.createElement('td');
        tdCkout.innerHTML=generateDate(val.checkout);
        tr.appendChild(tdCkout);

        let tdPrint=document.createElement('td');
        // tdPrint.innerHTML='Click To Get Invoice';
        tr.appendChild(tdPrint);
        let printInvoiceBttn = document.createElement('button');
        printInvoiceBttn.setAttribute('type', 'submit');
        printInvoiceBttn.innerHTML='Click Here';
        printInvoiceBttn.setAttribute('value', `${val.book_id}`);
        printInvoiceBttn.setAttribute('onclick', 'getInvoiceTable(this)');
		printInvoiceBttn.style.cursor='pointer';
        tdPrint.appendChild(printInvoiceBttn);

        // let table = document.getElementById('tab');
        // let tr = document.createElement('tr');
        // let tdInp = document.createElement('td');
        // let input = document.createElement('td');
        // // input.setAttribute('type', 'submit');
        // input.setAttribute('value', `${val.book_id}`);
        // input.setAttribute('onclick', 'getInvoiceTable(this)');
        // let tdCkin = document.createElement('td');
        // tdCkin.innerHTML = generateDate(val.checkin);
        // let tdCkout = document.createElement('td');
        // tdCkout.innerHTML = generateDate(val.checkout);

        // let printInvoiceBttn = document.createElement('input');
        // printInvoiceBttn.setAttribute('type', 'submit');
        // printInvoiceBttn.setAttribute('value', 'Print Invoice');

        // table.appendChild(tr);
        // tr.appendChild(tdInp);
        // tdInp.appendChild(input);
        // tr.appendChild(tdCkin);
        // tr.appendChild(tdCkout);
    }
}

/**
 * This function creates a HTML table for 
 * bookings list view
 */
function createBookListTable() {
    let table = document.createElement('table');
    table.setAttribute('id', 'tab');
    table.style.color = "white";
    table.style.margin = "auto";
    cont.appendChild(table);
    let contStyle = {
        marginTop: "10px",
        backgroundColor: "#333"
    };
    Object.assign(cont.style, contStyle);

    table.setAttribute('border', '1px');
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let tab_header_txt = ['Booking No.', 'Checkin', 'Checkout','Get Invoice'];
    for (let i = 0; i < 4; i++) {
        let td = document.createElement('th');
        td.innerHTML = tab_header_txt[i];
        tr.appendChild(td);
    }
}

/**
 * This function converts MySQL date format
 * to a javascript custom date format
 * @param {MySQL date} date 
 * @returns string
 */
function generateDate(date) {
    let newDate = new Date(date);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return newDate.getDate() + " " + months[newDate.getMonth()] + " " + newDate.getFullYear();
}

/**
* This function checks whether the entered number is 
* matching the pattern of a 10 digit number
* @param {user entered phone} string
* @returns boolean
*/
function isValid(phone){
	flag=false;
	
	if(phone.length!=10 || phone.match(/[0-9]/g)===null){
		return flag;
	}
	if(phone.match(/[0-9]/g).length===10){
		flag=true;
	}
	
	return flag;
}
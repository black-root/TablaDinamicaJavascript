class TablaDinamica extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const shadow = this.attachShadow({mode: 'open'});
        const contenedor = document.createElement('div');
        contenedor.id = 'tbl';

        let tabla = document.createElement('table');
        tabla.id = 'idTabla';
        let header = document.createElement('th');
        header.id = 'idHeader';
        let celda = document.createElement('td');
        celda.id = 'idCelda';


        function CreateTableFromJSON() {
            var myBooks = [
                {
                    "Book ID": "1",
                    "Book Name": "Computer Architecture",
                    "Category": "Computers",
                    "Price": "125.60"
                },
                {
                    "Book ID": "2",
                    "Book Name": "Asp.Net 4 Blue Book",
                    "Category": "Programming",
                    "Price": "56.00"
                },
                {
                    "Book ID": "3",
                    "Book Name": "Popular Science",
                    "Category": "Science",
                    "Price": "210.40"
                }
            ]

            // EXTRACT VALUE FOR HTML HEADER.
            // ('Book ID', 'Book Name', 'Category' and 'Price')
            var col = [];
            for (var i = 0; i < myBooks.length; i++) {
                for (var key in myBooks[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

            var tr = tabla.insertRow(-1);                   // TABLE ROW.

            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");      // TABLE HEADER.
                th.innerHTML = col[i];
                tr.appendChild(th);
            }

            for (var i = 0; i < myBooks.length; i++) {

                tr = tabla.insertRow(-1);

                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = myBooks[i][col[j]];
                }
            }
            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            contenedor.appendChild(tabla);
            shadow.appendChild(contenedor);
        }
        CreateTableFromJSON();
    }
}
window.customElements.define('wctable-rest', TablaDinamica);


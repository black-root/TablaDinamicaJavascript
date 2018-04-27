class TablaDinamica extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const shadow = this.attachShadow({mode: 'open'});
        const contenedor = document.createElement('div');
        contenedor.id = 'tbl';

        let tabla = document.createElement('table');
        tabla.id = "idTabla";
        let titulo = document.createElement('caption');
        let tb = document.createElement('tbody');
        let row = document.createElement('tr');
        let header = document.createElement('th');
        let celda = document.createElement('td');
        /*
        Ejemplo de la estrutucara de la tabla
        <table id="idTabla">
            <caption></caption>
            <tbody>
            <tr>
                <th>ID</th>
                <th>nombre</th>
            </tr>
            <tr>
                <td>1</td>
                <td>pedrito</td>
            </tr>
            </tbody>
        </table>
        */

        tabla.appendChild(titulo);
        tabla.appendChild(tb);
        tb.appendChild(row);


        contenedor.appendChild(tabla);
        shadow.appendChild(contenedor);
    }
}
window.customElements.define('wctable-rest', TablaDinamica);


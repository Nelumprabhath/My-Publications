var dataList = [];

$(document).ready(function () {
    document.write("<button onclick=\"displayMarks()\">Display Marks</button>\n  ");
    document.write(" <br><br> ");

    document.write("<table border='1' id='table' hidden>");
    var xmlstr = '<marksheet>\n' +
        '    <Student>\n' +
        '    <Registration_number> 1001 </Registration_number>\n' +
        '    <Name> Kamal Perera </Name>\n' +
        '    <Assignment_1> 67 </Assignment_1>\n' +
        '    <Assignment_2> 67 </Assignment_2>\n' +
        '    <final> 65 </final>\n' +
        '    </Student>\n' +
        '    <Student>\n' +
        '    <Registration_number> 1002 </Registration_number>\n' +
        '    <Name> Amali Nisansala </Name>\n' +
        '    <Assignment_1> 87 </Assignment_1>\n' +
        '    <Assignment_2> 90 </Assignment_2>\n' +
        '    <final> 85 </final>\n' +
        '    </Student>\n' +
        '    <Student>\n' +
        '    <Registration_number> 1003 </Registration_number>\n' +
        '    <Name> Asiri Abeykoon </Name>\n' +
        '    <Assignment_1> 54 </Assignment_1>\n' +
        '    <Assignment_2> 35 </Assignment_2>\n' +
        '    <final> 45 </final>\n' +
        '    </Student>\n' +
        '    <Student>\n' +
        '    <Registration_number> 1004 </Registration_number>\n' +
        '    <Name> Bala Subramaniyam </Name>\n' +
        '    <Assignment_1> 76 </Assignment_1>\n' +
        '    <Assignment_2> 62 </Assignment_2>\n' +
        '    <final> 82 </final>\n' +
        '    </Student>\n' +
        '    <Student>\n' +
        '    <Registration_number> 1005 </Registration_number>\n' +
        '    <Name> Amal Rajakaruna </Name>\n' +
        '    <Assignment_1> 32 </Assignment_1>\n' +
        '    <Assignment_2> 47 </Assignment_2>\n' +
        '    <final> 50 </final>\n' +
        '    </Student>\n' +
        '    <Student>\n' +
        '    <Registration_number> 1006 </Registration_number>\n' +
        '    <Name> Rishad Mohomad </Name>\n' +
        '    <Assignment_1> 25 </Assignment_1>\n' +
        '    <Assignment_2> 32 </Assignment_2>\n' +
        '    <final> 35 </final>\n' +
        '    </Student>\n' +
        '    <Student>\n' +
        '    <Registration_number> 1007 </Registration_number>\n' +
        '    <Name> Sarani Karunanayaka </Name>\n' +
        '    <Assignment_1> 73 </Assignment_1>\n' +
        '    <Assignment_2> 67 </Assignment_2>\n' +
        '    <final> 72 </final>\n' +
        '    </Student>\n' +
        '    <Student>\n' +
        '    <Registration_number> 1008 </Registration_number>\n' +
        '    <Name> Kokila Silva </Name>\n' +
        '    <Assignment_1> 83 </Assignment_1>\n' +
        '    <Assignment_2> 94 </Assignment_2>\n' +
        '    <final> 81 </final>\n' +
        '    </Student>\n' +
        '    <Student>\n' +
        '    <Registration_number> 1009 </Registration_number>\n' +
        '    <Name> Nizan Ali </Name>\n' +
        '    <Assignment_1> 92 </Assignment_1>\n' +
        '    <Assignment_2> 91 </Assignment_2>\n' +
        '    <final> 90 </final>\n' +
        '    </Student>\n' +
        '    <Student>\n' +
        '    <Registration_number> 1010 </Registration_number>\n' +
        '    <Name> Poojani Athuorala </Name>\n' +
        '    <Assignment_1> 58 </Assignment_1>\n' +
        '    <Assignment_2> 49 </Assignment_2>\n' +
        '    <final> 54 </final>\n' +
        '    </Student>\n' +
        '    <Student>\n' +
        '    <Registration_number> 1011 </Registration_number>\n' +
        '    <Name> Niupulee Lakshani </Name>\n' +
        '    <Assignment_1> 84 </Assignment_1>\n' +
        '    <Assignment_2> 87 </Assignment_2>\n' +
        '    <final> 92 </final>\n' +
        '    </Student>\n' +
        '    <Student>\n' +
        '    <Registration_number> 1012 </Registration_number>\n' +
        '    <Name> Pathum Nishantha </Name>\n' +
        '    <Assignment_1> 36 </Assignment_1>\n' +
        '    <Assignment_2> 42 </Assignment_2>\n' +
        '    <final> 45 </final>\n' +
        '    </Student>\n' +
        '    <Student>\n' +
        '    <Registration_number> 1013 </Registration_number>\n' +
        '    <Name> Sahan Pathirana </Name>\n' +
        '    <Assignment_1> 68 </Assignment_1>\n' +
        '    <Assignment_2> 63 </Assignment_2>\n' +
        '    <final> 55 </final>\n' +
        '    </Student>\n' +
        '    <Student>\n' +
        '    <Registration_number> 1014 </Registration_number>\n' +
        '    <Name> Fathima Nufla </Name>\n' +
        '    <Assignment_1> 32 </Assignment_1>\n' +
        '    <Assignment_2> 35 </Assignment_2>\n' +
        '    <final> 42 </final>\n' +
        '    </Student>\n' +
        '    <Student>\n' +
        '    <Registration_number> 1015 </Registration_number>\n' +
        '    <Name> Nilakshi Fernanso </Name>\n' +
        '    <Assignment_1> 65 </Assignment_1>\n' +
        '    <Assignment_2> 78 </Assignment_2>\n' +
        '    <final> 75 </final>\n' +
        '    </Student>\n' +
        '</marksheet>';
    if (window.DOMParser) {
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(xmlstr, "text/xml");
    } else {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.loadXML(xmlstr);
    }

    let x = xmlDoc.getElementsByTagName("Student");
    let dataObj = null;
    document.write("<tr>" +
        " <th> Registration Number </th>" +
        " <th> Name </th>" +
        " <th> Final Marks </th>" +
        " </tr>");

    for (let i = 0; i < x.length; i++) {
        dataObj = {
            'reg_number': x[i].getElementsByTagName("Registration_number").item(0).textContent,
            'name': x[i].getElementsByTagName("Name").item(0).textContent,
            'assignment_1': x[i].getElementsByTagName("Assignment_1").item(0).textContent,
            'assignment_2': x[i].getElementsByTagName("Assignment_2").item(0).textContent,
            'final': x[i].getElementsByTagName("final").item(0).textContent
        };

        dataList.push(dataObj);
        document.write("<tr onclick='fetchData(" + i + ")'>");

        document.write("<td>" + dataObj.reg_number + "</td>");
        document.write("<td>" + dataObj.name + "</td>");
        document.write("<td>" + dataObj.final + "</td>");
        document.write("</tr>");
    }
    document.write("</table> <br>");
    document.write("<table hidden id='assignmentData'> <tr> " +
        "<th>Assignment 01</th>" +
        "<th>Assignment 02</th>" +
        "</tr></table>");

});

function fetchData(i) {
    let assignmentData = document.getElementById('assignmentData');
    assignmentData.hidden = false;
    let node =  "<tr id='assignmentMarksRow'>" +
        "<td>" + dataList[i].assignment_1 + "</td>" +
        "<td>" + dataList[i].assignment_2 + "</td>" +
        "</tr>";
    let currentRow = document.getElementById("assignmentMarksRow");
    if(currentRow){
        currentRow.remove();
    }
    assignmentData.insertAdjacentHTML('beforeend', node);
}

function displayMarks() {
    document.getElementById('table').hidden = false;
}

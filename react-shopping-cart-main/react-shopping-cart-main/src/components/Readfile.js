// import React from "react";
// import * as FileSaver from "file-saver";
// import * as XLSX from "xlsx";
// import { Button } from "antd";
// import { FileExcelOutlined } from "@ant-design/icons";

// //read and write excel file in react js?
// import * as XLSX from 'xlsx';
// //f = file
// var name = f.name;
// const reader = new FileReader();
// reader.onload = (evt) => { // evt = on_file_select event
//     /* Parse data */
//     const bstr = evt.target.result;
//     const wb = XLSX.read(bstr, {type:'binary'});
//     /* Get first worksheet */
//     const wsname = wb.SheetNames[0];
//     const ws = wb.Sheets[wsname];
//     /* Convert array of arrays */
//     const data = XLSX.utils.sheet_to_csv(ws, {header:1});
//     /* Update state */
//     console.log("Data>>>"+data);
// };
// reader.readAsBinaryString(f);



// export const Readfile = ({ apiData, fileName }) => {
//   const fileType =
//     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
//   const fileExtension = ".xlsx";

//   const exportToCSV = (apiData, fileName) => {
//     const ws = XLSX.utils.json_to_sheet(apiData);
//     const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
//     const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//     const data = new Blob([excelBuffer], { type: fileType });
//     FileSaver.saveAs(data, fileName + fileExtension);
//   };

//   return (
//     <Button
//       icon={<FileExcelOutlined />}
//       type="primary"
//       onClick={(e) => exportToCSV(apiData, fileName)}
//     >
//       Exporter
//     </Button>
//   );
// };

import React from 'react'

export const Readfile = () => {
  return (
    <div><h3>ReadFile</h3>readfile</div>
  )
}


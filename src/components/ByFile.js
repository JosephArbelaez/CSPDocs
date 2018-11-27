import React from 'react';

class ByFile extends React.Component{
    render(){
        return (
            <div id="file">
                <form>
                    <input type="file" name="file" accept=".xls, 
                    .xlsm,
                    .xlsx,
                    .txt,
                    vnd.ms-excel,
                    vnd.ms-excel.addin.macroEnabled.12,
                    vnd.ms-excel.sheet.binary.macroEnabled.12,
                    vnd.ms-excel.sheet.macroEnabled.12,
                    vnd.ms-excel.template.macroEnabled.12"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
  export default ByFile;
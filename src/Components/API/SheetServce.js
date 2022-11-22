import Papa from "papaparse";
export default class SheetServce {
    static filePrasing = () => new Promise((resolve)=> {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTdlWGH7h5lmw5kD9y9WWopljl78rDb9R6rZfkwJ1-CKqS8W1KLz04jYBOEc5EsJN9XkHDCYpq-cEYH/pub?output=csv",
        {
         download: true,
         header: true,
         complete: (results) => {
                  return results.data
                  
                 }
                  
        })    
       })

  
   
}  

import axios from "axios";

export default class StyleService {

    constructor() {
    }


    getStyleOnEdit = (editMode) => {
       return {
           marginRight: '2px',
           display: editMode ?
               'none': 'inline-block'
       }
   }
   getStyleOnEditConfirm = (editMode) => {
       return {
           marginRight: '2px',
           display: !editMode ?
               'none': 'inline-block'
       }
   }
}
import moment from "moment";

export default class Date{
 static getFormattedDate(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
  }
}
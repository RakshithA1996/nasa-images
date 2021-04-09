export default function dateConvert(dateString:string) {
    let dateArray:Array<string> = dateString.split("-");
    let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let day = dateArray[2];
    let monthString = parseInt(dateArray[1]);
    let month = monthArray[monthString-1];
    let year = dateArray[0];
    return (day + " " + month + ", " + year);
}
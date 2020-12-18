export default function shortendDate(date: string):string {
    const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let daySeperationFromTime = date.split('T')
    let dateSplit = daySeperationFromTime[0].split('-')
    switch(dateSplit[2].charAt(dateSplit[2].length - 1)) {
        case '1':
            return `${Number(dateSplit[2])}st of ${Months[Number(dateSplit[1]) - 1]}, ${dateSplit[0]}` 
        case '2':
            return `${Number(dateSplit[2])}nd of ${Months[Number(dateSplit[1]) - 1]}, ${dateSplit[0]}`
        case '3':
            return `${Number(dateSplit[2])}rd of ${Months[Number(dateSplit[1]) - 1]}, ${dateSplit[0]}`
        default:
            return `${Number(dateSplit[2])}th of ${Months[Number(dateSplit[1]) - 1]}, ${dateSplit[0]}`
      }
    
}



    


   


export default function shortendDate(date: string): string {
    const Months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let daySeperationFromTime: string[] = date.split('T')
    let dateSplit: string[] = daySeperationFromTime[0].split('-')
    switch (dateSplit[2]) {
        case '01':
            return `${Number(dateSplit[2])}st of ${Months[Number(dateSplit[1]) - 1]}, ${dateSplit[0]}`
        case '02':
            return `${Number(dateSplit[2])}nd of ${Months[Number(dateSplit[1]) - 1]}, ${dateSplit[0]}`
        case '03':
            return `${Number(dateSplit[2])}rd of ${Months[Number(dateSplit[1]) - 1]}, ${dateSplit[0]}`
        case '21':
            return `${Number(dateSplit[2])}st of ${Months[Number(dateSplit[1]) - 1]}, ${dateSplit[0]}`
        case '22':
            return `${Number(dateSplit[2])}nd of ${Months[Number(dateSplit[1]) - 1]}, ${dateSplit[0]}`
        case '23':
            return `${Number(dateSplit[2])}rd of ${Months[Number(dateSplit[1]) - 1]}, ${dateSplit[0]}`
        case '31':
            return `${Number(dateSplit[2])}st of ${Months[Number(dateSplit[1]) - 1]}, ${dateSplit[0]}`
        default:
            return `${Number(dateSplit[2])}th of ${Months[Number(dateSplit[1]) - 1]}, ${dateSplit[0]}`
    }

}









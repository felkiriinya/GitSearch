import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any):any {

    //getting the day the profile was created

    let firstDate: Date = new Date(value)

    let firstDateWithNoTime: any = new Date(firstDate.getFullYear(),firstDate.getMonth(),firstDate.getDate())

    //getting the current day date
    let currentDate: Date = new Date();

    let todayWithNoTime:any = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate())

    //difference in seconds
    let timeDifferenceSeconds = Math.round(Math.abs((todayWithNoTime - firstDateWithNoTime)/ 1000));
    

    //converting into seconds
    let days = Math.round(Math.abs((timeDifferenceSeconds) / 86400))

    return days;
}

}

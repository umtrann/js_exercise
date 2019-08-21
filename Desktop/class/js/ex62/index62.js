let monthNumber = 17;
let monthName = null;
let monthDay = null;
let message = null;
switch(monthNumber)
{
        case 1:
        message = 'January - 31 days';
        break;
        case 2:
        message = 'February - 28 days in a common year and 29 days in leap years';
        break;    
        case 3:
        message = 'March - 31 days';
        break;    
        case 4:
        message = 'April - 30 days';
        break;    
        case 5:
        message = 'May - 31 days';
        break;    
        case 6:
        message = 'June - 30 days';
        break;    
        case 7:
        message = 'July - 31 days';
        break;    
        case 8:
        message = 'August - 31 days';
        break;    
        case 9:
        message = 'September - 30 days';
        break;    
        case 10:
        message = 'October - 31 days';
        break;    
        case 11:
        message = 'November - 30 days';
        break;
        case 12:
        message = 'December - 31 days';
        break;
        default:
            console.log("not valid");
}
console.log(message);
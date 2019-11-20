var show = require('util');
class calend
{
    isLeapYear(year)
    {
        try
        {
            if(year==undefined || year==null)   throw 'Cannot be undefined or null'
            var year=Number(year);
            var number = number;
            if(typeof(year)!==number) throw 'Year should be a number'
            if(year<1000 && year>9999)  throw 'Year should be in range 1000-9999'
            if(year%4==0 && year%100!==0)
                return true
            else
                return false
        }
        catch(e)
        {
            return e;
        }
    }

    dayOfWeek(month,day,year)
    {
        try
        {
            if(month==undefined||day==undefined||year==undefined||month==null||day==null||year==null)  throw 'Fields cannot be undefined or null'
            var year = Number(year);
            if(isNaN(month)==true || isNaN(day)==true || isNaN(year)==true)    throw 'Should be number'
            if(year<1000 || year>9999)   throw 'Year should be in range'
            if(month<1||month>12)    throw 'Month should be in range'
            if(day<1||day>31)   throw 'Day should be in range'
            var y=year-(  parseInt( (14-month)/12 )  );
            var x=y+parseInt(y/4)-parseInt(y/100)+parseInt(y/400);
            var m=month+ (  12 * ( parseInt( (14-month)/12)  )  )-2;
            var d0=( day+x+ ( parseInt( (31*m)/12) ) ) % 7;
            //console.log(d0);
            return d0;
        }
        catch(e)
        {
            return e;
        }

    }

    //display calender
    displayCalender(month,year)
    {
        try
        {
            if(process.argv.length<3)   throw"Please pass values through command line"
            if(month == undefined || year==undefined ||month==null || year==null)  throw 'Cannot be undefined or null'
            if(isNaN(month) || isNaN(year))    throw 'Should be number'
            else
            {
                var calendar=new Array(7);
                for(var i=0;i<6;i++)
                {
                    calendar[i]=new Array(7);
                }
                var weekDays = ['S ','M ','T ','W ','Th','F ','S '];
                //months[0]=' ' ... so that january starts from 1
                var months=[' ','January','February','March','April','May','June','July','August','September','October','November','December'];
                var daysInMonth = [' ','31','28','31','30','31','30','31','30','31','30','30','31'];
                if(month==2 && this.isLeapYear(year))
                    daysInMonth[month]=29;

                // starting day
                var d = this.dayOfWeek(month, 1, year);
                console.log(d);
        
                console.log(" "+months[month]," "+year);
                //console.log(weekDays.join(" "));
                calendar[0]=weekDays;
                //console.log(calendar.join('\n'));
                // print the calendar
                for (let i = 0; i < d; i++)
                    calendar[1][i]="  ";
                var row=1;
                var col=d;
                for (var i = 1; i <= daysInMonth[month]; i++)
                {
                    /*for (let j = 1; j < d; j++)
                    console.log("   ");*/
                    if(col==7)
                    {                        
                        col=0;
                        row++;
                    }
                    //console.log(row);
                    //console.log(col);
                    /*if(i<10)
                    {
                        calendar[row][col++]=" ";
                    }*/

                    calendar[row][col++]=i;
                    //console.log("i"+i);

                    /*console.log(i);
                    /*if(i<10)
                        console.log(" ")*/
                    //date mod 7 is 0 then it shifts to next line
                    /*if (((i + d) % 7 == 0) || (i == daysInMonth[month]))
                    console.log();*/
                }
                console.log(calendar.join('\n'));
            }
        }
        catch(e)
        {
            return e
        } 
    }
}

module.exports={
    calend
}
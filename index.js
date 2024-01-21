// Your code here

function createEmployeeRecord (array){

    const [firstName,familyName,title,payPerHour] = array;
    

    const employeeObj = {
        firstName : firstName,
        familyName : familyName,
        title : title,
        payPerHour : payPerHour,
        timeInEvents :[],
        timeOutEvents :[]
    }

    return employeeObj;

}



function createEmployeeRecords (arrays){

    const employeeRecords = arrays.map( employeeArray => createEmployeeRecord(employeeArray));
return employeeRecords;
}



function createTimeInEvent (employeeRecordObj,dateStamp){

    const trimmedDateStamp = dateStamp.trim()
    const [date, hour] = trimmedDateStamp.split(" ");

    employeeRecordObj.timeInEvents.push({
        type: "TimeIn",
        hour : parseInt(hour),
        date: date
    });
    
    return employeeRecordObj;

}

function createTimeOutEvent (employeeRecordObj,dateStamp){

    const trimmedDateStamp = dateStamp.trim()
    const [date, hour] = trimmedDateStamp.split(" ");

    employeeRecordObj.timeOutEvents.push({
        type: "TimeOut",
        hour : parseInt(hour),
        date: date
    });

    return employeeRecordObj;
}

function hoursWorkedOnDate(employeeRecordObj,dateStamp){


    const timeInObj = createTimeInEvent(employeeRecordObj,dateStamp);
    const timeOutObj = createTimeOutEvent(employeeRecordObj,dateStamp);

    const hoursWorked = (timeOutObj.timeOutEvents[0].hour - timeInObj.timeInEvents[0].hour) / 100;

    return hoursWorked;
}

function wagesEarnedOnDate (employeeRecordObj,dateStamp){
    
    const employeePayPerHour = employeeRecordObj.payPerHour;
    const hourWorked = hoursWorkedOnDate(employeeRecordObj,dateStamp);
    const payOwed = hourWorked * employeePayPerHour;
    
    return payOwed;
}

function allWagesFor (employeeRecordObj){

    
    const timeInEventsObj = employeeRecordObj.timeInEvents;

    const totalWages = timeInEventsObj.reduce((acc,cur) =>{


       let total = wagesEarnedOnDate(employeeRecordObj,cur.date);

       acc +=total;

        console.log(`acc: ${acc} , cur.date: ${cur.date} total: ${total}`);
    }
    
    
    ,0)
    return totalWages;
}

function calculatePayroll(){
    
}

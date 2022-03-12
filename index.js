/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord (arr) {
    const newObj = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return newObj
}

function createEmployeeRecords (arrays) {
    let newArr = arrays.map(rec => createEmployeeRecord(rec));
    return newArr
}

function createTimeInEvent (dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function createTimeOutEvent (dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function hoursWorkedOnDate(dateStamp) {
    let soughtInStamp = this.timeInEvents.find(d => d.date === dateStamp)
    let soughtOutStamp = this.timeOutEvents.find(d => d.date === dateStamp)
    let hoursWorked = soughtOutStamp.hour - soughtInStamp.hour;
    return (hoursWorked / 100)
}

function wagesEarnedOnDate(dateStamp) {
    let wage = this.payPerHour * hoursWorkedOnDate.call(this, dateStamp)
    return wage
}

function findEmployeeByFirstName (srcArray, name) {
    let soughtName = srcArray.find(e => e.firstName === name);
    return soughtName
}

function calculatePayroll (empRec) {
    let payroll = empRec.reduce( (memo, d) => {
        return memo + allWagesFor.call(d)
    },0)
    return payroll
}
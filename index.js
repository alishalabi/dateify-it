class AwesomeDate {
  constructor(...args) {
    this.date = new Date(...args)
    this.year = this.date.getFullYear()
    this.month = this.date.getMonth()
    this.day = this.date.getDate()
    this.hours = this.date.getHours()
    this.mins = this.date.getMinutes()
    this.secs = this.date.getSeconds()
  }


}

const test = new AwesomeDate()
console.log(test)
console.log(test.year)
console.log(test.month)
console.log(test.day) 
console.log(test.hours)
console.log(test.mins)
console.log(test.secs)

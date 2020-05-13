class AwesomeDate {
  constructor(...args) {
    this.date = new Date(...args)
    this.shortMonthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    this.longMonthArray = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    this.year = this.date.getFullYear()
    this.yearShort = this.year % 100
    this.monthInt = this.date.getMonth()
    this.monthShort = this.shortMonthArray[this.monthInt]
    this.monthLong = this.longMonthArray[this.monthInt]
    this.day = this.date.getDate()
    this.hours = this.date.getHours()
    this.mins = this.date.getMinutes()
    this.secs = this.date.getSeconds()

  }


  format(string) {
    let ret = ""
    let section = ""
    for (var i = 0; i < string.length; i++) {
      console.log(string.length)
      console.log(i)
      let letter = string.charAt(i)
      if (letter === "Y") {
        section = this.year
        ret = ret += section
      }
      else if (letter === "y") {
        section = this.yearShort
        ret = ret += this.yearShort
      }
      else if (letter === "M"){
        section = this.monthLong
        ret = ret += section
      }
      else if (letter === "m") {
        section = this.monthShort
        ret = ret += section
      }
      // if (letter === "D") {
      //   const section = this.year
      //   ret = ret += section
      // }
      else if (letter === "d") {
        section = this.date
        ret = ret += section
      }
      else if (letter === "H") {
        if (this.hours < 10) {
          section = "0" + this.hours
        } else {
          section = this.year
        }
        ret = ret += section
      }
      else if (letter === "h") {
        section = this.hours
        ret = ret += section
      }
      else if (letter === "I") {
        if (this.mins < 10) {
          section = "0" + this.mins
        } else {
          section = this.mins
        }
        ret = ret += section
      }
      else if (letter === "i") {
        section = this.mins
        ret = ret += section
      }
      else if (letter === "S") {
        if (this.secs < 10) {
          section = "0" + this.secs
          } else {
            section = this.secs
          }
          ret = ret += section
      }
      else if (letter === "s") {
        section = this.secs
        ret = ret += section
      }
      else {
        ret = ret += letter
      }

    }
    return ret
  }


  // format(string) {
  //   let ret = ""
  //   let section = ""
  //   for (var i = 0; i < string.length; i++) {
  //     // console.log(string.charAt(i))
  //     let letter = string.charAt(i)
  //     switch (letter) {
  //       case "Y":
  //         section = this.year
  //         ret = ret += section
  //         console.log(string.length)
  //         console.log(ret)
  //       case "y":
  //         section = this.yearShort
  //         ret = ret += this.yearShort
  //       case "M":
  //         section = this.monthLong
  //         ret = ret += section
  //       case "m":
  //         section = this.monthShort
  //         ret = ret += section
  //       case "D":
  //         const section = this.year
  //         ret = ret += section
  //       case "d":
  //         section = this.date
  //         ret = ret += section
  //       case "H":
  //         if (this.hours < 10) {
  //           section = "0" + this.hours
  //         } else {
  //           section = this.year
  //         }
  //         ret = ret += section
  //       case "h":
  //         section = this.hours
  //         ret = ret += section
  //       case "I":
  //         if (this.mins < 10) {
  //           section = "0" + this.mins
  //         } else {
  //           section = this.mins
  //         }
  //         ret = ret += section
  //       case "i":
  //         section = this.mins
  //         ret = ret += section
  //       case "S":
  //       if (this.secs < 10) {
  //         section = "0" + this.secs
  //         } else {
  //           section = this.secs
  //         }
  //         ret = ret += section
  //       case "s":
  //         section = this.seconds
  //         ret = ret += section
  //
  //       default:
  //         ret = ret += letter
  //     }
  //   }
  //   return ret
  // }


}

const test = new AwesomeDate()
// console.log(test)
// console.log(test.year)
// console.log(test.month)
// console.log(test.day)
// console.log(test.hours)
// console.log(test.mins)
// console.log(test.secs)
// console.log(test.monthShort)
// console.log(test.monthLong)
// console.log(test.yearShort)
console.log(test.format("Y/y/M/m/d/H/h/I/i/S/s"))

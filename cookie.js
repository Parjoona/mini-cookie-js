class Cookie {
  // Add new object to cookie
  add(name, add) {
    let prod = this.get()
    if (prod.indexOf(add) < 0) {
      prod = prod.concat([add])
      this.set(name, prod.toString())
    }
  }
  // returns array of all id's
  get() {
    let split = document.cookie.split(`=`)
    let eachobj = split[split.length - 1]
    let id = eachobj.split(`,`)
    return id
  }
  // Removes cookie with value parameter
  remove(name, rem) {
    let prod = this.get()
    if (prod.indexOf(rem) >= 0) {
      prod.splice(prod.indexOf(rem), 1)
      this.set(name, prod.toString())
    }
  }
  // creates new cookie with name and value input
  set(name, value) {
    let date = new Date()
    let expires = "expires" + date.toUTCString(date.setTime(Infinity))
    document.cookie = `${name}=${value};${expires};`
  }
  // deletes the cookie with 'cookie name' input
  delete(del) {
    document.cookie = `${del}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`
  }
}

let c = new Cookie()

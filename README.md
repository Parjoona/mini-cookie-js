mini-cookie-js - A simple cookie handler class

Usage: 
  Prefered: Insert or require throught html file
  Alternative: Insert in to already existing JS file.
   
  Installation:
    Create a variable for new cookie
      Example: let cookie = new Cookie()
      
add() - Adds a new cookie, takes (name, product)
  name - name of cookie
  product - product or information
  
get() - Gets existing cookie in browser, takes no variables
  
set() - Sets a value on a cookie, takes (name, value)
  name - name of cookie
  value - value, the information you want to implement
  
remove() - Removes a value of a cookie, takes (name, product)
  name - name of cookie
  product - id of the product you want to remove
  
delete() - Deletes an entire cookie, takes (name)
  name - name of cookie

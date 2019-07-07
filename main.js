let  displayHB = function (array) {
  let source = $("#first-template").html()
  let template = Handlebars.compile(source)
  newHTML = template({data : array})
  $("#dataList").append(newHTML)
}



// get data

let getData = function () {
  // let output
      $.ajax({
      method:"GET",
      url: `https://jsonplaceholder.typicode.com/users`,
      success: function(data) {
        displayHB(data)
        console.log(data)
      },
      error: function (xhr, text, error) {
        console.log(text)
      }
    })
  }

var xhr = $.get("https://jsonplaceholder.typicode.com/users");
xhr.done(function(data) { console.log("success got data", data); });

console.log(getData())

let logosContainerWidth = $("#logos").width()

let roundedNum = Math.round(logosContainerWidth / 40)

let personFontSymbol =  `<i class="fa fa-male" data-color="1"></i>`

let personFontRow = personFontSymbol.repeat(roundedNum)

console.log(personFontRow)


console.log("== document:", document)
console.log("== document.body:", document.body)

var body = document.body
console.log("== body.childNodes:", body.childNodes)
console.log("== body.childNodes[1]:", body.childNodes[1])
console.log("== body.firstChild:", body.firstChild)
console.log("== body.firstElementChild:", body.firstElementChild)

var header = body.firstElementChild
console.log("== header.parentNode:", header.parentNode)

var photoCardContainer = document.getElementById('photo-card-container')
console.log("== photoCardContainer:", photoCardContainer)

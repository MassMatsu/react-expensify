const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve({
        name: 'masa',
        age: 35
      })

  }, 3000)

})

console.log('before')

promise.then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})

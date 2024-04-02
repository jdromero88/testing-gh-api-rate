import algoliasearch from 'algoliasearch'

const client = algoliasearch('7UNKAH6RMH', '1d50fb6c888d054827e3661af3d7e3cf')

const index = client.initIndex('india_states')
// const index = client.initIndex('india_states_backup')

fetch('https://indian-states-v2.netlify.app/algolia.json')
  .then((response) => response.json())
  // .then( data => console.log(data))
  .then((data) =>
    index.saveObjects(data, { autoGenerateObjectIDIfNotExist: true})
  )
  // .then(function (response) {
  //   return response.json()
  // })
  // .then(function (products) {
  //   return index.saveObjects(products, {
  //     autoGenerateObjectIDIfNotExist: true,
  //   })
  // })

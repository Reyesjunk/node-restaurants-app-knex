const { DEV } = require('./config');
const knex = require('knex')(DEV);
// the console before each run
process.stdout.write('\033c');

// knex('restaurants')
//   .returning(['id', 'name', 'cuisine', 'borough', 'address_building_number', 'address_street', 'address_zipcode'])
//   .where({"nyc_restaurant_id": "50018834"} )
//   .update({name: "CRAZY STACY"})
//   .then(results => console.log(JSON.stringify(results, null, 4)));

// knex('restaurants')
//     .where('nyc_restaurant_id', null)
//     .del();
//DELETE 
// knex.select('id', 'date', 'grade', 'score', 'restaurant_id')
//   .from('grades')
//   .where('id', 22)
//   .then(results => console.log(JSON.stringify(results, null, 4)));

knex.schema.createTable('users', function (table) {
  table.increments();
  table.string('name');
  table.timestamps();
})
  // .then(results => console.log(result));


// knex.schema.dropTable('inspectors')
// .then(results => console.log(res));



// knex.select('id', 'name', 'borough', 'cuisine')
//     .from('restaurants')
//     .then(results => console.log(results));

// knex.select('id', 'name', 'borough', 'cuisine')
//     .from('restaurants')
//     .where({ borough: 'Manhattan' })
//     .debug(true)
//     .then(results => console.log(JSON.stringify(results, null, 4)))
//     .catch( err => console.log( err ) );

// knex.select('id', 'name', 'cuisine', 'borough')
//     .select(knex.raw("CONCAT(address_building_number, ' ', address_street, ' ', address_zipcode ) as address"))
//     .from('restaurants')
//     .limit(2)
//     .debug(true)
//     .then(results => console.log(JSON.stringify(results, null, 4)));

// SELECT restaurants.id, name cuisine, borough,
// grades.id, grade, date as "inspectionDate", score
// FROM restaurants
// INNER JOIN grades ON grades.restaurant_id = restaurants.id
// WHERE restaurants.id = 1
// ORDER BY date DESC LIMIT 1;

// knex.select('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id', 'grade', 'date as inspectionDate', 'score')
//     .select(knex.raw("CONCAT(address_building_number, ' ', address_street, ' ', address_zipcode ) as address"))
//     .from('restaurants')
//     .where('restaurants.id', 1)
//     .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')    
//     .orderBy('date', 'desc')
//     .limit(2)
//     .then(results => console.log(JSON.stringify(results, null, 4)));


// Destroy the connection pool
knex.destroy().then(() => { console.log('closed') })

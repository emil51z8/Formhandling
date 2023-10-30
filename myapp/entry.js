const { Book, sequelize }= require('./book.js');

// Even tho our model is an ES6 compatible class 
// we should not use new to create an instance
// instead we should call the build method
async function main(){
    
	// The following line will sync our models
	// To the database creating them or altering the db
	// To match the new model
    await sequelize.sync({ alter: true });

    const newBook = Book.build({ title: "Rainbow Fish", authorName:"Marcus Pfister" });
    console.log(newBook instanceof Book); // true
    console.log(newBook.title); // "Jane"
	
  	// Our newly build instance haven't been saved
	// to the db yet, we need to call .save() 
    await newBook.save();

const delete_result = await Book.destroy({
    // to restrict we only delete one
  // We use a where clause with the id
  where: {
      id:'fd59fcfb-2877-48f1-88b6-a9e00eabec4f',
  }
});


await Book.update(
    // This object represent the fields
     // We are trying to update
   { authorName: "Marcus Pfister New name" }, 
   {
         // This where clause specify 
         // Which element we are updating
       where: {
           id: 'a933ae8d-7091-4e6e-a0e3-cc8b6e04e5dd',
       }
   }
);

const books = await Book.findAll({
    // The following ensure we get plain data
    // Instead of an array of instances
    raw: true,
});
console.log(books);

}

main();
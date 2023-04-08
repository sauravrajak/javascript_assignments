let books = [
    {
        title: "The Hunger Games",
        author: "suzanne collins",
        year: 2008
    },
    {
        title: "To Kill a Mockingbird",
        author: "harper lee",
        year: 1960
    },
    {
        title: "The Girl with the Dragon Tattoo",
        author: "stieg larsson",
        year: 2005
    },
    {
        title: "The Help",
        author: "kathryn stockett",
        year: 2009
    },
    {
        title: "Do Epic Shit",
        author: "Ankur Warikoo",
        year: 2021
    }
];

let filteredBooks = books.filter(book => book.year >= 2010)
    .map(book => ({
        title: book.title,
        author: book.author.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
        year: book.year
    }));

console.log(filteredBooks);

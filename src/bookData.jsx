const books = [
    {
        "number": 1,
        "image":"../img/book1.jpg",
        "title":"All my life",
        "author":"Ashbella",
        "upload": "Bella", 
        'price': "$10"
        
    }, 

    {
        "number": 2,
        "image":"../img/book2.jpg",
        "title":"All my life",
        "author":"Ashbella",
        "upload": "Ash", 
        'price': "$10"
        
    },

    {
        "number": 3,
        "image":"../img/book4.jpg",
        "title":"All my life",
        "author":"Ashbella",
        "upload": "Ella", 
        'price': "$10"
    },

    {
        "number": 4,
        "image":"../img/cover1.jpg",
        "title":"All my life",
        "author":"Ashbella",
        "upload": "Alla", 
        'price': "$10"
    },
]

export function getBooks(){
    return books
}

export function getBook(number){
    return books.find((book) => book.number === number)
}
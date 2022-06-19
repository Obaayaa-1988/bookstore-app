const books = [
    {
        "number": 1,
        "username":"Bella",
        "bookImg":"../img/book1.jpg",
        "title":"All my life",
        "author":"Ashbella",
        "upload": "Bella", 
        'price': "$10",
        "description":"how love happens overnight"
        
    }, 

    {
        "number": 2,
        "username": "Ash",
        "bookImg":"../img/book2.jpg",
        "title":"All my life",
        "author":"Ashbella",
        'price': "$10",
        "description":"how love happens overnight"
        
    },

    {
        "number": 3,
        "username":"Ella",
        "bookImg":"../img/book4.jpg",
        "title":"All my life",
        "author":"Ashbella", 
        'price': "$10",
        "description":"how love happens overnight"
    },

    {
        "number": 4,
        "username":"Alla",
        "bookImg":"../img/cover1.jpg",
        "title":"All my life",
        "author":"Ashbella",
        'price': "$10",
        "description":"how love happens overnight"
    },
]

export function getBooks(){
    return books
}

export function getBook(username){
    return books.find((book) => book.username === username)
}
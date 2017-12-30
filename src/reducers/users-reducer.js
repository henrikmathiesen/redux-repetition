const usersReducer = () => {
    return [
        {
            id: 1,
            first: "Adam",
            last: "Robertsson",
            age: 71,
            description: "Adam is a React developer and a funny guy.",
            thumbnail: "http://www.fillmurray.com/200/300"
        },
        {
            id: 2,
            first: "Zorry",
            last: "Xobi",
            age: 27,
            description: "Zorry is awesome with a sword.",
            thumbnail: "http://www.fillmurray.com/g/200/300"
        },
        {
            id: 3,
            first: "Ceasar",
            last: "Fishling",
            age: 24,
            description: "Ceasar likes icecream.",
            thumbnail: "http://www.stevensegallery.com/200/300"
        }
    ];
};

export default usersReducer;

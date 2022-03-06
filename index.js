
const express = require("express");

const app = express();

app.get("/''",function(req,res)
{
    // console.log("Hello");
    res.send("Hello");
})
app.get("/books", function(req,res)
{
    
    res.send(
    [
        {
            Book : "Harry Potter and the Goblet of Fire",
            Author : "Joanne K. Rowling",
            Type : "Fiction",
            Published_in : 2000,
            Curious_fact : "J.K. Rowling changed her mind about the title – twice. Until 12 days before it was published, the already publicized working title was “Harry Potter and the Doomspell Tournament”" 
        },
        {
            Book : "Pippi Longstocking",
            Author : "Astrid Lindgren",
            Type : "Fiction",
            Published_in : 1945,
            Curious_fact : "The main character in Stieg Larsson’s 3-book series of Millennium novels is based on what he believed to be an adult version of Pippi Longstocking. The series has sold 80 million copies – just as many as the Pippi Longstocking books.”" 
        },
        {
            Book : "Managing Oneself",
            Author : "Peter Drucker",
            Type : "Non-fiction",
            Published_in : 1999,
            Curious_fact : "Drucker invented what would become the foundation of how we have been managing people for the past 50 years. It’s called “management by objectives” and is based on setting concrete goals, to move forward in small increments. This has gotten him the name “the founder of modern management.”" 
        },
        {
            Book : "The War of Art",
            Author : "Steven Pressfield",
            Type : "Non-fiction",
            Published_in : 2002,
            Curious_fact : "Steven Pressfield is one of very few authors, who’s had successful books in both fiction and non-fiction. His very first book, The Legend of Bagger Vance, was turned into a Hollywood movie starring Matt Damon, Will Smith and Charlize Theron in 2000.1"
        }
    ]);
})
app.listen(5500, () =>
{
    console.log("Listening 5500 port");
})
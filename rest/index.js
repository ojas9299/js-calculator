const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const methodoverride = require("method-override")
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.urlencoded({extended : true}));
app.use(methodoverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {   
        id : uuidv4(),
        username : "ojas bhalerao",
        content : "i love coding 🚀..", 
    },

    {
        id : uuidv4(),
        username : "ajay bhalerao",
        content : "i love driving 🎉..", 
    },

    {        
        id : uuidv4(),
        username : "rohini bhalerao",
        content : "i love cooking 🥲..", 
    }

];

app.get("/posts",(req, res)=>{
    res.render("index.ejs", {posts})
})

app.get("/posts/new", (req, res)=>{
    res.render("new.ejs")
})

app.post("/posts", (req, res)=>{
    let {username , content} = req.body;
    let id = uuidv4();
    posts.push({id,username , content})
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id );
    console.log(id);
    console.log(post)
    res.render("show.ejs", {post});
})

app.patch("/posts/:id", (req, res)=>{
    let {id} = req.params;
    let newcontent = req.body.content
    let post = posts.find((p) => id === p.id );
    post.content = newcontent;
    console.log(post);
   res.redirect("/posts");
})

app.delete("/posts/:id",(req, res)=>{
    let {id} = req.params;
     posts = posts.filter((p) => id !== p.id );
    res.redirect("/posts")
})

app.get("/posts/:id/edit",(req, res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id );
    console.log(post)
    res.render("edit.ejs", {post});

})

app.listen(port,()=>{
    console.log(`listening on port : ${port} 😎😎`)
});

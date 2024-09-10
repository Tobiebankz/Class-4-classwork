// dynamic web pages: are those pages that can display different content and provide user interaction, often by using server-side scripting  languages like node js.

// url parameters: are used to pass data to web pages through url. example: https://example.com/products/3uh3ufe, https://example.com/products/page?name=John

// Templating: this allows you to create HTML templates that can be dynamically populated with data. This helps in seperating the presentation layer from the logic layer

// Template engine: handlebars, ejs and mustache


const express = require("express");
const app = express();
const exphbs = require("express-handlebars")


// Setup template engine (handlebars template engine)
app.engine("hbs", exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    runtimeOptions:{
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// set up view engine
app.set("view engine", "hbs")

app.get("/", (req, res)=>{
    res.render("index", {home: true})
})

app.get("/about", (req, res)=>{
    res.render("about-us", {about: true})
})

app.get("/contact", (req, res)=>{
    res.render("contact", {contact: true})
})

app.get("/news", (req, res)=>{
    res.render("news", {news: true})
})

app.get("/services", (req, res)=>{
    res.render("service-details", {services: true})
})

app.get("/shop", (req, res)=>{
    res.render("shop", {shop: true})
})

app.get("/shop/:product", (req, res)=>{
    res.render("shop-details")
})

app.get("/news/:details", (req, res)=>{
    res.render("single-news")
})


app.listen(8080, ()=>{
    console.log("Server listening on port 8080")
})
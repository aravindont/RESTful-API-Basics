const express=require('express');
require('dotenv').config();
const app=express();
const database=require('./config/database-connect');
const bodyParser=require('body-parser');
const ejs=require('ejs');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static("public"));
database().then(console.log("connected to DB"))
.catch(err => console.log(err))

const Article=require('./models/database');

// app.get("/articles",async function(req,res) {
//     const data=await Article.find();
//     res.status(200).json(data);
// });

// app.post("/articles",async function(req,res){
//     const newArticle=new Article({
//         title:req.body.title,
//         content:req.body.content
//     })
//     newArticle.save(function(err){
//         if(err){
//             res.send(err);
//         }
//         else{
//             res.send("added successfully");
//         }
//     });
// });
// app.delete("/articles",async function(req,res){
//     Article.deleteMany(function(err){
//         if(err){
//             res.send(err)
//         }else{
//             res.send("successfully deleted the all articles")
//         }
//     });
// });

// To get all articles
app.route("/articles")
.get(async function(req,res){
    const data= await Article.find();
    res.status(200).json(data);
})
.post(async function(req,res){
    const newArticle=new Article({
        title:req.body.title,
        content:req.body.content
    })
    newArticle.save(function (err) {
        if(err){
            res.send(err);
        }else{
            res.send("Added successfully");
        }
    })
})

.delete(async function(req,res){
    Article.deleteMany(function(err){
        if(err){
            res.send(err);
        }else{
            res.send("deleted successfully");
        }
    })
})

// To get specific article 

app.route("/articles/:articleTitle")
.get(async function(req,res){
    const data=await Article.findOne({title:req.params.articleTitle})
    res.status(200).json(data)
})
.put(function(req,res){
    Article.updateOne(
        {title:req.params.articleTitle},
        {title:req.body.title,content:req.body.content},
        function(err){
            if(err){
                res.send(err);
            }else{
                res.send("updated successfully");
            }
        }
    )
})

.patch(function(req,res){
    Article.updateOne(
        {title:req.params.articleTitle},
        {$set:req.body},
        function(err){
            if(!err){
                res.send("successfully updated");
            }else{
                res.send(err);
            }
        }
    )
})
.delete(function(req,res){
    Article.findOneAndDelete({title:req.params.articleTitle},function(err){
        if(err){
            res.send(err)
        }else{
            res.send("successfully deleted")
        }
    })
})
module.exports=app
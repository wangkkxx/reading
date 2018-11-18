const express=require("express")
const pool=require("./pool")
const qs=require("querystring")
const cors=require("cors")
var app=express()
app.use(express.static(__dirname+"/public"))
app.listen(9000)
app.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true
}))
//获取首页卡片信息
app.get("/cardlist",(req,res)=>{
    var sql="SELECT * FROM `reading_card`"
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//获取评论
app.get("/commentlist",(req,res)=>{
    var cid=req.query.cid
    var sql="SELECT * FROM `reading_comment` WHERE cid=? ORDER BY time DESC"
    pool.query(sql,[cid],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//获取分类卡片
app.get("/classify",(req,res)=>{
    var sql="SELECT * FROM `reading_classify`"
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//获取分类信息
app.get("/classifyinfo",(req,res)=>{
    var fid=req.query.fid
    var sql="SELECT * FROM `reading_classify` WHERE fid=?"
    pool.query(sql,[fid],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//获取书的分类：精选/7日在读榜/新上架
app.get("/bookfamily",(req,res)=>{
    var sql="SELECT * FROM `reading_bfamily`"
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//获取分类下对应的图书
app.get("/book",(req,res)=>{
    var fid=req.query.fid
        //nid=req.query.nid
    var sql="SELECT * FROM `reading_book` WHERE fid=?"
    pool.query(sql,[fid],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
//获取书桌下分类的书
app.get("/bfbook",(req,res)=>{
    var nid=req.query.nid
    var sql="SELECT * FROM `reading_book` WHERE nid=?"
    pool.query(sql,[nid],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
const http=require("http");

const server=http.createServer((req,res)=>{

if(req.url==="/"){

res.end("Selamat Datang");

}

else if(req.url==="/profil"){

res.end("Profil Kampus");

}

else if(req.url==="/kontak"){

res.end("Hubungi Kami");

}

else{

res.end("404");

}

});

server.listen(3000);

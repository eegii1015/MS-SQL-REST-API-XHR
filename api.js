const dboperations = require('./dboperations');
var Db=require('./dboperations');
//var Order=require('./order');
var ob={};
var express=require('express');
var bodyParser=require('body-parser');
var cors= require('cors');
const { request } = require('express');
const { response } = require('express');
var app=express();
var router=express.Router();

var exp=require('express');
var prt=4000;
var app1=exp();
app1.use(exp.static(__dirname));
var srvr= app1.listen(prt,function(){
    var prt1=srvr.address().prt;
    console.log('Listening at http://localhost:' + prt1 + ' exporting the directory ' + __dirname);
});




app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

router.use((request,response,next)=>{
    next();
});

router.route("/orders").get((request,response)=>{
    dboperations.getOrders().then(result=>{
       // console.log(result);
        response.json(result[0]);

    });

});
router.route("/orders/:id").get((request,response)=>{

    dboperations.getOrdersById(request.params.id).then(result=>{
       // console.log(result);
        response.json(result[0]);

    });

});
router.route("/orders/insert").post((request,response)=>{
    let order = request.body;
    dboperations.addorder(order).then(result=>{
       // console.log(result);
        response.status(201).json(result);

    });

});
router.route("/orderdet/insert").post((request,response)=>{
    let order = request.body;
    dboperations.addorderdet(order).then(result=>{
       // console.log(result);
        response.status(201).json(result);

    });

});
router.route("/orders/del/update/:id").put((request,response)=>{
    let order = request.body;
    
    dboperations.updateorderdelivery(request.params.id,order).then(result=>{
       // console.log(result);
        response.status(201).json(result);

    });

});
router.route("/orders/kit/update/:id").put((request,response)=>{
    let order = request.body;
    
    dboperations.updateorderkit(request.params.id,order).then(result=>{
       // console.log(result);
        response.status(201).json(result);

    });

});
router.route("/orders/delete/:id").delete((request,response)=>{
    dboperations.deleterow(request.params.id).then(result=>{
        
        response.status(201).json(result);

    });

});
router.route("/pizza").get((request,response)=>{
    dboperations.getpizza().then(result=>{
        
        response.json(result[0]);

    });

});
router.route("/sides").get((request,response)=>{
    dboperations.getsides().then(result=>{
        
        response.json(result[0]);

    });

});
router.route("/drinks").get((request,response)=>{
    dboperations.getdrinks().then(result=>{
        
        response.json(result[0]);

    });

});
router.route("/product/:id").get((request,response)=>{ 
    dboperations.getProById(request.params.id).then(result=>{
    
        response.json(result[0][0]);

    });

});
router.route("/cos/:id").get((request,response)=>{ 
    dboperations.getcos(request.params.id).then(result=>{
        response.json(result[0]);
    });

});
router.route("/orderbycos/:id").get((request,response)=>{ 
    dboperations.getordersbycos(request.params.id).then(result=>{
        response.json(result[0][0]);
    });
});
var port=process.env.port || 8090;
app.listen(port);
console.log("Order API is running at "+port);


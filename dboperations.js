var config=require('./dbconfig.js');
var sql= require('mssql');
async function getOrders(){
    try {
        let pool = await sql.connect(config);
        let products= await pool.request().query('select * from Orders');
        return products.recordsets;

    } catch (error) {
        console.log(error);
    }
 }
 async function getOrdersById(orderId){
    try {
        let pool = await sql.connect(config);
        let products= await pool.request().input('inp',sql.VarChar,orderId).query('select * from Orders where id = @inp');
        return products.recordsets;

    } catch (error) {
        console.log(error);
    }
 }
 async function getProById(orderId){
    try {
        let pool = await sql.connect(config);
        let str=orderId.substring(0,1);
        let products;
        switch(str){
            case 'p':products= await pool.request().input('inp',sql.VarChar,orderId).query('select * from pizza where foodID = @inp');break;
            case 'l':products= await pool.request().input('inp',sql.VarChar,orderId).query('select * from drinks where foodID = @inp');break;
            case 'n':products= await pool.request().input('inp',sql.VarChar,orderId).query('select * from nonpizza where foodID = @inp');break;
        }

        return products.recordsets;

    } catch (error) {
        console.log(error);
    }
 }
 async function getcos(orderId){
    try {
        let pool = await sql.connect(config);
        let products;
       products= await pool.request().input('inp',sql.VarChar,orderId).query('select costumerId from costumer where phonenumber = @inp');
        

        return products.recordsets;

    } catch (error) {
        console.log(error);
    }
 }
 async function getpizza(){
    try {
        let pool = await sql.connect(config);
        let products= await pool.request().query('select * from pizza');
        return products.recordsets;

    } catch (error) {
        console.log(error);
    }
 }
 async function getsides(){
    try {
        let pool = await sql.connect(config);
        let products= await pool.request().query('select * from Nonpizza');
        return products.recordsets;

    } catch (error) {
        console.log(error);
    }
 }
 async function getdrinks(){
    try {
        let pool = await sql.connect(config);
        let products= await pool.request().query('select * from drinks');
        return products.recordsets;

    } catch (error) {
        console.log(error);
    }
 }
 async function addorder(order){
    try {
        let pool = await sql.connect(config);
        let insert= await  pool.request();
        insert.input( "cos",sql.VarChar,order.costumerId);
        insert.input( "add",sql.VarChar,order.address);
        insert.input( "del",sql.VarChar,order.DeliveryManId);
        insert.query("insert into Orders(costumerId,address,DeliveryManId) values(@cos,@add,@del)",(error)=>{console.error(error);});
        return insert.recordset;
    } catch (error) {
        console.log(error);
    }
 }
 async function updateorderdelivery(id,order){
    try {
        let pool = await sql.connect(config);
        let insert= await  pool.request();
        insert.input( "id",sql.Int,id);
        insert.input( "deldate",sql.DateTime,order.DeliveredDate);
        insert.input( "paym",sql.VarChar,order.paymentMethod);
        insert.input("ps",sql.VarChar,order.paidStatus);
        insert.query("update Orders set DeliveredDate=@deldate, paymentMethod=@paym,paidStatus=@ps where id=@id",(error)=>{console.error(error);});
        return insert.recordset;
    } catch (error) {
        console.log(error);
    }
 }
 async function updateorderkit(id,order){
    try {
        let pool = await sql.connect(config);
        let insert= await  pool.request();
        insert.input( "id",sql.Int,id);
        insert.input( "dis",sql.DateTime,order.dis);
        insert.query("update Orders set DispatchDate=@dis where id=@id",(error)=>{console.error(error);});
        return insert.recordset;
    } catch (error) {
        console.log(error);
    }
 }
 async function deleterow(id){
    try {
        let pool = await sql.connect(config);
        let insert= await  pool.request();
        insert.input( "id",sql.Int,id);
        insert.query("delete from orders where id=@id",(error)=>{console.error(error);});
        return insert.recordset;
    } catch (error) {
        console.log(error);
    }
 }
 async function addorderdet(order){
    try {
        let pool = await sql.connect(config);
        let insert= await  pool.request();
        insert.input( "cos",sql.VarChar,order.id);
        insert.input('add',sql.VarChar,order.food);
        insert.input( "ww",sql.Int,order.quan);
        insert.input("made",sql.VarChar,order.made)
        insert.query("insert into OrderDetail(orderId,foodId,Quantity,MadeStatus) values(@cos,@add,@ww,@made)",(error)=>{console.error(error);});
        return insert.recordset;
    } catch (error) {
        console.log(error);
    }
 }
 async function getordersbycos(order){
    try {
        let pool = await sql.connect(config);
        let product= await  pool.request().input('id',sql.VarChar,order).query("select OrderId from orders where costumerId=@id Order by id desc");

        return product.recordsets;
    } catch (error) {
        console.log(error);
    }
 }
 module.exports= {
     addorderdet: addorderdet,
     getordersbycos: getordersbycos,
     getcos: getcos,
     getProById:getProById,
     updateorderkit:updateorderkit,
     deleterow:deleterow,
     getOrders: getOrders,
     getOrdersById: getOrdersById,
     addorder: addorder,
     updateorderdelivery: updateorderdelivery,
     getpizza:getpizza,
     getsides:getsides,
     getdrinks:getdrinks,
 };

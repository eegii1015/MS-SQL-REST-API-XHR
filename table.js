'use strict';
let loc=window.location.origin;
loc=loc.substring(0,loc.length-4)+"8090/";
//console.log(loc);
function z(elem, tag, att, txt) {
    let a = document.createElement(tag);;
    a.appendChild(document.createTextNode(txt));
    const nms = Object.keys(att);
    for (let i = 0; i < nms.length; i++) {
        a.setAttribute(nms[i], att[nms[i]]);
    }


    elem.appendChild(a);
    return a;
}
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
let upload = function(url,file){
    let xhr= new XMLHttpRequest();
    xhr.onloadend=function(){
        if(xhr.status==200){
            console.log('Success');
        }
        else{
            console.log('status'+xhr.status);
        }

    };
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(file);
}

var getJSON = function (url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function () {

        var status = xhr.status;

        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };

    xhr.send();
};
/*
getJSON('http://localhost:8090/api/orders/1', function (err, data) {

    if (err != null) {
        console.error(err);
    } else {

        var text = data;

        console.log(text);
    }
});*/
const pack = () => {
    document.getElementById('app').innerHTML = '';
    let table = z(document.getElementById('app'), 'div', {}, '');
    let b1 = z(table, 'div', {}, 'bagts1');
    let b2 = z(table, 'div', {}, 'bagts2');
};
const piz = () => {
    getJSON(loc+'api/pizza', function (err, data) {

        if (err != null) {
            console.error(err);
        } else {

            let pizzas = data;
            document.getElementById('app').innerHTML = '';
            let table = z(document.getElementById('app'), 'table', { border: 1 }, '');
            const names = Object.keys(data[0]);
            let tre = z(table, 'tr', {}, '');
            names.forEach(e => {
                z(tre, 'td', {}, e);
            });
            data.forEach(element => {
                let tr = z(table, 'tr', {}, '');
                names.forEach((e) => {

                    z(tr, 'td', {}, element[e]);
                });
                let bt = z(tr, 'td', {}, '');
                z(bt, 'button', { onclick: "zah('" + element[names[0]] + "')" }, 'Нэмэх');
            });

        }
    });
}
const sides = () => {
    getJSON(loc+'api/sides', function (err, data) {

        if (err != null) {
            console.error(err);
        } else {

            let pizzas = data;
            document.getElementById('app').innerHTML = '';
            let table = z(document.getElementById('app'), 'table', { border: 1 }, '');
            const names = Object.keys(data[0]);
            let tre = z(table, 'tr', {}, '');
            names.forEach(e => {
                z(tre, 'td', {}, e);
            });
            data.forEach(element => {
                let tr = z(table, 'tr', {}, '');
                names.forEach((e) => {

                    z(tr, 'td', {}, element[e]);
                });
                let bt = z(tr, 'td', {}, '');
                z(bt, 'button', { onclick: "zah('" + element[names[0]] + "')" }, 'Нэмэх');

            });

        }
    });
}
const drinks = () => {
    getJSON(loc+'api/drinks', function (err, data) {

        if (err != null) {
            console.error(err);
        } else {
            document.getElementById('app').innerHTML = '';
            let pizzas = data;

            let table = z(document.getElementById('app'), 'table', { border: 1 }, '');
            const names = Object.keys(data[0]);

            let tre = z(table, 'tr', {}, '');
            names.forEach(e => {
                z(tre, 'td', {}, e);
            });
            data.forEach(element => {
                let tr = z(table, 'tr', {}, '');
                names.forEach((e) => {

                    z(tr, 'td', {}, element[e]);
                });
                let bt = z(tr, 'td', {}, '');
                z(bt, 'button', { onclick: "zah('" + element[names[0]] + "')" }, 'Нэмэх');

            });

        }
    });
}
function zah(id) {

    id = loc+'api/product/' + id;

    getJSON(id, function (err, data) {

        if (err != null) {
            console.error(err);
        } else {
           // console.log(data);
            let tr = z(document.getElementById('orders'), 'tr', {  }, '');
            let titles = Object.keys(data).filter(e => {
                if (e.toLocaleLowerCase() == 'foodid' || e.toLocaleLowerCase() == 'price' || e.toLocaleLowerCase() == 'title') {
                    return true;
                }
                return false;
            }).sort(function (a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            });
            
            titles.forEach(
                e => {
                    z(tr, 'td', {}, data[e]);
                }
            );
        }
    });
}
function insert(){
    let tot=0;
    let list=[];
    let arr=document.querySelectorAll('#orders>tr:nth-child(n)>td:nth-child(2)');
    
    arr.forEach(e=>{
        let s=parseInt(e.innerHTML);
        tot+=s;
    });
    console.log(tot);
    arr=document.querySelectorAll('#orders>tr:nth-child(n)>td:nth-child(1)');
    arr.forEach(e=>{
        list.push(e.innerHTML);
    });
    const utas=window.prompt('Utasnii dugaaraa oruul Tanii niit dun ' +tot);
    const add=window.prompt('Hayag');
    /*
    arr=arr.map((e)=>{
        return e.innerHTML;
    });*/
    getJSON(loc+'api/cos/'+utas,function (err, data) {

        if (err != null) {
            console.error(err);
        } else {
            let cos=data[0].costumerId;
            let json=JSON.stringify(
                {
                    costumerId: cos,
                    address: add,
                    DeliveryManId: "d09"
                }
            );
            
            upload(loc+'api/orders/insert',json);
            console.log(list);
            let list1=list.filter(onlyUnique);
            getJSON(loc+'api/orderbycos/'+cos,function(err,data){
                if (err != null) {
                    console.error(err);
                } else {
                    
                    list1.forEach(e=>{
                        let c=0;
                        list.forEach(elem=>{
                            if(elem==e){
                                c++;
                            }
                        });
                        let json1=JSON.stringify(
                            {
                                id: data.OrderId,
                                food: e,
                                quan: c,
                                made: "No"
                            }
                        );
                        
                        upload(loc+'api/orderdet/insert',json1);
                    });
                }
            });
            
            
        }
    });
}
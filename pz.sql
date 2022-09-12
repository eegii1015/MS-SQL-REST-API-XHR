use pizza
--Table create 
create table Costumer(
id int identity(1,1),
CostumerId as 'C' + RIGHT('000' + CAST(ID AS VARCHAR(3)), 3) PERSISTED,
PhoneNumber char(8) ,
eMail varchar(50),
primary key(CostumerID));

CREATE TABLE DeliveryMan(
id int identity(1,1),
DeliveryManId as 'D' + RIGHT('00' + CAST(ID AS VARCHAR(2)), 2) PERSISTED,
Name varchar(30),
PhoneNumber char(8),
primary key(DeliveryManID));

Create Table pizza(
foodID char(3) primary key,
Title varchar(50),
size varchar(6),
DoughType varchar(11),
price numeric);

create table NonPizza(
foodID char(3) primary key,
Title varchar(50),
price numeric);

create table Drinks(
FoodId char(3) primary key,
size varchar(6),
price numeric)

select CURRENT_TIMESTAMP

/*Drop table Drinks
drop table DeliveryMan
drop table NonPizza
drop table pizza
drop table orders
drop table Costumer
drop table payment*/

create table Orders (
id int identity(1,1),
OrderId as 'O'+ RIGHT('000' + CAST(id AS VARCHAR(3)), 3) persisted,
costumerId varchar(4),
DispatchDate datetime,
DeliveredDate datetime,
address varchar(100),
DeliveryManId varchar(3),
primary key(orderId))

create table OrderDetail(
orderId varchar(4),
foodId char(3),
Quantity int,
MadeStatus varchar(7))

Create table Payment(
OrderId varchar(4),
PaymentMethod varchar(25),
totalPrice numeric,
PaidDate date )

--Add Constraint
ALTER TABLE Orders
ADD constraint constOrder1 foreign key (CostumerId) references Costumer(CostumerID) on delete no action on update cascade
ALTER TABLE orders
ADD constraint constOrder2 foreign key (DeliveryManId) references DeliveryMan(DeliveryManId) on delete set null on update cascade

ALTER TABLE Orders
drop constraint constOrder1
ALTER TABLE orders
drop constraint constOrder2 

alter table orderDetail
add constraint constdet1 foreign key (orderid) references orders(orderid) on delete cascade on update cascade
alter table orderDetail
drop constraint constdet1
alter table orderdetail
add constraint constdet2 foreign key (foodid) references pizza(foodid) on delete no action on update cascade
alter table orderdetail
add constraint constdet3 foreign key (foodid) references Nonpizza(foodid) on delete no action on update cascade
alter table orderdetail
add constraint constdet4 foreign key (foodid) references drinks(foodid) on delete no action on update cascade
/*
alter table orderdetail
drop constraint constdet1
alter table orderdetail
drop constraint constdet2
alter table orderdetail
drop constraint constdet3
alter table orderdetail
drop constraint constdet4
*/
alter table payment
add constraint constpay1 foreign key (orderid) references orders(orderid) on delete cascade on update cascade
alter table payment
drop constraint constpay1;

alter table orders
add paidDate datetime
alter table orders
add paymentMethod varchar(25)

alter table payment
drop constraint constpay1

alter table pizza
add constraint pizza1 check (foodid like 'p%')
alter table drinks
add constraint drinks1 check (foodid like 'l%')
alter table drinks
drop constraint drinks1
alter table nonpizza
add constraint nonpizza1 check (foodid like 'n%')

alter table pizza
add constraint pizza2 check (doughtype='pan' OR doughtype='Traditional' )

ALTER TABLE orders
ALTER COLUMN	DispatchDate datetime
ALTER TABLE orders
ALTER COLUMN	DeliveredDate datetime
ALTER TABLE orders
drop COLUMN	paiddate
alter table orders
add paidStatus varchar(3)
--Insert into

insert into Costumer(PhoneNumber,eMail)
values('88888888','dorj@gmail.com')
insert into Costumer(PhoneNumber,eMail)
values('89455612','bataa@gmail.com')
insert into Costumer(PhoneNumber,eMail)
values('96857432','Erdene@gmail.com')
insert into Costumer(PhoneNumber,eMail)
values('96345678','Orgil@gmail.com')

insert into Costumer(PhoneNumber,eMail)
values('89695847','nuuts@gmail.com')
insert into Costumer(PhoneNumber,eMail)
values('99565656','medku@gmail.com')
insert into Costumer(PhoneNumber,eMail)
values('90908080','Sarrr1@gmail.com')

insert into DeliveryMan( Name, PhoneNumber)
values('Negee','85296374')
insert into DeliveryMan( Name, PhoneNumber)
values('Hoyroo','86457833')
insert into DeliveryMan( Name, PhoneNumber)
values('Guravaa','87895623')
insert into DeliveryMan( Name, PhoneNumber)
values('Tavaa','95635241')
insert into DeliveryMan( Name, PhoneNumber)
values('Dorovoo','91456345')


insert into pizza
values('p01','XTREME','Medium','pan',28000);
insert into pizza
values('p02','Sausage stuffed crust','Large','pan',37000);
insert into pizza
values('p03','Meat lovers','Medium','Traditional',34000);
insert into pizza
values('p04','Super Supreme','Large','Traditional',34000);
insert into pizza
values('p05','Meat lovers','Medium','pan',28000);
insert into pizza
values('p06','Super Supreme','Medium','pan',28000);
insert into pizza
values('p07','Pepperoini','Small','pan',8000);
insert into pizza
values('p08','Hawaiin','Large','Traditional',32000);
insert into pizza
values('p09','Veggie lovers','Medium','pan',24000);
insert into pizza
values('p10','Cheese pizza','Small','pan',7000);

insert into Drinks
values('l01','500ml',2000,'Coca cola');
insert into Drinks
values('l02','1250ml',3600,'Coca cola');
insert into Drinks
values('l03','2250ml',4000,'Pepsi');
insert into Drinks
values('l04','500ml',1900,'Pepsi');
insert into Drinks
values('l05','1250ml',3000,'Fanta pineapple');
insert into Drinks
values('l06','1250ml',3000,'Fanta grape');
insert into Drinks
values('l07','500ml',1950,'Pepsi vannila');
insert into Drinks
values('l08','500ml',1800,'Fuze tea');
insert into Drinks
values('l09','1200ml',3200,'Lipton tea');
insert into Drinks
values('l10','1200ml',3100,'Fuze tea');

insert into NonPizza
values('n01','French fries',5000);
insert into NonPizza
values('n02','Rich fries',7000);
insert into NonPizza
values('n03','Sausage rolls',4500);
insert into NonPizza
values('n04','Chicken nuggets',7000);
insert into NonPizza
values('n05','Mini donuts',6000);

insert into orders
values('c001','2022-3-3 15:25:00','2022-3-3 16:00:00','Bayanzurh 2r horoo 12r bair 13 toot','d07','Internet bank','yes')
insert into orders
values('c001','2022-3-7 15:20:00','2022-3-7 16:05:00','Bayanzurh 2r horoo 12r bair 13 toot','d09','Internet bank','yes')
insert into orders
values('c002','2022-3-8 10:10:00','2022-3-8 10:40:00','Sukhbaatar duureg 1r horoo 31r bair 45 toot','d08','Cash','yes')
insert into orders
values('c003','2022-3-10 18:30:00','2022-3-10 18:40:00','Bayngol 4r horoo 13r bair 81 toot','d10','Internet bank','yes')
insert into orders
values('c002','2022-3-11 12:50:00','2022-3-11 13:30:00','Chingeltein 5r horoo 5r bair 5 toot','d07','Cash','yes')
--new
insert into orders
values('c006','2022-3-12 10:02:00','2022-3-12 12:15:00','Sukhbaatar duureg 7r horoo 8-r bair 63toot','d08','cash','yes')
insert into orders
values('c004', '2022-3-15 16:45:00','2022-3-15 18:23:00','Bayanzurkh duureg 28-r horoo 2-r bair 22toot','d07','internet bank','yes')
insert into orders
values('c005','2022-3-15 19:07:00','2022-3-15 20:00:00','Khan-uul duureg 26-r horoo 1-r bair 2toot','d08','cash','yes')
insert into orders
values('c001','2022-3-16 9:45:00','2022-3-16 11:24:00','Bayangol duureg 12-r horoo 15-bair 15toot','d10','internet bank','yes')
insert into orders
values('c004','2022-3-17 13:12:00','2022-3-17 15:10:00','Songinohairhan duureg 17-r horoo 19-r bair 45toot','d11','cash','yes')
insert into orders
values('c005','2022-3-18 11:40:00','2022-3-18 13:54:00','sukhbaatar duureg 11-r horoolol 11-r bair 11-toot','d09','Internet bank','yes')
insert into orders
values('c005','2022-3-30 11:40:00','2022-3-30 13:54:00','sukhbaatar duureg 11-r horoolol 11-r bair 11-toot','d09','Internet bank','yes')
insert into orderDetail
values('O002','P03',1,'Made');
insert into orderDetail
values('O002','L02',2,'Made');
insert into orderDetail
values('O002','N03',1,'Made');

insert into orderDetail
values('O003','P03',1,'Made');
insert into orderDetail
values('O003','P07',1,'Made');
insert into orderDetail
values('O003','L03',1,'Made');
insert into orderDetail
values('O003','L01',1,'Made');
insert into orderDetail
values('O003','N02',1,'Made');

insert into orderDetail
values('O004','P02',2,'Made');
insert into orderDetail
values('O004','P07',1,'Made');
insert into orderDetail
values('O004','l02',2,'Made');
insert into orderDetail
values('O004','N02',2,'Made');
insert into orderDetail
values('O004','N01',2,'Made');

insert into orderDetail
values('O005','l07',1,'Made');
insert into orderDetail
values('O005','N01',1,'Made');
insert into orderDetail
values('O005','N01',1,'Made');

insert into orderDetail
values('O006','p01',1,'Made');
insert into orderDetail
values('O006','p10',1,'Made');
insert into orderDetail
values('O006','N04',1,'Made');

insert into orderDetail
values('O007','P07',1,'Made');
insert into orderDetail
values('O007','L06',2,'Made');
insert into orderDetail
values('O007','N04',1,'Made');

insert into orderDetail
values('O008','P05',1,'Made');
insert into orderDetail
values('O008','L02',2,'Made');
insert into orderDetail
values('O008','N01',1,'Made');

insert into orderDetail
values('O009','P06',1,'Made');
insert into orderDetail
values('O009','L08',2,'Made');
insert into orderDetail
values('O009','N03',1,'Made');

insert into orderDetail
values('O001','P05',1,'Made');
insert into orderDetail
values('O001','L02',2,'Made');
insert into orderDetail
values('O001','N01',1,'Made');

insert into orderDetail
values('O010','P09',1,'Made');
insert into orderDetail
values('O010','L04',2,'Made');
insert into orderDetail
values('O010','N03',1,'Made');
insert into orderDetail
values('O010','N04',1,'Made');

insert into orderDetail
values('O011','P08',1,'Made');
insert into orderDetail
values('O011','L05',1,'Made');
insert into orderDetail
values('O011','N05',1,'Made');
insert into orderDetail
values('O011','N01',1,'Made');


select count(orderId) from OrderDetail

select GETDATE()
/*Select*/


select * from Orders;
select * from OrderDetail;
select * from pizza;
select * from Drinks;
select * from NonPizza;
select * from DeliveryMan;
select * from Costumer;
use Pizza
--View-----------------------------------------------------------------------------
Create VIEW View1 AS (
Select orders.orderId,a.tot as totalPrice, orders.paidStatus
from orders 
left join (Select orderid, sum(d.price * o.Quantity) as tot
from OrderDetail as o
left join ((select foodid,price from drinks)union(select foodid,price from NonPizza)union(select foodid,price from Pizza)) as d
on d.foodid=o.foodid 
group by o.orderId)as a
on a.orderid=orders.OrderId)
select * from view1;


create view view2 as(
select o.DeliveryManId,o.OrderId,c.PhoneNumber,o.address from view1 as v
left join orders as o 
on v.orderId=o.orderid
left join DeliveryMan as m
on m.deliverymanid=o.deliverymanid
left join Costumer as c
on o.costumerId=c.CostumerId)
select * from view2

create view view3 as(
select foodid, count(foodid) as Count  from OrderDetail
where foodid  in (select foodid from pizza union select foodid from NonPizza union select foodid from Drinks)
group by foodid)
select * from view3;
use pizza
--Group by-----------------------------------------------------------------------------
select OrderId,count(foodid)as count from OrderDetail
group by orderId
order by count desc

select CostumerId , count(OrderId) as count from orders
group by costumerId
order by count desc;
--SubQuery-----------------------------------------------------------------------------
Select foodid from pizza
where foodId not in (select foodid from OrderDetail);

Select Costumerid from Costumer
where CostumerId not in (select CostumerId from Orders);

Select Name from DeliveryMan
where DeliveryManId  not in (select DeliveryManId from Orders);
--Join-----------------------------------------------------------------------------
Select p.Title,sum(o.Quantity)*count(o.orderid) as c from OrderDetail as o,pizza as p
where o.foodId=p.foodID
group by p.Title

--3table-----------------------------------------------------------------------------
select d.CostumerId,sum(a.totalPrice) as m from orders as s
left join view1 as a
on a.orderId=s.OrderId
left join Costumer as d
on d.CostumerId=s.costumerId
group by d.CostumerId
order by m desc

(select foodid from pizza union select foodid from NonPizza union select foodid from Drinks)
/*
declare @var table(
id char(3));
insert into @var
select foodid from pizza;
insert into @var
select foodid from NonPizza;
insert into @var
select foodid from Drinks;
select * from @var;
select foodid into @var from NonPizza 
select foodid into @var from Drinks ;

set @var=(select foodid from pizza union select foodid from NonPizza union select foodid from Drinks)
select * from @var*/
select * from orders
where orderid not in (select distinct orderid from OrderDetail)


select * from OrderDetail

drop trigger checkcons1
/*-------------------------------------------------------------------------------------------------------------------------*/
Create Trigger checkcons1 ON  orderDetail
instead of INSERT 
as
	declare @var table(
	id char(3));
	declare @var2 char(3);
	set @var2 = (select i.foodid from inserted i);
	--insert into @var
	--select foodid from pizza;
	--select* from  @var;
	--declare @var char(3);
	insert into @var select foodid from pizza union select foodid from NonPizza union select foodid from Drinks;
	--select * from @var;
	if exists (select id from @var where id = @var2)
	begin 
	insert into OrderDetail select * from inserted;
	end
/*-------------------------------------------------------------------------------------------------------------------------*/




create procedure find_address (@number char(8))
as
Select s.address from Costumer as c
left join Orders as s
on s.costumerId=c.CostumerId
where c.PhoneNumber=@number

exec find_address '88888888'
	--where p.foodID = inserted.foodId);
	
	--print @var;

create function order_count(@c varchar(50))
returns integer
as
begin
declare @s integer;
select @s= count(d.OrderId) from orders as d
left join DeliveryMan as s
on s.DeliveryManId=d.DeliveryManId
where s.Name=@c and d.DispatchDate between EOMONTH(GETDATE(),-1) and GETDATE()
group by s.DeliveryManId
return @s
end
use pizza
select * from order_count('guravaa')
use pizza



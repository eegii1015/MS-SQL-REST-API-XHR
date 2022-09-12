class Orders {
    constructor(id,orderid,costumerid,DispatchDate,DeliveredDate,address,DeliveryManId,paymentMethod,paidStatus)
    {
        this.id=id;
        this.orderid=orderid;
        this.costumerid=costumerid;
        this.DeliveredDate=DeliveredDate;
        this.DispatchDate=DispatchDate;
        this.address=address;
        this.DeliveryManId=DeliveryManId;
        this.paymentMethod=paymentMethod;
        this.paidStatus=paidStatus;
    }
}
module.exports=Orders;
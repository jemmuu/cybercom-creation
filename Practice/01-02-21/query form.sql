Get a list of users who did not place any order yet. *

SELECT * from test.user u 
inner join test.order o
on u.id = o.userid
 where u.id not in (o.userid);


 Get a list of products which having max orders. *

 select p.title,oi.productId,count(oi.orderId)
from test.product p 
inner join test.order_item oi
on p.id= oi.productId
group by oi.productId;


Get a list of products having multiple categories. *

select pc.productId, count(pc.categoryId) count
from product_category pc 
inner join product p 
on pc.productId = p.id
group by pc.productId
having count(pc.categoryId)>1
;


Get a list of five products having higher price value. *


select *
from  test.product p 
order by price desc limit 5;


Get list of five users details who placed orders recently. *

select * 
from test.user u 
inner join test.order o 
on o.userId = u.id
order by o.createdAt desc limit 5;
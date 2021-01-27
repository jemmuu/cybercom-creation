1.select s.name,c.cust_name,s.city
  from customer c 
  inner join salesman s
  on c.city = s.city;


2.select o.ord_no,o.purch_amt,c.cust_name,c.city
  from sorders o , customer c
  where o.customer_id= c.customer_id
  AND o.purch_amt BETWEEN 500 AND 2000;


3.select c.cust_name,s.name,s.salesman_id
  from salesman s, customer c 
  where s.salesman_id=c.salesman_id;

			OR

   select c.cust_name,s.name,s.salesman_id
   from salesman s
   inner join customer c
   on s.salesman_id=c.salesman_id;


4. select c.cust_name,s.name,s.salesman_id,s.commission
   from salesman s
   inner join customer c
   on s.salesman_id=c.salesman_id
   and s.commission > 0.12 ;


5.select c.cust_name,s.name,s.salesman_id,s.commission,s.city As "salesman city",c.city
   from salesman s
   inner join customer c
   on s.salesman_id=c.salesman_id
   and s.city != c.city
   and s.commission > 0.12 ;

6. select o.ord_no,o.ord_date,o.purch_amt,c.cust_name,s.name AS "salesman name",s.commission
	from orders o 
	inner join customer c 
	on c.customer_id=o.customer_id
	inner join salesman s 
	on s.salesman_id = c.salesman_id;


7. select * from customer
   natural join salesman 
   natural join orders;

8.select c.cust_name,c.grade,s.name AS "salesman name "
  from customer c 
  left join  salesman s 
  on s.salesman_id = c.salesman_id
  order by c.cust_name;

9.select c.cust_name,c.grade,s.name AS "salesman name "
  from customer c 
  left outer join  salesman s 
  on s.salesman_id = c.salesman_id
  where c.grade <300
  order by c.cust_name;


10. select c.cust_name,c.city,o.ord_no,o.ord_date,o.purch_amt
    from orders o 
    right join customer c 
    on o.customer_id=c.customer_id
    order by o.ord_date;


11.select c.cust_name,c.city,o.ord_no,o.ord_date,o.purch_amt,s.name AS "salesman name",s.commission
   from orders o 
   right join customer c 
   on c.customer_id=o.customer_id
   right join  salesman s 
   on s.salesman_id = c.salesman_id;

12. select s.name AS "salesman name", c.cust_name
    from salesman s 
    left join customer c
    on s.salesman_id = c.salesman_id
    order by s.salesman_id;


13.select s.name AS "salesman name", c.cust_name,o.ord_no
   from salesman s 
   left join customer c
   on s.salesman_id = c.salesman_id
   left join orders o 
   on c.customer_id = o.customer_id;


14. select s.name AS "salesman name", c.cust_name,c.city,o.ord_no,o.purch_amt,c.grade
	from salesman s 
	left join customer c
	on s.salesman_id=c.salesman_id
	left join orders o 
	on c.customer_id=o.customer_id
	where o.purch_amt > 2000
	and c.grade is not null;
	
15. select c.cust_name,c.city,o.ord_no,o.ord_date,o.purch_amt
	from customer c 
	full join orders o 
	on c.customer_id = o.customer_id;


16.select c.cust_name,c.city,o.ord_no,o.ord_date,o.purch_amt
	from customer c 
	full join orders o 
	on c.customer_id = o.customer_id
	where c.grade is not null;

17. select *
	from salesman
	cross join customer;

18. select *
	from salesman
	cross join customer
	where salesman.city is not null;

19. select *
	from salesman s
	cross join customer c
	where s.city is not null
	and c.grade is not null;
		
20. select *
	from salesman s
	cross join customer c
	where salesman.city != customer.city
	and c.grade is not null
	and s.city is not null;

21. select * 
	from item_mast i 
	inner join company_mast c 
	on c.com_id = i.pro_com;

22. select i.pro_name,i.pro_price,c.com_name
	from item_mast i 
	inner join company_mast c 
	on c.com_id = i.pro_com;


23. select AVG(i.pro_price),c.com_name
	from item_mast i 
	inner join company_mast c 
	on c.com_id = i.pro_com
	group by c.com_name;

24. select AVG(i.pro_price),c.com_name
	from item_mast i 
	inner join company_mast c 
	on c.com_id = i.pro_com
	group by c.com_name
	having AVG(i.pro_price) >= 350;

25. select c.com_name,c.com_id,
	(   
		select pro_price 
		from item_mast i
		where c.com_id = i.pro_com 
		order by i.pro_com desc limit 1
	)
	from company_mast c;

			OR

	select c.com_name,c.com_id,i.pro_price 
	from company_mast c 
	inner join item_mast i 
	on c.com_id = i.pro_com
	and i.pro_com = 
	(
		select max(i.pro_price)
		from item_mast i 
		where c.com_id = i.pro_com
	)

26. select e.emp_fname,e.emp_lname,ed.dpt_name
	from emp_details e 
	left join emp_department ed 
	on e.emp_dept = ed.dpt_code;

27. select e.emp_fname,e.emp_lname,ed.dpt_name,ed.dpt_allotment
	from emp_details e 
	left join emp_department ed 
	on e.emp_dept = ed.dpt_code;

28. select e.emp_fname,e.emp_lname,ed.dpt_name,ed.dpt_allotment
	from emp_details e 
	left join emp_department ed 
	on e.emp_dept = ed.dpt_code
	where ed.dpt_allotment > 50000;


29. select ed.dpt_name
	from emp_department ed
	inner join emp_details e
	on  e.emp_dept = ed.dpt_code
	group by ed.dpt_name
	having count(*) > 2;
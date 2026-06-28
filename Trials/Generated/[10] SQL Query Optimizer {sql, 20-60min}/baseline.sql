-- baseline has a join mistake that can duplicate rows
select c.name, o.id as order_id, o.total
from customers c
join orders o on o.id = c.id
where o.created_at >= date '2026-01-01'
order by c.name;

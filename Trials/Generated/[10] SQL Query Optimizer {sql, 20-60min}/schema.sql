create table customers (
  id int primary key,
  name text
);

create table orders (
  id int primary key,
  customer_id int,
  total numeric,
  created_at date
);

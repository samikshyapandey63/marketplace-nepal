Database tables
Table	Main columns	Notes
users	id, name, email, password_hash, phone, role	Role is CUSTOMER, SELLER, or ADMIN. Never store plain passwords.
shops	id, owner_id → users, name, slug, description, logo_url, banner_url, instagram_url, city, status	Status is PENDING or APPROVED. You approve shops manually at first.
categories	id, parent_id (nullable), name, slug	One table for both levels: Clothes is the parent, and Top, Bottom, Skirt, Casual, Partywear are its children.
products	id, shop_id → shops, category_id → categories, name, description, price, is_active	
product_images	id, product_id → products, url, position	Position decides which photo shows first.
product_variants	id, product_id → products, size, color, stock	Stock lives here, not on the product, because a size M and a size L have separate stock.
cart_items	id, user_id → users, variant_id → product_variants, quantity	
orders	id, customer_id → users, shop_id → shops, status, total, payment_method, delivery_name, delivery_phone, delivery_city, delivery_address, created_at	One order per shop (see the checkout rule below).
order_items	id, order_id → orders, variant_id, product_name, price, quantity	Copy the name and price at purchase time, so later price changes don’t alter old orders.

Relationships in plain words: one user owns one or more shops, a shop has many products, a product has many images and variants, and an order belongs to one customer and one shop and has many items.

Key rules to build in
Split checkout: if a cart has items from 3 shops, create 3 orders, one per shop. Each seller then sees only their own.
Order statuses: PLACED → CONFIRMED → SHIPPED → DELIVERED, plus CANCELLED.
Stock safety: reduce stock inside a database transaction when an order is placed, and reject it if stock is too low. This avoids two people buying the last item.
Ownership checks: a seller can edit only their own shop’s products and orders. A customer can see only their own orders.
API endpoints

Auth

POST /api/auth/register
POST /api/auth/login (returns a JWT token)
GET /api/me

Browsing (public, no login)

GET /api/categories (with children)
GET /api/shops?category=clothes
GET /api/shops/{slug} (shop page details)
GET /api/shops/{slug}/products?type=skirt
GET /api/products/{id}
GET /api/products/search?q=black skirt&minPrice=&maxPrice=&size=

Cart (customer)

GET /api/cart
POST /api/cart/items
PUT /api/cart/items/{id}
DELETE /api/cart/items/{id}

Orders (customer)

POST /api/orders/checkout (turns the cart into orders)
GET /api/orders (my orders)
GET /api/orders/{id}

Seller

POST /api/seller/shop (create my shop)
PUT /api/seller/shop
POST /api/seller/products
PUT /api/seller/products/{id}
DELETE /api/seller/products/{id}
GET /api/seller/orders
PUT /api/seller/orders/{id}/status

Admin

PUT /api/admin/shops/{id}/approve
Spring Boot pieces you’ll use
Spring Web for the endpoints
Spring Data JPA for talking to PostgreSQL
Spring Security + JWT for login and roles
Validation to reject bad input
BCrypt for password hashing

A tidy folder layout is one package per feature (auth, shop, product, cart, order), each with its controller, service, repository, and entity.
# starter-kit-strapi-next

๐ค TypeScript ๐ Next.js ๐ฉ Strapi.js ๐ก Graphql ๐ MySQL ๐ PhpMyAdmin ๐ Docker ๐งช Jest

___

## Require

| Port | Application | URL                         |
|------|-------------|-----------------------------|
| 3000 | Next        | http://localhost:3000       |
| 1337 | Strapi      | http://localhost:1337/admin |
| 8081 | PHPMyAdmin  | http://localhost:8081       |
| 3306 | MySQL       |                             |

## Install

Make sure all environment variables are set.

```shell
cd starter-kit-strapi-next
cp starter-next/environments/.env.development starter-next/environments/.env
cp starter-strapi/environments/.env.development starter-strapi/environments/.env
docker-compose up --build
```

# Starter kit Strapi + Next

🔤 TypeScript 🚀 Next.js 🎩 Strapi.js 💡 Graphql 🏗 MySQL 📋 PhpMyAdmin 🐋 Docker 🧪 Jest

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
git clone git@github.com:Magle-corp/starter-kit-strapi-next.git
cd starter-kit-strapi-next
git submodule init && git submodule update
cp starter-next/environments/.env.development starter-next/environments/.env
cp starter-strapi/environments/.env.development starter-strapi/environments/.env
docker-compose up
```

**Read the individual starter kit parts readme file for more information :** 

- [Starter Strapi](https://github.com/Magle-corp/starter-strapi)
- [Starter Next](https://github.com/Magle-corp/starter-next)

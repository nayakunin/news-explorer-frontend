# news-explror-frontend
---
This project is a graduation work in Yandex.Praktikum web-development course. This repo is the frontend part of the project. Backend can be found here: <https://github.com/nayakunin/news-explorer-api>
## Demo
<https://nayakunin-news-explorer.ru>
## Instalation
- To download this project on your machine run
`git clone https://github.com/nayakunin/news-explorer-frontend.git`
- Then run `npm install` to install all dependencies.
## Availible Scripts
- `npm run start`
Runs project localy using webpack-dev-server in production mode without hot-reload on `http://localhost:8080`.
- `npm run dev`
Runs project localy using webpack-dev-server in development mode with hot-reload on `http://localhost:8080`.
- `npm run build`
Removes `dist` directory content and builds the project into there.
- `npm run deploy-gh`
Deploys project from `dist` folder to gh-pages.
- `npm run deploy-server`
Deploys project from `dist` folder directly to VM.

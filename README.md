# create-svelte

### Basic Mini App Installation

```
npm i @twa-dev/sdk
```

Private User to Bot Interaction

1. Generate `ca.pem`, `cert.pem`, `key.pem` for local testing because https is required.
2. Open BotFather
* Create a Bot - `/newbot`
* Deploy your web app on any Cloud provider
* Copy your web app url
* Create a Link to URL button - `/setmenubutton`
* Enjoy

User to User Interaction 
(Users will be able to run the web app directly while on chat)

At this point, you can:

* Check `/myapps`
    * If you currently have no webapps. Use `/newapp` command to create a first web app.
* Alright, if a new web app is created. Which bot will be offering the web app?
    * name one
* Creating a new web app for your bot? Please enter a title for the web app.
* (Optional) Please upload a photo using your phone, 640x360 pixels
* (Optional) Now upload a demo GIF or send /empty to skip this step. (640x360 OR 320x180 OR 960x540)
* Great! now please send your web app URL hosted on Cloudflare, Vercel or any other to server as a unique identified for your web app.
* Last but not least, send the new description for the bot for a block titled "What can this bot do?"

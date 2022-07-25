# McWebserver

## About the mod
This mod runs a simple HTTP server alongside the minecraft server in seperate threads.

### Warning
If used wrongly this mod can be a security risk for your server and all devices connected to the network that your server is in.

Do **only** put files into your webservers root directory that you want to be accessible to the internet. Those files are **public** to the entire world.

### Setup

1. Head over to [modrinth](https://modrinth.com/mod/mcwebserver) and curseforge (once approved) for now available in this repository's [releases](https://github.com/J-onasJones/McWebserver/releases/latest) and download it into your mods folder.
2. Restart Your Minecraft Server and let the mod create the config file. The webserver will be offline by default.
3. In the config file, enable the webserver and adjust all settings if needed.
4. Add the following files to your Webservers root directory:
    - index.html (the homepage)
    - 404.html (the website that shows up if a request is sent for a file that doesn't exist on the server)
    - not_supported.html (this is page is very unlikely to show up at any time and isn't necessary)
5. Restart your Minecraft server and You're good to go!
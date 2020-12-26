# discordbot-base
Base project setup for a DiscordJs project

# how to use
This script is sample setup / boilerplate for discord bot projects
Main branch contains the monolithic version, check the other branches for another versions

Discord token and prefix are defined in environment variable; for development, make sure to create .env using the .envtemplate file and fill in the environment variables there to connect to your bot, as well as the prefix for the bot command.

You can put any if/else statements on the client.on("message") for conditional responses.

The variable nextcommand contains to the 2nd word after the prefix.

The variable args is an array of all of the words in the message starting from 3rd word onwards.

# commands
npm run start => starts the bot (for production)
npm run dev => starts the bot with nodemon (for devs)

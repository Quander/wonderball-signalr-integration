# BounceX Hubs Integration

Demo on how to integrate with SignalR for the table node.

### Environment

Node version: `16`

NVM on windows does not like the `nvm use` command in conjunction with `.nvmrc` files. To get around this use the following command from a powershell shell:

`nvm use (Get-Content .nvmrc)`

This package uses `yarn`, install it with `npm i -g yarn`

### Getting Started

1. Request an API key from [gav@quander.io](mailto:gav@quander.io)
2. Copy the `.env.dist` file to `.env`
3. Set the table ID and the `HUB_KEY`
4. The `HUB_HOST` shouldn't be changed unless you want to change to a different environment to production.
5. Run `yarn install`
6. Run `yarn dev`
7. Make a post in postman to post a player and they'll appear in the log
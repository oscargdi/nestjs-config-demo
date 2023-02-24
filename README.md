# NestJS configuration demo

This demo project shows how to load app configuration for multiple environments. It loads the variables from two sources, each of which has its own characteristics.

## Configuration

These are the values that could change with the environment (urls, paths, flags) but they need to be documented and versioned (in YAML files). Since they live in the code, they do not need to be strictly validated.

To be loaded, it is required to set `NODE_ENV` environment variable. For convenience, the devcontainer automatically sets `NODE_ENV` as `local`. Other allowed values are `dev`, `stg` or `prod`.

## Environment

These are the values that are injected to the application from external sources (runtime), and due to its nature cannot be versioned (tipically secrets). Since they do not live in the code, they require validation (we use [Joi](https://www.npmjs.com/package/joi)).

This demo project requires `API_AUTH_KEY` to start. Use a `.env` file to load values as such in your local environent. Notice that `.env` file will not be versioned in git since it is excluded in `.gitignore` file.

# Development environment

1. Install [Docker](https://docs.docker.com/get-docker/) and [VSCode](https://code.visualstudio.com/download)
2. Go to VSCode extensions and install [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Download this repository and open it with VSCode.
4. VSCode will prompt if you want to open the project in a devcontainer.
5. The project should get configured automatically, wait until you see the process finished. Open logs to see progress, you should see a message like below when the setup is done.

```zsh
Done in 495.62s.
pre-commit installed at .git/hooks/pre-commit
Done. Press any key to close the terminal.
```

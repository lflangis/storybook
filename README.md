## Install

Run `install.sh` while being at the root of your project

### Warning
Sometimes, when initalizing storybook, it will create a directly at 'src/stories'. Deletes them.

## Updating storybook submodule branch

Since we want to directly make change in the submodule directory, we'll use it as a standard git folder.

1. Go to storybook folder
2. Switch to main `git checkout main`
3. Pull new date `git pull`

## Commit Structure

Please follow the Conventional Commits standards as well as squashing your commits into a single commit.

Specification can be found at [www.conventionalcommits.org](https://www.conventionalcommits.org/en).

How to squash commits: [https://www.git-tower.com/learn/git/faq/git-squash](https://www.git-tower.com/learn/git/faq/git-squash)

Commits should be in the following form: **type[optional scope]: description**. Examples include:

|       Type        | Title                    | Emoji | Release | Description                                                                                                 |
| :---------------: | ------------------------ | :---: | :-----: | ----------------------------------------------------------------------------------------------------------- |
|      `feat`       | Features                 |  ✨   | `minor` | A new feature                                                                                               |
|    `refactor`     | Code Refactoring         |  📦   | `patch` | A code change that neither fixes a bug nor adds a feature                                                   |
|      `perf`       | Performance Improvements |  🚀   | `patch` | A code change that improves performance                                                                     |
|       `fix`       | Bug Fixes                |  🐛   | `patch` | A bug Fix                                                                                                   |
|      `chore`      | Chores                   |   ♻   | `patch` | Other changes that don't modify src or test files                                                           |
|     `revert`      | Reverts                  |   🗑   | `patch` | Reverts a previous commit                                                                                   |
|      `docs`       | Documentation            |  📚   | `patch` | Documentation only changes                                                                                  |
|      `style`      | Styles                   |  💎   |    -    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
|      `test`       | Tests                    |  🚨   |    -    | Adding missing tests or correcting existing tests                                                           |
|      `build`      | Builds                   |   🛠   | `patch` | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
|       `ci`        | Continuous Integrations  |   ⚙   |    -    | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| `BREAKING CHANGE` | Breaking Change          |  💔   | `major` | When a breaking change occurs on the commit. Rather use the "!" operator in conjunction with a type.        |

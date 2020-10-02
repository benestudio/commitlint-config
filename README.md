# commitlint-config-benestudio

Shareable commitlint config enforcing Bene Studio commits

## Getting started

```sh
npm install --save-dev @benestudioco/commitlint-config @commitlint/cli husky
echo "module.exports = {extends: ['@benestudioco/commitlint-config']};" > .commitlintrc.js
```

Create a husky configuration file with the following commit-msg line:

```json
{
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

### Project specific configuration

Add an issue prefix according to your JIRA project in the following settings to your config file:

```json
parserPreset: {
    parserOpts: {
        issuePrefixes: ['PROJ-']
    }
}
```

#### License

Copylefted (c) 2019 [Bene Studio][1] Licensed under the [MIT license][2].

[1]: https://benestudio.co
[2]: ./LICENSE

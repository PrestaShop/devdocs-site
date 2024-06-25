# PrestaShop Technical Documentation Site

[![Build](https://github.com/PrestaShop/devdocs-site/actions/workflows/build.yml/badge.svg)](https://github.com/PrestaShop/devdocs-site/actions/workflows/build.yml)
[![Submodules Sync](https://github.com/PrestaShop/devdocs-site/actions/workflows/sync.yml/badge.svg)](https://github.com/PrestaShop/devdocs-site/actions/workflows/sync.yml)

This repository contains the sources to build [DevDocs - PrestaShop's technical documentation site](https://devdocs.prestashop-project.org/).

## Contributing

- To contribute content, [read this guide](https://devdocs.prestashop-project.org/1.7/contribute/documentation/how/). Documentation content is tracked in the [Docs Repository](https://github.com/PrestaShop/docs).
- To update the theme: Submit your Pull Request to the [Theme repository](https://github.com/PrestaShop/ps-docs-theme/).

## Rendering the site locally

### Using `docker compose`

1. Clone the repository somewhere on your system:
    ```
    git clone --recurse-submodules https://github.com/PrestaShop/devdocs-site.git
    ```

2. Switch to the `devdocs-site` directory:
    ```
    cd devdocs-site
    ```

3. Create `.env` file by `.env.example`:
    ```
    cp .env.example .env
    ```

4. Launch Hugo service:
    ```
    docker compose up hugo
    ```

5. You can access to the devdocs site at `http://localhost:1313`

### Natively

#### Setting up your environment

1. Install [Hugo](https://gohugo.io/). You will need v0.121+ (extended binary)
   
   * **Mac and Linux**: Run `./bin/installHugo.sh`
   * **Windows**: Grab the [release binary](https://github.com/gohugoio/hugo/releases)
   
   Or read the [Official install guide](https://gohugo.io/getting-started/installing).

2. Clone the repository somewhere on your system
   ```
   git clone --recurse-submodules https://github.com/PrestaShop/devdocs-site.git
   ```

#### Launching the site

1. Switch to the `src` directory:
    ```
    cd /path/to/devdocs-site/src
    ```

2. Launch Hugo:
    ```
    hugo server
    ```
    > You may need to change the path to the `hugo` binary depending on where it is on your system

3. Done! You can open up the site on your browser.

    > It's usually available at http://localhost:1313
    
    Any change you perform on your data will be updated almost instantly.


## Customizing the style

We use Sass for styling, bundled by Hugo itself.

The source files for the main css & js are in [the `assets` directory of the theme's repository](https://github.com/PrestaShop/ps-docs-theme/tree/main/assets).

## Deployment

- The **sources** of this site are hosted on devdocs-site, the [Sources repository](https://github.com/PrestaShop/devdocs-site/).
- The **Hugo theme** of this site is hosted on ps-docs-theme, the [Theme repository](https://github.com/PrestaShop/ps-docs-theme/).
- The **content** of this site is hosted on docs, the [Content Repository](https://github.com/PrestaShop/docs).

Every time a contribution is merged inside one of the docs branches, a first GitHub workflow will notify the Sources repository.

Upon being notified, a second GitHub workflow is triggered in devdocs-site, which updates its submodules and commits them.

This commit triggers a third GitHub workflow that will deploy the latest version to [devdocs.prestashop-project.org](https://devdocs.prestashop-project.org/) .

_Theme updates do not trigger a deployment, consequently following a theme update, the docs website must be deployed manually._

## License

Content from this documentation is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

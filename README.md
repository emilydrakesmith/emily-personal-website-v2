<a id='top'></a>

# Introduction

This is the remote repository for the version 2.0 of my personal website, to be hosted at martysmith.tech.  If you are reading this text, the website coded here is under development and has not yet been deployed.  You can view the current iteration of my website at [martysmith.tech](https://martysmith.tech/) now and see the [code in its repository](https://github.com/mhsmith321/Marty-Smith-Personal-Homepage) here.

[Back to Top](#top)

# Version Notes

#### v 2.0.0.0  |  14 June 2021  |  commit 7bea184aa7df2f80c4160b560a8e7de3441b6c7e  |  Initial Commit
* Initial commit of this project.

#### v 2.0.0.1  |  16 June 2021  |  commit 346bc468077ff93680699343d3730202c6a32196
* Moved contents of `README.md` which came with the starter code to `GATSBY-README.md`.  Re-initialized this as my own `README.md` file.
  * Added *Version Notes* with information on the current and previous commit(s).
  * Added *Future Plans* with goals for both MVP and long-term icebox.
  * Added *Special Thanks* with information about and links to resources I used developing this project.
  * Added *Planning & Development Notes* to start outlining my thoughts on how to construct this site.
  * The file will be built out more later.
* Added `https://github.com/mhsmith321/Marty-personal-website-2.0.git` as a remote origin repository for this project.
* Created new directories for `/src/components`, `/src/images`, and `/src/styles`.
* Created `.js` files for index pages in all directories.  Created a `/src/pages/projects` directory for project sub-directories.

#### v 2.0.0.2  |  16 June 2021  |  commit 972d9aa0eec3cfa833167328114c74609298dc10
* Installed the following dependencies all via `npm install`/`npm i`:
  * `gatsby-image` ^3.7.1
  * `gatsby-plugin-sharp` ^3.7.1
  * `gatsby-source-filesystem` ^3.7.0
  * `gatsby-transformer-remark` ^4.4.1
  * `gatsby-transformer-sharp` ^3.7.1
* Added a site metadata JSON to the `gatsby-config.js` exports with site & developer information.
* Added plugins which do not require options configuration to `gatsby-config.js` exports:
  * `gatsby-plugin-sharp`
  * `gatsby-transformer-sharp`
  * `gatsby-transformer-remark`
* Added an *Introduction* section to this `README.md` file.  It basically exists to tell employers this code is for a site still being built and not yet deployed.  It'll be heavily reworked once this site is deployed and live.
* Added a `404.js` file, currently empty.

#### v 2.0.0.3  |  16 June 2021  |  commit 0f34314537a1bf943a247f84e2ec2cc5a961f723
* Stub up starter code and placeholder content for all pages (index pages and 404).
* Create a `global.css` file.
* Create a `<Layout>` component to code HTML containers that surround the `<main>` (header, footer, nav, etc) and incorporate into index pages.
* Installed *React Helmet* to customize metadata in `<head>` of rendered webpage.
  * Added title: `<title>Marty Smith | Software Engineer</title>`
  * Specified a canonical link: `<link rel="canonical" href="https://martysmith.tech" />`
* Created a *Tech Framework* section of `README.md`.

#### v 2.0.0.4  |  16 June 2021  |  commit d60a05d8e70d2ac203fcb823e2693eace93017c6
* Importing site metadata from `gatsby-config.js` into `Layout.js` to render data from metadata instead of hardcoding.
* Created a dedicated component for the `<header>` and imported/incorporated into the `<Layout>` component.
* Minor reformat of the *Tech Framework* section of `README.md`.
* Added basic styling in `global.css` for the `<Layout>` component (which wraps all other JSX).
* Added styling to `<header>` for item spacing.
* Changed commit for v 2.0.1.1 to correct commit number.

#### v 2.0.1.0  |  17 June 2021  |  commit 037dc08a26c720dfd261e5ec067c5b770899509f
* Installed `gatsby-plugin-manifest` to build a web manifest plugin in `gatsby-config.js`.
* Added a favicon.
* Arranged all page content to fit in a CSS Grid layout.
* Created empty CSS modules for all stubbed-up pages.

#### v 2.0.1.1  |  18 June 2021  |  commit c90b3e8f24a80989e60ad63a7b58f6a1ed32cfe7
* Added significant content and styling for the main index page.
* Added color styling to the header.
* Fixed some issues with the web manifest's construction and linking.

#### v 2.0.2.0  |  18 June 2021  |  commit f962e2240c0db1b18619cc7ff9c02439dd704361
* Completed all parts of `<Layout>` component (content and styling).
* Completed main index page (content and styling).
* Added underline/overline effect to `<header>` nav links on hover.
* Fixed issue that CSS Grid layout for main index page was global.
* Added left and right navbars.

#### v 2.0.2.1  |  18 June 2021  |  commit c3b5cefa16ad599e2f3621425677161729519380
* Created CSS grid template for `/about` page.
* Completed content for *About Marty* section on `/about` page.
* Stubbed-up grid areas for *Skills* content on `/about` page.

#### v 2.0.3.0  |  18 June 2021  |  commit 8862fb66804ad58751d784ffd855e10f7cd7dc87
* Changed CSS `display` setting from grid to flexbox.  Grid was a mistake.
* Finished building out all content.  Made some styling adjustments for spacing.
* Self-portrait has an orange overlay that disappears on mouse hover.

#### v 2.0.3.1  |  18 June 2021  |  commit 6d4020ac8d1a031b49a18f1758ee6637c70a0d12
* Added some items to *Key Skills* section of the `/about` page.
* Added notes to better section off code in `home.module.css` file.
* Built and configured contact links and form in the `/contact` directory with styling.

#### v 2.0.4.0  |  19 June 2021  |  commit 5b2e9c7bc2bb0c77bee148ec20b51a13ed89831f
* Bug fix to `/contact` page that the entire contact link `<div>` elements are not clickable links.

#### v 2.0.4.1  |  19 June 2021  |  commit 57c03a513d91874e4c71c62f961a5ab2f57edb49
* Bug fix on HTML ported from old website on contact form.
  * Changed `for` attributes on `<input>` items to React-friendly `htmlFor`.
  * Changed `maxlength` attribute on message `<textarea>` to React-friendly `maxLength`.
* Added `rel='noreferrer'` to `target='_blank'` hyperlinks to get rid of warnings in back end.

#### v 2.0.4.2  |  19 June 2021  |  commit 58719c8d970224746da317e55c7450ece25a1b77
* Removed `start_url` from manifest; unnecessary if it's the root directory of the domain.
* Stubbed up code for main index page in `/projects` directory.
* Initialized `.md` files for project information to be used in individual project pages.

#### v 2.0.4.3  |  20 June 2021  |  commit f4290915af76c3666fbcec97a7243272421ace61
* Installed gatsby source filesystem to load `.md` data into the website.
* Moved `.md` project files to a new directory `/src/data/projects` for GraphQL.
* Added initial content to `.md` project data files.
* Created a GraphQL query to get project data for the `/projects` index page.
* Render `<Link>` containers (actually `<a>` elements) for projects in `/projects` index page with minimal styling.

#### v 2.0.4.4  |  20 June 2021  |  commit 8cb978205b1d95101bb58a93ea9755221aaee782
* Added background color hover effect to project links on `/projects` index page.
* Altered query on `/projects` index page to only return main projects.
* Added information about Gatsby Source Filesystem to `README.md` file.

#### v 2.0.4.5  |  20 June 2021  |  commit 058966592b7da0117e6433b6d0201300841c5233
* Added pictures of apps that I was missing previously (Human Verifier, Dog Pictures, and my old website).
* Registered an instance of *Gatsby Source Filesystem* for the `/src/images` directory.
* Configured GraphQL query in `/projects` index page to get project screenshots.

#### v 2.0.4.6  |  20 June 2021  |  commit 43c617c7150823393833ef3b11ad301aea237eba
* Changed GraphQL query to get fluid pictures sizes in `/projects` index page to allow CSS resizing.
* Finished formatting links (text and images) on `/projects` index page.
* Adjusted `:hover` styling to links of `/projects` index page.

#### v 2.0.4.7  |  20 June 2021  |  commit caea351d6a8cad83709ac39b8e4ba4c3e628ba8d
* Removed an unnecessary `console.log()` statement from the `/projects` index page function.
* Moved `projects.module.css` from `/src/styles/projects` to `/src/styles`
* Created a `/src/templates` directory which will hold template files.
* Stubbed up a template form `project-details.js` to layout individual project pages.
* Initialized a `gatsby-node.js` file to generate pages using template `project-details.js` and markdown data from `/src/data/projects`.

#### v 2.0.4.8  |  20 June 2021  |  commit 9e13ce7ddf93da23dd85095092f5f211aef81191
* Created a GraphQL query in the `project-details.js` template to retrieve markdown data for each page generated.
* Pages generated from `project-details.js` template render with data from the correct `.md` file in the `/data/projects` directory.

#### v 2.0.5.0  |  21 June 2021  |  commit 40d8f3f48852aad27638085dc61efbbf284d80ce
* Fix bug where content overflows footer, some pages had a max-height value on the `<main>` which was unnecessary.
* Added notes to `gatsby-node.js` so I can use the file as a model in future projects.
* Added *Back to Top* links at the end of every section in this `README.md` file.
* Added `sequence` field to project markdown frontmatter to use for sorting in GraphQL query.
* Built out content in `.md` files for project data for projects I'm currently displaying.
* Added some mobile-responsiveness to pages in `/projects` directory.
  * Index page in changes spacing on smaller screens so that content is evenly distributed.
  * Project details pages switch to column view on smaller screens with text below the image and content centered.
* Completed formatting data in `.md` files for project detail pages.
* Completed all styling for `project-detail.js` template-generated pages.
* Moved the page footer into a new `<Footer />` component.
* Refactored `<Header />` component to generate navlinks by mapping over an array.

#### v 2.1.0.0  |  21 June 2021  |  commit 986dfa36b8434dabf56de94da3469621e6cd2f79
* Moved *Skills* data on `/about` page into a variable to be rendered in the function return.
* Stubbed up `/resources` page with placeholder content.  Developing this page will be the first icebox task.

#### v 2.1.0.1  |  21 June 2021  |  commit 2a0057e12748be65d87ad7054b775a977f765ff7
* Favicon isn't loading on deployed site.  Added a favicon to `<Helmet />` to see if that helps.  This is hard to troubleshoot because I'm getting a favicon on my local machine.

#### v 2.1.0.2  |  21 June 2021  |  commit 0f0a54cce13123dabb31ca38443872dda28f6065
* Favicon still isn't loading.  I found information on how to configure `gatsby-plugin-sharp` to load a favicon, let's see if that works.

#### v 2.1.0.2  |  21 June 2021  |  commit 4bf66b580a4b9402e9ebb7f250c99c8ef1635e72
* Deleted the full web manifest since I can't tell which three lines are throwing errors.  I can reinstate it later.
* Created a custom 404 page.

#### v 2.1.0.2  |  21 June 2021  |  commit e82dcda6a99080d445182414bcfe59074f4a4336
* Deleted link to the web manifest from `<Helmet />` component.

#### v 2.1.0.2  |  21 June 2021  |  commit e1efc5401dfb33ba1da0a161ed8ab287676167d6
* Imported `favicon.ico` to `<Layout />` and linked in `<Helmet />` with `200` status code in local environment.
  * **FUTURE REFERENCE**: This was it!

#### v 2.1.1.0  |  21 June 2021  |  commit --  |  Current Version
* Nav links are now generated outside the render function in `<Header />` and loaded by it.
* Added comments to section off import sections of `Header.js` and `Footer.js` files.
* Uninstalled dependencies I'm not using:
  * `@fortawesome/fontawesome-svg-core`
  * `@fortawesome/free-solid-svg-icons`
  * `@fortawesome/react-fontawesome`
  * `bootstrap`
  * `react-burger-menu`
* Completed mobile responsiveness for `/about` index page.

[Back to Top](#top)

# Tech Framework

### Tech Stack

#### This app uses:
* React & Gatsby.js SSG
* JavaScript ES6+
* HTML5 & CSS3

#### I built this app using:

#### This app is hosted at:
* [Link to GitHub Repo](https://github.com/mhsmith321/Marty-personal-website-2.0)

### Plugins & Dongles

#### [React Helmet](https://www.gatsbyjs.com/docs/add-page-metadata/)
* Allows metadata to be customized in `<head>` section of rendered website.
* Install via `npm install gatsby-plugin-react-helmet react-helmet`
* Import to relevant react pages/components via `import {Helmet} from 'react-helmet'`
* Inside JSX, code a `<Helmet>` container and inside it code any items that would normally be in the `<head>`
* Dependency as listed in `package.json`: `"gatsby-plugin-react-helmet": "^4.7.1"`
* Plugin as registered in `gatsby-config.js`: `'gatsby-plugin-react-helmet'` (no configuration)
* [Full documentation is available here.](https://github.com/nfl/react-helmet)

#### [Gatsby Source Filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/)
* Allows Gatsby to use GraphQL to query information out of the React file structure (images, `.txt` and `.md` files, etc).
* Install via `npm install gatsby-source-filesystem`
* Needs to be once for each directory which will be queried.
* Register: `resolve: gatsby-source-filesystem`
* Configure: `options: {}` which takes multiple key/values:
  * `` name: `projects` `` (any string for `sameple`, can be referenced with GraphQL)
  * `` path: `${__dirname}/src/data/projects/` ``  (any path in the `/src` directory)

#### [Gatsby Plugin Manifest](https://www.gatsbyjs.com/docs/how-to/performance/add-a-manifest-file/)
* Allows the creation of a web manifest plugin in `gatsby-config.js`
  * Technically web manifests are used to score progressive web apps and are not necessary for apps that are not intended to be downloaded to and installed on an Android device.
  * I'm building one here as practice, to have a template for future projects, and to future-proof this project should more browsers start to utilize web manifests.
* Install via `npm install gatsby-plugin-manifest`
* Link in the `<head>` with `<link rel="manifest" href="manifest.json" />` (in this case, inside `<Helmet>`, refer to *React Helmet* for more info).
* Must be registered and configured in `plugins` in `gatsby-config.js`
  * Register: `resolve: 'gatsby-plugin-manifest'`
  * Configure: `options: {}` (see [here](https://developer.mozilla.org/en-US/docs/Web/Manifest) and [here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) for keys).
* Only `name`, `version`, and `manifest_version` are mandatory keys; all others are optional.
  * `name` name of the app
  * `background-color` background color of the app, should correspond to CSS
  * `categories` see [here](https://developer.mozilla.org/en-US/docs/Web/Manifest/categories) for a list of current categories
  * `description` description of the app's purpose and core function
  * `icon` links the site favicons and provides basic metadata about each
  * `lang` [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) for the app's language (`en-US` === American English)
  * `orientation` preferred screen orientation for viewing the app
  * `short_name` short version of the app name < 12 characters
  * `shortcuts` main directories in the website's architecture
  * For some reason keys and values which are strings must be written with double-quotes (single-quotes will throw errors).
* [Full documentation is available here.](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest)

[Back to Top](#top)

# Future Plans

### Goals for MVP
* Continue building out more sections of this `README.md` file.
  * *Table of Contents* with links
  * *Instructions for Use*, minimal since this page is informational only
  * *Developer Notes* with information about file structure, interesting bits of code, etc
    * incorporate into *Tech Framework*?
  * *Contribute* with license info, permission to reuse, and my own contact information
  * *Screenshots* page (instructional video too?)
* Consider a `/src/notes` directory with `.txt` files to hold larger bodies of text that don't warrant full markdown-syntax pages.  This will greatly simplify updating content text on the website.
* Host the site on Netlify or research alternatives.

### Ice Box
* Consider generating the element `<main>` inside pages loaded to the `<Layout />` component instead of hardcoded inside it.
  * Each page loaded into `<Layout />` needs to have a top-level `<div>`.  Can't use fragments `<> </>` because I need the top-level `<div>` to have a class for styling purposes.  This feels like an unnecessary wrapper.
* Generate content for the `/resources` index page.  Currently I'm going live with placeholder content.
* Split projects into two buckets, *Main* and *Other*.
  * Main projects will be shown on the `/projects` main index page and linked at `/projects/project-name`
  * The final link div on the `/projects` index page will be *Other Projects* with an icon.  This will go to another index page at `/projects/other` listing minor projects not central to my portfolio.
  * The *Other Projects* page may be a single page or it may display links in the same manner as the `/projects` index page and link to projects at `/projects/other/project-name` if that doesn't cause problems for Gatsby.* Add mobile-responsiveness to the design.  This will be a goal for shortly after I reach MVP.
* Add Google Maps to `/contact` page.  Before doing this I need to decide where to deploy my site and see how they configure hidden data (in this case an API key).  [See here for more information.](https://www.gatsbyjs.com/plugins/gatsby-source-googlemaps-static/)
* Add Google Analytics to the website.  This should be relatively easy since I already have it set up for my site's previous version.
* Render the `<Layout>` compoonent using Gatsby Server Rendering APIs. [More info here.](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/)

[Back to Top](#top)

# Special Thanks
* I built this website with Gatsby.js, a free single-site generator resource.  I used the [Hello World](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world) starter page which is intended as a truly "blank slate" layout.
* This is my first independent Gatsby.js project.  To learn Gatsby I've followed [the extensive documentation](https://www.gatsbyjs.com/docs/) from [the creators](https://www.gatsbyjs.com/about/) as well as the free [Net Ninja Gatsby Tutorial](https://www.youtube.com/watch?v=Qms4k6y7OgI&list=PL4cUxeGkcC9hw1g77I35ZivVLe8k2nvjB) series on YouTube created by the [Net Ninja Shaun](https://github.com/iamshaunjp).
* This is also my first new project after graduating from [General Assembly's Software Engineering Immersive](https://generalassemb.ly/) program.  I'd like to thank my instructors Ben Manley, David Stinson, and Shahzad Khan for their outstanding leadership as well as other graduates from the SEIR-EC-2-22 cohort.
* Developing a color pallate involved the extensive use of [Coolors](https://coolors.co/), a free resource created by [Fabrizio Bianchi](http://fabrizio.io/) and checked with [ColorSafe](http://colorsafe.co/) for WCAG-compliant contrast ratios to ensure accessibility.
* I created my favicon for free with the help of [favicon.io](https://favicon.io/), a free utility built by [John Sorrentino](https://twitter.com/johnsorrentino).
* Formatting this `README.md` file was easy with the help of the [Markdown Live Preview](https://markdownlivepreview.com/) tool and GitHub Guide's [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) page.
* I inserted metadata into my page's `<head>` using [React Helmet](https://www.gatsbyjs.com/docs/add-page-metadata/), a free utility created and maintained by [the NFL](https://github.com/nfl/react-helmet).
* The icons used on this site were acquired free from [flaticon.com](https://www.flaticon.com/) with permission to use so long as proper attribution is provided in documentation.

[Back to Top](#top)

# Planning & Development Notes

* I want this to be a React app in the style of a single-page app.  I'm using Gatsby both to learn the technology and for the inherent benefits of a static-site generator as well as the relative ease of building out a site, chiefly search-engine optimization and speed for the user.  An SSG is optimal for a site that benefits from back-end processessing but has no use for CRUD functionality.

* I'm planning to use a dark theme that uses bold rather than light colors.  I've decided to use a pride color theme.  [I developed my color palette and saved it to Repl.it here.](https://replit.com/@mhsmith321/personal-website-color-scheme)

* I'm currently planning five pages/pathways:
  1. Splash page => `/` (index page at martysmith.tech)
       * This will be the main splash page users land on.
       * It will have little functionality aside from a brief introduction and nav to other pages.
  2. About => `/about`
       * This page will have my picture and personal/professional information about me.
  4. Projects => `/projects`
       * There will be an index page for this directory and sub-directories.
       * The index page will have links to my major portfolio pieces.
       * Each major portfolio piece will have its own page in the sub-directory.
       * Should I have an entry for this website?
       * There will also be an *Other Projects* sub-directory with minor projects I want people to see, but don't consider central works.
  5. Contact => `/contact`
       * All my essential contact information I'm ok publishing to the internet.
       * Google maps showing Columbia, SC?
       * This will be redundant with the same information elsewhere, but I'm ok with that.
  6. Resources => `/resources`
       * I want to have a page linking to my favorite web dev/engineering resources around the internet.
       * I'll need to see if this is a single page or if it needs sub-directories based on how much stuff I want to list.
       * Include a note to contact me if my resource listings are out of date.

* Optimally I'd like every page to fully render on a user's monitor with no scrolling.  This may be ambitious but this is the goal.

* I plan to have a single `<Layout>` wrapper around every page.

* I don't think I'll need any conditional formatting here except for screen sizes and link clicks.

* Since this site is primarily meant for professional recruiters and HR professionals who are presumably using desktop workstations, I'm not planning to use mobile-first design.  That said, I do intend to add mobile-responsiveness once I reach MVP.  This should be relatively easy using CSS Grid.
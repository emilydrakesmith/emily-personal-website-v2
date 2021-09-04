<a id='top'></a>

# Introduction

This is the remote repository for the version 2.0 of my personal website which you can view at [martysmith.tech](https://martysmith.tech/).  If you'd like to see how far my development skills have come since version 1, you can [view a legacy version here](https://mhsmith321.github.io/Marty-Smith-Personal-Homepage/).

I have published this website under the [MIT License](#license).

# Table of Contents
1. [Instructions for Use](#instructions)
2. [Version Notes](#version-notes)
3. [Tech Framework](#tech-framework)
4. [License](#license)
5. [Future Plans](#future-plans)
6. [Special Thanks](#special-thanks)
7. [Planning and Development Notes](#planning)

[Back to Top](#top)

<a id='instructions'></a>

# Instructions for Use

### Navigating the Website

This website is relatively easy to navigate given its nature being mostly informational.  Desktop users have access to quick links to all the main sub-directories in the directory `/` (main index page).  There are also nav links in the page header visible on all pages.  Mobile users will see a hamburger menu rather to display the same links.  The hamburger menu is fixed to the top of the screen and will not disappear if the page is scrolled.  The page is fully keyboard navigable on the desktop version.

### Notes for Developers

If you fork the code for my website there are some things that you should be aware of before doing so.  Presumably if you want to fork my code, you want to preserve and work with my architecture rather than delete it.

**First some non-technical stuff:**
* This page is published under the [MIT License](#license) and all of its terms extend to use of my code and design.
* If you fork my code I would like to be recognized prominenetly in the first section of your `README.md` file with a link to `martysmith.tech` or `www.martysmith.tech` depending on which I'm using.  This is under the principle of please don't be a jerk if reusing my work.

**Config files:**
* The `gatsby-ssr.js` and `gatsby-browser.js` files apply the `<Layout>` wrapper to every page on the website.
* The `gatsby-node.js` file feeds data from `src/data` into template functions to generate all sub-directories in the `/resources` and `/projects` URL pathways.  This file retrieves minimal information to determine the pages which need to be generated, then the template functions coding those pages retrieve more detailed data.
* Plugins I'm using in `gatsby-config.js` generally serve three purposes:
  1. make images in the `/src/images` directory available for GraphQL
  2. make `.md` data in the `/src/data` available for `gatsby-node.js` and GraphQL
  3. activate *React Helmet* which allows me to populate data into my website's `<Head>` component

**Data:**
* All of my images exist at a `640×640` pixel resolution.  Various pages in my website will resize them to smaller sizes using the `gatsby-image` plugin.  The size is somewhat arbitrary, it simply needs to be larger than I will presumably use images on my site and in the same aspect ratio (currently `1:1`).
* All individual project pages in the `/projects` URL pathway are rendered using data from individual `.md` files in the `/src/data/projects` directory which is fed into the template file `project-details.js`.  To make new files, copy/paste data from an existing file into a new one and update the data.  Please note that I have the sequence coded into the `.md` frontmatter.  Achieving a custom sort sequence requires either this or hardcoding a sequence into the `projects.js` file.  I chose the former.  This does require however updating a number of files to avoid conflicts.
* All individual resource pages in the `/resources` URL pathway are rendered using data from the collection of `.md` files in a given folder of the `/src/data/resources` directory which is fed into the template file `resource-details.js`.  That is, the collection resources listed in the page at a URL pathway `/resources/foo-bar` would be generated from data in each of the individual files `.md` files in the `/src/data/resources/foo-bar.js` directory.

**Architecture:**
* Each of the main URL pathways in the website (`/`, `/about`, `/projects`, `/resources`, `/contact`) are coded by a file in the `/src/pages` directory.  The central index page is `index.js`; Gatsby creates namespaces for all other files according to their filename.
* The page `/projects` is coded by a file `index.js` in the `/src/pages/projects` directory.  This architecture is necessary to add pages at sub-directories in that URL pathway and I plan to add a page at `/resources/other-projects` at a later date.  Note that creating sub-directory pages does not require this architecture if the pages are being generated from template files.  The functions in `gatsby-node.js` will take care of that.

<a id='version-notes'></a>

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
  * **FUTURE REFERENCE** *This was it!*

#### v 2.1.1.0  |  22 June 2021  |  commit afc75d45d894e1bbad9bcd8785f701166425023f
* Nav links are now generated outside the render function in `<Header />` and loaded by it.

#### v 2.1.1.1  |  23 June 2021  |  commit 677899c94457edf157d691be8a29870b7fa66ed8
* Built hamburger menu for mobile version of site.

#### v 2.1.2.0  |  28 June 2021  |  commit 2d62efcc5b967b064f390501077cd5416095c8c8
* Added comments to section off import sections of `Header.js` and `Footer.js` files.
* Uninstalled dependencies via `npm uninstall` which I'm not using:
  * `@fortawesome/fontawesome-svg-core`
  * `@fortawesome/free-solid-svg-icons`
  * `@fortawesome/react-fontawesome`
  * `bootstrap`
  * `react-burger-menu`
* Completed mobile responsiveness for `/about` index page.

#### v 2.1.2.0  |  28 June 2021  |  commit 79dc2e07fc1841bb5d0cf37492c8c36ed759c11a
* Minor refactor to how I call my mobile-version portrait to fix an error on Netlify.

#### v 2.1.2.0  |  28 June 2021  |  commit caf20047f70ce647914fe712783d902a4030ded1
* Refactor to graphql query to try to fix the same error from the previous commit.
  * **FUTURE REFERENCE** *This was it!*  The problem was using an `id` in the graphql query.  Using the image `src` as a filter worked.

#### v 2.1.2.1  |  28 June 2021  |  commit ab2c29d9a2f03b72111f2ecf0e213fc45cdd8ad0
* Replaced the HTML/CSS hamburger menu icon with an SVG.

#### v 2.1.3.0  |  28 June 2021  |  commit 161bd7cd0ba61edb0f1c7b399fb55729c594c03e
* Add styling to links in the hamburger menu.

#### v 2.1.4.0  |  28 June 2021  |  commit b44af9a8ca387954ffa2b29c56e2400f3578e6e1
* Refactor `/` main index page to use flexbox instead of grid.
* Add mobile responsiveness to `/` main index page.

#### v 2.1.5.0  |  28 June 2021  |  commit 1bace84df4f4b9bb01184bf2625ec5f5eef8eddb
* Reduced text size on index page to fit on more phone screens without wrapping.
* Completed mobile responsiveness for `/projects` index page.

#### v 2.1.6.0  |  28 June 2021  |  commit ae5699eed13d43a4265743c326981c36db9141af
* Completed mobile responsiveness for pages generated by the `project-details.js` template.
* Deleted testing code from `projects.module.css` which had been left disabled.

#### v 2.1.7.0  |  28 June 2021  |  commit 005a0266c72ed3d058d084cf0d92c0f061b48567
* Bug fix for a CSS issue that caused content to overrun the horizontal viewport width on the `/` main index page.
* Completed mobile responsive styling for `/resources` index page.
* Made `<h1>` styling on `/projects` index page consistent with other index pages.

#### v 2.2.0.0  |  29 June 2021  |  commit 08c3be7b844311d4b8ae5fa9ae8818216462dc1f
* All mobile-responsive styling is complete!

#### v 2.2.0.1  |  03 July 2021  |  commit 334b8c89405bf31d9b85624afb9126ec5faa8896
* Added `.svg` files to build-out `/resources` index page.

#### v 2.2.1.0  |  05 July 2021  |  commit ab3d34a8d0c79aa039bde49fe6703468619cfe18
* Major refactor to to the `/` main index page file.
  * Page links in the `<main>` are generated from metadata outside the return statement.
  * Page links are generated outside the return statement by mapping over metadata and loading JSX template data into a variable.
* Refactor to `/projects` index page also generate link elements outside the return statement by mapping over metadata and loanding JSX template data into a variable.
* Render `/resources` (mobile and desktop versions) with links to sub-directories (not yet built).
* Added more `.svg` files to build-out `/resources` index page.

#### v 2.2.1.1  |  05 July 2021  |  commit 187472103958c23cb79f23fe51916261a0d90ef1
* Added the key `group` to all `.md` files to allow filtering of graphql results for different sub-directories on the website.
* Rendering sub-directory pages of the `/resources` directory linked properly in the `/resources` index page.

#### v 2.2.1.2  |  06 July 2021  |  commit 6bc73a23adda2fa2787df3edae3a305716642049
* Create images for links in `/resources/web-development` and `/resources/html-css` directories.
* Successfully query data in `resource-details.js` file (not specific to sub-directory, always queries `subgroup: web-development` type).

#### v 2.2.1.3  |  06 July 2021  |  commit ef8cfcb6f287513a4aa88c9fd704f391ffa9dba4
* Built-out `.md` data files for links in the `/resources/web-development` directory for *Codepen*, *Codecademy*, and *CSS Tricks*.
* Add styling to page `<h1>` and `<hr />` for title.
* Render resource name and content information for imported `.md` files in `resource-details.js` template.
* Green line appears left of each resource item when hovered in `resource-details.js` template.

#### v 2.2.1.4  |  06 July 2021  |  commit 5839a92bec3e9a2a30b834c3fb6f75ea3a6469d7
* Complete desktop styling for `/resources` sub-directories.

#### v 2.2.1.5  |  06 July 2021  |  commit ca0f5863b2935bd47d1654e37987c8136898a850
* Fixed incorrect commit number attached to the commit immediately before this one.
* Built-out `.md` data files for links in the `/resources/html-css` directory for *Flexbox Froggy* and *Grid Garden*.
* Add comments to better section and explain code in `gatsby-node.js` file.
* Sub-directory pages in the `/resources` directory now render the correct data (not just *Web Development* resources).

#### v 2.2.2.0  |  06 July 2021  |  commit 0ec1445329957bc8d5eb33146f044f81139223db
* Added mobile-responsiveness to `/resources` sub-directory pages.  Not perfected yet but definitely good enough to push to production.
* Disabled *JavaScript* and *React* links on the `/resources` index page.  I don't have data ready for them yet so they aren't rendering properly.  I don't want to stop them from letting me push to production.
* **Edit** Build failed at the GraphQL query in `resource-details.js`, now time to figure out why.

#### v 2.2.2.0  |  12 July 2021  |  commit 34c38188cbfcc3e3ad6c0982309dd7f7db484a9e
* I disabled all links in the `/resources` index page except for *Web Development*.  I'm wondering if the build is failing because I'm running queries for pages that don't yet have content.  Edit: Not it.  At least not the only issue.  I'm leaving it like this for now though just for the sake of simplicity.

#### v 2.2.2.0  |  12 July 2021  |  commit 411197eb73a97b8e0b76bdc59ef580e1f38a6a99
* I disabled the code to render images in `resource-details.js` currently at line 35: `<Img fluid={node.frontmatter.squareImg.childImageSharp.fluid} />`
  * Netlify says the error exists both here and at the query, but disabling it here will eliminate at least one complicating factor.

#### v 2.2.2.0  |  13 July 2021  |  commit 072d871b84d4177a34bd5c87792718ef65c62a38
* I did not anticipate in the last commit my website would now build, but without the images in question.  I restored the previous line of code removed, but now I need to finish this fix tonight or else my site will be live with missing images.
  * For the time being I've locked Netlify into using the last successful build.  Auto-publishing is disabled.

#### v 2.2.2.0  |  13 July 2021  |  commit 78646c32aaf32b92648a43a0a12caa920ef7a960
* I moved the empty `.md` files from the directory `/src/data/resources/web-development` to `/src/data/resources/tempfiles` in case their presence is the reason the build is failing.  It's probably not but their presence is an unnecessary complicating factor.
* Redeveloped GraphQL query in `resource-details.js` from scratch.

#### v 2.2.2.0  |  13 July 2021  |  commit e5448edc1e620c83ea42ae4bc609f3272092b240
* I changed image sharp fluid to image sharp fixed in `resource-details.js` to see if a fixed inquiry will work.
  * Edit: Nope, fixed doesn't work either.

#### v 2.2.2.0  |  13 July 2021  |  commit 6c3ef5b27867457774cdfd6fcbc4a943201ce651
* Registered the new plugin `gatsby-plugin-image` in `gatsby-config.js`; this replaces the plugin `gatsby-image` (which is now deprecated).  Installed via `npm i gatsby-plugin-image` in the terminal.
* Ran the codemod via `npx gatsby-codemods gatsby-plugin-image /Users/martinsmith/code/personal-projects/Marty-personal-website/Marty-Smith-personal-website-2/src/templates` to update code.
* Restructured how I call images in `project-details.js` to reflect the new file structure returned by GraphQL.

#### v 2.2.2.0  |  13 July 2021  |  commit b3358bd96057ed8d47cc4735acb522a582520a4a
* Deleted placeholder test files in `src/data/resources/javascript` and `src/data/resources/react`.  I think the build on Netlify may have failed due to incomplete data files being skipped by the build in my local environment.
  * **FUTURE REFERENCE** *This was it!*  So from now on, no half-built `.md` files.  Every created file needs to be blank or fully-built.  Two test files with half-developed dummy data failed to build because of the missing data.

#### v 2.2.2.1  |  13 July 2021  |  commit 8c567e73516c3a688181d0ae3be6425cc4de6dd9
* Moved all `.md` files being stored in the `/src/data/resources/tempfiles` directory to the `/src/data/resources/web-development` directory.
* Re-activated the link to the `/resources/html-css` sub-directory page.

#### v 2.2.2.2  |  13 July 2021  |  commit 115de568ab74484f4b4f9d85758fcb525c34ad65  |  Current Version
* Built out `.md` files for the following links in the `/resources/web-development` sub-directory page:
  * [Flaticon](https://www.flaticon.com/)
  * [General Assembly](https://generalassemb.ly/)
  * [Lunapic](https://www.lunapic.com/)
  * [Markdown Live Preview](https://markdownlivepreview.com/)
  * [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
  * [MDN Web Docs](https://developer.mozilla.org/)
  * [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)
  * [Repl.it](https://replit.com/)
  * [W3Schools](https://www.w3schools.com/)

#### v 2.2.3.0  |  13 July 2021  |  commit 55b82cdcfd9efab0294c8be3b60021afc6dc3a9c
* Added a field `slug` to the frontmatter in all `.md` files in the `src/data/resources` directory.  This is necessary for anchor tags for in-page hyperlinking.
* Added  `id={node.frontmatter.slug}` as an attribute to the top-level element `<article>` in `resource-details.js` to have a target for in-page hyperlinking.
* Added `className={styles.resource_external_hyperlink}` as an attribute to external link anchor tags in `resource-details.js` file.
* Refactor CSS in `resource-details.module.css` such that styles previously targeting `.resource_article_details a` now target the new `resource_external_hyperlink` class.
* Added in-page hyperlinks to every resource listed in the `/resources` sub-directories which name another resource.
* Added additional `margin-bottom` spacing to external hyperlinks in `/resources` sub-directories for mobile devices.
* Added alt text to all instances of `<GatsbyImage />` to satisfy errors.
* Built out `.md` files for the following links in the `/resources/html-css` sub-directory page:
  * [CSS Tricks - Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [CSS Tricks - Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * [Layoutit](https://grid.layoutit.com/)

#### v 2.2.3.1  |  13 July 2021  |  commit 46b8a49d66d9b76fb9131c73ba6241b215145e53
* Updated items listed in *Ice Box* section of `README.md` to reflect implemented features.
* Added the MIT License to the publication and use terms of this website.

#### BRANCH render-layout-through-ssr  |  13 July 2021  |  commit 65a45be3b9aafac772918da7355742de8e5aeef0
* Initialized `gatsby-ssr.js` and `gatsby-browser.js` files.
* Wrote functions in both new files to automatically wrap `<Layout />` around page elements.
* Removed `<Layout />` wrapper from all render functions and corresponding import statements from relevant files.
* Confirmed all pages including sub-directories are rendering properly.

#### v 2.2.4.0  |  13 July 2021  |  commit 5fd9b1e3c46706015f348967cbb57de1c5af804f
* Pushed branch `render-layout-through-ssr` and merged into main on GitHub.
* Pulled this commit from GitHub to sync local `main` with `origin/main`.

#### v 2.2.4.1  |  15 July 2021  |  commit 99c641bf72ebab5b91f2cd4831aa42b809c987a8
* Removed an unnecessary `<div>` wrapper around the `<Link />` elements in the `index.js` page.
* Added an `.md` file for [Making CSS](https://makingcss.com/) to be rendered in the `/resources/html-css` directory.
* Added .`md` files for [Netlify](https://www.netlify.com/) and [Heroku](https://www.heroku.com/) to be rendered in the `/resources/web-development` directory.
* *Important!* since I don't seem to be using wide images in my links to external resources, I've stopped creating them when I make new resource entries.  For the time being I'm keeping the `wideImg` field in the frontmatter of new `.md` files but leaving it set to `null`.  I'm going to keep the field and the existing wide images until a later time when I'm sure I'll never use them.  I don't think they look as good as the square screenshots anyway.
* Made alterations to the organization of the `src/images/resources` directory:
  * Deleted the directory `src/images/resources/internal` since I'm not using it.
  * Moved all the files in the `src/images/resources/external` directory to `src/images/resources` since I don't have sub-directories in that directory anymore.
  * Deleted the directory `src/images/resources/external` as it's now empty and obsolete.
  * Updated all the image filepaths in `.md` files in the `src/data/resources` directory.  This was easy since it's just removing `/external` from each filepaths.
* Modified `resource-details.module.css` to use color-match in-page links with external links.
* Hyperlinked records in *Version Notes* of `README.md` of adding external resources to `/resources` sub-directories.

#### v 2.2.4.2  |  15 July 2021  |  commit ec6b75c83edd2817c34c86a70c6ec4cfefd4c1de
* Updated data in `heroku.md` file; I copy/pasted data from `netlify.md` as a template but forgot to update the `html` data (resource description and in-page hyperlink) in the file.
* Added an `.md` file for [GitHub](https://github.com/) to be rendered in the `/resources/web-development` directory.

#### v 2.2.4.3  |  15 July 2021  |  commit a0765382b14575734a33fd688030dc025eadcee4
* Added an `.md` file for [Bacon Ipsum](https://baconipsum.com/) to be rendered in the `/resources/web-development` directory.
* Created a new *Learning* resource in the `/resources` directory.
* Moved the following `.md` files for the following resources from `src/data/resources/web-development` to `src/data/resources/tutorials`:
  * [Codecademy](https://www.codecademy.com/)
  * [CSS Tricks](https://www.css-tricks.com/)
  * [General Assembly](https://generalassemb.ly/)
  * [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)

#### v 2.2.4.4  |  15 July 2021  |  commit 21830608745276f775d9d12c42e8cb2c777303cf
* Refactored `gatsby-browser.js` and `gatsby-ssr.js` to use arrow function notation.
* Added alt-text to icons loaded in the `/resources` index page.

#### v 2.2.4.5  |  17 July 2021  |  commit 4d1d461d4be27ce570c960d34160b39968d8e65b
* Removed the `pageTitle` field from the frontmatter of all `.md` files in the `src/data/resources` directory.  This field is unnecessary due to the switch statement I built into the `resource-details.js` file.
* Removed all instances of the `break` operatory from the switch statement in the `resource-details.js` file.  It isn't necessary for how I built the statement.
* Activated the `/resources/react` sub-directory and built out `.md` files for the following resources:
  * [React.js](https://reactjs.org/)
  * [React Router](https://reactrouter.com/)
  * [React Native](https://reactnative.dev/)
  * [React - Net Ninja Tutorial Series](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)
  * [React - GatsbyJS](https://www.gatsbyjs.com/)
  * [React Hooks - Eric Bishard article](https://www.telerik.com/kendo-react-ui/react-hooks-guide/)
* Activated the `/resources/gatsby-js` sub-directory and built out `.md` files for the following resources:
  * [GatsbyJS](https://www.gatsbyjs.com/)
  * [Gatsby - Net Ninja Tutorial Series](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hw1g77I35ZivVLe8k2nvjB)
* Updated several instances of typing `Gatsby.js` to read `GatsbyJS` throughout the website.

#### v 2.2.4.6  |  17 July 2021  |  commit 7a8385570939e45ef0e08aae2468f8f544b12e42
* Reinstated the `break` operators in the switch statement in the `resource-details.js` file removed in the previous commit.  I actually did need them.  Oops.
* Added a `sequence` value to the frontmatter of all `.md` files in the `src/data/resources` directory to allow in-page sorting of GraphQL query returns.
* Updated GraphQL query in `resource-details.js` to sort returns by the new `sequence` value.

#### v 2.2.4.6  |  19 July 2021  |  commit 28de1564ca3cc4ddad5bb7fcc2d48dedeb18100e
* **Bugfix!**  When I refactored the `<main>` nav links to remove the unnecessary wrapper in `index.js` I lost vertical spacing between the squares on mobile devices.  I added `margin-bottom: 28px;` styling to a `.nav_links > a` CSS selector under a `@media (max-width: 620px)` media query.  Now spacing is proper.

#### v 2.2.4.6  |  19 July 2021 |  commit 95487bf8bf2b9614c4b8ac841578c95ae2122303
* Built a *Table of Contents* in the `README.md` file.

#### v 2.2.5.0  |  19 July 2021 |  commit afeec54eb0348e20eb3ddf02ddfc6cb1c47ae7f1
* Built a *Instructions for Use* section in the `README.md` file.

#### v 2.2.5.0  |  19 July 2021 |  commit cccee8b2add38e3ebf92c273958f1e0c4144b227
* Added a version note for commit `afeec54eb0348e20eb3ddf02ddfc6cb1c47ae7f1` (ie the commit immediately before this one).  I got excited and pushed my code without doing so.  Oops.

#### v 2.2.5.1  |  17 August 2021 |  commit 27b3ab2fa675d7d62725247b5a0ff1eea152c90d
* Refactored the `LeftSidenav.js` component to map over an array of data to produce links instead of hardcoding them.

#### v 2.2.5.2  |  17 August 2021 |  commit e9e23019d918db6751d72f94072f5a41ac8284fe
* Add my personal e-mail address to site metadata in the `gatsby-config.js` file.
* Remove all instances of hardcoding `marty.smith01@yahoo.com` and load it from site metadata instead:
  * pages: `index.js` and `contact.js`
  * component: `RightSidenav.js`

#### v 2.2.5.3  |  18 August 2021  |  commit 96ee1b0666812be0fbbdc4088170271ec42a7264
* Added "TypeScript" to *Key Skills* section of the `about.js` page (mobile and desktop versions).
* Added a link to *Pinterest* in the `LeftSidenav.js` component.

#### v 2.2.5.3  |  18 August 2021  |  commit c0095152d240dca50cda20282f82c7546c9ba707
* Removed the `useStaticQuery` GraphQL dongle from `index.js` and `contact.js` files where it wasn't needed.

#### v 2.2.5.4  |  04 September 2021  |  commit --  |  Current Version
* Changed my home city as listed in `index.js` to Raleigh-Durham.
* Added `<meta>` tags to React Helmet for `author` and `description` content fields.
  * Data lives in `siteMetadata` of the `gatsby-config.js` file and is imported through GraphQL.

[Back to Top](#top)

<a id='tech-framework'></a>

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

<a id='license'></a>

# License
### MIT License

Copyright (c) 2021 Martin "Marty" Smith

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute,  ublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[Back to Top](#top)

<a id='future-plans'></a>

# Future Plans

### Short Term
* Continue building out more sections of this `README.md` file.
  * *Instructions for Use*, minimal since this page is informational only
  * *Developer Notes* with information about file structure, interesting bits of code, etc
    * incorporate into *Tech Framework*?
  * *Contribute* with license info, permission to reuse, and my own contact information
  * *Screenshots* page (instructional video too?)
* Consider a `/src/notes` directory with `.txt` files to hold larger bodies of text that don't warrant full markdown-syntax pages.  This will greatly simplify updating content text on the website.
* Topics and sub-topics for *Resources* page (sub-topics in `.md` files):
  * General Web Dev Stuff
    * Icon Scout
  * JavaScript
    * Higher-Order Function Reference Page
  * React/Gatsby
    * Net Ninja: React
    * Net Ninja: Gatsby
  * Node
* Generate in-page hyperlinking in `/resources` sub-directories to utilize frontmatter data rather than hardcoding into HTML section.

### Ice Box
* Consider generating the element `<main>` inside pages loaded to the `<Layout />` component instead of hardcoded inside it.
  * Each page loaded into `<Layout />` needs to have a top-level `<div>`.  Can't use fragments `<> </>` because I need the top-level `<div>` to have a class for styling purposes.  This feels like an unnecessary wrapper.
* Split projects into two buckets, *Main* and *Other*.
  * Main projects will be shown on the `/projects` main index page and linked at `/projects/project-name`
  * The final link div on the `/projects` index page will be *Other Projects* with an icon.  This will go to another index page at `/projects/other` listing minor projects not central to my portfolio.
  * The *Other Projects* page may be a single page or it may display links in the same manner as the `/projects` index page and link to projects at `/projects/other/project-name` if that doesn't cause problems for Gatsby.* Add mobile-responsiveness to the design.  This will be a goal for shortly after I reach MVP.
* Add Google Maps to `/contact` page.  Before doing this I need to decide where to deploy my site and see how they configure hidden data (in this case an API key).  [See here for more information.](https://www.gatsbyjs.com/plugins/gatsby-source-googlemaps-static/)
* Add Google Analytics to the website.  This should be relatively easy since I already have it set up for my site's previous version.

[Back to Top](#top)

<a id='special-thanks'></a>

# Special Thanks
* I built this website with Gatsby.js, a free single-site generator resource.  I used the [Hello World](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world) starter page which is intended as a truly "blank slate" layout.
* This is my first independent Gatsby.js project.  To learn Gatsby I've followed [the extensive documentation](https://www.gatsbyjs.com/docs/) from [the creators](https://www.gatsbyjs.com/about/) as well as the free [Net Ninja Gatsby Tutorial](https://www.youtube.com/watch?v=Qms4k6y7OgI&list=PL4cUxeGkcC9hw1g77I35ZivVLe8k2nvjB) series on YouTube created by the [Net Ninja Shaun](https://github.com/iamshaunjp).
* This is also my first new project after graduating from [General Assembly's Software Engineering Immersive](https://generalassemb.ly/) program.  I'd like to thank my instructors Ben Manley, David Stinson, and Shahzad Khan for their outstanding leadership as well as other graduates from the SEIR-EC-2-22 cohort.
* Developing a color pallate involved the extensive use of [Coolors](https://coolors.co/), a free resource created by [Fabrizio Bianchi](http://fabrizio.io/) and checked with [ColorSafe](http://colorsafe.co/) for WCAG-compliant contrast ratios to ensure accessibility.
* I created my favicon for free with the help of [favicon.io](https://favicon.io/), a free utility built by [John Sorrentino](https://twitter.com/johnsorrentino).
* Logos for [The Net Ninja](https://www.youtube.com/c/TheNetNinja/playlists) are re-used with permission from Shaun Pelling, conferred over Twitter.
* Formatting this `README.md` file was easy with the help of the [Markdown Live Preview](https://markdownlivepreview.com/) tool and GitHub Guide's [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) page.
* I inserted metadata into my page's `<head>` using [React Helmet](https://www.gatsbyjs.com/docs/add-page-metadata/), a free utility created and maintained by [the NFL](https://github.com/nfl/react-helmet).
* The icons used on this site were acquired free from [flaticon.com](https://www.flaticon.com/) with permission to use so long as proper attribution is provided in documentation.

[Back to Top](#top)

<a id='planning'></a>

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
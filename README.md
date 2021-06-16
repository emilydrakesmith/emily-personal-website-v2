# Version Notes

#### v 2.0.1.0  |  14 June 2021  |  commit 7bea184aa7df2f80c4160b560a8e7de3441b6c7e  |  Initial Commit
* Initial commit of this project.

#### v 2.0.1.1  |  15 June 2021  |  commit --  |  Current Version
* Moved contents of `README.md` which came with the starter code to `GATSBY-README.md`.  Re-initialized this as my own `README.md` file.
  * Added *Version Notes* with information on the current and previous commit(s).
  * Added *Future Plans* with goals for both MVP and long-term icebox.
  * Added *Special Thanks* with information about and links to resources I used developing this project.
  * Added *Planning & Development Notes* to start outlining my thoughts on how to construct this site.
  * The file will be built out more later.
* Added `https://github.com/mhsmith321/Marty-personal-website-2.0.git` as a remote origin repository for this project.
* Created new directories for `/src/components`, `/src/images`, and `/src/styles`.
* Created `.js` files for index pages in all directories.  Created a `/src/pages/projects` directory for project sub-directories.

# Future Plans

### Goals for MVP
* Set up a `<Layout>` component.
* Render dummy data in all directory index pages.
* Continue building out more sections of this `README.md` file.
  * *Introduction* (above *Table of Contents*)
  * *Table of Contents* with links
  * *Instructions for Use*, minimal since this page is informational only
  * *Developer Notes* with information about file structure, interesting bits of code, etc
  * *Tech Framework* with information on various technologies used to develop this site
  * *Contribute* with license info, permission to reuse, and my own contact information
  * *Screenshots* page (instructional video too?)
  * *Back to Top* links after all sections of this document
* Make a favicon.
* Consider a `/src/notes` directory with `.txt` files to hold larger bodies of text that don't warrant full markdown-syntax pages.  This will greatly simplify updating content text on the website.
* Host the site on Netlify.

### Ice Box
* Add mobile-responsiveness to the design.  This will be a goal for shortly after I reach MVP.
* Add a `manifest.json` file.
* Add Google Analytics to the website.  This should be relatively easy since I already have it set up for my site's previous version.

# Special Thanks
* I built this website with Gatsby.js, a free single-site generator resource.  I used the [Hello World](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world) starter page which is intended as a truly "blank slate" layout.
* This is my first independent Gatsby.js project.  To learn Gatsby I've followed [the extensive documentation](https://www.gatsbyjs.com/docs/) from [the creators](https://www.gatsbyjs.com/about/) as well as the free [Net Ninja Gatsby Tutorial](https://www.youtube.com/watch?v=Qms4k6y7OgI&list=PL4cUxeGkcC9hw1g77I35ZivVLe8k2nvjB) series on YouTube created by the [Net Ninja Shaun](https://github.com/iamshaunjp).
* This is also my first new project after graduating from [General Assembly's Software Engineering Immersive](https://generalassemb.ly/) program.  I'd like to thank my instructors Ben Manley, David Stinson, and Shahzad Khan for their outstanding leadership as well as other graduates from the SEIR-EC-2-22 cohort.
* Developing a color pallate involved the extensive use of [Coolors](https://coolors.co/), a free resource created by [Fabrizio Bianchi](http://fabrizio.io/) and checked with [ColorSafe](http://colorsafe.co/) for WCAG-compliant contrast ratios to ensure accessibility.
* * Formatting this `README.md` file was easy with the help of the [Markdown Live Preview](https://markdownlivepreview.com/) tool and GitHub Guide's [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) page.

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
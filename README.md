
# Mars Agrofarm

This is the front end code for the iconic Mars Agrofarm company website, Mars Agrofarm & Supplies Ltd is committed to empowering smallholder farmers and small-scale vendors. Our focus on innovation and sustainability drives us to provide high-quality agricultural solutions that enhance productivity and promote social impact.




## Installation

#### `Technologies used` in the development of the front end: 

[Vite + React](https://vite.dev/guide/#overview) and [Styled Components Library](https://styled-components.com/docs) for more control over styling rules.

If you wish to work with the files created for the front end code, you'll need to clone the repository and then Install site dependancies with npm, then run the development server to view the site in your browser.

- Cloning Repository.
```bash
git clone https://github.com/Mass-agrofarm/FrontEnd.git
```
- Installing site dependancies.

```bash
cd FrontEnd
npm install
```

- Running the development server locally.

```bash
npm run dev
```

#### `Browser view.`

- [x]  The site is configured to run in port [3000](https://localhost:3000)

That's it 😂. Congratulations on your build 🔥.


## Deployment

To deploy this project I have used netlify as the host provider for demo previews, have [netlify cli](https://developers.netlify.com/cli/) Installed on your machine. More on [netlify cli here](https://cli.netlify.com/).

Now that we have these covered run:

- To preview the site in production, run.
```bash
npm run build
netlify deploy
```

- To push the code to production.
```bash
npm run build
netlify deploy --prod
```

## Hosting (cPanel)
After the successful hosting of the site, we have an online presence managed by cPanel over a host provider, the site now is live on the web and accessible. 

If you make changes to the apps files, you'll need to run a build and obtain the dist folder.
```bash
npm run build
```
Then upload the dist folder to your cPanel hosting provider, make sure to move all the files inside the dist folder to the root of public_html folder. The site will be updated with the new designs.

Any changes that need to be pushed to the site will require manually deleting old files and updating the dist files of the new versions of the app.

Currently the site is live [here](https://www.marsagrofarm.co.ke/).


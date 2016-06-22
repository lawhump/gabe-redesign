Portfolio Biz
=============

How to get this on my machine
-----------------------------
1. Git clone this repo
  * [Instructions](https://help.github.com/desktop/guides/contributing/cloning-a-repository-from-github-to-github-desktop/)

2. From your terminal, run
```bash
npm install && bower install
```
  * Assuming you get errors, you probably need to install npm and/or bower. Install npm first [here](https://nodejs.org/en/download/) and bower by running

  ```bash
  npm install -g bower
  ```

3. Now that you have bower and npm installed and all of the dependencies, you should be able to run
```bash
gulp serve
```
to see your project. The browser automatically refreshes to reflect any changes.

### Updating the live site

After you verify that the local version has the correct behavior, you should push your code to the **master** branch (for safety), then push to GitHub pages —**gh-pages**— branch (the live site).


The order is **add**, **commit**, **push**. Anytime you want to see your code reflected on github, you *must* do these steps.

  * [This](https://guides.github.com/introduction/getting-your-project-on-github/) looks helpful.

Once you push to **master**, you'll then have to make **gh-pages** reflect the changes you just pushed to master, once you've decided that you want to push said changes to the site.

This part I only know how to do from the command line and don't feel like looking it up.

Assumes you are at the root of your project directory from the command line. Also assumes master is up-to-date.

```bash
git checkout gh-pages
git rebase master
git push origin gh-pages
git checkout master
```

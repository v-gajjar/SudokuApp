A front-end sudoku app that was created from a vanilla Vite project. 
A project that is currently in progress and in collaboration with Jolene Kearse and Rishik Chakravarty. 

<img width="521" alt="image" src="https://github.com/user-attachments/assets/7ab0b9eb-93f3-4633-9c34-7e7798e42ad5">

## :goal_net: Running the Project
To get the project running locally run `git clone https://github.com/v-gajjar/SudokuApp.git`.
Run `npm install`.

Keep in mind that this is a WIP (work in progress), so run `git pull origin main` to pull the most recent changes and `npm install` just in case.  

Preview the project in your browser of choice with `npm run dev`.

### 🍴 For Forked Repos
Fetch recent updates & merge them into your fork:
- Add the repo as a remote called `upstream` with `git remote add upstream https://github.com/v-gajjar/SudokuApp.git`.
- `git fetch upstream`
- `git merge upstream/main`
- Push the changes to your fork with `git push origin main`

### :construction: Current Progress
- Can open the help dialog by clicking the ❔ icon
- Can open the settings dialog by clicking the ⚙️ icon
- Can toggle the Fill Guess element
- Can toggle the clock within the settings dialog - Should be visible on page load.

## :busts_in_silhouette: Getting Started 
To contribute first get the project running locally with `git clone https://github.com/v-gajjar/SudokuApp.git`.
Run `npm install`.

As a safe practice, since we will often be working asynchronously, when you start to work:
- Run `git pull origin main` to get any changes any of us have made.
- Try `npm install` in case we added any packages.
- Refer to the Projects tab to see the work flow.
- Create a new branch, review the changes, then merge with `main` when complete.

## ⚠️ Troubleshooting
This project uses Node version 22.2.0.
If you aren't currently using this, don't dispair!

To get the project to run:
- Check your node version with `node --version` if it is 22.2.0, 'Be calm and carry on!'
- If it isn't, navigate to your project and run `nvm install 22.2.0' and 'nvm use 22.2.0'.
- If you had previously run `npm install` delete the `node_modules` directory and run `npm install` again.  

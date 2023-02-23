## Things i learned about git AKA distributed version control system

What is git?

> It is a free :sunglasses: tool to store history. So multiple developers can work on a project at the same time and solve the conflicts along the way. Also project can go back to the previous version.

What is github?

> It is a tool that uses git.

Tips:

1. Try to add code files (no photos or videos). Steps to ignore non code files:

- Create .gitignore file
- Inside that file write the names of the files that you want to avoid. For example: oruulahguifile.js

2. In order to safely merge our branch to the main branch we should create PR(pull request).

#### git commands

- git init [^1]
- git status [^2]
- git add . [^3]
- git commit [^4]
- git push [^5]
- git remote add origin [^6]
- git clone [^7]
- git pull [^8]
- git checkout -b [^9]

[^1]: Create a new git history (usually you need to run this command first for a new project).
[^2]: Let us to see which directory we are working on and what changes will be commited.
[^3]: All the files in this folder will be added to git history.
[^4]: This command lets us to write description for our history.
[^5]: This command is used for uploading local changes or content to a remote repository.
[^6]: Helps us to link local content to remote repository.
[^7]: To download existing repository.
[^8]: To download new changes in existing repository.
[^9]: Create new branch

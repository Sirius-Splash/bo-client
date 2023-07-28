# Sirius Splash Client App

# Ticketing Guidelines
1. Always make or claim a ticket before doing any work
2. Ticket naming pattern: `[scope]: [feature/task]`
   - Ticket scopes: `global`, `auth`, `chat`, `planner`, `social`, `tracker`
3. Try to create tickets with a clear "done" condition - use a checklist if applicable
4. Add yourself to a ticket to claim it
5. Before starting work, move the ticket to the "In Progress" board
6. After submitting a pull request, move the ticket to the "Under Review" board
7. If changes are requested, move the ticket to the "Changes Requested" board
8. After making changes, move the ticket back to the "Under Review" board

# Git Workflow
1. Claim a ticket
2. Update your local master branch, and then create a new feature branch
   - `git checkout master`
   - `git pull upstream master`
   - `git checkout -b [feature-branch]`
4. Make changes (try to keep them within the scope of your ticket)
   - `git add .`
   - `git commit`
5. Before making a pull request, rebase your feature branch on the upstream master to avoid conflicts
   - `git pull --rebase upstream master`
   - Run your code again to confirm that it still functions
6. Make a pull request

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

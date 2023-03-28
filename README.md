# Next.js daisyUI Boilerplate

A boilerplate for prototyping with Next.js & daisyUI, which would save your time a lot!

This project is made with...

- Next.js
- TypeScript
- Tailwind CSS
- daisyUI
- Storybook
- husky & lint-staged
- scaffdog

## Sammary of Strength

- Tailwind & Storybook are already set!
- Useful ESlint plugins and rules.
  - Tailwind className sort
  - import order
  - unused import deletion
- Pre-commit hook is also set!
- Scaffdog generates a nice component folder template!

## Structure

Scaffdog will help you a lot. See [here](#scaffdog)!

```zsh
.
├── .husky
├── .scaffdog
├── .storybook
├── public
└── src
    ├── components
    │   ├── templates
    │   ├── organisms
    │   ├── molecules
    │   └── atoms
    ├── pages
    │   └── api
    └── styles
```

## Usage

### Development

You can quickly start development with these commands.

```zsh
# package install
yarn

# start localhost
yarn dev

# start storybook
yarn sb
```

### Scaffdog

Scaffdog help us by generaing a template of project folder.
I already set some commands and the following is a description of those commands. See also [official document of scaffdog](https://github.com/cats-oss/scaffdog#scaffdog).

**Create a new component (atomic-design)**

When you create a new component, and...

① when the simple component, use this command at first.

```zsh
yarn sd-gen a
```

Then, scaffdog will ask you some questions. This is an example of creating Sample component.

```zsh
ℹ Output destination directory: "."
? Please select stage. atom # Choose atom (in atom, molecule, organism, template)
? Please enter a component name. sample

🐶 Generated 1 file!

     ✔ src/components/atoms/Sample.tsx

```

The template which would be generated is [here](https://github.com/m19e/next-daisyui-template/blob/main/.scaffdog/atomic-component.md). You can customize this file.

② when the component with props, use this command at first.

```zsh
yarn sd-gen ap
```

Then, scaffdog will ask you some questions. This is an example of creating Sample component.

```zsh
ℹ Output destination directory: "."
? Please select stage. atom # Choose atom (in atom, molecule, organism, template)
? Please enter a component name. sample

🐶 Generated 1 file!

     ✔ src/components/atoms/Sample.tsx

```

The template which would be generated is [here](https://github.com/m19e/next-daisyui-template/blob/main/.scaffdog/atomic-component-with-props.md). You can customize this file.

**Create a new page component**

When you create a new page component, and...

① when the simple page component, use this command at first.

```zsh
yarn sd-gen p
```

Then, scaffdog will ask you some questions. This is an example of creating sample page.

```zsh
ℹ Output destination directory: "."
? Please enter a page name. sample

🐶 Generated 1 file!

     ✔ src/pages/sample.tsx

```

The template which would be generated is [here](https://github.com/m19e/next-daisyui-template/blob/main/.scaffdog/page.md). You can customize this file.

② when the page component with SSR, use this command at first.

```zsh
yarn sd-gen pp
```

Then, scaffdog will ask you some questions. This is an example of creating sample page.

```zsh
ℹ Output destination directory: "."
? Please enter a page name. sample

🐶 Generated 1 file!

     ✔ src/pages/sample.tsx

```

The template which would be generated is [here](https://github.com/m19e/next-daisyui-template/blob/main/.scaffdog/page-with-props.md). You can customize this file.

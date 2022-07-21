This repo is to replicate an issue where a react app created using NX will crash when importing a react component that was published from NX.

An app such as CRA will work just fine.

Demo error:

```
nx run dash:serve:development
```

Should throw in browser:

```
Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.

Check the render method of `MoreActionsFieldButton`.
```

Imported Package: `@samelogic/react-microsurveys-editor` (https://github.com/Samelogic/microsurveys)

Specific file here: https://github.com/Samelogic/microsurveys/blob/main/packages/react-microsurveys-editor/src/lib/components/fields/shared/MoreActionsFieldButton/MoreActionsFieldButton.tsx

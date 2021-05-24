# Rel VSCode Extension

## Features

This package provides the basic syntax highlighting for the Rel language.

## Create VSIX Package From Source

Install `vsce` globally:

```
npm install -g vsce
```

Create VSIX package:

```
vsce package
```

## Release Notes

### 1.0.7

 - Renamed the language from Delve to Rel
 - Files with .rel extension are also supported

### 1.0.6

 - Added support for `@auto_number`
 - Fixed issue #3: Support formatting multi-line documentation comments to the line width

### 1.0.5

 - Fixed issue #1: Syntax highlighting of docstring

### 1.0.4

 - Minor improvements.

### 1.0.3

- Improved syntax highlighting:
  - different color for different groups of keywords
  - highlighting column names
- Added hover element for basic language constructs

### 1.0.2

 - Added `ic` as a keyword.

### 1.0.1

 - Initial release.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [Mohammad Dashti](mailto:mohammad.dashti[at]relational[dot]ai)
- [Amy Tabor](mailto:amy.tabor[at]relational[dot]ai)

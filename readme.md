# read-context-settings

A utility for reading context settings data from various Core articles (Phase 1, Presentation Layer).

## Usage

```sh
npm i read-context-settings
```
Fetches the value of text context setting in Core, either through the terminus API (Presentation Layer) or the meta data (Phase 1). Returns `false` if no setting exists.

```js
import readContextSettings from 'read-context-settings';

readContextSettings('foo') //Searches for the context setting with the name 'foo' and returns the value

```

## Authors

- Nathanael Scott ([scott.nathanael@abc.net.au](mailto:scott.nathanael@abc.net.au))

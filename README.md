[![Dependency Status](https://david-dm.org/dnode/dcontentful/status.svg)](https://david-dm.org/dnode/dcontentful)
[![devDependency Status](https://david-dm.org/dnode/dcontentful/dev-status.svg)](https://david-dm.org/dnode/dcontentful?type=dev)

# Installation

`npm i --save dcontentful`


# Initialisation

```javascript
const client = require('dcontentful').createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});
```


# Examples

## Get a specific entry

```javascript
const entryId = 'entryId';
const entry = await client.getEntry(entryId);
```

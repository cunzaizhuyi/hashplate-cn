# hashplate-cn

A tiny and fast lib to generate human-readable hash from a string in the style of China license plates.

## Use

```bash
pnpm add -D hashplate-cn
```

```javascript
import { hashplate } from "hashplate-cn";

const hash = hashplate("Hello World!");
// returns "🍢 渝F·WGVA2 🪣"
```

## Format

The hash is generated in the following format:

```
<emoji> <2 uppercase letters>-<3 digits>-<2 uppercase letters> <emoji>
```

You can remove emoji by passing the second parameter.
```javascript
import { hashplate } from "hashplate-cn";

const hash = hashplate("Hello World!", {
    hasEmoji: false,
});
// returns "渝F·WGVA2"
```
## Why?

I needed a way to generate a hash that was **readable** and **easy to recognize** to **anonymize** data. This is the result.


## Credit

forked from Project [hashplate](https://github.com/hugoattal/hashplate)
# base64u cli commands

This provides cli commands to perform URI-safe Base64 encoding (Base64U).

See [RFC 4648 Section 5 for the base64u specification](http://tools.ietf.org/html/rfc4648#section-5)

## Usage

```
> base64u-encode "Hello World"
> SGVsbG8gV29ybGQ
```

```
> base64u-decode "SGVsbG8gV29ybGQ"
> Hello World
```

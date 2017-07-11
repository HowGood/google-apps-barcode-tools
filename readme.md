# Google Sheets Barcode Formulas

These are some helpful formulas that can be used in Google
Sheets documents.

The add-on [can be found here][add-on link].
_Currently only available to users in the [howgood][howgood] domain._

**Note**: These formulas only work with these barcode types:
* UPC-A (12 digit)
* EAN-13
* GTIN-13
* GTIN-14

## Usage

Here's how to use the included formulas in a google sheet.

### `CALC_CHECK_DIGIT`

Given an incomplete barcode _without_ a check digit, this will return
the calculated digit.

```
 input: =CALC_CHECK_DIGIT(01234567890)
output: 5
```


### `VALID_CHECK_DIGIT`

Given a full barcode, this will return `TRUE` if the barcode is valid
and `FALSE` if it is invalid.

```
 input: =VALID_CHECK_DIGIT(012345678905)
output: TRUE
```


### APPEND_CHECK_DIGIT

Given an **invalid** barcode, this will return the barcode with the
check digit appended to it.

```
 input: =APPEND_CHECK_DIGIT(01234567890)
output: 012345678905
```


### BARCODE_TYPE

Given a barcode, this will identify the type of barcode as one of these
possible types:
* UPC-A
* GTIN-13
* GTIN-14

If the barcode is _invalid_, an error is returned.

```
 input: =BARCODE_TYPE(012345678905)
output: UPC-A

 input: =BARCODE_TYPE(01234567890)
output: ERROR: 01234567890 is not a valid barcode size.
```



[add-on link]: https://chrome.google.com/webstore/detail/barcode-tools/cemdkabeljghjohgmnphiedgijpmpmbb?hl=en-US
[howgood]: https://howgood.com

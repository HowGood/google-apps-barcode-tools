// vim: set ft=javascript:

/**
 * Calculates the check digit for barcode.
 *
 * @param {"0123456789"} barcode A barcode without a check digit.
 * @return {String} The check digit for barcode.
 * @customfunction
 */
function CALC_CHECK_DIGIT(barcode) {
  if (barcode.map) {
    return barcode.map(CALC_CHECK_DIGIT);
  }

  var digits = barcode.split('');
  var odds = 0;
  var evens = 0;

  for (var i=digits.length - 1; i >= 0; i--) {
    var num = +digits[i];

    if ( i % 2 === 0 ) {
      odds += num;
    } else {
      evens += num;
    }
  }

  return (10 - (odds * 3 + evens) % 10) % 10;
}


/**
 * Returns whether the check digit for barcode is valid.
 *
 * @param {"012345678905"} barcode A barcode with a check digit.
 * @return {Boolean} TRUE or FALSE if valid or invalid.
 * @customfunction
 */
function VALID_CHECK_DIGIT(barcode) {
  if (barcode.map) {
    return barcode.map(VALID_CHECK_DIGIT);
  }

  return CALC_CHECK_DIGIT(barcode.slice(0, -1)) === +barcode.slice(-1);
}


/**
 * Calculates and appends a check digit for digits.
 *
 * @param {"01234567890"} digits A barcode without a check digit.
 * @return {String} The full barcode with the calculated check digit appended.
 * @customfunction
 */
function APPEND_CHECK_DIGIT(digits) {
  if (digits.map) {
    return digits.map(APPEND_CHECK_DIGIT);
  }

  return digits + CALC_CHECK_DIGIT(digits);
}


var BarcodeTypes = {
  12: "UPC-A",
  13: "GTIN-13",
  14: "GTIN-14"
}


/**
 * Returns the barcode type based on length.
 * @param {"012345678905"} barcode A barcode.
 * @return {String} The barcode type.
 * @customfunction
 */
function BARCODE_TYPE(barcode) {
  if (barcode.map) {
    return barcode.map(BARCODE_TYPE);
  }

  if (!VALID_CHECK_DIGIT(barcode)) {
    throw new Error(
      barcode + " has an invalid check digit."
    );
  }

  var type = BarcodeTypes[barcode.length];

  if (type) {
    return type;
  }

  throw new Error(
    barcode.length + " is not a valid barcode size."
  );
}

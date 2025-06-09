// Regular expression to remove all non-alphanumeric characters from a string.
// This is useful when sanitizing brand names or identifiers.
// Matches any character that is not a letter (a-z, A-Z) or digit (0-9).

export const alphanumericOnlyRegex: RegExp = /[^a-z0-9]/gi

export const phoneRegex = /^(\+7|8)\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/u;

export const emojiRegex = /^[\p{L}\p{N}\p{P}\p{Zs}\n]*$/u;

export const emailRegex =
    // eslint-disable-next-line no-control-regex
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/u;

export const phoneClearRegex = /^(\+7|8)\d{10}$/u;

export const AmountRegex = /[^0-9.]/u;

export const PhoneRegex = /[^0-9+\-() ]/u;

export const NumericRegex = /[^0-9]/u;

export const CardLabelRegex = /^(.+?)\s•+\s(.+)$/u;

export const SpacesRegex = /\u00A0/gu;

export const CleanedValue = /<[^>]+>/gu;

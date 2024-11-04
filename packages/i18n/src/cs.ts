import type { Language } from './types';

// prettier-ignore
const language: Language = {
  code:             'cs',
  schema:           (issue) => `Neplatný typ: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
  specific: {
    base64:         (issue) => `Neplatný Base64: Obdrženo ${issue.received}`,
    bic:            (issue) => `Neplatný BIC: Obdrženo ${issue.received}`,
    bytes:          (issue) => `Neplatné bajty: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    check:          (issue) => `Neplatný vstup: Obdrženo ${issue.received}`,
    checkAsync:     (issue) => `Neplatný vstup: Obdrženo ${issue.received}`,
    checkItems:     (issue) => `Neplatná položka: Obdrženo ${issue.received}`,
    creditCard:     (issue) => `Neplatná hodnota kreditní karty: Obdrženo ${issue.received}`,
    cuid2:          (issue) => `Neplatné Cuid2: Obdrženo ${issue.received}`,
    decimal:        (issue) => `Neplatné desetinné číslo: Obdrženo ${issue.received}`,
    digits:         (issue) => `Neplatné číslice: Obdrženo ${issue.received}`,
    email:          (issue) => `Neplatný email: Obdrženo ${issue.received}`,
    emoji:          (issue) => `Neplatné emoji: Obdrženo ${issue.received}`,
    empty:          (issue) => `Neplatná délka: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    endsWith:       (issue) => `Neplatný konec: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    everyItem:      (issue) => `Neplatná položka: Obdrženo ${issue.received}`,
    excludes:       (issue) => `Neplatný obsah: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    finite:         (issue) => `Neplatné konečné číslo: Obdrženo ${issue.received}`,
    hash:           (issue) => `Neplatný hash: Obdrženo ${issue.received}`,
    hexColor:       (issue) => `Neplatná hexadecimální barva: Obdrženo ${issue.received}`,
    hexadecimal:    (issue) => `Neplatné hexadecimální číslo: Obdrženo ${issue.received}`,
    imei:           (issue) => `Neplatné IMEI: Obdrženo ${issue.received}`,
    includes:       (issue) => `Neplatný obsah: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    integer:        (issue) => `Neplatné celé číslo: Obdrženo ${issue.received}`,
    ip:             (issue) => `Neplatná IP adresa: Obdrženo ${issue.received}`,
    ipv4:           (issue) => `Neplatná IPv4 adresa: Obdrženo ${issue.received}`,
    ipv6:           (issue) => `Neplatná IPv6 adresa: Obdrženo ${issue.received}`,
    isoDate:        (issue) => `Neplatné datum: Obdrženo ${issue.received}`,
    isoDateTime:    (issue) => `Neplatné datum a čas: Obdrženo ${issue.received}`,
    isoTime:        (issue) => `Neplatný čas: Očekáváno "hh:mm", ale obdrženo ${issue.received}`,
    isoTimeSecond:  (issue) => `Neplatný čas: Očekáváno "hh:mm:ss", ale obdrženo ${issue.received}`,
    isoTimestamp:   (issue) => `Neplatný časový údaj: Očekáván ISO 8601 formát, ale obdrženo ${issue.received}`,
    isoWeek:        (issue) => `Neplatný týden: Obdrženo ${issue.received}`,
    length:         (issue) => `Neplatná délka: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    mac:            (issue) => `Neplatná MAC adresa: Obdrženo ${issue.received}`,
    mac48:          (issue) => `Neplatná 48-bitová MAC adresa: Obdrženo ${issue.received}`,
    mac64:          (issue) => `Neplatná 64-bitová MAC adresa: Obdrženo ${issue.received}`,
    maxBytes:       (issue) => `Překročena maximální hodnota v bajtech (bytes): Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    maxLength:      (issue) => `Překročena maximální délka: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    maxSize:        (issue) => `Překročena maximální velikost: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    maxValue:       (issue) => `Překročena maximální hodnota: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    mimeType:       (issue) => `Neplatný MIME typ: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    minBytes:       (issue) => `Nedostatečná minimální délka bajtů (bytes): Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    minLength:      (issue) => `Nedostatečná minimální délka: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    minSize:        (issue) => `Nedostatečná minimální velikost: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    minValue:       (issue) => `Nedostatečná minimální hodnota: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    multipleOf:     (issue) => `Neplatný násobek: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    nanoid:         (issue) => `Neplatné Nano ID: Obdrženo ${issue.received}`,
    nonEmpty:       (issue) => `Nedostatečná délka: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    notBytes:       (issue) => `Nedostatečná minimální délka bajtů (bytes): Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    notLength:      (issue) => `Nedostatečná délka: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    notSize:        (issue) => `Nedostatečná minimální velikost: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    notValue:       (issue) => `Nedostatečná minimální hodnota: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    octal:          (issue) => `Neplatné osmičkové číslo: Obdrženo ${issue.received}`,
    partialCheck:   (issue) => `Neplatný vstup: Obdrženo ${issue.received}`,
    regex:          (issue) => `Neplatný formát: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    safeInteger:    (issue) => `Neplatné bezpečné celé číslo: Obdrženo ${issue.received}`,
    size:           (issue) => `Neplatná velikost: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    someItem:       (issue) => `Neplatná položka: Obdrženo ${issue.received}`,
    startsWith:     (issue) => `Neplatný začátek: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
    ulid:           (issue) => `Neplatné ULID: Obdrženo ${issue.received}`,
    url:            (issue) => `Neplatná URL: Obdrženo ${issue.received}`,
    uuid:           (issue) => `Neplatné UUID: Obdrženo ${issue.received}`,
    value:          (issue) => `Neplatná hodnota: Očekáváno ${issue.expected}, ale obdrženo ${issue.received}`,
  },
};

export default language;
export type PhoneContact = {
  display: string;
  tel: string;
  whatsapp?: string;
};

export const phoneContacts: readonly PhoneContact[] = [
  {
    display: '+237 683 12 16 54',
    tel: 'tel:+237683121654',
    whatsapp: 'https://wa.me/237683121654',
  },
  {
    display: '+237 640 76 08 77',
    tel: 'tel:+237640760877',
  },
  {
    display: '+237 654 22 67 93',
    tel: 'tel:+237654226793',
  },
];

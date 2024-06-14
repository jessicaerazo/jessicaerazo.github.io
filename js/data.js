const allSectionQuestions = [
  {
    text: 'What category license is required for dispensing units in Florida?',
    choices: [
      { text: 'Category I Liquefied Petroleum Gas Dispenser', answer: false },
      { text: 'Category II Liquefied Petroleum Gas Dispenser', answer: true },
      { text: 'Category III Liquefied Petroleum Gas Dispenser', answer: false },
      { text: 'Category IV Liquefied Petroleum Gas Dispenser', answer: false },
    ],
  },
  {
    text: 'Which dispensing units require a license in Florida?',
    choices: [
      { text: 'Units where LP gas is stored', answer: false },
      { text: 'Units where LP gas is transported', answer: false },
      { text: 'Units where LP gas is dispensed to the consumer', answer: true },
      { text: "Units installed strictly for the owner's use", answer: false },
    ],
  },
  {
    text: 'What is the current license fee for a dispensing unit in Florida?',
    choices: [
      { text: '$200', answer: false },
      { text: '$300', answer: false },
      { text: '$400', answer: true },
      { text: '$500', answer: false },
    ],
  },
  {
    text: 'What is the minimum required amount of bodily injury and property damage liability insurance for a dispensing unit in Florida?',
    choices: [
      { text: '$500,000', answer: false },
      { text: '$750,000', answer: false },
      { text: '$1,000,000', answer: true },
      { text: '$2,000,000', answer: false },
    ],
  },
  {
    text: 'What is a qualifier in the context of LP gas dispensing units?',
    choices: [
      { text: 'An individual who manages the dispensing unit', answer: false },
      { text: 'An individual who inspects the dispensing unit', answer: false },
      {
        text: 'An individual who has successfully completed an examination administered by the Department',
        answer: true,
      },
      { text: 'An individual who repairs the dispensing unit', answer: false },
    ],
  },
  {
    text: 'When must a dispensing unit have a license to operate in Florida?',
    choices: [
      { text: 'When it is first installed', answer: false },
      { text: 'When LP gas is dispensed to consumers', answer: true },
      { text: 'When it is inspected', answer: false },
      { text: 'When the owner requests it', answer: false },
    ],
  },
  {
    text: 'Who is allowed to dispense LP gas in Florida?',
    choices: [
      { text: 'Anyone', answer: false },
      { text: 'Only licensed and trained individuals', answer: true },
      { text: 'Only the owner of the dispensing unit', answer: false },
      { text: 'Only certified inspectors', answer: false },
    ],
  },
  {
    text: 'Who is responsible for the safe operation of your dispensing unit?',
    choices: [
      { text: 'The owner', answer: false },
      { text: 'The operator', answer: true },
      { text: 'The manufacturer', answer: false },
      { text: 'The installer', answer: false },
    ],
  },
  {
    text: 'How often must a qualifier renew their registration?',
    choices: [
      { text: 'Every year', answer: false },
      { text: 'Every 2 years', answer: false },
      { text: 'Every 3 years', answer: true },
      { text: 'Every 5 years', answer: false },
    ],
  },
  {
    text: 'What are the requirements for renewing a qualifier registration?',
    choices: [
      {
        text: 'Payment of a $20 renewal fee and completion of 8 hours of approved continuing education',
        answer: false,
      },
      {
        text: 'Payment of a $20 renewal fee and completion of 16 hours of approved continuing education',
        answer: true,
      },
      {
        text: 'Payment of a $50 renewal fee and completion of 8 hours of approved continuing education',
        answer: false,
      },
      {
        text: 'Payment of a $50 renewal fee and completion of 16 hours of approved continuing education',
        answer: false,
      },
    ],
  },
  {
    text: 'What happens if a qualifier terminates active employment in the area of examination for a period exceeding 24 months?',
    choices: [
      { text: 'Their qualification is suspended', answer: false },
      { text: 'Their qualification is renewed automatically', answer: false },
      { text: 'Their qualification registration expires', answer: true },
      {
        text: 'Their qualification registration is extended for another year',
        answer: false,
      },
    ],
  },
  {
    text: 'Can a qualifier serve at more than one licensed location simultaneously?',
    choices: [
      { text: 'Yes', answer: false },
      { text: 'No', answer: true },
      { text: 'Only with special permission', answer: false },
      { text: 'Only during emergencies', answer: false },
    ],
  },
  {
    text: 'Who should be contacted to request an inspection of a newly installed dispensing unit?',
    choices: [
      { text: 'The local fire department', answer: false },
      { text: 'The gas supplier', answer: false },
      { text: 'The Bureau of Standards Field Office', answer: true },
      { text: 'The Florida Department of Health', answer: false },
    ],
  },
  {
    text: 'Can a dispensing unit be put into service without department approval?',
    choices: [
      { text: 'Yes, if the installation is complete', answer: false },
      { text: 'Yes, if the operator deems it safe', answer: false },
      { text: 'No', answer: true },
      { text: 'Only in emergency situations', answer: false },
    ],
  },
  {
    text: 'What must the inspector verify during the inspection of the dispensing unit?',
    choices: [
      {
        text: 'Proper clearances and adequate vehicular protection',
        answer: true,
      },
      { text: 'Insurance documentation', answer: false },
      { text: 'Employee training records', answer: false },
      { text: 'Customer satisfaction reports', answer: false },
    ],
  },
  {
    text: 'What responsibilities does a licensed dispenser operator assume in Florida?',
    choices: [
      {
        text: 'Proper operation and maintenance of the dispensing unit',
        answer: false,
      },
      { text: 'Training and supervision of personnel', answer: false },
      {
        text: 'Reporting accidents and vacancies in Qualifiers',
        answer: false,
      },
      { text: 'All of the above', answer: true },
    ],
  },
  {
    text: "What penalties can be levied for violations of Florida's LP gas laws?",
    choices: [
      { text: 'Fines up to $1,000 per violation', answer: false },
      { text: 'Fines up to $2,000 per violation', answer: false },
      {
        text: 'Fines up to $3,000 per violation and/or license suspension or revocation',
        answer: true,
      },
      { text: 'Fines up to $5,000 per violation', answer: false },
    ],
  },
  {
    text: 'Who is allowed to perform service or repair work on the dispensing unit?',
    choices: [
      { text: 'Any employee of the dispensing unit', answer: false },
      { text: 'Only the operator', answer: false },
      {
        text: 'Only a properly licensed LP gas company or individual',
        answer: true,
      },
      { text: 'Any licensed electrician', answer: false },
    ],
  },
  {
    text: 'When must accidents involving the dispensing unit be reported?',
    choices: [
      { text: 'Within 24 hours', answer: false },
      { text: 'Within 48 hours', answer: false },
      { text: 'Within 72 hours', answer: false },
      { text: 'Immediately upon discovery', answer: true },
    ],
  },
  {
    text: 'What kind of accidents must be reported to the Department?',
    choices: [
      { text: 'Accidents causing minor property damage', answer: false },
      {
        text: 'Accidents causing death, injury requiring professional medical treatment, or uncontrolled ignition of LP gas',
        answer: true,
      },
      { text: 'Any accident involving LP gas', answer: false },
      {
        text: 'Accidents causing less than $3,000 in property damage',
        answer: false,
      },
    ],
  },
  {
    text: 'What is the toll-free number for reporting accidents to the Department?',
    choices: [
      { text: '(800) 123-4567', answer: false },
      { text: '(888) 765-4321', answer: false },
      { text: '(866) 296-5082', answer: true },
      { text: '(855) 678-9012', answer: false },
    ],
  },
  {
    text: 'Who is responsible for training employees in the safe operation of the dispensing unit?',
    choices: [
      { text: 'The state of Florida', answer: false },
      { text: 'The gas supplier', answer: false },
      { text: 'The Bureau of Compliance', answer: false },
      { text: 'The operator of the dispensing unit', answer: true },
    ],
  },
  {
    text: 'What should be done if an employee is not trained in the safe operation of the dispensing unit?',
    choices: [
      {
        text: 'Allow them to dispense propane under supervision',
        answer: false,
      },
      {
        text: 'Contact the propane supplier or the Bureau of Compliance for assistance',
        answer: true,
      },
      { text: 'Assign them to other duties', answer: false },
      { text: 'Provide on-the-job training', answer: false },
    ],
  },
];

const numOfQuestions = Object.keys(allSectionQuestions).length;

const section1 = [
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

const section2 = [
  {
    text: 'What is propane?',
    choices: [
      { text: 'A type of liquefied petroleum gas (LP gas)', answer: true },
      { text: 'A type of natural gas', answer: false },
      { text: 'A type of gasoline', answer: false },
      { text: 'A type of diesel', answer: false },
    ],
  },
  {
    text: 'In what state is propane stored in a pressure vessel?',
    choices: [
      { text: 'As a solid', answer: false },
      {
        text: 'As both a vapor and a liquid under moderate pressure',
        answer: true,
      },
      { text: 'As a vapor only', answer: false },
      { text: 'As a liquid only', answer: false },
    ],
  },
  {
    text: 'What is added to propane to detect leaks?',
    choices: [
      { text: 'Methane', answer: false },
      { text: 'Ethyl Mercaptan', answer: true },
      { text: 'Carbon Dioxide', answer: false },
      { text: 'Oxygen', answer: false },
    ],
  },
  {
    text: 'By how much does propane expand when it changes from a liquid to a vapor state?',
    choices: [
      { text: '10 times', answer: false },
      { text: '100 times', answer: false },
      { text: '270 times', answer: true },
      { text: '500 times', answer: false },
    ],
  },
  {
    text: 'What temperature does propane boil at?',
    choices: [
      { text: '32°F', answer: false },
      { text: '0°F', answer: false },
      { text: '-44°F', answer: true },
      { text: '-100°F', answer: false },
    ],
  },
  {
    text: 'What are the dangers of skin contact with liquid propane?',
    choices: [
      { text: 'Heat burns', answer: false },
      { text: 'Freeze burns or frostbite', answer: true },
      { text: 'Chemical burns', answer: false },
      { text: 'Radiation burns', answer: false },
    ],
  },
  {
    text: 'What is the specific gravity of propane vapor compared to air?',
    choices: [
      { text: '1.00', answer: false },
      { text: '0.50', answer: false },
      { text: '1.50', answer: true },
      { text: '2.00', answer: false },
    ],
  },
  {
    text: 'What is the specific gravity of propane liquid compared to water?',
    choices: [
      { text: '1.00', answer: false },
      { text: '0.75', answer: false },
      { text: '0.504', answer: true },
      { text: '1.50', answer: false },
    ],
  },
  {
    text: 'Why is it dangerous for propane to accumulate in low areas?',
    choices: [
      { text: 'Because it is lighter than air', answer: false },
      {
        text: 'Because it is heavier than air and can displace oxygen',
        answer: true,
      },
      { text: 'Because it reacts with water', answer: false },
      { text: 'Because it is flammable', answer: false },
    ],
  },
  {
    text: 'What happens when a person is exposed to an atmosphere containing 12% or less oxygen?',
    choices: [
      { text: 'The person becomes hyperactive', answer: false },
      { text: 'The person becomes unconscious without warning', answer: true },
      { text: 'The person becomes more alert', answer: false },
      { text: 'The person develops a cough', answer: false },
    ],
  },
  {
    text: 'What is the flammable range of propane in air?',
    choices: [
      { text: '0.5% to 5%', answer: false },
      { text: '2.15% to 9.60%', answer: true },
      { text: '10% to 20%', answer: false },
      { text: '25% to 50%', answer: false },
    ],
  },
  {
    text: 'What are potential ignition sources for propane?',
    choices: [
      {
        text: 'Fans, electrical switches, auto ignitions, static electricity, or cigarettes',
        answer: true,
      },
      { text: 'Sunlight', answer: false },
      { text: 'Water', answer: false },
      { text: 'Concrete surfaces', answer: false },
    ],
  },
  {
    text: 'What precautions should be taken when handling and storing propane containers?',
    choices: [
      {
        text: 'Keep containers away from heat sources, store in an upright position, and install protective caps when not in use',
        answer: true,
      },
      { text: 'Store containers horizontally', answer: false },
      { text: 'Fill containers to 100% capacity', answer: false },
      { text: 'Keep containers in direct sunlight', answer: false },
    ],
  },
  {
    text: 'What should you do if there is a propane leak or spill?',
    choices: [
      { text: 'Ignore it if the smell is not strong', answer: false },
      {
        text: 'Keep the public away, shut off the gas supply, eliminate ignition sources, ventilate the area, and disperse the gas with water spray',
        answer: true,
      },
      { text: 'Cover the leak with a cloth', answer: false },
      {
        text: 'Panic and evacuate immediately without informing others',
        answer: false,
      },
    ],
  },
  {
    text: 'What is the appropriate response to propane inhalation?',
    choices: [
      { text: 'Give the person water to drink', answer: false },
      {
        text: 'Remove the person to fresh air and apply artificial respiration if breathing has stopped',
        answer: true,
      },
      { text: 'Induce vomiting', answer: false },
      { text: 'Apply a cold compress to the person’s head', answer: false },
    ],
  },
  {
    text: 'What type of fire extinguisher should be used for propane fires?',
    choices: [
      { text: 'Class D', answer: false },
      {
        text: 'Class A-B-C or B-C fire extinguishers and water spray',
        answer: true,
      },
      { text: 'Class K', answer: false },
      { text: 'Class E', answer: false },
    ],
  },
  {
    text: 'What is the specific gravity of propane vapor at 60°F?',
    choices: [
      { text: '1.00', answer: false },
      { text: '0.75', answer: false },
      { text: '1.50', answer: true },
      { text: '2.00', answer: false },
    ],
  },
  {
    text: 'What is the weight per gallon of propane liquid at 60°F?',
    choices: [
      { text: '3.0 pounds', answer: false },
      { text: '4.2 pounds', answer: true },
      { text: '5.0 pounds', answer: false },
      { text: '6.5 pounds', answer: false },
    ],
  },
  {
    text: 'What is the boiling point of propane at atmospheric pressure?',
    choices: [
      { text: '32°F', answer: false },
      { text: '0°F', answer: false },
      { text: '-44°F', answer: true },
      { text: '-100°F', answer: false },
    ],
  },
];

const section3 = [
  {
    text: 'What are the three types of LP gas containers you may encounter as a dispensing unit operator?',
    choices: [
      { text: 'ASME tanks, DOT cylinders, FAA cylinders', answer: true },
      { text: 'ASME tanks, ISO tanks, FAA cylinders', answer: false },
      { text: 'DOT cylinders, ISO tanks, IATA cylinders', answer: false },
      { text: 'ASME tanks, DOT cylinders, IATA cylinders', answer: false },
    ],
  },
  {
    text: 'What specifications are ASME tanks manufactured according to?',
    choices: [
      { text: 'American Society of Mechanical Engineers', answer: true },
      { text: 'U.S. Department of Transportation', answer: false },
      { text: 'Federal Aviation Administration', answer: false },
      { text: 'International Organization for Standardization', answer: false },
    ],
  },
  {
    text: 'What type of installations are ASME tanks most commonly used in?',
    choices: [
      {
        text: 'Mobile installations and motor fuel containers on vehicles',
        answer: true,
      },
      { text: 'Portable installations', answer: false },
      { text: 'Hot air balloons', answer: false },
      { text: 'Underwater applications', answer: false },
    ],
  },
  {
    text: 'What specifications are DOT cylinders manufactured according to?',
    choices: [
      { text: 'U.S. Department of Transportation', answer: true },
      { text: 'American Society of Mechanical Engineers', answer: false },
      { text: 'Federal Aviation Administration', answer: false },
      { text: 'International Organization for Standardization', answer: false },
    ],
  },
  {
    text: 'What are DOT cylinders commonly used for?',
    choices: [
      {
        text: 'Gas grills, forklift motor fuel, heating and cooking activities',
        answer: true,
      },
      {
        text: 'Mobile installations and motor fuel containers on vehicles',
        answer: false,
      },
      { text: 'Hot air balloons', answer: false },
      { text: 'Residential heating', answer: false },
    ],
  },
  {
    text: 'What agency regulates FAA containers?',
    choices: [
      { text: 'Federal Aviation Administration', answer: true },
      { text: 'American Society of Mechanical Engineers', answer: false },
      { text: 'U.S. Department of Transportation', answer: false },
      { text: 'International Organization for Standardization', answer: false },
    ],
  },
  {
    text: 'For what purpose are FAA containers used?',
    choices: [
      {
        text: 'Hot air balloons used in flight or in-flight preparation',
        answer: true,
      },
      { text: 'Portable installations', answer: false },
      { text: 'Mobile installations', answer: false },
      { text: 'Residential heating', answer: false },
    ],
  },
  {
    text: 'What is the maximum allowable working pressure on a propane container?',
    choices: [
      {
        text: 'The highest pressure a container is designed to hold safely',
        answer: true,
      },
      { text: 'The minimum pressure required for usage', answer: false },
      { text: 'The average pressure during use', answer: false },
      { text: 'The pressure at which the container will burst', answer: false },
    ],
  },
  {
    text: 'What percentage of its water capacity can a propane container be filled to?',
    choices: [
      { text: '80%', answer: true },
      { text: '90%', answer: false },
      { text: '100%', answer: false },
      { text: '70%', answer: false },
    ],
  },
  {
    text: 'What material are all ASME containers made of?',
    choices: [
      { text: 'Steel', answer: true },
      { text: 'Aluminum', answer: false },
      { text: 'Composite', answer: false },
      { text: 'Plastic', answer: false },
    ],
  },
  {
    text: 'What important information is found on an ASME tank data plate?',
    choices: [
      {
        text: 'Name and address of manufacturer, type of service, maximum allowable working pressure, water capacity in gallons, outside surface area',
        answer: true,
      },
      {
        text: 'Year of manufacture, serial number, dip tube length',
        answer: false,
      },
      {
        text: 'Material of construction, head and shell thickness, length of tank',
        answer: false,
      },
      {
        text: 'Country of origin, color of tank, diameter of tank',
        answer: false,
      },
    ],
  },
  {
    text: 'What should you do if an ASME tank has a missing or illegible data plate?',
    choices: [
      { text: 'Refuse to fill it', answer: true },
      { text: 'Fill it halfway', answer: false },
      { text: 'Ignore the issue and fill it', answer: false },
      { text: 'Check the pressure and then fill it', answer: false },
    ],
  },
  {
    text: 'Where are DOT container data markings typically found?',
    choices: [
      {
        text: 'Stamped into the body or collar (neck ring) of the container',
        answer: true,
      },
      { text: 'On a removable sticker', answer: false },
      { text: 'On a paper label attached with glue', answer: false },
      { text: 'Written in permanent marker on the surface', answer: false },
    ],
  },
  {
    text: 'What information is required on DOT container markings?',
    choices: [
      {
        text: 'Design or manufacture code, water capacity, tare weight, retest date',
        answer: true,
      },
      {
        text: 'Name of owner, date of last use, storage location',
        answer: false,
      },
      {
        text: 'Maximum allowable working pressure, outside surface area',
        answer: false,
      },
      {
        text: 'Material of construction, head and shell thickness',
        answer: false,
      },
    ],
  },
  {
    text: 'What is the tare weight of a container?',
    choices: [
      { text: 'The weight of the container when it is empty', answer: true },
      { text: 'The weight of the container when it is full', answer: false },
      { text: 'The weight of the container and its contents', answer: false },
      { text: 'The maximum weight the container can hold', answer: false },
    ],
  },
  {
    text: 'How do you determine the propane capacity of a DOT container?',
    choices: [
      { text: 'Multiply its water capacity by 42%', answer: true },
      { text: 'Multiply its water capacity by 50%', answer: false },
      { text: 'Multiply its water capacity by 75%', answer: false },
      { text: 'Multiply its water capacity by 100%', answer: false },
    ],
  },
  {
    text: 'What are the three methods of retesting and requalification of DOT cylinders?',
    choices: [
      {
        text: 'External Visual Inspection, Proof Pressure Method, Volumetric Expansion Method',
        answer: true,
      },
      {
        text: 'Internal Visual Inspection, Hydrostatic Test, Ultrasonic Test',
        answer: false,
      },
      {
        text: 'Simple Hydrostatic Test, Detailed Hydrostatic Test, Visual Inspection',
        answer: false,
      },
      { text: 'Pressure Test, Water Test, Sound Test', answer: false },
    ],
  },
  {
    text: 'How often must steel and aluminum DOT cylinders be retested after the first 12 years?',
    choices: [
      {
        text: 'Every 5, 7, or 12 years depending on the type of examination',
        answer: true,
      },
      { text: 'Every 3 years', answer: false },
      { text: 'Every 10 years', answer: false },
      { text: 'Every year', answer: false },
    ],
  },
  {
    text: 'What type of container must be marked with the RIN (retester identification number) after passing a retest?',
    choices: [
      { text: 'DOT containers', answer: true },
      { text: 'ASME containers', answer: false },
      { text: 'ISO containers', answer: false },
      { text: 'All LP gas containers', answer: false },
    ],
  },
  {
    text: 'How often must composite cylinders be visually inspected after the manufacture date?',
    choices: [
      { text: 'Every 5 years', answer: true },
      { text: 'Every 10 years', answer: false },
      { text: 'Every 3 years', answer: false },
      { text: 'Every year', answer: false },
    ],
  },
];

const section4 = [
  {
    text: 'How does a back flow check valve work?',
    choices: [
      {
        text: 'It remains open except when external fuel flow forces it closed during the filling process.',
        answer: false,
      },
      {
        text: 'It remains closed except when external fuel flow forces it open during the filling process.',
        answer: true,
      },
      { text: 'It remains open at all times.', answer: false },
      { text: 'It remains closed at all times.', answer: false },
    ],
  },
  {
    text: 'What is the purpose of a pressure relief valve?',
    choices: [
      { text: 'To release propane when the tank is empty.', answer: false },
      { text: 'To prevent the tank from being overfilled.', answer: false },
      {
        text: 'To open when the tank’s internal pressure exceeds the maximum working pressure to prevent over-pressurization.',
        answer: true,
      },
      { text: 'To measure the amount of propane in the tank.', answer: false },
    ],
  },
  {
    text: 'What information does a fixed liquid level gauge provide?',
    choices: [
      {
        text: 'The temperature of the propane inside the container.',
        answer: false,
      },
      {
        text: 'The fill level of the container, indicating when it is filled to 80% capacity.',
        answer: true,
      },
      { text: 'The pressure inside the container.', answer: false },
      { text: 'The flow rate of the propane.', answer: false },
    ],
  },
  {
    text: 'What should a vapor service valve (POL) be equipped with when disconnected?',
    choices: [
      { text: 'A pressure relief valve.', answer: false },
      { text: 'A protective cap or plug.', answer: true },
      { text: 'A float gauge.', answer: false },
      { text: 'An OPD valve.', answer: false },
    ],
  },
  {
    text: 'What does the excess flow valve in a liquid service valve do?',
    choices: [
      { text: 'It allows gas to flow only in one direction.', answer: false },
      {
        text: 'It automatically closes if the outward gas flow exceeds a safe rate.',
        answer: true,
      },
      { text: 'It measures the amount of propane in the tank.', answer: false },
      { text: 'It prevents the tank from being overfilled.', answer: false },
    ],
  },
  {
    text: 'What is an OPD and what is its purpose?',
    choices: [
      {
        text: 'An Overfill Prevention Device that detects the liquid level inside a DOT container to help prevent overfilling.',
        answer: true,
      },
      {
        text: 'An Overflow Protection Device that releases propane when the tank is too full.',
        answer: false,
      },
      {
        text: 'An Overpressure Protection Device that releases pressure when the tank is too full.',
        answer: false,
      },
      {
        text: 'An Overfill Prevention Device that measures the pressure inside a DOT container.',
        answer: false,
      },
    ],
  },
  {
    text: 'Can you rely on an OPD valve for accurate filling of a DOT cylinder?',
    choices: [
      {
        text: 'Yes, it is an approved method for accurately filling a container.',
        answer: false,
      },
      {
        text: 'No, it is designed to help prevent overfilling but should not be solely relied upon for filling accuracy.',
        answer: true,
      },
      {
        text: 'Yes, it is the only method required for filling a container.',
        answer: false,
      },
      { text: 'No, it measures the pressure inside the tank.', answer: false },
    ],
  },
  {
    text: 'Is the float gauge alone a suitable method for filling?',
    choices: [
      {
        text: 'Yes, it indicates the exact amount of propane in the tank.',
        answer: false,
      },
      {
        text: 'No, it only indicates the percentage of gas in a container and is not intended for use during the filling process.',
        answer: true,
      },
      { text: 'Yes, it measures the pressure inside the tank.', answer: false },
      { text: 'No, it is used to release excess propane.', answer: false },
    ],
  },
];

const section5 = [
  {
    text: 'Who should be authorized to transfer propane gas according to the guidelines?',
    choices: [
      { text: 'Any available personnel', answer: false },
      { text: 'Only fully trained and qualified persons', answer: true },
      { text: 'Persons over the age of 21', answer: false },
      { text: 'Supervisors only', answer: false },
    ],
  },
  {
    text: 'What is the age requirement for personnel dispensing propane according to the guidelines?',
    choices: [
      { text: 'At least 16 years old', answer: false },
      { text: 'At least 18 years old', answer: true },
      { text: 'At least 21 years old', answer: false },
      { text: 'Any age', answer: false },
    ],
  },
  {
    text: 'What training is mandatory for all dispensing unit personnel according to the law?',
    choices: [
      { text: 'Fire safety training', answer: false },
      { text: 'Emergency response training', answer: false },
      {
        text: 'Adequate training in proper LP gas transfer procedures',
        answer: true,
      },
      { text: 'Basic first aid training', answer: false },
    ],
  },
  {
    text: 'What should you do if a propane container is wrapped with a sleeve of any type of material?',
    choices: [
      { text: 'Leave the sleeve on', answer: false },
      { text: 'Remove the sleeve before filling', answer: true },
      { text: 'Fill the container with the sleeve on', answer: false },
      { text: 'Inspect the sleeve for damages', answer: false },
    ],
  },
  {
    text: 'According to Florida law, under what circumstances may propane containers not be filled?',
    choices: [
      { text: 'When the container is brand new', answer: false },
      { text: 'When you do not have the owner’s permission', answer: true },
      { text: 'When the container is less than 80% full', answer: false },
      { text: 'When the container is made of steel', answer: false },
    ],
  },
  {
    text: 'What is the purging process required for new containers before filling with propane?',
    choices: [
      {
        text: 'Filling the container to 50% capacity and venting indoors',
        answer: false,
      },
      {
        text: 'Venting the container outdoors to rapidly disperse the product, ensuring all sources of ignition are eliminated',
        answer: true,
      },
      { text: 'Using water to clean the container', answer: false },
      { text: 'Pressurizing the tank with air', answer: false },
    ],
  },
  {
    text: 'What must dispensing unit operators ensure before filling propane containers?',
    choices: [
      {
        text: 'The dispensing area is free of smoking, open flames, and potential ignition sources within 25 feet',
        answer: true,
      },
      { text: 'The dispensing area is free of water', answer: false },
      { text: 'The container is placed on a wooden surface', answer: false },
      { text: 'The container is filled to 100% capacity', answer: false },
    ],
  },
  {
    text: 'What precautions should be taken during and after the filling operation of propane containers?',
    choices: [
      { text: 'Leave the area immediately after filling', answer: false },
      {
        text: 'Ensure the attendant remains at the transfer area and checks for leaks',
        answer: true,
      },
      { text: 'Store the filled containers indoors', answer: false },
      { text: 'Use a lighter to check for leaks', answer: false },
    ],
  },
  {
    text: 'What should be done immediately after completing the container filling operation if the station is unattended?',
    choices: [
      { text: 'Leave the area immediately', answer: false },
      {
        text: 'Shut off the pump, close valves at the storage tank, coil the hose, and lock the area',
        answer: true,
      },
      { text: 'Leave the pump running for the next person', answer: false },
      { text: 'Place the filled container in the storage area', answer: false },
    ],
  },
  {
    text: 'What is the key safety rule emphasized throughout the filling procedure?',
    choices: [
      { text: 'Never wear protective clothing', answer: false },
      { text: 'Always leave the filling process unattended', answer: false },
      {
        text: 'Never leave a filling process unattended, and never give an overfilled or leaking cylinder back to a consumer',
        answer: true,
      },
      {
        text: 'Always fill the container to its maximum capacity',
        answer: false,
      },
    ],
  },
];

const section6 = [
  {
    text: 'What is the maximum amount of propane that can be transported at one time in an enclosed vehicle?',
    choices: [
      { text: '50 pounds', answer: false },
      { text: '90 pounds aggregate', answer: true },
      { text: '100 pounds', answer: false },
      { text: '45 pounds', answer: false },
    ],
  },
  {
    text: 'Why is it important to transport cylinders in a position where the pressure relief valve is in direct contact with the vapor space?',
    choices: [
      { text: 'To allow liquid propane to escape', answer: false },
      {
        text: 'To prevent the escape of propane liquid due to pressure changes',
        answer: true,
      },
      { text: 'To ensure the cylinder does not move', answer: false },
      { text: 'To keep the cylinder cool', answer: false },
    ],
  },
  {
    text: 'What precautions should be taken if a hissing noise or odor of propane is noticed during transportation?',
    choices: [
      { text: 'Continue driving and ignore it', answer: false },
      {
        text: 'Remove the cylinder immediately and avoid all sources of ignition',
        answer: true,
      },
      { text: 'Open all windows and continue driving', answer: false },
      {
        text: 'Call for roadside assistance while keeping the cylinder in the vehicle',
        answer: false,
      },
    ],
  },
  {
    text: 'Why should containers not be transported inside vehicles where ignition sources are present?',
    choices: [
      { text: 'It poses a significant fire hazard', answer: true },
      { text: 'It is illegal', answer: false },
      { text: 'It will damage the vehicle', answer: false },
      { text: 'It is inconvenient', answer: false },
    ],
  },
  {
    text: 'What steps should be taken to secure and protect propane cylinders during transportation?',
    choices: [
      { text: 'Place them loosely in the vehicle', answer: false },
      {
        text: 'Securely fasten them and transport with the pressure relief valve in direct contact with the vapor space',
        answer: true,
      },
      { text: 'Transport them horizontally', answer: false },
      { text: 'Cover them with a blanket', answer: false },
    ],
  },
  {
    text: 'What should be done if a container is found to be leaking during transportation?',
    choices: [
      { text: 'Continue transporting it and report it later', answer: false },
      {
        text: 'Immediately remove it and report to authorities or gas supplier',
        answer: true,
      },
      { text: 'Seal the leak with tape and continue', answer: false },
      { text: 'Place it in a sealed container', answer: false },
    ],
  },
  {
    text: "Why should smoking be prohibited when transporting propane containers in a vehicle's passenger area?",
    choices: [
      { text: 'It is a distraction to the driver', answer: false },
      { text: 'It presents a fire hazard', answer: true },
      { text: 'It is unpleasant for passengers', answer: false },
      { text: 'It is against the law', answer: false },
    ],
  },
  {
    text: 'Why are consumer warning and shipping labels important when transporting propane cylinders?',
    choices: [
      { text: 'They make the cylinders look official', answer: false },
      {
        text: 'They communicate important safety information and handling instructions',
        answer: true,
      },
      { text: 'They are required for insurance purposes', answer: false },
      { text: 'They increase the weight of the cylinder', answer: false },
    ],
  },
  {
    text: 'What is the largest size propane container that can be transported in an enclosed vehicle?',
    choices: [
      { text: '45 lbs propane capacity', answer: true },
      { text: '50 lbs propane capacity', answer: false },
      { text: '90 lbs propane capacity', answer: false },
      { text: '100 lbs propane capacity', answer: false },
    ],
  },
  {
    text: 'What is the largest amount of propane that can be transported in an enclosed vehicle at one time?',
    choices: [
      { text: '50 pounds', answer: false },
      { text: '90 pounds aggregate', answer: true },
      { text: '100 pounds', answer: false },
      { text: '45 pounds', answer: false },
    ],
  },
  {
    text: 'It’s a hot July day, and you just finished loading a filled container into the trunk of a car. Your customer tells you that he is headed to a nearby mall to shop for several hours before heading home. What should you do?',
    choices: [
      {
        text: 'Advise the customer to keep the vehicle cool and well-ventilated, park in a shaded area, and remove the container as soon as possible',
        answer: true,
      },
      {
        text: 'Tell the customer it is fine to leave the container in the car',
        answer: false,
      },
      {
        text: 'Instruct the customer to turn on the air conditioning and leave the car running',
        answer: false,
      },
      {
        text: 'Recommend the customer to leave the windows open slightly',
        answer: false,
      },
    ],
  },
];

const section7 = [
  {
    text: 'Why is good housekeeping important around a propane dispensing unit?',
    choices: [
      { text: 'To make the area look nice', answer: false },
      {
        text: 'To prevent combustible materials from accumulating within 10 feet of the container',
        answer: true,
      },
      { text: 'To save on cleaning costs', answer: false },
      { text: 'To attract more customers', answer: false },
    ],
  },
  {
    text: 'What are the indicators of a propane leak at a dispensing unit?',
    choices: [
      { text: 'An oily residue around fittings', answer: true },
      { text: 'A hissing sound', answer: true },
      { text: 'A smell of propane when the cabinet is opened', answer: true },
      { text: 'All of the above', answer: true },
    ],
  },
  {
    text: 'How often should a dispenser be checked for leaks, and what should be used for detection?',
    choices: [
      { text: 'Annually, using water', answer: false },
      {
        text: 'Monthly, using a leak detector solution recommended by the gas supplier',
        answer: true,
      },
      { text: 'Weekly, using ammonia-containing solutions', answer: false },
      { text: 'Daily, using soap and water', answer: false },
    ],
  },
  {
    text: 'What are the requirements for fire extinguishers at propane dispensing units?',
    choices: [
      {
        text: 'A minimum of 18 lb. dry chemical with an A-B-C rating, fully charged, located within 50 feet of the dispensing unit, and inspected annually',
        answer: true,
      },
      {
        text: 'Any size, located anywhere on the premises, and inspected bi-annually',
        answer: false,
      },
      {
        text: 'A minimum of 10 lb. dry chemical with an A-B-C rating, located within 100 feet, and inspected monthly',
        answer: false,
      },
      {
        text: 'A minimum of 20 lb. dry chemical with a B-C rating, fully charged, located within 30 feet of the dispensing unit, and inspected annually',
        answer: false,
      },
    ],
  },
  {
    text: 'Why are signs important at propane dispensing units?',
    choices: [
      { text: 'They look professional', answer: false },
      {
        text: 'They provide necessary safety information and alert individuals of potential hazards',
        answer: true,
      },
      { text: 'They attract customers', answer: false },
      { text: 'They are required by law', answer: false },
    ],
  },
  {
    text: 'What equipment is required by NFPA 58 for emergency shut off at dispensing units?',
    choices: [
      { text: 'An emergency water sprinkler system', answer: false },
      {
        text: 'An identified and accessible remote emergency shut off valve located between 3 feet and 100 feet from the liquid transfer point, and an emergency electrical shut off switch located between 20 feet and 100 feet from the dispensing device(s)',
        answer: true,
      },
      { text: 'A remote control system for all operations', answer: false },
      { text: 'A fire alarm system', answer: false },
    ],
  },
  {
    text: 'Why should dispensing unit operators regularly inspect remote shut off valves and switches?',
    choices: [
      {
        text: 'To ensure they are operational and accessible during emergencies',
        answer: true,
      },
      { text: 'To keep them clean', answer: false },
      { text: 'To make sure they are visible', answer: false },
      { text: 'To check if they need replacement', answer: false },
    ],
  },
  {
    text: 'What should be included in a dispensing unit operator checklist?',
    choices: [
      {
        text: 'Ensuring the area is free of flammable materials and weeds, checking for leaks, verifying fire extinguishers, confirming proper signage, inspecting hoses and fittings, ensuring supplies are stocked, and posting emergency contact numbers',
        answer: true,
      },
      {
        text: 'Checking the weather forecast, cleaning the windows, and ensuring all employees are wearing uniforms',
        answer: false,
      },
      {
        text: 'Verifying the stock of propane, inspecting the cash register, and checking the internet connection',
        answer: false,
      },
      {
        text: 'Checking employee schedules, monitoring customer traffic, and reviewing sales reports',
        answer: false,
      },
    ],
  },
];

const section8 = [
  {
    text: 'What precaution should be taken to protect against the rapid expansion of liquid propane?',
    choices: [
      {
        text: 'Wear proper clothing, including gloves, safety glasses or goggles, and foot protection',
        answer: true,
      },
      { text: 'Stand far away from the propane container', answer: false },
      { text: 'Keep the propane container in a shaded area', answer: false },
      { text: 'Use a fan to disperse the propane', answer: false },
    ],
  },
  {
    text: 'Describe the flammability range of propane and its implications during handling.',
    choices: [
      {
        text: 'Propane has a narrow flammability range of 2.15% to 9.60% in air, and sources of ignition should be avoided within this range',
        answer: true,
      },
      {
        text: 'Propane can burn at any concentration in air, so handling must always be cautious',
        answer: false,
      },
      {
        text: 'Propane is only flammable when mixed with air at concentrations above 10%',
        answer: false,
      },
      {
        text: 'Propane cannot ignite unless exposed to an open flame',
        answer: false,
      },
    ],
  },
  {
    text: 'Why is it crucial to approach a propane leak with the wind at your back?',
    choices: [
      {
        text: 'To avoid walking into a potentially flammable vapor cloud',
        answer: true,
      },
      { text: 'To prevent the wind from blowing propane away', answer: false },
      { text: 'To ensure you can hear the leak better', answer: false },
      { text: 'To prevent propane from entering your eyes', answer: false },
    ],
  },
  {
    text: 'What are the potential health effects of inhaling propane vapor?',
    choices: [
      {
        text: 'Dizziness, loss of coordination, unconsciousness, or even death depending on the concentration and duration of exposure',
        answer: true,
      },
      { text: 'Mild headaches and nausea', answer: false },
      { text: 'Temporary blindness and skin rashes', answer: false },
      { text: 'None, propane vapor is completely harmless', answer: false },
    ],
  },
  {
    text: 'What actions should be taken if a propane fire occurs?',
    choices: [
      {
        text: 'Immediately shut off the flow of gas by closing all valves and use a BC fire extinguisher from upwind to control small fires',
        answer: true,
      },
      { text: 'Try to extinguish the fire with water', answer: false },
      { text: 'Run away from the fire as fast as possible', answer: false },
      { text: 'Cover the fire with a blanket', answer: false },
    ],
  },
  {
    text: 'What fire safety equipment is required by Florida law at LP gas dispensing units?',
    choices: [
      {
        text: 'An 18 lb. ABC fire extinguisher and large quantities of water or water spray',
        answer: true,
      },
      { text: 'A fire hose and a bucket of sand', answer: false },
      {
        text: 'A 10 lb. ABC fire extinguisher and a fire alarm',
        answer: false,
      },
      { text: 'A CO2 fire extinguisher and a fire blanket', answer: false },
    ],
  },
  {
    text: 'How does the ignition temperature of propane compare to common sources of ignition?',
    choices: [
      {
        text: 'Propane ignites at temperatures between approximately 920°F to 1120°F, which is lower than many common ignition sources like cigarettes and light switches',
        answer: true,
      },
      {
        text: 'Propane ignites at much higher temperatures than common sources of ignition',
        answer: false,
      },
      {
        text: 'Propane can only ignite at temperatures above 2000°F',
        answer: false,
      },
      {
        text: 'Propane cannot be ignited by common household items',
        answer: false,
      },
    ],
  },
  {
    text: 'Why should the fire never be extinguished until the gas flow has been turned off?',
    choices: [
      {
        text: 'Extinguishing the fire before shutting off the gas can lead to a greater fire hazard or explosion if the fuel supply remains uninterrupted',
        answer: true,
      },
      {
        text: 'Turning off the gas does not matter as long as the fire is put out quickly',
        answer: false,
      },
      {
        text: 'The fire should be extinguished immediately regardless of gas flow',
        answer: false,
      },
      {
        text: 'Only professionals should handle extinguishing the fire',
        answer: false,
      },
    ],
  },
];

// Merge all collections into one
const allSectionQuestions = [
  ...section1,
  ...section2,
  ...section3,
  ...section4,
  ...section5,
  ...section6,
  ...section7,
  ...section8,
];

const numOfQuestions = Object.keys(allSectionQuestions).length;
console.log('num of questions', numOfQuestions);

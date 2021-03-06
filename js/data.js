//This is the data variables for the ejs to render.
var demographics = {
  "_id": {
    "$oid": "521c55ea3004e6fefc38ae9f"
  },
  "name": {
    "prefix": "Mr.",
    "given": [
      "Adam",
      "Frankie"
    ],
    "family": "Everyman"
  },
  "dob": "1954-11-24T16:00:00.000Z",
  "gender": "Male",
  "marital_status": "Married",
  "address": {
    "street": [
      "17 Daws Rd."
    ],
    "city": "Blue Bell",
    "state": "MA",
    "zip": "02368",
    "country": "US"
  },
  "phone": {
    "home": "tel:(781)555-1212",
    "work": null,
    "mobile": null
  },
  "email": null,
  "language": "fr-CN",
  "race": "White",
  "ethnicity": "Not Hispanic or Latino",
  "religion": "Christian (non-Catholic, non-specific)",
  "birthplace": {
    "state": "MA",
    "zip": "02368",
    "country": "USA"
  },
  "guardian": {
    "name": {
      "given": [
        "Ralph"
      ],
      "family": "Relative"
    },
    "relationship": "Grandfather",
    "address": {
      "street": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US"
    },
    "phone": {
      "home": "tel:(781)555-1212"
    }
  },
  "provider": {
    "organization": "Good Health Clinic",
    "phone": "tel:(781)555-1212",
    "address": {
      "street": [
        "21 North Ave"
      ],
      "city": "Burlington",
      "state": "MA",
      "zip": "02368",
      "country": "USA"
    }
  },
  "uid": 0
};
var allergies=[
  {
    "_id": {
      "$oid": "521c55ea3004e6fefc38ae9c"
    },
    "date_range": {
      "start": "2009-09-01T16:00:00.000Z",
      "end": "2010-01-02T16:00:00.000Z"
    },
    "name": "drug allergy",
    "code": "416098002",
    "code_system": "2.16.840.1.113883.6.96",
    "code_system_name": "SNOMED CT",
    "severity": "Moderate to severe",
    "reaction": {
      "name": "Wheezing",
      "code": "56018004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "reaction_type": {
      "name": "Adverse reaction to substance",
      "code": "282100009",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "allergen": {
      "name": "ASPIRIN",
      "code": "R16CO5Y76E",
      "code_system": "2.16.840.1.113883.4.9",
      "code_system_name": "UNII"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c55ea3004e6fefc38ae9d"
    },
    "date_range": {
      "start": "2009-09-01T16:00:00.000Z",
      "end": "2010-01-02T16:00:00.000Z"
    },
    "name": "drug allergy",
    "code": "416098002",
    "code_system": "2.16.840.1.113883.6.96",
    "code_system_name": "SNOMED CT",
    "severity": "Moderate to severe",
    "reaction": {
      "name": "Nausea",
      "code": "73879007",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "reaction_type": {
      "name": "Adverse reaction to substance",
      "code": "282100009",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "allergen": {
      "name": "Codeine",
      "code": "Q830PW7520",
      "code_system": "2.16.840.1.113883.4.9",
      "code_system_name": "UNII"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c55ea3004e6fefc38ae9e"
    },
    "date_range": {
      "start": "2009-09-01T16:00:00.000Z",
      "end": "2010-01-02T16:00:00.000Z"
    },
    "name": "drug allergy",
    "code": "416098002",
    "code_system": "2.16.840.1.113883.6.96",
    "code_system_name": "SNOMED CT",
    "severity": "Moderate to severe",
    "reaction": {
      "name": "Hives",
      "code": "247472004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "reaction_type": {
      "name": "Adverse reaction to substance",
      "code": "282100009",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "allergen": {
      "name": "ALLERGENIC EXTRACT, PENICILLIN",
      "code": "314422",
      "code_system": "2.16.840.1.113883.6.88",
      "code_system_name": "RxNorm"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c585f3004e6fefc38aead"
    },
    "date_range": {
      "start": "2009-09-01T16:00:00.000Z",
      "end": "2010-01-02T16:00:00.000Z"
    },
    "name": "drug allergy",
    "code": "416098002",
    "code_system": "2.16.840.1.113883.6.96",
    "code_system_name": "SNOMED CT",
    "severity": "Moderate to severe",
    "reaction": {
      "name": "Nausea",
      "code": "73879007",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "reaction_type": {
      "name": "Adverse reaction to substance",
      "code": "282100009",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "allergen": {
      "name": "Codeine",
      "code": "Q830PW7520",
      "code_system": "2.16.840.1.113883.4.9",
      "code_system_name": "UNII"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c585f3004e6fefc38aeae"
    },
    "date_range": {
      "start": "2009-09-01T16:00:00.000Z",
      "end": "2010-01-02T16:00:00.000Z"
    },
    "name": "drug allergy",
    "code": "416098002",
    "code_system": "2.16.840.1.113883.6.96",
    "code_system_name": "SNOMED CT",
    "severity": "Moderate to severe",
    "reaction": {
      "name": "Hives",
      "code": "247472004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "reaction_type": {
      "name": "Adverse reaction to substance",
      "code": "282100009",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "allergen": {
      "name": "ALLERGENIC EXTRACT, PENICILLIN",
      "code": "314422",
      "code_system": "2.16.840.1.113883.6.88",
      "code_system_name": "RxNorm"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c585f3004e6fefc38aeb1"
    },
    "date_range": {
      "start": "2009-09-01T16:00:00.000Z",
      "end": "2010-01-02T16:00:00.000Z"
    },
    "name": "drug allergy",
    "code": "416098002",
    "code_system": "2.16.840.1.113883.6.96",
    "code_system_name": "SNOMED CT",
    "severity": "Moderate to severe",
    "reaction": {
      "name": "Wheezing",
      "code": "56018004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "reaction_type": {
      "name": "Adverse reaction to substance",
      "code": "282100009",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "allergen": {
      "name": "ASPIRIN",
      "code": "R16CO5Y76E",
      "code_system": "2.16.840.1.113883.4.9",
      "code_system_name": "UNII"
    },
    "uid": 0
  }
];
var encounters=[
  {
    "_id": {
      "$oid": "521c55eb3004e6fefc38aeac"
    },
    "date": "2000-04-06T16:00:00.000Z",
    "name": "Office consultation - 15 minutes",
    "code": "99241",
    "code_system": "2.16.840.1.113883.6.12",
    "code_system_name": "CPT",
    "code_system_version": "4",
    "finding": {
      "name": "Bronchitis",
      "code": "32398004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "translation": {
      "name": "Ambulatory",
      "code": "AMB",
      "code_system": "2.16.840.1.113883.5.4",
      "code_system_name": "HL7 ActEncounterCode"
    },
    "performer": {
      "name": "General Physician",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "location": {
      "organization": "General Acute Care Hospital",
      "street": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c58603004e6fefc38aebd"
    },
    "date": "2000-04-06T16:00:00.000Z",
    "name": "Office consultation - 15 minutes",
    "code": "99241",
    "code_system": "2.16.840.1.113883.6.12",
    "code_system_name": "CPT",
    "code_system_version": "4",
    "finding": {
      "name": "Bronchitis",
      "code": "32398004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "translation": {
      "name": "Ambulatory",
      "code": "AMB",
      "code_system": "2.16.840.1.113883.5.4",
      "code_system_name": "HL7 ActEncounterCode"
    },
    "performer": {
      "name": "General Physician",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "location": {
      "organization": "General Acute Care Hospital",
      "street": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US"
    },
    "uid": 0
  }
];
var immunizations=[
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650c0"
    },
    "date": "1998-12-14T16:00:00.000Z",
    "product": {
      "name": "Influenza virus vaccine",
      "code": "88",
      "code_system": "2.16.840.1.113883.6.59",
      "code_system_name": "CVX",
      "translation": {
        "name": "influenza, live, intranasal",
        "code": "111",
        "code_system": "2.16.840.1.113883.6.59",
        "code_system_name": "CVX"
      }
    },
    "route": {
      "name": "Intramuscular injection",
      "code": "IM",
      "code_system": "2.16.840.1.113883.5.112",
      "code_system_name": "RouteOfAdministration"
    },
    "instructions": "Possible flu-like symptoms for three days.",
    "education_type": {
      "name": "immunization education",
      "code": "171044003",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650bd"
    },
    "date": "1999-10-30T16:00:00.000Z",
    "product": {
      "name": "Influenza virus vaccine",
      "code": "88",
      "code_system": "2.16.840.1.113883.6.59",
      "code_system_name": "CVX",
      "translation": {
        "name": "influenza, live, intranasal",
        "code": "111",
        "code_system": "2.16.840.1.113883.6.59",
        "code_system_name": "CVX"
      }
    },
    "route": {
      "name": "Intramuscular injection",
      "code": "IM",
      "code_system": "2.16.840.1.113883.5.112",
      "code_system_name": "RouteOfAdministration"
    },
    "instructions": "Possible flu-like symptoms for three days.",
    "education_type": {
      "name": "immunization education",
      "code": "171044003",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650c2"
    },
    "date": "1998-12-14T16:00:00.000Z",
    "product": {
      "name": "Pneumococcal polysaccharide vaccine",
      "code": "33",
      "code_system": "2.16.840.1.113883.6.59",
      "code_system_name": "CVX",
      "translation": {
        "name": "Pneumococcal NOS",
        "code": "109",
        "code_system": "2.16.840.1.113883.6.59",
        "code_system_name": "CVX"
      }
    },
    "route": {
      "name": "Intramuscular injection",
      "code": "IM",
      "code_system": "2.16.840.1.113883.5.112",
      "code_system_name": "RouteOfAdministration"
    },
    "instructions": "Possible flu-like symptoms for three days.",
    "education_type": {
      "name": "immunization education",
      "code": "171044003",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650c4"
    },
    "date": "1998-12-14T16:00:00.000Z",
    "product": {
      "name": "Tetanus and diphtheria toxoids - preservative free",
      "code": "103",
      "code_system": "2.16.840.1.113883.6.59",
      "code_system_name": "CVX",
      "translation": {
        "name": "Tetanus and diphtheria toxoids - preservative free",
        "code": "09",
        "code_system": "2.16.840.1.113883.6.59",
        "code_system_name": "CVX"
      }
    },
    "route": {
      "name": "Intramuscular injection",
      "code": "IM",
      "code_system": "2.16.840.1.113883.5.112",
      "code_system_name": "RouteOfAdministration"
    },
    "instructions": "Possible flu-like symptoms for three days.",
    "education_type": {
      "name": "immunization education",
      "code": "171044003",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "uid": 0
  }
];
var medications=[
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650b8"
    },
    "date_range": {
      "start": "2011-02-28T16:00:00.000Z",
      "end": "2012-02-29T16:00:00.000Z"
    },
    "product": {
      "name": "Albuterol 0.09 MG/ACTUAT inhalant solution",
      "code": "329498",
      "code_system": "2.16.840.1.113883.6.88",
      "translation": {
        "name": "Proventil 0.09 MG/ACTUAT inhalant solution",
        "code": "573621",
        "code_system": "2.16.840.1.113883.6.88",
        "code_system_name": "RxNorm"
      }
    },
    "dose_quantity": {
      "value": "1",
      "unit": null
    },
    "rate_quantity": {
      "value": "90",
      "unit": "ml/min"
    },
    "precondition": {
      "name": "Wheezing",
      "code": "56018004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "reason": {
      "name": "Bronchitis",
      "code": "32398004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "route": {
      "name": "RESPIRATORY (INHALATION)",
      "code": "C38216",
      "code_system": "2.16.840.1.113883.3.26.1.1",
      "code_system_name": "NCI Thesaurus"
    },
    "vehicle": {
      "name": "drug vehicle",
      "code": "412307009",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": null
    },
    "administration": {
      "name": "INHALANT",
      "code": "C42944",
      "code_system": "2.16.840.1.113883.3.26.1.1",
      "code_system_name": "NCI Thesaurus"
    },
    "prescriber": {
      "organization": "Good Health Clinic",
      "person": null
    },
    "uid": 0
  }
];
var problems=[
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650cc"
    },
    "date_range": {
      "start": "1998-02-27T16:00:00.000Z",
      "end": "2011-01-02T16:00:00.000Z"
    },
    "name": "Complaint",
    "status": "Active",
    "age": 57,
    "code": "409586006",
    "code_system": "2.16.840.1.113883.6.96",
    "uid": 0
  }
];
var procedures=[
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650c6"
    },
    "date": "2011-02-14T16:00:00.000Z",
    "name": "Colonic polypectomy",
    "code": "274025005",
    "code_system": "2.16.840.1.113883.6.96",
    "specimen": {
      "name": null,
      "code": null,
      "code_system": null
    },
    "performer": {
      "organization": null,
      "street": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US",
      "phone": null
    },
    "device": {
      "name": "Colonoscope",
      "code": "90412006",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650cb"
    },
    "date": "2011-02-02T16:00:00.000Z",
    "name": "Colonic polypectomy",
    "code": "274025005",
    "code_system": "2.16.840.1.113883.6.96",
    "specimen": {
      "name": null,
      "code": null,
      "code_system": null
    },
    "performer": {
      "organization": null,
      "street": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US",
      "phone": null
    },
    "device": {
      "name": "General Acute Care Hospital",
      "code": "GACH",
      "code_system": "2.16.840.1.113883.5.111"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650c8"
    },
    "date": "2011-02-02T16:00:00.000Z",
    "name": "Colonic polypectomy",
    "code": "274025005",
    "code_system": "2.16.840.1.113883.6.96",
    "specimen": {
      "name": null,
      "code": null,
      "code_system": null
    },
    "performer": {
      "organization": null,
      "street": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US",
      "phone": null
    },
    "device": {
      "name": "General Acute Care Hospital",
      "code": "GACH",
      "code_system": "2.16.840.1.113883.5.111"
    },
    "uid": 0
  }
];

var timeline=[
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650c1"
    },
    "title": "Influenza virus vaccine",
    "date": "1998-12-14T16:00:00.000Z",
    "dateend": "1998-12-14T16:00:00.000Z",
    "type": "immunization"
  },
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650c5"
    },
    "title": "Tetanus and diphtheria toxoids - preservative free",
    "date": "1998-12-14T16:00:00.000Z",
    "dateend": "1998-12-14T16:00:00.000Z",
    "type": "immunization"
  },
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650bf"
    },
    "title": "Influenza virus vaccine",
    "date": "1999-10-30T16:00:00.000Z",
    "dateend": "1999-10-30T16:00:00.000Z",
    "type": "immunization"
  },
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650cd"
    },
    "title": "Complaint",
    "date": "1998-02-27T16:00:00.000Z",
    "dateend": "2011-01-02T16:00:00.000Z",
    "type": "problem"
  },
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650ca"
    },
    "title": "Colonic polypectomy",
    "date": "2011-02-03T16:00:00.000Z",
    "dateend": "2011-02-02T16:00:00.000Z",
    "type": "procedure"
  },
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650c9"
    },
    "title": "Colonic polypectomy",
    "date": "2011-02-02T16:00:00.000Z",
    "dateend": "2011-02-02T16:00:00.000Z",
    "type": "procedure"
  },
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650cf"
    },
    "title": "Office consultation - 15 minutes",
    "date": "2000-04-06T16:00:00.000Z",
    "dateend": "2000-04-06T16:00:00.000Z",
    "type": "encounter"
  }
];

var labs=[
  {
    "_id": {
      "$oid": "521c55eb3004e6fefc38aea1"
    },
    "name": "CBC WO DIFFERENTIAL",
    "code": "43789009",
    "code_system": "2.16.840.1.113883.6.96",
    "code_system_name": "SNOMED CT",
    "results": [
      {
        "date": "2000-03-22T16:00:00.000Z",
        "name": "HGB",
        "value": 13,
        "unit": "g/dl",
        "code": "30313-1",
        "code_system": "2.16.840.1.113883.6.1",
        "code_system_name": "LOINC",
        "reference": {
          "low": null,
          "high": null
        }
      },
      {
        "date": "2000-03-22T16:00:00.000Z",
        "name": "WBC",
        "value": 6,
        "unit": "10+3/ul",
        "code": "33765-9",
        "code_system": "2.16.840.1.113883.6.1",
        "code_system_name": "LOINC",
        "reference": {
          "low": null,
          "high": null
        }
      },
      {
        "date": "2000-03-22T16:00:00.000Z",
        "name": "PLT",
        "value": 123,
        "unit": "10+3/ul",
        "code": "26515-7",
        "code_system": "2.16.840.1.113883.6.1",
        "code_system_name": "LOINC",
        "reference": {
          "low": null,
          "high": null
        }
      }
    ],
    "uid": 0
  },
  {
    "_id": {
      "$oid": "52293bfb3004237dd08650bc"
    },
    "name": "CBC WO DIFFERENTIAL",
    "code": "43789009",
    "code_system": "2.16.840.1.113883.6.96",
    "code_system_name": "SNOMED CT",
    "results": [
      {
        "date": "2000-03-22T16:00:00.000Z",
        "name": "HGB",
        "value": 13,
        "unit": "g/dl",
        "code": "30313-1",
        "code_system": "2.16.840.1.113883.6.1",
        "code_system_name": "LOINC",
        "reference": {
          "low": null,
          "high": null
        }
      },
      {
        "date": "2000-03-22T16:00:00.000Z",
        "name": "WBC",
        "value": 6,
        "unit": "10+3/ul",
        "code": "33765-9",
        "code_system": "2.16.840.1.113883.6.1",
        "code_system_name": "LOINC",
        "reference": {
          "low": null,
          "high": null
        }
      },
      {
        "date": "2000-03-22T16:00:00.000Z",
        "name": "PLT",
        "value": 123,
        "unit": "10+3/ul",
        "code": "26515-7",
        "code_system": "2.16.840.1.113883.6.1",
        "code_system_name": "LOINC",
        "reference": {
          "low": null,
          "high": null
        }
      }
    ],
    "uid": 0
  }
];
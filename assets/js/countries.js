//TODO: get Countries from json file..

//countries data

var data = [
{
   "id":1,
   "country":"Stany Zjednoczone",
   "soldiers":1400000,
   "land":54474,
   "air":13892,
   "naval":473,
   "continent":"Ameryka",
   "tech": 3,
   "flag": "US.png"
},
{
   "id":2,
   "country":"Rosja",
   "soldiers":766055,
   "land":61086,
   "air":3429,
   "naval":352,
   "continent":"Azja",
   "tech": 3,
   "flag": "RU.png"
},
{
   "id":3,
   "country":"Chiny",
   "soldiers":2333000,
   "land":23664,
   "air":2860,
   "naval":673,
   "continent":"Azja",
   "tech": 1,
   "flag": "CN.png"
},
{
   "id":4,
   "country":"Indie",
   "soldiers":1325000,
   "land":21164,
   "air":1905,
   "naval":202,
   "continent":"Azja",
   "tech": 1,
   "flag": "IN.png"
},
{
   "id":5,
   "country":"Wielka Brytania",
   "soldiers":146980,
   "land":6624,
   "air":936,
   "naval":66,
   "continent":"Europa",
   "tech": 3,
   "flag": "GB.png"
},
{
   "id":6,
   "country":"Francja",
   "soldiers":202761,
   "land":7888,
   "air":1264,
   "naval":113,
   "continent":"europe",
   "tech": 3,
   "flag": "FR.png"
},
{
   "id":7,
   "country":"Korea Południowa",
   "soldiers":624465,
   "land":12619,
   "air":1412,
   "naval":166,
   "continent":"asia",
   "tech": 2,
   "flag": "KP.png"
},
{
   "id":8,
   "country":"Niemcy",
   "soldiers":179046,
   "land":6481,
   "air":663,
   "naval":81,
   "continent":"europe",
   "tech": 3,
   "flag": "DE.png"
},
{
   "id":9,
   "country":"Japonia",
   "soldiers":247173,
   "land":4329,
   "air":1613,
   "naval":81,
   "continent":"asia",
   "tech": 3,
   "flag": "JP.png"
},
{
   "id":10,
   "country":"Turcja",
   "soldiers":410500,
   "land":13849,
   "air":1020,
   "naval":115,
   "continent":"asia",
   "tech": 2,
   "flag": "TR.png"
},
{
   "id":11,
   "country":"Izrael",
   "soldiers":160000,
   "land":15353,
   "air":684,
   "naval":66,
   "continent":"asia",
   "tech": 2,
   "flag": "IL.png"
},
{
   "id":12,
   "country":"Indonezja",
   "soldiers":476000,
   "land":1760,
   "air":405,
   "naval":171,
   "continent":"asia",
   "tech": 1,
   "flag": "ID.png"
},
{
   "id":13,
   "country":"Australia",
   "soldiers":58000,
   "land":2174,
   "air":408,
   "naval":52,
   "continent":"austarlia",
   "tech": 3,
   "flag": "AU.png"
},
{
   "id":14,
   "country":"Kanada",
   "soldiers":92000,
   "land":3346,
   "air":420,
   "naval":63,
   "continent":"america",
   "tech": 3,
   "flag": "CA.png"
},
{
   "id":15,
   "country":"Tajwan",
   "soldiers":290000,
   "land":7019,
   "air":804,
   "naval":102,
   "continent":"asia",
   "tech": 1,
   "flag": "TW.png"
},
{
   "id":16,
   "country":"Włochy",
   "soldiers":320000,
   "land":7835,
   "air":760,
   "naval":174,
   "continent":"europe",
   "tech": 2,
   "flag": "HU.png"
},
{
   "id":17,
   "country":"Pakistan",
   "soldiers":617000,
   "land":9629,
   "air":914,
   "naval":74,
   "continent":"asia",
   "tech": 1,
   "flag": "PK.png"
},
{
   "id":18,
   "country":"Egipt",
   "soldiers":468500,
   "land":23303,
   "air":1107,
   "naval":245,
   "continent":"africa",
   "tech": 1,
   "flag": "EG.png"
},
{
   "id":19,
   "country":"Polska",
   "soldiers":120000,
   "land":4372,
   "air":1009,
   "naval":467,
   "continent":"europe",
   "tech": 3,
   "flag": "PL.png"
},
{
   "id":20,
   "country":"Tajlandia",
   "soldiers":306000,
   "land":4070,
   "air":573,
   "naval":81,
   "continent":"asia",
   "tech":1,
   "flag": "TH.png"
},
{
   "id":21,
   "country":"Wietnam",
   "soldiers":412000,
   "land":8444,
   "air":404,
   "naval":65,
   "continent":"asia",
   "tech": 1,
   "flag": "VN.png"
},
{
   "id":22,
   "country":"Brazylia",
   "soldiers":327000,
   "land":3048,
   "air":749,
   "naval":113,
   "continent":"america",
   "tech":1,
   "flag": "BR.png"
},
{
   "id":23,
   "country":"Iran",
   "soldiers":545000,
   "land":6845,
   "air":471,
   "naval":397,
   "continent":"asia",
   "tech": 1,
   "flag": "IR.png"
},
{
   "id":24,
   "country":"Szwecja",
   "soldiers":14000,
   "land":2590,
   "air":222,
   "naval":313,
   "continent":"europe",
   "tech": 3,
   "flag": "SE.png"
},
{
   "id":25,
   "country":"Ukraina",
   "soldiers":160000,
   "land":13622,
   "air":222,
   "naval":25,
   "continent":"europe",
   "tech": 2,
   "flag": "UA.png"
},
{
   "id":26,
   "country":"Singapur",
   "soldiers":71600,
   "land":2732,
   "air":262,
   "naval":40,
   "continent":"asia",
   "tech": 2,
   "flag": "JP.png"
},
{
   "id":27,
   "country":"Algeria",
   "soldiers":512000,
   "land":3621,
   "air":448,
   "naval":60,
   "continent":"africa",
   "tech": 1,
   "flag": "DZ.png"
},
{
   "id":28,
   "country":"Arabia Saudyjska",
   "soldiers":233500,
   "land":7960,
   "air":675,
   "naval":55,
   "continent":"asia",
   "tech": 2,
   "flag": "SA.png"
},
{
   "id":29,
   "country":"Republika Czeska",
   "soldiers":21060,
   "land":1640,
   "air":112,
   "naval":0,
   "continent":"europe",
   "tech": 3,
   "flag": "CZ.png"
},
{
   "id":30,
   "country":"Szwajcaria",
   "soldiers":135000,
   "land":1480,
   "air":189,
   "naval":0,
   "continent":"europe",
   "tech":3,
   "flag": "TO.png"
},
{
   "id":31,
   "country":"Meksyk",
   "soldiers":267500,
   "land":1082,
   "air":362,
   "naval": 143,
   "continent": "america",
   "tech": 1,
   "flag": "MX.png"
},
{
   "id":32,
   "country":"Południowa Afryka",
   "soldiers":88565,
   "land":2650,
   "air":209,
   "naval":30,
   "continent":"africa",
   "tech": 2,
   "flag": "ZA.png"
},
{
   "id":33,
   "country":"Norwegia",
   "soldiers":26200,
   "land":940,
   "air":104,
   "naval":62,
   "continent":"europe",
   "tech": 3,
   "flag": "NO.png"
},
{
   "id":34,
   "country":"Austria",
   "soldiers":29500,
   "land":532,
   "air":125,
   "naval":0,
   "continent":"europe",
   "tech": 3,
   "flag": "AT.png"
},
{
   "id":35,
   "country":"Malezja",
   "soldiers":110000,
   "land":1630,
   "air":217,
   "naval":61,
   "continent":"asia",
   "tech": 2,
   "flag": "MY.png"
},
{
   "id":36,
   "country":"Korea Północna",
   "soldiers":690000,
   "land":16250,
   "air":940,
   "naval":1061,
   "continent":"asia",
   "tech": 1,
   "flag": "KP.png"
},
{
   "id":37,
   "country":"Holandia",
   "soldiers":47660,
   "land":997,
   "air":163,
   "naval":56,
   "continent":"europe",
   "tech": 3,
   "flag": "HR.png"
},
{
   "id":38,
   "country":"Hiszpania",
   "soldiers":123300,
   "land":3059,
   "air":531,
   "naval":46,
   "continent":"europe",
   "tech": 3,
   "flag": "ES.png"
},
{
   "id":39,
   "country":"Dania",
   "soldiers":25000,
   "land":742,
   "air":86,
   "naval":90,
   "continent":"europe",
   "tech": 3,
   "flag": "DK.png"
},
{
   "id":40,
   "country":"Filipiny",
   "soldiers":220000,
   "land":1093,
   "air":126,
   "naval":120,
   "continent":"philippines",
   "tech": 1,
   "flag": "PH.png"
},
{
   "id":41,
   "country":"Nigeria",
   "soldiers":130000,
   "land":1962,
   "air":98,
   "naval":75,
   "continent":"africa",
   "tech": 1,
   "flag": "NG.png"
},
{
   "id":42,
   "country":"Syria",
   "soldiers":178000,
   "land":12246,
   "air":462,
   "naval":56,
   "continent":"asia",
   "tech": 1,
   "flag": "SY.png"
},
{
   "id":43,
   "country":"Chile",
   "soldiers":60560,
   "land":2679,
   "air":236,
   "naval":69,
   "continent":"america",
   "tech": 2,
   "flag": "CL.png"
},
{
   "id":44,
   "country":"Mjanma",
   "soldiers":406000,
   "land":3027,
   "air":235,
   "naval":155,
   "continent":"asia",
   "tech": 1,
   "flag": "MM.png"
},
{
   "id":45,
   "country":"Białoruś",
   "soldiers":62000,
   "land":4982,
   "air":177,
   "naval":0,
   "continent":"europe",
   "tech": 1,
   "flag": "BY.png"
},
{
   "id":46,
   "country":"Etiopia",
   "soldiers":182500,
   "land":4068,
   "air":81,
   "naval":0,
   "continent":"africa",
   "tech": 1,
   "flag": "ET.png"
},
{
   "id":47,
   "country":"Argentyna",
   "soldiers":73100,
   "land":1234,
   "air":275,
   "naval":41,
   "continent":"america",
   "tech": 2,
   "flag": "AR.png"
},
{
   "id":48,
   "country":"Finlandia",
   "soldiers":36500,
   "land":2639,
   "air":151,
   "naval":175,
   "continent":"europe",
   "tech": 3,
   "flag": "FI.png"
},
{
   "id":49,
   "country":"Maroko",
   "soldiers":195800,
   "land":4275,
   "air":282,
   "naval":121,
   "continent":"africa",
   "tech": 1,
   "flag": "JP.png"
},
{
   "id":50,
   "country":"Emiraty Arabskie",
   "soldiers":65000,
   "land":3085,
   "air":497,
   "naval":75,
   "continent":"africa",
   "tech": 1,
   "flag": "AE.png"
},
{
   "id":51,
   "country":"Peru",
   "soldiers":120660,
   "land":1230,
   "air":239,
   "naval":60,
   "continent":"america",
   "tech": 1,
   "flag": "PE.png"
},
{
   "id":52,
   "country":"Kolumbia",
   "soldiers":444520,
   "land":1500,
   "air":493,
   "naval":232,
   "continent":"america",
   "tech": 1,
   "flag": "CO.png"
},
{
   "id":53,
   "country":"Bangladesz",
   "soldiers":400000,
   "land":1672,
   "air":138,
   "naval":100,
   "continent":"asia",
   "tech": 1,
   "flag": "BD.png"
},
{
   "id":54,
   "country":"Uzbekistan",
   "soldiers":65000,
   "land":2267,
   "air":165,
   "naval":0,
   "continent":"asia",
   "tech": 1,
   "flag": "UZ.png"

},
{
   "id":55,
   "country":"Belgia",
   "soldiers":33000,
   "land":545,
   "air":1172,
   "naval":18,
   "continent":"europe",
   "tech": 3,
   "flag": "BE.png"
},
{
   "id":56,
   "country":"Rumunia",
   "soldiers":73350,
   "land":2932,
   "air":111,
   "naval":48,
   "continent":"asia",
   "tech": 1,
   "flag": "RO.png"
},
{
   "id":57,
   "country":"Portugalia",
   "soldiers":40000,
   "land":1291,
   "air":109,
   "naval":48,
   "continent":"europe",
   "tech": 2,
   "flag": "PT.png"
},
{
   "id":58,
   "country":"Tunezja",
   "soldiers":40500,
   "land":1040,
   "air":138,
   "naval":50,
   "continent":"africa",
   "tech": 1,
   "flag": "TR.png"
},
{
   "id":59,
   "country":"Węgry",
   "soldiers":20000,
   "land":1520,
   "air":33,
   "naval":0,
   "continent":"europe",
   "tech": 2,
   "flag": "HU.png"
},
{
   "id":60,
   "country":"Słowacja",
   "soldiers":13500,
   "land":533,
   "air":44,
   "naval":0,
   "continent":"europe",
   "tech": 2,
   "flag": "SK.png"
},
{
   "id":61,
   "country":"Chorwacja",
   "soldiers":21300,
   "land":829,
   "air":68,
   "naval":28,
   "continent":"europe",
   "tech": 1,
   "flag": "HR.png"
},
{
   "id":62,
   "country":"Wenezuela",
   "soldiers":113560,
   "land":1105,
   "air":229,
   "naval":50,
   "continent":"america",
   "tech": 1,
   "flag": "VE.png"
},
{
   "id":63,
   "country":"Azerbejdżan",
   "soldiers":67000,
   "land":346,
   "air":121,
   "naval":47,
   "continent":"asia",
   "tech": 1,
   "flag": "AZ.png"
},
{
   "id":64,
   "country":"Jordania",
   "soldiers":110700,
   "land":4418,
   "air":246,
   "naval":37,
   "continent":"asia",
   "tech": 1,
   "flag": "JO.png"
},
{
   "id":65,
   "country":"Grecja",
   "soldiers":177600,
   "land":6122,
   "air":605,
   "naval":122,
   "continent":"europe",
   "tech": 1,
   "flag": "GR.png"
},
{
   "id":66,
   "country":"Kazakstan",
   "soldiers":110000,
   "land":3335,
   "air":233,
   "naval":15,
   "continent":"asia",
   "tech": 1,
   "flag": "KZ.png"
},
{
   "id":67,
   "country":"Bulgaria",
   "soldiers":35000,
   "land":1863,
   "air":68,
   "naval":29,
   "continent":"europe",
   "tech": 1,
   "flag": "BG.png"
},
{
   "id":68,
   "country":"Kenia",
   "soldiers":24120,
   "land":722,
   "air":127,
   "naval":19,
   "continent":"africa",
   "tech": 1,
   "flag": "KE.png"
},
{
   "id":69,
   "country":"Serbia",
   "soldiers":52000,
   "land":1098,
   "air":119,
   "naval":19,
   "continent":"asia",
   "tech": 1,
   "flag": "SI.png"
},
{
   "id":70,
   "country":"Bośnia i Hercegowina",
   "soldiers":15000,
   "land":414,
   "air":20,
   "naval":0,
   "continent":"europe",
   "tech": 1,
   "flag": "BA.png"
},
{
   "id":71,
   "country":"Kuwejt",
   "soldiers":15500,
   "land":1354,
   "air":106,
   "naval":38,
   "continent":"asia",
   "tech": 1,
   "flag": "KW.png"
},
{
   "id":72,
   "country":"Ekwador",
   "soldiers":37500,
   "land":717,
   "air":141,
   "naval":19,
   "continent":"america",
   "tech": 1,
   "flag": "EC.png"
},
{
   "id":73,
   "country":"Sri Lanka",
   "soldiers":161000,
   "land":854,
   "air":92,
   "naval":40,
   "continent":"asia",
   "tech": 1,
   "flag": "LK.png"
},
{
   "id":74,
   "country":"Armenia",
   "soldiers":68047,
   "land":1140,
   "air":72,
   "naval":0,
   "continent":"asia",
   "tech": 1,
   "flag": "AM.png"
},
{
   "id":75,
   "country":"Gruzja",
   "soldiers":68047,
   "land":2759,
   "air":67,
   "naval":9,
   "continent":"asia",
   "tech": 1,
   "flag": "GE.png"
},
{
   "id":76,
   "country":"Angola",
   "soldiers":87000,
   "land":1257,
   "air":269,
   "naval":55,
   "continent":"africa",
   "tech": 1,
   "flag": "AO.png"
},
{
   "id":77,
   "country":"Katar",
   "soldiers":11800,
   "land":613,
   "air":72,
   "naval":80,
   "continent":"asia",
   "tech": 1,
   "flag": "QA.png"
},
{
   "id":78,
   "country":"Kirgistan",
   "soldiers":16300,
   "land":798,
   "air":6,
   "naval":0,
   "continent":"asia",
   "tech": 1,
   "flag": "KG.png"
},
{
   "id":79,
   "country":"Jemen",
   "soldiers":66700,
   "land":4995,
   "air":180,
   "naval":30,
   "continent":"asia",
   "tech": 1,
   "flag": "YE.png"
},
{
   "id":80,
   "country":"Nowa Zelandia",
   "soldiers":8620,
   "land":179,
   "air":44,
   "naval":11,
   "continent":"austarlia",
   "tech": 2,
   "flag": "NZ.png"
},
{
   "id":81,
   "country":"Tadżykistan",
   "soldiers":6000,
   "land":96,
   "air":25,
   "naval":0,
   "continent":"asia",
   "tech": 1,
   "flag": "TJ.png"
},
{
   "id":82,
   "country":"Niger",
   "soldiers":5300,
   "land":157,
   "air":15,
   "naval":0,
   "continent":"africa",
   "tech": 1,
   "flag": "NE.png"
},

{
   "id":84,
   "country":"Nepal",
   "soldiers":95000,
   "land":1600,
   "air":21,
   "naval":0,
   "continent":"asia",
   "tech": 1,
   "flag": "NP.png"
},
{
   "id":85,
   "country":"Mongolia",
   "soldiers":10850,
   "land":1490,
   "air":10,
   "naval":0,
   "continent":"asia",
   "tech": 1,
   "flag": "MN.png"
},
{
   "id":86,
   "country":"Liban",
   "soldiers":131100,
   "land":4359,
   "air":62,
   "naval":57,
   "continent":"asia",
   "tech": 1,
   "flag": "LB.png"
},
{
   "id":87,
   "country":"Boliwia",
   "soldiers":55500,
   "land":270,
   "air":82,
   "naval":60,
   "continent":"america",
   "tech": 1,
   "flag": "BO.png"
}
]



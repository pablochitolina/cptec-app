app.factory('Dados', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var dados = [
  

 
  {
    "datetime": "2016102820",
    "data": {
      "ocis": 27,
      "prec": 90,
      "tp2m": 10,
      "ur2m": 31,
      "v10m": 72
    }
  },
  {
    "datetime": "2016102821",
    "data": {
      "ocis": 60,
      "prec": 78,
      "tp2m": -11,
      "ur2m": 1000,
      "v10m": 83
    }
  },
  
  {
    "datetime": "2016102822",
    "data": {
      "ocis": 92,
      "prec": 39,
      "tp2m": 7,
      "ur2m": 58,
      "v10m": 30
    }
  },
  {
    "datetime": "2016102823",
    "data": {
      "ocis": 3,
      "prec": 37,
      "tp2m": 4,
      "ur2m": 65,
      "v10m": 70
    }
  },
  {
    "datetime": "2016102900",
    "data": {
      "ocis": 28,
      "prec": 19,
      "tp2m": 14,
      "ur2m": 12,
      "v10m": 3
    }
  },
  {
    "datetime": "2016102901",
    "data": {
      "ocis": 95,
      "prec": 75,
      "tp2m": 32,
      "ur2m": 35,
      "v10m": 77
    }
  },
  {
    "datetime": "2016102902",
    "data": {
      "ocis": 29,
      "prec": 16,
      "tp2m": 16,
      "ur2m": 25,
      "v10m": 67
    }
  },
  {
    "datetime": "2016102903",
    "data": {
      "ocis": 99,
      "prec": 46,
      "tp2m": 26,
      "ur2m": 78,
      "v10m": 77
    }
  },
  {
    "datetime": "2016102904",
    "data": {
      "ocis": 59,
      "prec": 96,
      "tp2m": 16,
      "ur2m": 17,
      "v10m": 43
    }
  },
  {
    "datetime": "2016102905",
    "data": {
      "ocis": 98,
      "prec": 31,
      "tp2m": 0,
      "ur2m": 17,
      "v10m": 85
    }
  },
  {
    "datetime": "2016102906",
    "data": {
      "ocis": 51,
      "prec": 93,
      "tp2m": 35,
      "ur2m": 58,
      "v10m": 4
    }
  },
  {
    "datetime": "2016102907",
    "data": {
      "ocis": 23,
      "prec": 66,
      "tp2m": 34,
      "ur2m": 53,
      "v10m": 59
    }
  },
  {
    "datetime": "2016102908",
    "data": {
      "ocis": 72,
      "prec": 98,
      "tp2m": 36,
      "ur2m": 43,
      "v10m": 41
    }
  },
  {
    "datetime": "2016102909",
    "data": {
      "ocis": 57,
      "prec": 54,
      "tp2m": 21,
      "ur2m": 41,
      "v10m": 54
    }
  },
  {
    "datetime": "2016102910",
    "data": {
      "ocis": 28,
      "prec": 48,
      "tp2m": 24,
      "ur2m": 27,
      "v10m": 74
    }
  },
  {
    "datetime": "2016102911",
    "data": {
      "ocis": 5,
      "prec": 11,
      "tp2m": 26,
      "ur2m": 99,
      "v10m": 90
    }
  },
  {
    "datetime": "2016102912",
    "data": {
      "ocis": 59,
      "prec": 55,
      "tp2m": 18,
      "ur2m": 53,
      "v10m": 89
    }
  },
  {
    "datetime": "2016102913",
    "data": {
      "ocis": 27,
      "prec": 20,
      "tp2m": 27,
      "ur2m": 94,
      "v10m": 92
    }
  },
  {
    "datetime": "2016102914",
    "data": {
      "ocis": 20,
      "prec": 80,
      "tp2m": 40,
      "ur2m": 72,
      "v10m": 72
    }
  },
  {
    "datetime": "2016102915",
    "data": {
      "ocis": 30,
      "prec": 49,
      "tp2m": 5,
      "ur2m": 24,
      "v10m": 21
    }
  },
  {
    "datetime": "2016102916",
    "data": {
      "ocis": 14,
      "prec": 52,
      "tp2m": 40,
      "ur2m": 58,
      "v10m": 78
    }
  },
  {
    "datetime": "2016102917",
    "data": {
      "ocis": 29,
      "prec": 18,
      "tp2m": 37,
      "ur2m": 24,
      "v10m": 13
    }
  },
  {
    "datetime": "2016102918",
    "data": {
      "ocis": 31,
      "prec": 36,
      "tp2m": 24,
      "ur2m": 14,
      "v10m": 44
    }
  },
  {
    "datetime": "2016102919",
    "data": {
      "ocis": 55,
      "prec": 72,
      "tp2m": 34,
      "ur2m": 25,
      "v10m": 0
    }
  },
  {
    "datetime": "2016102920",
    "data": {
      "ocis": 49,
      "prec": 61,
      "tp2m": 26,
      "ur2m": 30,
      "v10m": 43
    }
  },
  {
    "datetime": "2016102921",
    "data": {
      "ocis": 4,
      "prec": 72,
      "tp2m": 26,
      "ur2m": 79,
      "v10m": 15
    }
  },
  {
    "datetime": "2016102922",
    "data": {
      "ocis": 39,
      "prec": 90,
      "tp2m": 21,
      "ur2m": 20,
      "v10m": 21
    }
  },
  {
    "datetime": "2016102923",
    "data": {
      "ocis": 7,
      "prec": 74,
      "tp2m": 17,
      "ur2m": 81,
      "v10m": 7
    }
  },
  {
    "datetime": "2016103000",
    "data": {
      "ocis": 92,
      "prec": 82,
      "tp2m": 22,
      "ur2m": 8,
      "v10m": 73
    }
  },
  {
    "datetime": "2016103001",
    "data": {
      "ocis": 45,
      "prec": 24,
      "tp2m": 35,
      "ur2m": 53,
      "v10m": 13
    }
  },
  {
    "datetime": "2016103002",
    "data": {
      "ocis": 40,
      "prec": 26,
      "tp2m": 29,
      "ur2m": 59,
      "v10m": 28
    }
  },
  {
    "datetime": "2016103003",
    "data": {
      "ocis": 35,
      "prec": 8,
      "tp2m": 4,
      "ur2m": 85,
      "v10m": 43
    }
  },
  {
    "datetime": "2016103004",
    "data": {
      "ocis": 81,
      "prec": 17,
      "tp2m": 4,
      "ur2m": 38,
      "v10m": 31
    }
  },
  {
    "datetime": "2016103005",
    "data": {
      "ocis": 7,
      "prec": 6,
      "tp2m": 17,
      "ur2m": 31,
      "v10m": 76
    }
  },
  {
    "datetime": "2016103006",
    "data": {
      "ocis": 87,
      "prec": 49,
      "tp2m": 9,
      "ur2m": 29,
      "v10m": 73
    }
  },
  {
    "datetime": "2016103007",
    "data": {
      "ocis": 1,
      "prec": 81,
      "tp2m": 14,
      "ur2m": 76,
      "v10m": 86
    }
  },
  {
    "datetime": "2016103008",
    "data": {
      "ocis": 57,
      "prec": 7,
      "tp2m": 2,
      "ur2m": 90,
      "v10m": 28
    }
  },
  {
    "datetime": "2016103009",
    "data": {
      "ocis": 25,
      "prec": 66,
      "tp2m": 2,
      "ur2m": 34,
      "v10m": 87
    }
  },
  {
    "datetime": "2016103010",
    "data": {
      "ocis": 20,
      "prec": 98,
      "tp2m": 16,
      "ur2m": 49,
      "v10m": 70
    }
  },
  {
    "datetime": "2016103011",
    "data": {
      "ocis": 21,
      "prec": 71,
      "tp2m": 38,
      "ur2m": 2,
      "v10m": 98
    }
  },
  {
    "datetime": "2016103012",
    "data": {
      "ocis": 3,
      "prec": 21,
      "tp2m": 38,
      "ur2m": 19,
      "v10m": 56
    }
  },
  {
    "datetime": "2016103013",
    "data": {
      "ocis": 79,
      "prec": 85,
      "tp2m": 20,
      "ur2m": 81,
      "v10m": 26
    }
  },
  {
    "datetime": "2016103014",
    "data": {
      "ocis": 35,
      "prec": 28,
      "tp2m": 20,
      "ur2m": 48,
      "v10m": 11
    }
  },
  {
    "datetime": "2016103015",
    "data": {
      "ocis": 50,
      "prec": 68,
      "tp2m": 5,
      "ur2m": 55,
      "v10m": 13
    }
  },
  {
    "datetime": "2016103016",
    "data": {
      "ocis": 74,
      "prec": 48,
      "tp2m": 21,
      "ur2m": 94,
      "v10m": 50
    }
  },
  {
    "datetime": "2016103017",
    "data": {
      "ocis": 75,
      "prec": 19,
      "tp2m": 22,
      "ur2m": 59,
      "v10m": 89
    }
  },
  {
    "datetime": "2016103018",
    "data": {
      "ocis": 4,
      "prec": 98,
      "tp2m": 13,
      "ur2m": 94,
      "v10m": 32
    }
  },
  {
    "datetime": "2016103019",
    "data": {
      "ocis": 61,
      "prec": 97,
      "tp2m": 6,
      "ur2m": 35,
      "v10m": 87
    }
  },
  {
    "datetime": "2016103020",
    "data": {
      "ocis": 12,
      "prec": 68,
      "tp2m": 18,
      "ur2m": 3,
      "v10m": 32
    }
  },
  {
    "datetime": "2016103021",
    "data": {
      "ocis": 16,
      "prec": 17,
      "tp2m": 1,
      "ur2m": 98,
      "v10m": 83
    }
  },
  {
    "datetime": "2016103022",
    "data": {
      "ocis": 99,
      "prec": 16,
      "tp2m": 22,
      "ur2m": 54,
      "v10m": 58
    }
  },
  {
    "datetime": "2016103023",
    "data": {
      "ocis": 18,
      "prec": 36,
      "tp2m": 6,
      "ur2m": 48,
      "v10m": 17
    }
  },
  {
    "datetime": "2016103100",
    "data": {
      "ocis": 12,
      "prec": 31,
      "tp2m": 4,
      "ur2m": 14,
      "v10m": 17
    }
  },
  {
    "datetime": "2016103101",
    "data": {
      "ocis": 29,
      "prec": 74,
      "tp2m": 27,
      "ur2m": 94,
      "v10m": 96
    }
  },
  {
    "datetime": "2016103102",
    "data": {
      "ocis": 2,
      "prec": 15,
      "tp2m": 26,
      "ur2m": 13,
      "v10m": 12
    }
  },
  {
    "datetime": "2016103103",
    "data": {
      "ocis": 95,
      "prec": 71,
      "tp2m": 27,
      "ur2m": 33,
      "v10m": 75
    }
  },
  {
    "datetime": "2016103104",
    "data": {
      "ocis": 97,
      "prec": 75,
      "tp2m": 39,
      "ur2m": 21,
      "v10m": 64
    }
  },
  {
    "datetime": "2016103105",
    "data": {
      "ocis": 40,
      "prec": 44,
      "tp2m": 19,
      "ur2m": 11,
      "v10m": 94
    }
  },
  {
    "datetime": "2016103106",
    "data": {
      "ocis": 34,
      "prec": 7,
      "tp2m": 16,
      "ur2m": 86,
      "v10m": 4
    }
  },
  {
    "datetime": "2016103107",
    "data": {
      "ocis": 63,
      "prec": 90,
      "tp2m": 25,
      "ur2m": 36,
      "v10m": 40
    }
  },
  {
    "datetime": "2016103108",
    "data": {
      "ocis": 78,
      "prec": 45,
      "tp2m": 29,
      "ur2m": 63,
      "v10m": 94
    }
  },
  {
    "datetime": "2016103109",
    "data": {
      "ocis": 10,
      "prec": 18,
      "tp2m": 8,
      "ur2m": 7,
      "v10m": 15
    }
  },
  {
    "datetime": "2016103110",
    "data": {
      "ocis": 0,
      "prec": 21,
      "tp2m": 19,
      "ur2m": 24,
      "v10m": 6
    }
  },
  {
    "datetime": "2016103111",
    "data": {
      "ocis": 61,
      "prec": 16,
      "tp2m": 32,
      "ur2m": 75,
      "v10m": 10
    }
  },
  {
    "datetime": "2016103112",
    "data": {
      "ocis": 78,
      "prec": 25,
      "tp2m": 24,
      "ur2m": 61,
      "v10m": 87
    }
  },
  {
    "datetime": "2016103113",
    "data": {
      "ocis": 74,
      "prec": 31,
      "tp2m": 36,
      "ur2m": 6,
      "v10m": 4
    }
  },
  {
    "datetime": "2016103114",
    "data": {
      "ocis": 51,
      "prec": 74,
      "tp2m": 20,
      "ur2m": 54,
      "v10m": 24
    }
  },
  {
    "datetime": "2016103115",
    "data": {
      "ocis": 93,
      "prec": 11,
      "tp2m": 30,
      "ur2m": 21,
      "v10m": 71
    }
  },
  {
    "datetime": "2016103116",
    "data": {
      "ocis": 75,
      "prec": 47,
      "tp2m": 27,
      "ur2m": 38,
      "v10m": 29
    }
  },
  {
    "datetime": "2016103117",
    "data": {
      "ocis": 38,
      "prec": 25,
      "tp2m": 4,
      "ur2m": 5,
      "v10m": 10
    }
  },
  {
    "datetime": "2016103118",
    "data": {
      "ocis": 16,
      "prec": 37,
      "tp2m": 27,
      "ur2m": 69,
      "v10m": 61
    }
  },
  {
    "datetime": "2016103119",
    "data": {
      "ocis": 47,
      "prec": 88,
      "tp2m": 21,
      "ur2m": 24,
      "v10m": 51
    }
  },
  {
    "datetime": "2016103120",
    "data": {
      "ocis": 3,
      "prec": 38,
      "tp2m": 5,
      "ur2m": 88,
      "v10m": 38
    }
  },
  {
    "datetime": "2016103121",
    "data": {
      "ocis": 35,
      "prec": 39,
      "tp2m": 0,
      "ur2m": 86,
      "v10m": 20
    }
  },
  {
    "datetime": "2016103122",
    "data": {
      "ocis": 70,
      "prec": 87,
      "tp2m": 28,
      "ur2m": 22,
      "v10m": 66
    }
  },
  {
    "datetime": "2016103123",
    "data": {
      "ocis": 5,
      "prec": 47,
      "tp2m": 19,
      "ur2m": 69,
      "v10m": 77
    }
  },
  {
    "datetime": "2016110100",
    "data": {
      "ocis": 51,
      "prec": 5,
      "tp2m": 37,
      "ur2m": 91,
      "v10m": 93
    }
  },
  {
    "datetime": "2016110101",
    "data": {
      "ocis": 47,
      "prec": 21,
      "tp2m": 30,
      "ur2m": 0,
      "v10m": 73
    }
  },
  {
    "datetime": "2016110102",
    "data": {
      "ocis": 3,
      "prec": 44,
      "tp2m": 2,
      "ur2m": 10,
      "v10m": 62
    }
  },
  {
    "datetime": "2016110103",
    "data": {
      "ocis": 99,
      "prec": 13,
      "tp2m": 12,
      "ur2m": 95,
      "v10m": 23
    }
  },
  {
    "datetime": "2016110104",
    "data": {
      "ocis": 34,
      "prec": 69,
      "tp2m": 15,
      "ur2m": 49,
      "v10m": 77
    }
  },
  {
    "datetime": "2016110105",
    "data": {
      "ocis": 40,
      "prec": 34,
      "tp2m": 33,
      "ur2m": 16,
      "v10m": 19
    }
  },
  {
    "datetime": "2016110106",
    "data": {
      "ocis": 32,
      "prec": 92,
      "tp2m": 17,
      "ur2m": 13,
      "v10m": 30
    }
  },
  {
    "datetime": "2016110107",
    "data": {
      "ocis": 95,
      "prec": 23,
      "tp2m": 39,
      "ur2m": 46,
      "v10m": 41
    }
  },
  {
    "datetime": "2016110108",
    "data": {
      "ocis": 93,
      "prec": 61,
      "tp2m": 3,
      "ur2m": 98,
      "v10m": 83
    }
  },
  {
    "datetime": "2016110109",
    "data": {
      "ocis": 25,
      "prec": 6,
      "tp2m": 12,
      "ur2m": 89,
      "v10m": 78
    }
  },
  {
    "datetime": "2016110110",
    "data": {
      "ocis": 62,
      "prec": 59,
      "tp2m": 27,
      "ur2m": 84,
      "v10m": 3
    }
  },
  {
    "datetime": "2016110111",
    "data": {
      "ocis": 60,
      "prec": 26,
      "tp2m": 9,
      "ur2m": 14,
      "v10m": 68
    }
  },
  {
    "datetime": "2016110112",
    "data": {
      "ocis": 10,
      "prec": 66,
      "tp2m": 25,
      "ur2m": 39,
      "v10m": 35
    }
  },
  {
    "datetime": "2016110113",
    "data": {
      "ocis": 20,
      "prec": 49,
      "tp2m": 23,
      "ur2m": 56,
      "v10m": 63
    }
  },
  {
    "datetime": "2016110114",
    "data": {
      "ocis": 99,
      "prec": 34,
      "tp2m": 6,
      "ur2m": 23,
      "v10m": 40
    }
  },
  {
    "datetime": "2016110115",
    "data": {
      "ocis": 8,
      "prec": 45,
      "tp2m": 3,
      "ur2m": 34,
      "v10m": 26
    }
  },
  {
    "datetime": "2016110116",
    "data": {
      "ocis": 59,
      "prec": 56,
      "tp2m": 25,
      "ur2m": 88,
      "v10m": 64
    }
  },
  {
    "datetime": "2016110117",
    "data": {
      "ocis": 28,
      "prec": 97,
      "tp2m": 18,
      "ur2m": 73,
      "v10m": 12
    }
  },
  {
    "datetime": "2016110118",
    "data": {
      "ocis": 75,
      "prec": 78,
      "tp2m": 26,
      "ur2m": 52,
      "v10m": 1
    }
  },
  {
    "datetime": "2016110119",
    "data": {
      "ocis": 25,
      "prec": 6,
      "tp2m": 22,
      "ur2m": 91,
      "v10m": 31
    }
  },
  {
    "datetime": "2016110120",
    "data": {
      "ocis": 36,
      "prec": 32,
      "tp2m": 37,
      "ur2m": 16,
      "v10m": 19
    }
  },
  {
    "datetime": "2016110121",
    "data": {
      "ocis": 91,
      "prec": 92,
      "tp2m": 27,
      "ur2m": 41,
      "v10m": 18
    }
  },
  {
    "datetime": "2016110122",
    "data": {
      "ocis": 50,
      "prec": 1,
      "tp2m": 18,
      "ur2m": 94,
      "v10m": 47
    }
  },
  {
    "datetime": "2016110123",
    "data": {
      "ocis": 73,
      "prec": 28,
      "tp2m": 7,
      "ur2m": 23,
      "v10m": 69
    }
  },
  {
    "datetime": "2016110200",
    "data": {
      "ocis": 64,
      "prec": 53,
      "tp2m": 0,
      "ur2m": 4,
      "v10m": 67
    }
  },
  {
    "datetime": "2016110201",
    "data": {
      "ocis": 32,
      "prec": 69,
      "tp2m": 7,
      "ur2m": 53,
      "v10m": 76
    }
  },
  {
    "datetime": "2016110202",
    "data": {
      "ocis": 38,
      "prec": 29,
      "tp2m": 6,
      "ur2m": 45,
      "v10m": 86
    }
  },
  {
    "datetime": "2016110203",
    "data": {
      "ocis": 28,
      "prec": 29,
      "tp2m": 25,
      "ur2m": 24,
      "v10m": 8
    }
  },
  {
    "datetime": "2016110204",
    "data": {
      "ocis": 77,
      "prec": 15,
      "tp2m": 31,
      "ur2m": 42,
      "v10m": 74
    }
  },
  {
    "datetime": "2016110205",
    "data": {
      "ocis": 30,
      "prec": 98,
      "tp2m": 8,
      "ur2m": 20,
      "v10m": 30
    }
  },
  {
    "datetime": "2016110206",
    "data": {
      "ocis": 53,
      "prec": 25,
      "tp2m": 0,
      "ur2m": 67,
      "v10m": 78
    }
  },
  {
    "datetime": "2016110207",
    "data": {
      "ocis": 75,
      "prec": 1,
      "tp2m": 21,
      "ur2m": 3,
      "v10m": 92
    }
  },
  {
    "datetime": "2016110208",
    "data": {
      "ocis": 69,
      "prec": 77,
      "tp2m": 3,
      "ur2m": 11,
      "v10m": 34
    }
  },
  {
    "datetime": "2016110209",
    "data": {
      "ocis": 16,
      "prec": 98,
      "tp2m": 36,
      "ur2m": 3,
      "v10m": 22
    }
  },
  {
    "datetime": "2016110210",
    "data": {
      "ocis": 8,
      "prec": 2,
      "tp2m": 17,
      "ur2m": 58,
      "v10m": 83
    }
  },
  {
    "datetime": "2016110211",
    "data": {
      "ocis": 74,
      "prec": 96,
      "tp2m": 28,
      "ur2m": 22,
      "v10m": 17
    }
  },
  {
    "datetime": "2016110212",
    "data": {
      "ocis": 30,
      "prec": 82,
      "tp2m": 14,
      "ur2m": 96,
      "v10m": 39
    }
  },
  {
    "datetime": "2016110213",
    "data": {
      "ocis": 61,
      "prec": 71,
      "tp2m": 27,
      "ur2m": 64,
      "v10m": 49
    }
  },
  {
    "datetime": "2016110214",
    "data": {
      "ocis": 69,
      "prec": 10,
      "tp2m": 15,
      "ur2m": 16,
      "v10m": 79
    }
  },
  {
    "datetime": "2016110215",
    "data": {
      "ocis": 55,
      "prec": 88,
      "tp2m": 7,
      "ur2m": 50,
      "v10m": 18
    }
  },
  {
    "datetime": "2016110216",
    "data": {
      "ocis": 11,
      "prec": 59,
      "tp2m": 17,
      "ur2m": 14,
      "v10m": 43
    }
  },
  {
    "datetime": "2016110217",
    "data": {
      "ocis": 34,
      "prec": 8,
      "tp2m": 22,
      "ur2m": 70,
      "v10m": 1
    }
  },
  {
    "datetime": "2016110218",
    "data": {
      "ocis": 43,
      "prec": 18,
      "tp2m": 27,
      "ur2m": 81,
      "v10m": 10
    }
  },
  {
    "datetime": "2016110219",
    "data": {
      "ocis": 52,
      "prec": 88,
      "tp2m": 7,
      "ur2m": 15,
      "v10m": 51
    }
  },
  {
    "datetime": "2016110220",
    "data": {
      "ocis": 98,
      "prec": 2,
      "tp2m": 23,
      "ur2m": 83,
      "v10m": 47
    }
  },
  {
    "datetime": "2016110221",
    "data": {
      "ocis": 38,
      "prec": 70,
      "tp2m": 28,
      "ur2m": 86,
      "v10m": 93
    }
  },
  {
    "datetime": "2016110222",
    "data": {
      "ocis": 65,
      "prec": 93,
      "tp2m": 27,
      "ur2m": 55,
      "v10m": 75
    }
  },
  {
    "datetime": "2016110223",
    "data": {
      "ocis": 87,
      "prec": 48,
      "tp2m": 28,
      "ur2m": 0,
      "v10m": 58
    }
  },
  {
    "datetime": "2016110300",
    "data": {
      "ocis": 68,
      "prec": 68,
      "tp2m": 4,
      "ur2m": 21,
      "v10m": 0
    }
  },
  {
    "datetime": "2016110301",
    "data": {
      "ocis": 29,
      "prec": 50,
      "tp2m": 35,
      "ur2m": 72,
      "v10m": 93
    }
  },
  {
    "datetime": "2016110302",
    "data": {
      "ocis": 65,
      "prec": 32,
      "tp2m": 29,
      "ur2m": 8,
      "v10m": 44
    }
  },
  {
    "datetime": "2016110303",
    "data": {
      "ocis": 91,
      "prec": 76,
      "tp2m": 34,
      "ur2m": 77,
      "v10m": 53
    }
  },
  {
    "datetime": "2016110304",
    "data": {
      "ocis": 53,
      "prec": 49,
      "tp2m": 25,
      "ur2m": 94,
      "v10m": 78
    }
  },
  {
    "datetime": "2016110305",
    "data": {
      "ocis": 3,
      "prec": 98,
      "tp2m": 38,
      "ur2m": 19,
      "v10m": 59
    }
  },
  {
    "datetime": "2016110306",
    "data": {
      "ocis": 96,
      "prec": 81,
      "tp2m": 4,
      "ur2m": 41,
      "v10m": 95
    }
  },
  {
    "datetime": "2016110307",
    "data": {
      "ocis": 67,
      "prec": 75,
      "tp2m": 3,
      "ur2m": 14,
      "v10m": 37
    }
  },
  {
    "datetime": "2016110308",
    "data": {
      "ocis": 54,
      "prec": 82,
      "tp2m": 20,
      "ur2m": 65,
      "v10m": 41
    }
  },
  {
    "datetime": "2016110309",
    "data": {
      "ocis": 9,
      "prec": 71,
      "tp2m": 36,
      "ur2m": 55,
      "v10m": 21
    }
  },
  {
    "datetime": "2016110310",
    "data": {
      "ocis": 81,
      "prec": 78,
      "tp2m": 39,
      "ur2m": 29,
      "v10m": 40
    }
  },
  {
    "datetime": "2016110311",
    "data": {
      "ocis": 30,
      "prec": 66,
      "tp2m": 32,
      "ur2m": 4,
      "v10m": 26
    }
  },
  {
    "datetime": "2016110312",
    "data": {
      "ocis": 77,
      "prec": 32,
      "tp2m": 20,
      "ur2m": 32,
      "v10m": 86
    }
  },
  {
    "datetime": "2016110313",
    "data": {
      "ocis": 96,
      "prec": 42,
      "tp2m": 18,
      "ur2m": 60,
      "v10m": 14
    }
  },
  {
    "datetime": "2016110314",
    "data": {
      "ocis": 45,
      "prec": 79,
      "tp2m": 28,
      "ur2m": 55,
      "v10m": 27
    }
  },
  {
    "datetime": "2016110315",
    "data": {
      "ocis": 91,
      "prec": 94,
      "tp2m": 28,
      "ur2m": 99,
      "v10m": 96
    }
  },
  {
    "datetime": "2016110316",
    "data": {
      "ocis": 35,
      "prec": 94,
      "tp2m": 8,
      "ur2m": 11,
      "v10m": 19
    }
  },
  {
    "datetime": "2016110317",
    "data": {
      "ocis": 56,
      "prec": 90,
      "tp2m": 14,
      "ur2m": 86,
      "v10m": 96
    }
  },
  {
    "datetime": "2016110318",
    "data": {
      "ocis": 89,
      "prec": 4,
      "tp2m": 15,
      "ur2m": 78,
      "v10m": 14
    }
  },
  {
    "datetime": "2016110319",
    "data": {
      "ocis": 34,
      "prec": 71,
      "tp2m": 13,
      "ur2m": 79,
      "v10m": 47
    }
  },
  {
    "datetime": "2016110320",
    "data": {
      "ocis": 5,
      "prec": 75,
      "tp2m": 29,
      "ur2m": 93,
      "v10m": 23
    }
  },
  {
    "datetime": "2016110321",
    "data": {
      "ocis": 21,
      "prec": 76,
      "tp2m": 16,
      "ur2m": 53,
      "v10m": 39
    }
  },
  {
    "datetime": "2016110322",
    "data": {
      "ocis": 84,
      "prec": 17,
      "tp2m": 39,
      "ur2m": 72,
      "v10m": 34
    }
  },
  {
    "datetime": "2016110323",
    "data": {
      "ocis": 54,
      "prec": 95,
      "tp2m": 22,
      "ur2m": 84,
      "v10m": 6
    }
  },
  {
    "datetime": "2016110400",
    "data": {
      "ocis": 73,
      "prec": 76,
      "tp2m": 9,
      "ur2m": 41,
      "v10m": 71
    }
  },
  {
    "datetime": "2016110401",
    "data": {
      "ocis": 96,
      "prec": 81,
      "tp2m": 14,
      "ur2m": 34,
      "v10m": 21
    }
  },
  {
    "datetime": "2016110402",
    "data": {
      "ocis": 86,
      "prec": 61,
      "tp2m": 4,
      "ur2m": 70,
      "v10m": 6
    }
  },
  {
    "datetime": "2016110403",
    "data": {
      "ocis": 37,
      "prec": 44,
      "tp2m": 24,
      "ur2m": 61,
      "v10m": 74
    }
  },
  {
    "datetime": "2016110404",
    "data": {
      "ocis": 46,
      "prec": 59,
      "tp2m": 38,
      "ur2m": 48,
      "v10m": 79
    }
  },
  {
    "datetime": "2016110405",
    "data": {
      "ocis": 42,
      "prec": 54,
      "tp2m": 8,
      "ur2m": 73,
      "v10m": 41
    }
  },
  {
    "datetime": "2016110406",
    "data": {
      "ocis": 41,
      "prec": 79,
      "tp2m": 7,
      "ur2m": 95,
      "v10m": 74
    }
  },
  {
    "datetime": "2016110407",
    "data": {
      "ocis": 5,
      "prec": 43,
      "tp2m": 1,
      "ur2m": 38,
      "v10m": 33
    }
  },
  {
    "datetime": "2016110408",
    "data": {
      "ocis": 23,
      "prec": 71,
      "tp2m": 20,
      "ur2m": 91,
      "v10m": 24
    }
  },
  {
    "datetime": "2016110409",
    "data": {
      "ocis": 11,
      "prec": 15,
      "tp2m": 0,
      "ur2m": 82,
      "v10m": 62
    }
  },
  {
    "datetime": "2016110410",
    "data": {
      "ocis": 80,
      "prec": 91,
      "tp2m": 7,
      "ur2m": 71,
      "v10m": 12
    }
  },
  {
    "datetime": "2016110411",
    "data": {
      "ocis": 74,
      "prec": 81,
      "tp2m": 26,
      "ur2m": 2,
      "v10m": 80
    }
  },
  {
    "datetime": "2016110412",
    "data": {
      "ocis": 25,
      "prec": 37,
      "tp2m": 1,
      "ur2m": 5,
      "v10m": 64
    }
  },
  {
    "datetime": "2016110413",
    "data": {
      "ocis": 88,
      "prec": 58,
      "tp2m": 32,
      "ur2m": 22,
      "v10m": 31
    }
  },
  {
    "datetime": "2016110414",
    "data": {
      "ocis": 31,
      "prec": 89,
      "tp2m": 19,
      "ur2m": 86,
      "v10m": 82
    }
  },
  {
    "datetime": "2016110415",
    "data": {
      "ocis": 86,
      "prec": 94,
      "tp2m": 22,
      "ur2m": 88,
      "v10m": 46
    }
  },
  {
    "datetime": "2016110416",
    "data": {
      "ocis": 65,
      "prec": 88,
      "tp2m": 23,
      "ur2m": 90,
      "v10m": 54
    }
  },
  {
    "datetime": "2016110417",
    "data": {
      "ocis": 13,
      "prec": 49,
      "tp2m": 31,
      "ur2m": 13,
      "v10m": 1
    }
  },
  {
    "datetime": "2016110418",
    "data": {
      "ocis": 79,
      "prec": 44,
      "tp2m": 33,
      "ur2m": 75,
      "v10m": 53
    }
  },
  {
    "datetime": "2016110419",
    "data": {
      "ocis": 81,
      "prec": 93,
      "tp2m": 40,
      "ur2m": 93,
      "v10m": 20
    }
  },
  {
    "datetime": "2016110420",
    "data": {
      "ocis": 60,
      "prec": 84,
      "tp2m": 34,
      "ur2m": 55,
      "v10m": 36
    }
  },
  {
    "datetime": "2016110421",
    "data": {
      "ocis": 92,
      "prec": 78,
      "tp2m": 32,
      "ur2m": 97,
      "v10m": 53
    }
  },
  {
    "datetime": "2016110422",
    "data": {
      "ocis": 6,
      "prec": 59,
      "tp2m": 25,
      "ur2m": 81,
      "v10m": 73
    }
  },
  {
    "datetime": "2016110423",
    "data": {
      "ocis": 0,
      "prec": 15,
      "tp2m": 2,
      "ur2m": 19,
      "v10m": 92
    }
  },
  {
    "datetime": "2016110500",
    "data": {
      "ocis": 34,
      "prec": 56,
      "tp2m": 8,
      "ur2m": 34,
      "v10m": 61
    }
  },
  {
    "datetime": "2016110501",
    "data": {
      "ocis": 44,
      "prec": 99,
      "tp2m": 26,
      "ur2m": 31,
      "v10m": 36
    }
  },
  {
    "datetime": "2016110502",
    "data": {
      "ocis": 66,
      "prec": 21,
      "tp2m": 16,
      "ur2m": 76,
      "v10m": 73
    }
  },
  {
    "datetime": "2016110503",
    "data": {
      "ocis": 93,
      "prec": 92,
      "tp2m": 38,
      "ur2m": 43,
      "v10m": 8
    }
  },
  {
    "datetime": "2016110504",
    "data": {
      "ocis": 41,
      "prec": 47,
      "tp2m": 34,
      "ur2m": 39,
      "v10m": 92
    }
  },
  {
    "datetime": "2016110505",
    "data": {
      "ocis": 18,
      "prec": 67,
      "tp2m": 5,
      "ur2m": 39,
      "v10m": 97
    }
  },
  {
    "datetime": "2016110506",
    "data": {
      "ocis": 7,
      "prec": 59,
      "tp2m": 27,
      "ur2m": 55,
      "v10m": 54
    }
  },
  {
    "datetime": "2016110507",
    "data": {
      "ocis": 3,
      "prec": 61,
      "tp2m": 14,
      "ur2m": 68,
      "v10m": 90
    }
  },
  {
    "datetime": "2016110508",
    "data": {
      "ocis": 82,
      "prec": 56,
      "tp2m": 15,
      "ur2m": 70,
      "v10m": 56
    }
  },
  {
    "datetime": "2016110509",
    "data": {
      "ocis": 17,
      "prec": 40,
      "tp2m": 18,
      "ur2m": 38,
      "v10m": 80
    }
  },
  {
    "datetime": "2016110510",
    "data": {
      "ocis": 81,
      "prec": 18,
      "tp2m": 39,
      "ur2m": 54,
      "v10m": 3
    }
  },
  {
    "datetime": "2016110511",
    "data": {
      "ocis": 40,
      "prec": 28,
      "tp2m": 4,
      "ur2m": 84,
      "v10m": 60
    }
  },
  {
    "datetime": "2016110512",
    "data": {
      "ocis": 33,
      "prec": 34,
      "tp2m": 2,
      "ur2m": 50,
      "v10m": 50
    }
  },
  {
    "datetime": "2016110513",
    "data": {
      "ocis": 42,
      "prec": 81,
      "tp2m": 34,
      "ur2m": 42,
      "v10m": 58
    }
  },
  {
    "datetime": "2016110514",
    "data": {
      "ocis": 92,
      "prec": 56,
      "tp2m": 23,
      "ur2m": 28,
      "v10m": 27
    }
  },
  {
    "datetime": "2016110515",
    "data": {
      "ocis": 71,
      "prec": 84,
      "tp2m": 32,
      "ur2m": 70,
      "v10m": 55
    }
  },
  {
    "datetime": "2016110516",
    "data": {
      "ocis": 82,
      "prec": 7,
      "tp2m": 34,
      "ur2m": 12,
      "v10m": 24
    }
  },
  {
    "datetime": "2016110517",
    "data": {
      "ocis": 64,
      "prec": 0,
      "tp2m": 29,
      "ur2m": 96,
      "v10m": 83
    }
  },
  {
    "datetime": "2016110518",
    "data": {
      "ocis": 92,
      "prec": 27,
      "tp2m": 7,
      "ur2m": 62,
      "v10m": 47
    }
  },
  {
    "datetime": "2016110519",
    "data": {
      "ocis": 99,
      "prec": 2,
      "tp2m": 17,
      "ur2m": 48,
      "v10m": 14
    }
  },
  {
    "datetime": "2016110520",
    "data": {
      "ocis": 43,
      "prec": 66,
      "tp2m": 0,
      "ur2m": 44,
      "v10m": 11
    }
  },
  {
    "datetime": "2016110521",
    "data": {
      "ocis": 51,
      "prec": 37,
      "tp2m": 40,
      "ur2m": 15,
      "v10m": 39
    }
  },
  {
    "datetime": "2016110522",
    "data": {
      "ocis": 29,
      "prec": 97,
      "tp2m": 32,
      "ur2m": 26,
      "v10m": 25
    }
  },
  {
    "datetime": "2016110523",
    "data": {
      "ocis": 8,
      "prec": 4,
      "tp2m": 38,
      "ur2m": 33,
      "v10m": 59
    }
  },
  {
    "datetime": "2016110600",
    "data": {
      "ocis": 5,
      "prec": 5,
      "tp2m": 27,
      "ur2m": 70,
      "v10m": 0
    }
  },
  {
    "datetime": "2016110601",
    "data": {
      "ocis": 95,
      "prec": 96,
      "tp2m": 26,
      "ur2m": 1,
      "v10m": 58
    }
  },
  {
    "datetime": "2016110602",
    "data": {
      "ocis": 14,
      "prec": 4,
      "tp2m": 33,
      "ur2m": 70,
      "v10m": 74
    }
  },
  {
    "datetime": "2016110603",
    "data": {
      "ocis": 82,
      "prec": 5,
      "tp2m": 3,
      "ur2m": 26,
      "v10m": 36
    }
  },
  {
    "datetime": "2016110604",
    "data": {
      "ocis": 63,
      "prec": 84,
      "tp2m": 3,
      "ur2m": 70,
      "v10m": 14
    }
  },
  {
    "datetime": "2016110605",
    "data": {
      "ocis": 49,
      "prec": 59,
      "tp2m": 25,
      "ur2m": 61,
      "v10m": 37
    }
  },
  {
    "datetime": "2016110606",
    "data": {
      "ocis": 49,
      "prec": 30,
      "tp2m": 18,
      "ur2m": 30,
      "v10m": 91
    }
  },
  {
    "datetime": "2016110607",
    "data": {
      "ocis": 88,
      "prec": 3,
      "tp2m": 38,
      "ur2m": 70,
      "v10m": 6
    }
  },
  {
    "datetime": "2016110608",
    "data": {
      "ocis": 50,
      "prec": 13,
      "tp2m": 3,
      "ur2m": 32,
      "v10m": 89
    }
  },
  {
    "datetime": "2016110609",
    "data": {
      "ocis": 54,
      "prec": 42,
      "tp2m": 12,
      "ur2m": 40,
      "v10m": 17
    }
  },
  {
    "datetime": "2016110610",
    "data": {
      "ocis": 21,
      "prec": 72,
      "tp2m": 7,
      "ur2m": 62,
      "v10m": 24
    }
  },
  {
    "datetime": "2016110611",
    "data": {
      "ocis": 41,
      "prec": 97,
      "tp2m": 35,
      "ur2m": 47,
      "v10m": 98
    }
  },
  {
    "datetime": "2016110612",
    "data": {
      "ocis": 68,
      "prec": 12,
      "tp2m": 29,
      "ur2m": 34,
      "v10m": 87
    }
  },
  {
    "datetime": "2016110613",
    "data": {
      "ocis": 94,
      "prec": 13,
      "tp2m": 20,
      "ur2m": 70,
      "v10m": 18
    }
  },
  {
    "datetime": "2016110614",
    "data": {
      "ocis": 70,
      "prec": 84,
      "tp2m": 26,
      "ur2m": 47,
      "v10m": 94
    }
  },
  {
    "datetime": "2016110615",
    "data": {
      "ocis": 49,
      "prec": 92,
      "tp2m": 14,
      "ur2m": 83,
      "v10m": 22
    }
  },
  {
    "datetime": "2016110616",
    "data": {
      "ocis": 56,
      "prec": 42,
      "tp2m": 32,
      "ur2m": 69,
      "v10m": 40
    }
  },
  {
    "datetime": "2016110617",
    "data": {
      "ocis": 11,
      "prec": 50,
      "tp2m": 25,
      "ur2m": 66,
      "v10m": 29
    }
  },
  {
    "datetime": "2016110618",
    "data": {
      "ocis": 30,
      "prec": 94,
      "tp2m": 3,
      "ur2m": 21,
      "v10m": 18
    }
  },
  {
    "datetime": "2016110619",
    "data": {
      "ocis": 96,
      "prec": 32,
      "tp2m": 36,
      "ur2m": 28,
      "v10m": 7
    }
  },
  {
    "datetime": "2016110620",
    "data": {
      "ocis": 74,
      "prec": 86,
      "tp2m": 20,
      "ur2m": 33,
      "v10m": 31
    }
  },
  {
    "datetime": "2016110621",
    "data": {
      "ocis": 95,
      "prec": 0,
      "tp2m": 24,
      "ur2m": 43,
      "v10m": 79
    }
  },
  {
    "datetime": "2016110622",
    "data": {
      "ocis": 62,
      "prec": 93,
      "tp2m": 2,
      "ur2m": 40,
      "v10m": 80
    }
  },
  {
    "datetime": "2016110623",
    "data": {
      "ocis": 60,
      "prec": 95,
      "tp2m": 21,
      "ur2m": 30,
      "v10m": 61
    }
  },
  {
    "datetime": "2016110700",
    "data": {
      "ocis": 11,
      "prec": 16,
      "tp2m": 28,
      "ur2m": 82,
      "v10m": 29
    }
  },
  {
    "datetime": "2016110701",
    "data": {
      "ocis": 95,
      "prec": 76,
      "tp2m": 16,
      "ur2m": 22,
      "v10m": 31
    }
  },
  {
    "datetime": "2016110702",
    "data": {
      "ocis": 83,
      "prec": 96,
      "tp2m": 5,
      "ur2m": 91,
      "v10m": 60
    }
  },
  {
    "datetime": "2016110703",
    "data": {
      "ocis": 55,
      "prec": 91,
      "tp2m": 37,
      "ur2m": 13,
      "v10m": 50
    }
  },
  {
    "datetime": "2016110704",
    "data": {
      "ocis": 31,
      "prec": 43,
      "tp2m": 16,
      "ur2m": 43,
      "v10m": 57
    }
  },
  {
    "datetime": "2016110705",
    "data": {
      "ocis": 26,
      "prec": 47,
      "tp2m": 1,
      "ur2m": 33,
      "v10m": 0
    }
  },
  {
    "datetime": "2016110706",
    "data": {
      "ocis": 84,
      "prec": 39,
      "tp2m": 5,
      "ur2m": 91,
      "v10m": 49
    }
  },
  {
    "datetime": "2016110707",
    "data": {
      "ocis": 71,
      "prec": 26,
      "tp2m": 28,
      "ur2m": 67,
      "v10m": 72
    }
  },
  {
    "datetime": "2016110708",
    "data": {
      "ocis": 1,
      "prec": 55,
      "tp2m": 22,
      "ur2m": 86,
      "v10m": 54
    }
  },
  {
    "datetime": "2016110709",
    "data": {
      "ocis": 62,
      "prec": 38,
      "tp2m": 19,
      "ur2m": 37,
      "v10m": 99
    }
  },
  {
    "datetime": "2016110710",
    "data": {
      "ocis": 6,
      "prec": 97,
      "tp2m": 3,
      "ur2m": 34,
      "v10m": 49
    }
  },
  {
    "datetime": "2016110711",
    "data": {
      "ocis": 6,
      "prec": 38,
      "tp2m": 40,
      "ur2m": 10,
      "v10m": 61
    }
  },
  {
    "datetime": "2016110712",
    "data": {
      "ocis": 69,
      "prec": 12,
      "tp2m": 34,
      "ur2m": 18,
      "v10m": 40
    }
  },
  {
    "datetime": "2016110713",
    "data": {
      "ocis": 74,
      "prec": 26,
      "tp2m": 27,
      "ur2m": 9,
      "v10m": 62
    }
  },
  {
    "datetime": "2016110714",
    "data": {
      "ocis": 51,
      "prec": 7,
      "tp2m": 3,
      "ur2m": 12,
      "v10m": 81
    }
  },
  {
    "datetime": "2016110715",
    "data": {
      "ocis": 90,
      "prec": 17,
      "tp2m": 32,
      "ur2m": 41,
      "v10m": 2
    }
  },
  {
    "datetime": "2016110716",
    "data": {
      "ocis": 39,
      "prec": 8,
      "tp2m": 4,
      "ur2m": 15,
      "v10m": 6
    }
  },
  {
    "datetime": "2016110717",
    "data": {
      "ocis": 7,
      "prec": 13,
      "tp2m": 21,
      "ur2m": 20,
      "v10m": 56
    }
  },
  {
    "datetime": "2016110718",
    "data": {
      "ocis": 3,
      "prec": 75,
      "tp2m": 14,
      "ur2m": 12,
      "v10m": 62
    }
  },
  {
    "datetime": "2016110719",
    "data": {
      "ocis": 64,
      "prec": 0,
      "tp2m": 12,
      "ur2m": 45,
      "v10m": 23
    }
  },
  {
    "datetime": "2016110720",
    "data": {
      "ocis": 3,
      "prec": 98,
      "tp2m": 18,
      "ur2m": 94,
      "v10m": 41
    }
  },
  {
    "datetime": "2016110721",
    "data": {
      "ocis": 87,
      "prec": 14,
      "tp2m": 29,
      "ur2m": 28,
      "v10m": 62
    }
  },
  {
    "datetime": "2016110722",
    "data": {
      "ocis": 47,
      "prec": 46,
      "tp2m": 31,
      "ur2m": 24,
      "v10m": 20
    }
  },
  {
    "datetime": "2016110723",
    "data": {
      "ocis": 6,
      "prec": 89,
      "tp2m": 18,
      "ur2m": 30,
      "v10m": 32
    }
  },
  {
    "datetime": "2016110800",
    "data": {
      "ocis": 62,
      "prec": 4,
      "tp2m": 28,
      "ur2m": 65,
      "v10m": 31
    }
  },
  {
    "datetime": "2016110801",
    "data": {
      "ocis": 86,
      "prec": 99,
      "tp2m": 18,
      "ur2m": 26,
      "v10m": 20
    }
  },
  {
    "datetime": "2016110802",
    "data": {
      "ocis": 79,
      "prec": 84,
      "tp2m": 7,
      "ur2m": 89,
      "v10m": 3
    }
  },
  {
    "datetime": "2016110803",
    "data": {
      "ocis": 89,
      "prec": 36,
      "tp2m": 23,
      "ur2m": 24,
      "v10m": 90
    }
  },
  {
    "datetime": "2016110804",
    "data": {
      "ocis": 82,
      "prec": 51,
      "tp2m": 25,
      "ur2m": 11,
      "v10m": 29
    }
  },
  {
    "datetime": "2016110805",
    "data": {
      "ocis": 48,
      "prec": 71,
      "tp2m": 15,
      "ur2m": 27,
      "v10m": 99
    }
  },
  {
    "datetime": "2016110806",
    "data": {
      "ocis": 50,
      "prec": 12,
      "tp2m": 12,
      "ur2m": 5,
      "v10m": 86
    }
  },
  {
    "datetime": "2016110807",
    "data": {
      "ocis": 44,
      "prec": 78,
      "tp2m": 4,
      "ur2m": 93,
      "v10m": 3
    }
  },
  {
    "datetime": "2016110808",
    "data": {
      "ocis": 32,
      "prec": 15,
      "tp2m": 29,
      "ur2m": 29,
      "v10m": 54
    }
  },
  {
    "datetime": "2016110809",
    "data": {
      "ocis": 59,
      "prec": 23,
      "tp2m": 7,
      "ur2m": 12,
      "v10m": 0
    }
  },
  {
    "datetime": "2016110810",
    "data": {
      "ocis": 5,
      "prec": 79,
      "tp2m": 1,
      "ur2m": 70,
      "v10m": 25
    }
  },
  {
    "datetime": "2016110811",
    "data": {
      "ocis": 6,
      "prec": 99,
      "tp2m": 14,
      "ur2m": 93,
      "v10m": 17
    }
  },
  {
    "datetime": "2016110812",
    "data": {
      "ocis": 58,
      "prec": 41,
      "tp2m": 32,
      "ur2m": 58,
      "v10m": 43
    }
  },
  {
    "datetime": "2016110813",
    "data": {
      "ocis": 96,
      "prec": 47,
      "tp2m": 30,
      "ur2m": 36,
      "v10m": 17
    }
  },
  {
    "datetime": "2016110814",
    "data": {
      "ocis": 48,
      "prec": 36,
      "tp2m": 0,
      "ur2m": 20,
      "v10m": 0
    }
  },
  {
    "datetime": "2016110815",
    "data": {
      "ocis": 80,
      "prec": 73,
      "tp2m": 11,
      "ur2m": 69,
      "v10m": 42
    }
  },
  {
    "datetime": "2016110816",
    "data": {
      "ocis": 30,
      "prec": 13,
      "tp2m": 39,
      "ur2m": 9,
      "v10m": 74
    }
  },
  {
    "datetime": "2016110817",
    "data": {
      "ocis": 65,
      "prec": 42,
      "tp2m": 15,
      "ur2m": 10,
      "v10m": 50
    }
  },
  {
    "datetime": "2016110818",
    "data": {
      "ocis": 84,
      "prec": 12,
      "tp2m": 25,
      "ur2m": 56,
      "v10m": 39
    }
  },
  {
    "datetime": "2016110819",
    "data": {
      "ocis": 74,
      "prec": 64,
      "tp2m": 5,
      "ur2m": 30,
      "v10m": 73
    }
  },
  {
    "datetime": "2016110820",
    "data": {
      "ocis": 54,
      "prec": 76,
      "tp2m": 6,
      "ur2m": 20,
      "v10m": 82
    }
  },
  {
    "datetime": "2016110821",
    "data": {
      "ocis": 15,
      "prec": 90,
      "tp2m": 12,
      "ur2m": 11,
      "v10m": 20
    }
  },
  {
    "datetime": "2016110822",
    "data": {
      "ocis": 64,
      "prec": 0,
      "tp2m": 33,
      "ur2m": 81,
      "v10m": 43
    }
  },
  {
    "datetime": "2016110823",
    "data": {
      "ocis": 50,
      "prec": 30,
      "tp2m": 31,
      "ur2m": 57,
      "v10m": 16
    }
  }
  ]
;

  return {
    all: function() {
      return dados;
    }
  };
});
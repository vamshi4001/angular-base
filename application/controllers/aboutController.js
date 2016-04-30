angular.module("firstApp")
	.controller("aboutController", aboutController);

	function aboutController($scope, $rootScope){
		$("ul.nav li").removeClass("active");
		$("ul.nav li#about").addClass("active");
		$scope.name = $rootScope.name;
		$scope.response = {
		    "moviesData": {
		        "BookMyShow": {
		            "arrLanguages": [
		                {
		                    "EventLangCode": "Telugu",
		                    "EventLangName": "Telugu"
		                },
		                {
		                    "EventLangCode": "Hindi",
		                    "EventLangName": "Hindi"
		                },
		                {
		                    "EventLangCode": "English",
		                    "EventLangName": "English"
		                },
		                {
		                    "EventLangCode": "Tamil",
		                    "EventLangName": "Tamil"
		                },
		                {
		                    "EventLangCode": "Malayalam",
		                    "EventLangName": "Malayalam"
		                }
		            ],
		            "arrEvents": [
		                {
		                    "EventGroup": "EG00020148",
		                    "EventTitle": "Dawat E Shaadi",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00039445",
		                            "EventType": "MT",
		                            "EventLanguage": "Hindi",
		                            "EventStatus": "NS",
		                            "EventName": "Dawat E Shaadi",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-4",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "dawat-e-shaadi",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Comedy",
		                                    "Romance"
		                                ],
		                                "GenreMeta": [
		                                    "Comedy",
		                                    "Romance"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00015309",
		                    "EventTitle": "Jai Gangaajal",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00035717",
		                            "EventType": "MT",
		                            "EventLanguage": "Hindi",
		                            "EventStatus": "NS",
		                            "EventName": "Jai Gangaajal",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-4",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "jai-gangaajal",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Action",
		                                    "Crime",
		                                    "Drama"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00002999",
		                    "EventTitle": "London Has Fallen",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00039448",
		                            "EventType": "MT",
		                            "EventLanguage": "Hindi",
		                            "EventStatus": "NS",
		                            "EventName": "London Has Fallen (Hindi)",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-4",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "london-has-fallen-hindi",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Action",
		                                    "Crime",
		                                    "Thriller"
		                                ]
		                            },
		                            "isDefault": "N",
		                            "EventCensor": "UA"
		                        },
		                        {
		                            "EventCode": "ET00028057",
		                            "EventType": "MT",
		                            "EventLanguage": "English",
		                            "EventStatus": "NS",
		                            "EventName": "London Has Fallen",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-4",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "london-has-fallen",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Action",
		                                    "Crime",
		                                    "Thriller"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00016680",
		                    "EventTitle": "Love Shagun",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00037043",
		                            "EventType": "MT",
		                            "EventLanguage": "Hindi",
		                            "EventStatus": "NS",
		                            "EventName": "Love Shagun",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-02-26",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "love-shagun",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Comedy",
		                                    "Romance"
		                                ],
		                                "GenreMeta": [
		                                    "Comedy",
		                                    "Romance"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00015574",
		                    "EventTitle": "Neerja",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00035922",
		                            "EventType": "MT",
		                            "EventLanguage": "Hindi",
		                            "EventStatus": "NS",
		                            "EventName": "Neerja",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-02-19",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "neerja",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Biography": [],
		                                "Plays": [
		                                    "Drama"
		                                ],
		                                "GenreMeta": [
		                                    "Biography",
		                                    "Drama"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "U"
		                        }
		                    ],
		                    "avgRating": 83,
		                    "totalVotes": 79468
		                },
		                {
		                    "EventGroup": "EG00016584",
		                    "EventTitle": "Sanam Teri Kasam",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00036895",
		                            "EventType": "MT",
		                            "EventLanguage": "Hindi",
		                            "EventStatus": "NS",
		                            "EventName": "Sanam Teri Kasam",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-02-5",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "sanam-teri-kasam",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Musical",
		                                    "Romance"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "U"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00017007",
		                    "EventTitle": "Teraa Surroor",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00037307",
		                            "EventType": "MT",
		                            "EventLanguage": "Hindi",
		                            "EventStatus": "NS",
		                            "EventName": "Teraa Surroor",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-11",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "teraa-surroor",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Action",
		                                    "Romance",
		                                    "Thriller"
		                                ],
		                                "GenreMeta": [
		                                    "Drama"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00001402",
		                    "EventTitle": "Zubaan",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00032529",
		                            "EventType": "MT",
		                            "EventLanguage": "Hindi",
		                            "EventStatus": "NS",
		                            "EventName": "Zubaan",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-4",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "zubaan",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Drama",
		                                    "Musical"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00018278",
		                    "EventTitle": "13 Hours: The Secret Soldiers of Benghazi",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00032633",
		                            "EventType": "MT",
		                            "EventLanguage": "English",
		                            "EventStatus": "NS",
		                            "EventName": "13 Hours: The Secret Soldiers of Benghazi",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-4",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "13-hours-the-secret-soldiers-of-benghazi",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Action",
		                                    "Drama",
		                                    "Thriller"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "A"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00001809",
		                    "EventTitle": "Deadpool",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00038638",
		                            "EventType": "MT",
		                            "EventLanguage": "English",
		                            "EventStatus": "NS",
		                            "EventName": "Deadpool",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-02-12",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "deadpool",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Action"
		                                ],
		                                "Sci-Fi": [],
		                                "Sports": [
		                                    "Adventure"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "A"
		                        }
		                    ],
		                    "avgRating": 84,
		                    "totalVotes": 61958
		                },
		                {
		                    "EventGroup": "EG00015558",
		                    "EventTitle": "Gods of Egypt",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00035909",
		                            "EventType": "MT",
		                            "EventLanguage": "English",
		                            "EventStatus": "NS",
		                            "EventName": "Gods of Egypt (3D)",
		                            "EventDimension": "3D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-02-26",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "gods-of-egypt-3d",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Fantasy": [],
		                                "Plays": [
		                                    "Adventure"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00000156",
		                    "EventTitle": "Mad Max: Fury Road",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00024110",
		                            "EventType": "MT",
		                            "EventLanguage": "English",
		                            "EventStatus": "NS",
		                            "EventName": "Mad Max: Fury Road (3D)",
		                            "EventDimension": "3D",
		                            "EventProducerCode": "",
		                            "EventDate": "2015-05-15",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "mad-max-fury-road-3d",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Action",
		                                    "Thriller"
		                                ],
		                                "Sports": [
		                                    "Adventure"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ],
		                    "avgRating": 81,
		                    "totalVotes": 14766
		                },
		                {
		                    "EventGroup": "EG00019775",
		                    "EventTitle": "Race",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00039090",
		                            "EventType": "MT",
		                            "EventLanguage": "English",
		                            "EventStatus": "NS",
		                            "EventName": "Race",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-11",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "race",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Biography": [],
		                                "Plays": [
		                                    "Drama"
		                                ],
		                                "Sports ": [],
		                                "GenreMeta": [
		                                    "Drama"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00007779",
		                    "EventTitle": "Room",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00029108",
		                            "EventType": "MT",
		                            "EventLanguage": "English",
		                            "EventStatus": "NS",
		                            "EventName": "Room",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-01-29",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "room",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Drama"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "U"
		                        }
		                    ],
		                    "avgRating": 87,
		                    "totalVotes": 1642
		                },
		                {
		                    "EventGroup": "EG00014955",
		                    "EventTitle": "Spotlight",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00035368",
		                            "EventType": "MT",
		                            "EventLanguage": "English",
		                            "EventStatus": "NS",
		                            "EventName": "Spotlight",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-02-19",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "spotlight",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Biography": [],
		                                "History": [],
		                                "Plays": [
		                                    "Drama"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "A"
		                        }
		                    ],
		                    "avgRating": 87,
		                    "totalVotes": 2513
		                },
		                {
		                    "EventGroup": "EG00003006",
		                    "EventTitle": "The Revenant",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00027851",
		                            "EventType": "MT",
		                            "EventLanguage": "English",
		                            "EventStatus": "NS",
		                            "EventName": "The Revenant",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-02-26",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "the-revenant",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Action",
		                                    "Drama"
		                                ],
		                                "Western": []
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "A"
		                        }
		                    ],
		                    "avgRating": 85,
		                    "totalVotes": 14794
		                },
		                {
		                    "EventGroup": "EG00019016",
		                    "EventTitle": "Triple 9",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00038314",
		                            "EventType": "MT",
		                            "EventLanguage": "English",
		                            "EventStatus": "NS",
		                            "EventName": "Triple 9",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-11",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "triple-9",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Crime",
		                                    "Thriller"
		                                ],
		                                "GenreMeta": [
		                                    "Thriller"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "A"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00015326",
		                    "EventTitle": "Zootopia",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00035738",
		                            "EventType": "MT",
		                            "EventLanguage": "English",
		                            "EventStatus": "NS",
		                            "EventName": "Zootopia (3D)",
		                            "EventDimension": "3D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-4",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "zootopia-3d",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Animation": [],
		                                "Plays": [
		                                    "Comedy"
		                                ],
		                                "GenreMeta": [
		                                    "Comedy"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "U"
		                        }
		                    ],
		                    "avgRating": 89,
		                    "totalVotes": 4129
		                },
		                {
		                    "EventGroup": "EG00015458",
		                    "EventTitle": "Miruthan",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00035829",
		                            "EventType": "MT",
		                            "EventLanguage": "Tamil",
		                            "EventStatus": "NS",
		                            "EventName": "Miruthan",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-02-19",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "miruthan",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Horror": [],
		                                "Plays": [
		                                    "Action",
		                                    "Thriller"
		                                ],
		                                "Sci-Fi": []
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00020034",
		                    "EventTitle": "Chikkadu Dorakadu",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00039311",
		                            "EventType": "MT",
		                            "EventLanguage": "Telugu",
		                            "EventStatus": "NS",
		                            "EventName": "Chikkadu Dorakadu",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-11",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "chikkadu-dorakadu",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Action",
		                                    "Crime",
		                                    "Drama"
		                                ],
		                                "GenreMeta": [
		                                    "Drama"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00002622",
		                    "EventTitle": "Guntur Talkies",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00033013",
		                            "EventType": "MT",
		                            "EventLanguage": "Telugu",
		                            "EventStatus": "NS",
		                            "EventName": "Guntur Talkies",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-4",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "guntur-talkies",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Comedy",
		                                    "Romance"
		                                ],
		                                "GenreMeta": [
		                                    "Comedy",
		                                    "Romance"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "A"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00016973",
		                    "EventTitle": "Kalyana Vaibhogame",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00037268",
		                            "EventType": "MT",
		                            "EventLanguage": "Telugu",
		                            "EventStatus": "NS",
		                            "EventName": "Kalyana Vaibhogame",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-4",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "kalyana-vaibhogame",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Comedy",
		                                    "Romance"
		                                ],
		                                "GenreMeta": [
		                                    "Comedy",
		                                    "Romance"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "U"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00018748",
		                    "EventTitle": "Krishna Gaadi Veera Prema Gaadha",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00038087",
		                            "EventType": "MT",
		                            "EventLanguage": "Telugu",
		                            "EventStatus": "NS",
		                            "EventName": "Krishna Gaadi Veera Prema Gaadha",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-02-12",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "krishna-gaadi-veera-prema-gaadha",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Action",
		                                    "Drama",
		                                    "Romance"
		                                ],
		                                "GenreMeta": [
		                                    "Drama",
		                                    "Romance"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ],
		                    "avgRating": 82,
		                    "totalVotes": 27669
		                },
		                {
		                    "EventGroup": "EG00014492",
		                    "EventTitle": "Krishnashtami",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00034990",
		                            "EventType": "MT",
		                            "EventLanguage": "Telugu",
		                            "EventStatus": "NS",
		                            "EventName": "Krishnashtami",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-02-19",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "krishnashtami",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Action",
		                                    "Drama",
		                                    "Romance"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00019338",
		                    "EventTitle": "Kshanam",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00038680",
		                            "EventType": "MT",
		                            "EventLanguage": "Telugu",
		                            "EventStatus": "NS",
		                            "EventName": "Kshanam",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-02-26",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "kshanam",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Drama",
		                                    "Thriller"
		                                ],
		                                "Suspense": [],
		                                "GenreMeta": [
		                                    "Thriller"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ],
		                    "avgRating": 82,
		                    "totalVotes": 10571
		                },
		                {
		                    "EventGroup": "EG00002260",
		                    "EventTitle": "Malupu",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00027828",
		                            "EventType": "MT",
		                            "EventLanguage": "Telugu",
		                            "EventStatus": "NS",
		                            "EventName": "Malupu",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-02-19",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "malupu",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Action",
		                                    "Drama",
		                                    "Thriller"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "A"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00020369",
		                    "EventTitle": "Mr. Manmadhan For Sale",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00039650",
		                            "EventType": "MT",
		                            "EventLanguage": "Telugu",
		                            "EventStatus": "NS",
		                            "EventName": "Mr. Manmadhan For Sale",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-11",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "mr-manmadhan-for-sale",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Drama",
		                                    "Romance"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "U"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00020360",
		                    "EventTitle": "Nenu Maa College",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00039621",
		                            "EventType": "MT",
		                            "EventLanguage": "Telugu",
		                            "EventStatus": "NS",
		                            "EventName": "Nenu Maa College",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-11",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "nenu-maa-college",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Drama",
		                                    "Romance"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": ""
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00020410",
		                    "EventTitle": "O Sthree Repu Ra",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00039692",
		                            "EventType": "MT",
		                            "EventLanguage": "Telugu",
		                            "EventStatus": "NS",
		                            "EventName": "O Sthree Repu Ra",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-11",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "o-sthree-repu-ra",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Horror": [],
		                                "Plays": [
		                                    "Thriller"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": ""
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00020147",
		                    "EventTitle": "Shiva Ganga",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00039444",
		                            "EventType": "MT",
		                            "EventLanguage": "Telugu",
		                            "EventStatus": "NS",
		                            "EventName": "Shiva Ganga",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-4",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "shiva-ganga",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Horror": [],
		                                "Plays": [
		                                    "Thriller"
		                                ],
		                                "GenreMeta": [
		                                    "Drama",
		                                    "Horror"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "A"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00019056",
		                    "EventTitle": "Shourya",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00038348",
		                            "EventType": "MT",
		                            "EventLanguage": "Telugu",
		                            "EventStatus": "NS",
		                            "EventName": "Shourya",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-4",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "shourya",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Romance",
		                                    "Thriller"
		                                ],
		                                "GenreMeta": [
		                                    "Romance"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00003111",
		                    "EventTitle": "Soggade Chinni Nayana",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00033295",
		                            "EventType": "MT",
		                            "EventLanguage": "Telugu",
		                            "EventStatus": "NS",
		                            "EventName": "Soggade Chinni Nayana",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-01-15",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "soggade-chinni-nayana",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Communities": [
		                                    "Family"
		                                ],
		                                "Plays": [
		                                    "Comedy",
		                                    "Drama"
		                                ],
		                                "GenreMeta": [
		                                    "Comedy",
		                                    "Drama"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00020396",
		                    "EventTitle": "Thulasidalam",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00039683",
		                            "EventType": "MT",
		                            "EventLanguage": "Telugu",
		                            "EventStatus": "NS",
		                            "EventName": "Thulasidalam",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-11",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "thulasidalam",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Horror": [],
		                                "Plays": [
		                                    "Thriller"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "A"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00017745",
		                    "EventTitle": "Tuntari",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00037632",
		                            "EventType": "MT",
		                            "EventLanguage": "Telugu",
		                            "EventStatus": "NS",
		                            "EventName": "Tuntari",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-03-11",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "tuntari",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Action",
		                                    "Drama"
		                                ],
		                                "GenreMeta": [
		                                    "Comedy"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "UA"
		                        }
		                    ]
		                },
		                {
		                    "EventGroup": "EG00018530",
		                    "EventTitle": "Maheshinte Prathikaram",
		                    "ChildEvents": [
		                        {
		                            "EventCode": "ET00037900",
		                            "EventType": "MT",
		                            "EventLanguage": "Malayalam",
		                            "EventStatus": "NS",
		                            "EventName": "Maheshinte Prathikaram",
		                            "EventDimension": "2D",
		                            "EventProducerCode": "",
		                            "EventDate": "2016-02-5",
		                            "EventRating": "0",
		                            "PopcornMeter": "0",
		                            "EventURL": "maheshinte-prathikaram",
		                            "EventIsAtmosEnabled": "N",
		                            "JsonGenre": {
		                                "Plays": [
		                                    "Comedy",
		                                    "Drama"
		                                ],
		                                "GenreMeta": [
		                                    "Comedy",
		                                    "Drama"
		                                ]
		                            },
		                            "isDefault": "Y",
		                            "EventCensor": "U"
		                        }
		                    ],
		                    "avgRating": 82,
		                    "totalVotes": 8498
		                }
		            ]
		        }
		    },
		    "preferredLanguages": null
		}	

		console.log("I am in about controller");
	}
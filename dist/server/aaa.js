


const template={
	"results": {
		"query022": {
			"frames": [
				{
					"schema": {
						"refId": "query022",
						"meta": {
							"executedQueryString": "select _id as __value, tag as __text from realtime_data_view where tag like '%Les Ardoines/AdV 1401/pmdiagbox 140101%' "
						},
						"fields": [
							{
								"name": "__value",
								"type": "string",
								"typeInfo": {
									"frame": "string",
									"nullable": true
								}
							},
							{
								"name": "__text",
								"type": "string",
								"typeInfo": {
									"frame": "string",
									"nullable": true
								}
							}
						]
					},
					"data": {
						"values": [
							[
								"8888000187",
								"8888000193",
								"8888000190",
								"8888000188",
								"8888000186"
							],
							[
								"MQTT:8888:Grand Paris/Ligne 15/GA14 - Les Ardoines/AdV 1401/pmdiagbox 140101/Pression à gauche - max",
								"MQTT:8888:Grand Paris/Ligne 15/GA14 - Les Ardoines/AdV 1401/pmdiagbox 140101",
								"MQTT:8888:Grand Paris/Ligne 15/GA14 - Les Ardoines/AdV 1401/pmdiagbox 140101/Pression à droite - moyenne",
								"MQTT:8888:Grand Paris/Ligne 15/GA14 - Les Ardoines/AdV 1401/pmdiagbox 140101/Pression à droite - max",
								"MQTT:8888:Grand Paris/Ligne 15/GA14 - Les Ardoines/AdV 1401/pmdiagbox 140101/Pression à gauche - moyenne"
							]
						]
					}
				}
			]
		}
	}
}




const b1 = (
    refId= "query022",
    executedQueryString= "select _id as __value, tag as __text from realtime_data_view where tag like '%Les Ardoines/AdV 1401/pmdiagbox 140101%' ",
    ) => {
    return {
        "results": {
            [refId]: {
                "frames": [
                    {
                        "schema": {
                             refId,
                            "meta": {
                                executedQueryString
                            },
                            "fields": [
                                {
                                    "name": "__value",
                                    "type": "string",
                                    "typeInfo": {
                                        "frame": "string",
                                        "nullable": true
                                    }
                                },
                                {
                                    "name": "__text",
                                    "type": "string",
                                    "typeInfo": {
                                        "frame": "string",
                                        "nullable": true
                                    }
                                }
                            ]
                        },
                        "data": {
                            "values": [
                                [
                                    "8888000187",
                                    "8888000193",
                                    "8888000190",
                                    "8888000188",
                                    "8888000186"
                                ],
                                [
                                    "MQTT:8888:Grand Paris/Ligne 15/GA14 - Les Ardoines/AdV 1401/pmdiagbox 140101/Pression à gauche - max",
                                    "MQTT:8888:Grand Paris/Ligne 15/GA14 - Les Ardoines/AdV 1401/pmdiagbox 140101",
                                    "MQTT:8888:Grand Paris/Ligne 15/GA14 - Les Ardoines/AdV 1401/pmdiagbox 140101/Pression à droite - moyenne",
                                    "MQTT:8888:Grand Paris/Ligne 15/GA14 - Les Ardoines/AdV 1401/pmdiagbox 140101/Pression à droite - max",
                                    "MQTT:8888:Grand Paris/Ligne 15/GA14 - Les Ardoines/AdV 1401/pmdiagbox 140101/Pression à gauche - moyenne"
                                ]
                            ]
                        }
                    }
                ]
            }
        }
    }
}
const mongoose = require('mongoose')
const schedaRASchema = new mongoose.Schema({
    mt:{
        mtc :[{         //materia e tecnica
            type:String,
            maxLength:150,
            required:true
        }],
        mis:[{          //misure
            _id:false,
            misl:{      //larghezza
                type:Number,
                maximum:999999,
                required:true
            },

            misn:{      //lunghezza
                type:Number,
                maximum:999999,
                required:true
            },

            misg:{      //peso
                type:Number,
                maximum:999999,
                required:true
            },

            miss:{      //spessore
                type:Number,
                maximum:999999,
                required:true
            },

            misd:{      //diametro
                type:Number,
                maximum:999999,
                required:true
            },
  
            misu:{      //unità di misura
                type:String,
                enum:{
                    values: ["mm", "cm", "dm", "m","dam","ct","g","kg","l","mq","mc"] //vincolo di vocabolario
                },
                required:true
            },

            misp:{      //profondità
                type:Number,
                maximum:999999,
                required:true
            },

            misa:{      //altezza
                type:Number,
                maximum:999999,
                required:true
            }

        }]
    },

    co:{                //conservazione
        stc:{           //stato di conservazione
            stcc:{      //stato di conservazione
                type:String,
                enum:{
                    values:["integro","intero","mutilo","ricomposto","ricomponibile",
                    "parzialmente ricomposto","parzialmente ricomponibile","frammentario",
                    "reintegrato","parzialmente reintegrato","NR"]
                },
                required:true
            }
        }
    },

    cm:{                //compilazione
        fur:[{           //funzionario responsabile
            type:String,
            maxLength:70,
            required:true
        }],

        cmp:{           //compilazione
            cmpd:{      //data
                type:Number,
                maximum:3000,
                required:true
            },
            cmpn:[{     //nome
                type:String,
                maxLength:70,
                required:true
            }]
        }
    },

    au:{                //definizione culturale
        aut:[{          //autore
            _id:false,
            autn:{      //nome scelto
                type:String,
                maxLength:100,
                required:true
            },

            autm:[{     //motivazione attribuzione
                type:String,
                enum:{
                    values:["analisi diagnostiche","analisi iconografica","analisi stilistica",
                    "analisi storica","analisi tipologica","bibliografia","bollo","confronto","contesto",
                    "documentazione","esame intervento","firma","grafia","fonte archivistica","iscrizione",
                    "marchio","monogramma","nota manoscritta","punzone","sigla","simbolo","timbro","tradizionale orale","NR"]
                },
                required:true
            }],

            autr:{      //riferimento all'intervento
                type:String,
                maxLength:50,
                required:false
            },

            auta:{      //dati anagrafici
                type:String,
                maxLength:70,
                required:true
            }
        }],

        atb:[{          //ambito culturale
            _id:false,
            atbd:{      //denominazione
                type:String,
                maxLength:50,
                required:true
            }
        }]
    },

    rv:{                //relazioni
        rse:[{          //relazioni dirette
            _id:false,
            rser:{      //tipo relazione
                type:String,
                enum:{
                    values:["bene composto","esecuzione/evento di riferimento", "fonte di rappresentazione",
                    "luogo di collocazione/localizzazione","relazione urbanistico ambientale","sede di realizzazione"]
                },
                required:true
            },

            rsec:{      //codice bene
                type:String,
                maxLength:25,
                required:true
            },

            rset:{      //tipo scheda
                type:String,
                enum:{
                    values:["A","AT","BDI","BDN","BNB","BNM","BNP","BNPE","BNPL","BNZ","CA","CNS",
                            "D","F","FF","MA","MI","NU","OA","OAC","PG","PST","RA","S",
                            "SAS","SI","SU","SM","SMO","TMA","VeAC"]
                },
                required:true
            }
        }]
    },

    lc:{                //localizzazione geografica-amministrativa
        pvc:{           //localizz geo-ammin attuale
            pvcr:{      //regione
                type:String,
                /*enum:{
                    values:["Puglia", "Basilicata", "ecc"]
                },*/
                maxLength:25,
                required:true
            },

            pvcs:{      //stato
                type:String,
                /*enum:{
                    values:["Italia", "Francia", "ecc"]
                },*/
                maxLength:50,
                required:true
            },

            pvcc:{      //comune
                type:String,
                maxLength:50,
                /*enum:{
                    values:["Modugno", "Bari", "Palo"]
                },*/
                required:true
            },

            pvcp:{      //provincia
                type:String,
                /*enum:{
                    values:[sigle delle provincie]
                },*/
                maxLength:3,
                required:true
            }
        },

        ldc:{           //collocazione specifica
            ldcn:{      //denominazione
                type:String,
                maxLength:80,
                required:true
            },

            ldcu:{      //denominazione spazio viabilistico
                type:String,
                maxLength:250,
                required:false
            }
        }
    },

    og:{                //oggetto
        sgt:{           //sogetto
            sgtt:[{     //titolo
                _id:false,
                value:{
                    type:String,
                    maxLength:100,
                    required:false
                },

                language:{
                    type:String,
                    maxLength:5,
                    required:false
                },

                profile:{
                    type:String,
                    maxLength:50,
                    required:false
                }
            }],

            sgti:[{     //identificazione
                _id:false,
                value:{
                    type:String,
                    maxLength:100,
                    required:false
                },

                language:{
                    type:String,
                    maxLength:5,
                    required:false
                },

                profile:{
                    type:String,
                    maxLength:50,
                    required:false
                }
            }]
        },

        ogt:{           //oggetto
            ogtd:[{     //definizione
                _id:false,
                value:{
                    type:String,
                    maxLength:100,
                    required:true
                },

                language:{
                    type:String,
                    maxLength:5,
                    required:true
                },

                profile:{
                    type:String,
                    maxLength:50,
                    required:true
                }
            }],

            ogtt:{     //tipologia
                    type:String,
                    maxLength:100,
                    required:false
            },

            ogtn:[{     //denominazione/dedicazione
                _id:false,
                value:{
                    type:String,
                    maxLength:100,
                    required:true
                },

                language:{
                    type:String,
                    maxLength:5,
                    required:true
                },

                profile:{
                    type:String,
                    maxLength:50,
                    required:true
                }
            }]
        }
    },

    cd:{            //codici
        ecp:{       //ente competente
            type:String,
            maxLength:25,
            required:true
        },

        ntc:[{      //codice univoco
            _id:false,
            ntcs:{  //suffisso numero catalogo regionale
                type:String,
                maxLength:2,
                required:false
            },

            ntcr:{  //codice regione ISTAT
                type:String,
                enum:{
                    values:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]
                },
                required:true
            },

            ntcn:{
                type:String,
                maxLength:8,
                required:true
            }
        }],

        lir:{       //livello ricerca
            type:String,
            enum:{
                values:["I","P","C"]
            },
            required:true
        },

        esc:{       //ente schedatore
            type:String,
            maxLength:25,
            required:true
        },

        tsk:{       //tipo scheda
            type:String,
            required:true,
            default:"RA"
        }
    },

    ub:{            //ubicazione e dati patrimoniali
        inv:[{      //inventario di museo o sopraintendenza
            _id:false,
            invc:{  //collocazione
                type:String,
                maxLength:50,
                required:false
            },
            
            invd:{  //data
                type:String,
                maxLength:50,
                required:false
            },
            
            invn:{  //numero
                type:String,
                maxLength:100,
                required:false
            }
        }]
    },

    da:{            //dati analitici
        isr:[{      //iscrizioni
            _id:false,
            isri:{  //trascrizione
                type:String,
                maxLength:10000,
                required:false
            },
            
            isrl:{  //lingua
                type:String,
                maxLength:50,
                required:false
            },
            
            isrm:{  
                type:String,
                maxLength:100,
                required:false
            },

            isrc:{  //classe di appartenenza
                type:String,
                maxLength:50,
                required:false
            },

            isrs:{  //tecnica di pittura
                type:String,
                maxLength:50,
                required:false
            },

            isrp:{  //posizione
                type:String,
                maxLength:50,
                required:false
            },

            isra:{  //autore
                type:String,
                maxLength:70,
                required:false
            },

            isrt:{  //tipo di caratteri
                type:String,
                maxLength:50,
                required:false
            },
        }]
    },
})

module.exports = mongoose.model('SchedaRA', schedaRASchema)
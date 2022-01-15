const mongoose = require('mongoose')
const schedaOASchema = new mongoose.Schema({
    mt:{
        mtc :[{ //materia e tecnica
            type:String, //vincolo di tipo
            maxLength:150, //vincolo di lunghezza
            required:true //obbligatorietà o no al momento dell'inserimento
        }],
        mis:[{//misure
            _id:false,
            miss:{//spessore
                type:Number,
                maximum:999999,
                required:true
            },
            misl:{//larghezza
                type:Number,
                maximum:999999,
                required:true
            },
            misu:{//unità di misura
                type:String,
                maxLength:5,
                enum:{
                    values: ["mm", "cm", "dm", "m","dam","ct","g","kg","l","mq","mc"] //vincolo di vocabolario
                },
                required:true
            },
            misn:{//lunghezza
                type:Number,
                maximum:999999,
                required:true
            }
        }]
    },
    rs:{//restauri
        rst:[{
            _id:false,
            rste:{//ente responsabile
                type:String,
                maxLength:50,
                required:false
            },
            rstd:{//data
                type:String,
                maxLength:50,
                required:false
            }
        }]
    },
    co:{//conservazione
        stc:{//stato di conservazione
            stcc:{
                type:String,
                enums:{
                    values:["buono", "discreto", "mediocre", "cattivo"]
                },
                maxLength:50,
                required:true
            }
        }
    },
    dt:[{//cronologia
        _id:false,
        dts:{//cronologia specifica
            dtsi:{//da
                type:String,
                maxLength:15,
                require:true
            },
            dtsf:{//a
                type:String,
                maxLength:15,
                require:true
            }
        }
    }],
    cm:{//compilazione
        cmp:{
            cmpd:{//data
                type:Number,
                maximum:3000,
                required:true
            },
            cmpn:[{//nome
                type:String,
                maxLength:70,
                required:true
            }]
        }
    },
    au:{//definizione culturale
        aut:[{//autore
            _id:false,
            autn:{//nome scelto
                type:String,
                maxLength:100,
                required:true
            },
            autm:[{//motivazione attribuzione
                type:String,
                enum:{
                    values:["analisi diagnostiche","analisi iconografica","analisi stilistica",
                    "analisi storica","analisi tipologica","bibliografia","bollo","confronto","contesto",
                    "documentazione","esame intervento","firma","grafia","fonte archivistica","iscrizione",
                    "marchio","monogramma","nota manoscritta","punzone","sigla","simbolo","timbro","tradizionale orale","NR"]
                },
                maxLength:50,
                required:true
            }],
            auta:{//dati anagrafici
                type:String,
                maxLength:70,
                required:true
            }
        }],
        atb:[{//ambito culturale
            _id:false,
            atbd:{//denominazione
                type:String,
                maxLength:50,
                required:true
            }
        }]
    },
    rv:{//relazioni
        rse:[{//relazioni dirette
            _id:false,
            rser:{//tipo relazione
                type:String,
                enum:{
                    values:["bene composto","esecuzione/evento di riferimento", "fonte di rappresentazione",
                    "luogo di collocazione/localizzazione","relazione urbanistico ambientale","sede di realizzazione",
                    "sede di provenienza","sede di rinvenimento"]
                },
                required:false
            },
            rsec:{//codice bene
                type:String,
                maxLength:25,
                required:false
            },
            rset:{//tipo scheda
                type:String,
                enum:{
                    values:["A","AT","BDI","BDN","BNB","BNM","BNP","BNPE","BNPL","BNZ","CA","CNS",
                            "D","F","FF","MA","MI","NU","OA","OAC","PG","PST","RA","S",
                            "SAS","SI","SU","SM","SMO","TMA","VeAC"]
                },
                required:false
            }
        }]
    },
    lc:{//localizzazione geografica-amministrativa
        pvc:{//localizz geo-ammin attuale
            pvcr:{//regione
                type:String,
                /*enum:{
                    values:["Puglia", "Basilicata", "ecc"]
                },*/
                maxLength:25,
                required:true
            },
            pvcs:{//stato
                type:String,
                /*enum:{
                    values:["Italia", "Francia", "ecc"]
                },*/
                maxLength:50,
                required:true
            },
            pvcc:{//comune
                type:String,
                /*enum:{
                    values:["Modugno", "Bari", "Palo"]
                },*/
                maxLength:50,
                required:true
            },
            pvcp:{//provincia
                type:String,
                /*enum:{
                    values:[sigle delle provincie]
                },*/
                maxLength:3,
                required:true
            }
        },
        ldc:{//collocazione specifica
            ldcn:{//complesso monumentale di appartenenza
                type:String,
                maxLength:80,
                required:true
            },
            ldcu:{//denominazione spazio viabilistico
                type:String,
                maxLength:250,
                required:true
            }
        }
    },
    og:{//oggetto
        sgt:{//sogetto
            sgtt:[{//titolo
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
            sgti:[{//identificazione
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
        ogt:{//oggetto
            ogtd:[{//definizione
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
            ogtn:[{//denominazione/dedicazione
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
    cd:{//codici
        tsk:{//tipo scheda
            type:String,
            enum:{
                values:["OA"]
            },
            required:true
        }
    },
    ub:{//ubicazione e dati patrimoniali
        inv:[{//inventario di museo o sopraintendenza
            _id:false,
            invc:{//collocazione
                type:String,
                maxLength:50,
                required:false
            },
            invd:{//data
                type:String,
                maxLength:50,
                required:false
            },
            invn:{//numero
                type:String,
                maxLength:100,
                required:false
            }
        }]
    }
})
module.exports = mongoose.model('SchedaOA', schedaOASchema)
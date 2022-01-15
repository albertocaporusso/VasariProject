const mongoose = require('mongoose')
const schedaASchema = new mongoose.Schema({
    rs:{//restauri
        rst:[{
            _id:false,
            rsti:{//data inizio
                type:String,
                maxLength:5,
                required:false
            },
            rstr:{
                type:String,
                maxLength:50,
                required:false
            },
            rstf:{//data fine
                type:String,
                maxLength:5,
                required:false
            },
            rstt:[{
                type:String,
                maxLength:100,
                required:false
            }]
        }]
    },
    cm:{//compilazione
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
                required:true
            }],
            autr:{
                type:String,
                maxLength:100,
                required:true
            },
            autb:{
                type:String,
                maxLength:50,
                required:true
            },
            auth:{
                type:String,
                maxLength:70,
                required:true
            },
            auta:{
                type:String,
                maxLength:70,
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
                    "luogo di collocazione/localizzazione","relazione urbanistico ambientale","sede di realizzazione"]
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
        }
    },
    og:{
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
        ntc:{      //codice univoco
            
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
        },

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
            default:"A"
        }
    },
    li:{//iscrizioni,lapidi,stemmi
        lsi:[{
            _id:false,
            lsiu:{
                type:String,
                maxLength:50,
                required:true
            },
            lsim:[{//materiali
                type:String,
                maxLength:50,
                required:true
            }],
            lsit:{//tipo
                type:String,
                maxLength:50,
                required:true
            },
            lsic:{//tecnica
                type:String,
                maxLength:50,
                required:true
            },
            lsii:{//trascrizione testo
                type:String,
                maxLength:50,
                required:true
            },
            lsig:{//genere
                type:String,
                maxLength:50,
                required:true
            },
        }]
    }
})
module.exports = mongoose.model('SchedaA', schedaASchema)
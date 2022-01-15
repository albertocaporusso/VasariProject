const mongoose = require('mongoose')

const schedaGpmSchema = new mongoose.Schema({

  abstract:[{
    value:{
      type : String,
      required : true
    },
    language :{
      type : String,
      required : true
    },
    profile:{
      type : String,
      required : true
    }
  }],

  pi: {         //path info
    pig:{       //path generic info
      pigc:{   //path contex
        type: Number,
        enum:{
          values: [0, 1] //0 Percorso Smart Visit - 1 Percorso MSTM
        },
        required : true
      },

      pigd:[{   //data e ora modifica percorso
        type : Date,
        default : Date.now
      }],
  },

  pis: {        //path info specifications
    pist:{     //indicazione tipologia di percorso
        type : Number,
        enum:{
          values: [0, 1, 2] //0 storyguide - 1 storyexperience - 2 composizione
        },
        required : true
      },

    pism:{    //attesa minima per percorso
        type : Number,
        required : false
      },

    pisx:{    //attesa massima per percorso
        type : Number,
        required : false
      },

    pisl:[{   //lingue disponibili
        type: String,
        maxLength : 1000,
        required : true
    }],

    pisa:{    //limite eta
      type : Number,
      enum:{
        values: [0, 7, 12, 18] 
      },
      required : true
    },

    pise:{    //ambiente in cui è fruibile il percorso
      type : Number,
      enum:{
        values: [1, 2, 3, 4] // 1 al chiuso - 2 all'aperto - 3 misto chiuso e aperto - 4 fruizione completamente virtuale
      },
      required : false
    },

    pisd:{    //sforzo fisico necessario per percorso
      type : Number,
      enum:{
        values: [0, 1, 2] //0 leggero - 1 medio - 2 impegnativo
      },
      required : false
    },

    pisem:{    //sforzo mentale necessario per percorso (originale pise, cambiato nome perchè duplicato)
      type : Number,
      enum:{
        values: [0, 1, 2] //0 leggero - 1 medio - 2 impegnativo
      },
      required : false
    }, 
  },

  pio: {      // path owner info
    pion:[{   // nome di chi ha creato o gestisce il percorso
      type: String,
      maxLength : 1000,
      required : false
    }],

    pioa:{   // Note inserite dal creatore
      type: String,
      maxLength : 1000,
      required : false
    }
  },

  pic: {      // path characterization
    pici:{   // lista id beni inclusi nel percorso
      type: String,
      maxLength : 1000,
      required : true
    },

    picn:{   // lista di ID di percorsi in-site suggeriti in ciascun sito del tour
      type: String,
      maxLength : 1000,
      required : false
    },

    picm:{   // Lista degli ID dei contenuti multimed associati ai beni del percor e della loro tipologia
      type: String,
      maxLength : 1000,
      required : false
    },

    picr:{   // Lista degli ID dei beni culturali esterni al path correlati con i beni del path
      type: String,
      maxLength : 1000,
      required : false
    },

    pice:{   // Lista degli ID dei contenuti multimed associati ai beni culturali esterni al path
      type: String,
      maxLength : 1000,
      required : false
    },

    pico:{   // Indicatore di percorsi che richiedono una sequenza nella fruizione
      type : Boolean,
      required : true
    },

    picv:{   // Indicazione se il contenuto è accessibile previo acquisto pacchetto speciale
      type : Number,// 0: accessibile a tutti; 1: riservato a utenti che hanno acquistato un abbonamento; 2: riservato solo a tour operator; 3: riservato ad abbonati e tour operator
      enum:{
        values: [0, 1, 2, 3] 
      },
      required : false
    },
  }
},

  cb: {         // categorizzazione beni del percorso
    cbt:{       // categorizzazione turistica dei beni
      cbtw:[{   // Cultura/corrente culturale che ha realizzato il bene
        type : Object,
        required : true
      }],

      cbtc:[{   // Descrizione di cosa rappresenta il bene (categoria)
        type : Object,
        required : true
      }],

      cbtq:[{    // Periodo storico del bene
        type : Object,
        required : false
      }],

      cbta:[{    // Caratteristiche di accessibilità
        type : Object,
        required : false
      }]
    }
  },
  geolocation:{
    geometry:{
      coordinates:[{
        type:Number,
        required:false
      }],
      type:{
        type:String,
        required:false
      }
    },
    system:{
      type:String,
      require:false
    }
  },
  access_group:{
    type:String,
    require:false
  }
})
module.exports = mongoose.model('SchedaGpm', schedaGpmSchema)
const mongoose = require('mongoose')

//Definisco uno schema che ogni oggetto dovrà rispettare
const schedaSchema = new mongoose.Schema({
  cb: {//categorizzazione bene

    cbt:{  //categorizzazione turistica
      //descrizione bene
      cbtd:[{
        type: String,
        maxLength : 1000,
        required : true
      }],
      //categoria
      cbtc:[{
        type : Object,
        required : true
      }],
      //cultura/corrente culturale
      cbtw:[{
        type : Object,
        required : true
      }],
      //periodo storico/fase storica
      cbtq:[{
        type : Object,
        required : false
      }],
      //accessibilità bene
      cbta:[{
        type : Object,
        required : false
      }],
      //limitazioni all'accessibilità
      cbtl:[{
        type : Object,
        required : false
      }],
      //rilevanza opera in un museo
      cbtr:{
        type : Number,
        enum:{
        values: [0, 1, 2]
        },
        required : false
      },
      //limitazioni alla fruizione in base all'età
      cbte:[{
        type : Number,
        enum: {
          values: [7, 12, 14, 18]
        },
        required : false
      }],
      //accessibiltà bene su data oraria
      cbto:{
        type : Object, //Date ?
        required : false
      },
      //tag associati dall'amministrazione al bene
      cbtt:{
        type : String,
        maxLength : 500,
        required : false
      }
    }
  },
  cx:{
    //raggruppamento culturale
    cxg:[
      {
        type : String,
        maxLength : 1000,
        required : false
      }
    ],
    //altro bene culturale collegato
    cxl:[
      {
        //id vasari del bene
        type : Number,
        required : false
      },
      {
        cxlt:{
          //tipo di collegamento
          type : String,
          required : false,
          enum:{
            values: ["collegamento tematico/tipologico", "collegamento storico", "collegamento stilistico", "altro collegamento"]
          },
        }
      }
    ]
  },
  //specifiche di accessibilità della scheda
  sa:{
    sap:{
      // true = pubblicata || false = non pubblicata
      type : Boolean,
      required : false
    },
    saf:[{
      //visione opera riservata per utenti fidelizzati o tour operator
      type : Number,
      required : false,
      enum:{
        values: [0, 1, 2] //0 qualsiasi utente - 1 utenti fidelizzati - 2 tour operator
      },
    }]
  },
  //posizionamento indoor
  pi:{
    piq:{
      //qualifica bene se contenuto o contenitore
      type : Number,
      required : false,
      enum:{
        values: [0, 1, 2, 3] //0 bene immobile contenitore - 1 bene mobile contenuto - 2 bene immobile contenuto in un sito- 3 sito contenitore
      },
    },
    //posizione interna al bene contenitore
    pic:[{
      pict:{
        type:String,
        required : false,
        enum:{
          values: ["sede di provenienza" , "luogo di collocazione"]
        },
      },
      picn:{
        //denominazione estesa e città del bene contenitore
        type:String,
        maxLength : 80,
        required : false
      },
      picl:{
        //livello rispetto al suolo del bene contenitore
        type : Number, //integer 8 bit con segno?
        minimum : -256,
        maximum : 256,
        required : false
      },
      pics:{
        //sottoarea stanza in cui è possibile trovare il bene culturale
        type : String,
        maxLength : 15,
        required : false
      },
      picd:{
        //Data di ingresso del bene nella raccolta
        type : Date,
        default : Date.now
      }
    }]
  }
})
  
module.exports = mongoose.model('Scheda', schedaSchema)
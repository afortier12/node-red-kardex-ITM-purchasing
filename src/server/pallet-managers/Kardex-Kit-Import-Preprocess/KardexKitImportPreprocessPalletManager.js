const  { PalletManager } = require('../PalletManager');
const { isNull } = require('util');

class KardexKitImportPreprocessPalletManager extends PalletManager {

    constructor(RED, palletConfig, node){
        super(RED, palletConfig, node);

        this._self.config = palletConfig;
        this._self.palletType = 'Kardex kit import pre-process';

        this.onInput = this.onInput.bind(this._self);

    }
    

    onInput(msg){

        const { jobnumber, data } = msg.payload;
        var errorMsg = "";
        var errorCode = 0;          //0-no error, 1-message only, 2-kit number invalid, 3-job kit mismatch, 4- empty cells
        var kitJobNumber = "";
        var kitNumber = [];
        const { assert, Console } = require('console');
        
        //check if BOM and kit match
        //if BOM item is in multiple kits, add additional entries in BOM
        const compareBOMandKit = async(data) => {
            
        }

        //update BOM with kit data
        const updateBOM = async(data) =>{
            

        };

        const createBinsBOM = async(data) =>{
            

        };

        const createBinsKit = async(data) =>{
            

        };

        const createKitBinImportFile = async(data) =>{
            

        };
    
      
        
        (async() => {

            try {
                let kitNumberCheck = await verifyKitNumber(data);
                if (kitNumberCheck === false){
                    if (errorCode === 2){
                        msg.topic = "Invalid Kit Number!";
                    } else {
                        msg.topic = "Job Number/Kit Mismatch!";
                    }
                    msg.errorCode = errorCode;
                    msg.payload = errorMsg;                
                    this.send([null,msg]);
                }
            } catch (error) {
                this._processError(error);
                this.error(error);
                msg.payload = errorMsg;
                this.send([null,msg]);
            }
        })();


    }

}

module.exports = { KardexKitImportPreprocessPalletManager };
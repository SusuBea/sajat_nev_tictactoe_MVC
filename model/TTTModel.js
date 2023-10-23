class TTTModel{
    #lepes
    #ertek="";
    constructor(){
        this.#lepes = 0;
    }



    aktualisJatekos(){
        
        this.#lepes++;
        if (this.#lepes % 2 == 0) {
          this.#ertek = "X";
        } else {
            this.#ertek = "O";
        }
        return this.#ertek;


    }

    kovetkezoJatekos(){
        let kovjatekos = 0;
        if (this.#lepes % 2 == 0) {
            kovjatekos = "O";
        } else {
            kovjatekos = "X";
        }
        return kovjatekos;

    }

}
export default TTTModel;
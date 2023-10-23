class InfoView{
    constructor(szuloElem, lepes){
        this.szuloElem = szuloElem;
        this.#htmlOsszeAllit();
        this.pElem = $(" .info p")


    }

    setPelem(ertek){
        this.pElem.html(ertek+" következik! ")
    }

    #htmlOsszeAllit(){
        let txt = `<p>Ki következik?</p>`;
        this.szuloElem.html(txt);

    }

}
export default InfoView;
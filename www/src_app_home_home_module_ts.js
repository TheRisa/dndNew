"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 6230:
/*!*************************************************************!*\
  !*** ./src/app/home/barra-azioni/barra-azioni.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarraAzioniComponent": () => (/* binding */ BarraAzioniComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _barra_azioni_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barra-azioni.component.html?ngResource */ 3032);
/* harmony import */ var _barra_azioni_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barra-azioni.component.scss?ngResource */ 9331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home.service */ 6078);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);






let BarraAzioniComponent = class BarraAzioniComponent {
    /**
     * Costruttore della classe
     *
     * @param homeSrvc Istanza di HomeService
     */
    constructor(homeSrvc) {
        this.homeSrvc = homeSrvc;
        /** Dati per il personaggio da inserire */
        this.personaggioAggiunto = {
            effettiAttivi: [],
            nome: undefined,
            perc: 0,
            percPerTurno: 0,
            rage: 0,
            superiorita: 0,
            padronanza: 0
        };
    }
    /**
     * Metodo onInit
     */
    ngOnInit() { }
    /**
     * Click sul pulsante di carica
     */
    carica() {
        this.homeSrvc.caricapersonaggi(JSON.parse(localStorage.getItem('personaggi')));
    }
    /**
     * Apre la modale per aggiungere un personaggio
     */
    openAddModal() {
        this.personaggioAggiunto.nome = undefined;
        this.personaggioAggiunto.perc = undefined;
        this.personaggioAggiunto.percPerTurno = undefined;
        this.modal.present();
    }
    /**
     * Metodo al click sul conferma nella modale
     */
    aggiungiPersonaggio() {
        this.homeSrvc.aggiungiPersonaggi([this.personaggioAggiunto]);
        this.modal.dismiss();
    }
    /**
     * Metodo di salvataggio dei dati attuali (apre tab da cui copiare i dati)
     */
    salva() {
        localStorage.setItem('personaggi', JSON.stringify(this.homeSrvc.getPersonaggiList()));
    }
};
BarraAzioniComponent.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_2__.HomeService }
];
BarraAzioniComponent.propDecorators = {
    upload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['upload',] }],
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonModal,] }]
};
BarraAzioniComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-barra-azioni',
        template: _barra_azioni_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_barra_azioni_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BarraAzioniComponent);



/***/ }),

/***/ 5402:
/*!*****************************************************************************!*\
  !*** ./src/app/home/dettagli-personaggio/dettagli-personaggio.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DettagliPersonaggioComponent": () => (/* binding */ DettagliPersonaggioComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dettagli_personaggio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dettagli-personaggio.component.html?ngResource */ 7429);
/* harmony import */ var _dettagli_personaggio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dettagli-personaggio.component.scss?ngResource */ 302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home.service */ 6078);






let DettagliPersonaggioComponent = class DettagliPersonaggioComponent {
    /**
     * Costruttore della classe
     *
     * @param homeSrvc Istanza di HomeService
     */
    constructor(homeSrvc) {
        this.homeSrvc = homeSrvc;
        this.personaggio = undefined;
        /** NgModel per descrizione effetto */
        this.descrizioneEffetto = '';
        /** NgModel per durata effetto */
        this.durataEffetto = null;
        /** NgModel per durata effetto */
        this.isPermanent = false;
    }
    /**
     * Metodo onInit
     */
    ngOnInit() { }
    /**
     * Rimuove l'effetto passato
     *
     * @param index Indice dell'effetto
     */
    rimuoviEffetto(index) {
        this.personaggio.effettiAttivi.splice(index, 1);
    }
    /**
     * Chiusura modale senza effetti
     */
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    /**
     * Chiusura modale con aggiunta di effetto
     */
    confirm() {
        this.modal.dismiss({
            descrizione: this.descrizioneEffetto,
            durata: this.durataEffetto,
            isPermanent: this.isPermanent
        }, 'confirm');
    }
    /**
     * Metodo applicato alla chiusura della modale
     *
     * @param event Evento di dismissione
     */
    onWillDismiss(event) {
        const ev = event;
        // Aggiorno gli effetti se conferma
        if (ev.detail.role === 'confirm' && this.descrizioneEffetto) {
            this.homeSrvc.aggiungiEffetto({
                descrizione: this.descrizioneEffetto,
                durata: this.durataEffetto,
                isPermanent: this.isPermanent
            });
        }
        // Reset dei form
        this.descrizioneEffetto = '';
        this.durataEffetto = null;
        this.isPermanent = false;
    }
    /**
     * Metodo al clisk sui pulsanti di gestione superiorità
     *
     * @param isSup Flag che indica se aggiungere superiorità o inferiorità
     */
    cambiaSup(isSup) {
        this.personaggio.superiorita = isSup
            ? this.personaggio.superiorita + 1
            : this.personaggio.superiorita - 1;
        if (this.personaggio.superiorita > 2) {
            this.personaggio.superiorita = 2;
        }
        if (this.personaggio.superiorita < -2) {
            this.personaggio.superiorita = -2;
        }
    }
    /**
     * Metodo al clisk sui pulsanti di gestione padronanza
     *
     * @param isPadronanza Flag che indica se aggiungere padronanza o sfinimento
     */
    cambiaPadronanza(isPadronanza) {
        this.personaggio.padronanza = isPadronanza
            ? this.personaggio.padronanza + 1
            : this.personaggio.padronanza - 1;
        if (this.personaggio.padronanza > 4) {
            this.personaggio.padronanza = 4;
        }
        if (this.personaggio.padronanza < -4) {
            this.personaggio.padronanza = -4;
        }
    }
    /**
     * Passando il grado attuale di padronanza si ottiene una descrizione dell'effetto
     *
     * @param padronanza Grado di padronanza attuale del personaggio
     * @returns Effetto della padronanza
     */
    calcolaEffettoPadronanza(padronanza) {
        // Padronanza non passata o 0 -> nessun effetto
        if (!padronanza) {
            return '';
        }
        // Valore positivo -> si aggiungono danni
        // Valore negatico -> di riducono danni
        let effetto = padronanza > 0 ? 'Aggiungi' : 'Sottrai';
        // La potenza dell'effetto è simmetrica per > 0 e < 0
        // Non si può salire oltre il 4 in abs
        switch (Math.abs(padronanza)) {
            case 1:
                effetto = `${effetto} 1d4`;
                break;
            case 2:
                effetto = `${effetto} 1d6`;
                break;
            case 3:
                effetto = `${effetto} 1d6 e 1d4`;
                break;
            // Da 4 in su resta sempre 2d6 (non si possono usare più di 4 padronanze alla volta)
            case 4:
            default:
                effetto = `${effetto} 2d6`;
                break;
        }
        return `${effetto} danni`;
    }
};
DettagliPersonaggioComponent.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_2__.HomeService }
];
DettagliPersonaggioComponent.propDecorators = {
    personaggio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonModal,] }]
};
DettagliPersonaggioComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dettagli-personaggio',
        template: _dettagli_personaggio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dettagli_personaggio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DettagliPersonaggioComponent);



/***/ }),

/***/ 2188:
/*!***************************************************************************!*\
  !*** ./src/app/home/dominio-personaggio/dominio-personaggio.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DominioPersonaggioComponent": () => (/* binding */ DominioPersonaggioComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dominio_personaggio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dominio-personaggio.component.html?ngResource */ 2952);
/* harmony import */ var _dominio_personaggio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dominio-personaggio.component.scss?ngResource */ 9551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _home_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home.models */ 1571);
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home.service */ 6078);






let DominioPersonaggioComponent = class DominioPersonaggioComponent {
    /**
     * Costruttore della classe
     *
     * @param homeSrvc Istanza di HomeService
     */
    constructor(homeSrvc) {
        this.homeSrvc = homeSrvc;
        this.dettagli = {
            nome: '',
            perc: 0,
            percPerTurno: 0,
            rage: 0,
            superiorita: 0,
            padronanza: 0,
            effettiAttivi: []
        };
        this.indice = -1;
    }
    /**
     * Metodo onInit
     */
    ngOnInit() { }
    /**
     * Metodo al click sulle frecce accanto alla rage
     *
     * @param isUp True se la rage va aumentata, false se va diminuita
     */
    setRage(isUp) {
        this.dettagli.rage = isUp ? this.dettagli.rage + 1 : this.dettagli.rage - 1;
        this.dettagli.rage = this.dettagli.rage < 0 ? 0 : this.dettagli.rage;
    }
    /**
     * Metodo al click sul pulsante di morte. Imposta il personaggio come morente
     */
    setDeath() {
        // La logica è: 1 - se sono vivo diventa morente, 2 - se sono morente diventa morto, 3 - se sono morto torno vivo
        // Elimino l'effetto di morente (al limite viene rimpostato nel terzo caso)
        this.dettagli.effettiAttivi = this.dettagli.effettiAttivi.filter((effetto) => effetto.descrizione !== _home_models__WEBPACK_IMPORTED_MODULE_2__.morenteLabel);
        // 3 - Se è morto e ci riclicco è per farlo "rinvivire"
        if (this.dettagli.isDead) {
            this.dettagli.isDead = false;
            this.dettagli.isMorente = false;
            return;
        }
        // 2 - Se è morente allora muore
        if (this.dettagli.isMorente) {
            this.dettagli.perc = 0;
            this.dettagli.rage = 0;
            this.dettagli.isDead = true;
            return;
        }
        // 1 - Per escludione è viso, allora diventa morente
        this.dettagli.isMorente = true;
        this.dettagli.perc = 0;
        this.dettagli.rage = 0;
        this.dettagli.effettiAttivi.push({
            descrizione: _home_models__WEBPACK_IMPORTED_MODULE_2__.morenteLabel,
            durata: 3,
            isPermanent: false
        });
    }
    /**
     * Metodo per alterare la percentuale da button
     *
     * @param incremento Flag per indicare un incremento o decremento
     * @param valoreIncremento Valore dell'incremento o del decremento
     */
    cambiaPerc(event, incremento, valoreIncremento) {
        // Blocco altri click
        event.stopPropagation();
        // Aggiorno perc
        this.dettagli.perc = incremento
            ? this.dettagli.perc + valoreIncremento
            : this.dettagli.perc - valoreIncremento;
        // Se la perc è 300 o più torno al 300%
        if (incremento && this.dettagli.perc >= 300) {
            this.dettagli.perc = 300;
        }
        // Se la perc è -200 o meno torno al -200%
        if (!incremento && this.dettagli.perc <= -200) {
            this.dettagli.perc = -200;
        }
    }
    /**
     * Calcola il background da applicare al container
     *
     * @returns Colore del background da applicare
     */
    calcolaBackground() {
        // Applico sfondo verde potente se è 300%
        if (this.dettagli.perc === 300) {
            return 'rgb(106, 255, 47)';
        }
        // Applico sfondo rosso potente se è -200%
        if (this.dettagli.perc === -200) {
            return '#eb7676';
        }
        // Applico sfondo verde base se è 200%
        if (this.dettagli.perc === 200) {
            return '#8af58a';
        }
        // Applico sfondo giallo se il 100% è superato
        if (this.dettagli.perc > 99) {
            return '#efef74';
        }
        // Applico sfondo rosso se il -100% è superato
        if (this.dettagli.perc < -99) {
            return '#f7ce83';
        }
        // Non applico colori
        return '';
    }
};
DominioPersonaggioComponent.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_3__.HomeService }
];
DominioPersonaggioComponent.propDecorators = {
    dettagli: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    indice: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
DominioPersonaggioComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dominio-personaggio',
        template: _dominio_personaggio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dominio_personaggio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DominioPersonaggioComponent);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 1571:
/*!*************************************!*\
  !*** ./src/app/home/home.models.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "esaustoLabel": () => (/* binding */ esaustoLabel),
/* harmony export */   "morenteLabel": () => (/* binding */ morenteLabel),
/* harmony export */   "sovraccaricatoLabel": () => (/* binding */ sovraccaricatoLabel)
/* harmony export */ });
/** Label per la descrizione dell'effetto di sovraccaricato */
const sovraccaricatoLabel = 'Sovraccaricato';
/** Label per la descrizione dell'effetto di esausto */
const esaustoLabel = 'Esausto';
/** Label per la descrizione dell'effetto di morente */
const morenteLabel = 'Morente';


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _dominio_personaggio_dominio_personaggio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dominio-personaggio/dominio-personaggio.component */ 2188);
/* harmony import */ var _dettagli_personaggio_dettagli_personaggio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dettagli-personaggio/dettagli-personaggio.component */ 5402);
/* harmony import */ var _barra_azioni_barra_azioni_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./barra-azioni/barra-azioni.component */ 6230);










let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule],
        declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
            _dettagli_personaggio_dettagli_personaggio_component__WEBPACK_IMPORTED_MODULE_3__.DettagliPersonaggioComponent,
            _dominio_personaggio_dominio_personaggio_component__WEBPACK_IMPORTED_MODULE_2__.DominioPersonaggioComponent,
            _barra_azioni_barra_azioni_component__WEBPACK_IMPORTED_MODULE_4__.BarraAzioniComponent
        ]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.service */ 6078);





let HomePage = class HomePage {
    /**
     * Costruttore della classe
     *
     * @param homeSrvc Istanza di HomeService
     */
    constructor(homeSrvc) {
        this.homeSrvc = homeSrvc;
    }
    /**
     * Metodo onInit
     */
    ngOnInit() { }
};
HomePage.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_2__.HomeService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 6078:
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeService": () => (/* binding */ HomeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _home_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.models */ 1571);



let HomeService = class HomeService {
    /**
     * Costruttore della classe
     */
    constructor() {
        /** Lista dei personaggi da mostrare */
        this.personaggi = [];
    }
    /**
     * Getter di personaggi
     *
     * @returns Lista dei personaggi
     */
    getPersonaggiList() {
        return this.personaggi;
    }
    /**
     * Controlla se c'è almeno un personaggio caricato
     *
     * @returns True se i personaggi sono stati caricati
     */
    isPersonaggiCaricati() {
        return this.personaggi.length > 0;
    }
    /**
     * Getter del personaggio attualmente selezionato
     *
     * @returns Indice del personaggio selezionato
     */
    getPersonaggioSelezionato() {
        return this.personaggi.find((personaggio) => personaggio.selected);
    }
    /**
     * Setter del personaggio selezionato in base all'indice
     *
     * @param indice Indice del personaggio cliccato
     */
    setPersonaggioSelezionato(indice) {
        // Controllo su indice
        if (indice < 0 || indice > this.personaggi.length) {
            return;
        }
        // Tolgo la selezione a tutti gli altri e imposto il nuovo personaggio selezionato
        this.personaggi.forEach((personaggio) => (personaggio.selected = false));
        this.personaggi[indice].selected = true;
    }
    /**
     * Completa il turno del personaggio selezionato
     */
    completaTurno() {
        // Variabile di appoggio
        const personaggio = this.getPersonaggioSelezionato();
        if (personaggio) {
            // Se è < -200 la riporto a -200
            if (personaggio.perc < -200) {
                personaggio.perc = -200;
            }
            // Se è > 100 la riporto a 100
            if (personaggio.perc > 100) {
                personaggio.perc = 100;
            }
            // Riduco di 1 turno gli effetti attivi (non permanenti)
            personaggio.effettiAttivi.forEach((effetto) => (effetto.durata = effetto.isPermanent
                ? effetto.durata
                : effetto.durata - 1));
            // Rimuovo effetti terminati
            personaggio.effettiAttivi = personaggio.effettiAttivi.filter((effetto) => effetto.isPermanent || effetto.durata > 0);
            // Riordino i personaggi
            this.riordinaPersonaggi();
        }
    }
    /**
     * Metodo che attiva il round successivo
     */
    nextRound() {
        this.personaggi.forEach((personaggio) => {
            // Per i personaggi morti non fo nulla
            if (personaggio.isDead) {
                return;
            }
            // Se il personaggio è morente non ottiene rapidità
            if (personaggio.isMorente) {
                personaggio.effettiAttivi.map((effetto) => {
                    // Cerco effetto di morente per abbasare la durata
                    if (effetto.descrizione === _home_models__WEBPACK_IMPORTED_MODULE_0__.morenteLabel) {
                        effetto.durata = effetto.durata - 1;
                        // Evito durate negative
                        if (effetto.durata < 0) {
                            effetto.durata = 0;
                        }
                        // Se morente è terminato allora il personaggio è morto
                        if (effetto.durata === 0) {
                            personaggio.isDead = true;
                            personaggio.effettiAttivi = [];
                            personaggio.superiorita = 0;
                        }
                    }
                });
                return;
            }
            // Aggiorno la perc
            personaggio.perc = personaggio.perc + personaggio.percPerTurno;
            // Se la perc è > 300 la riporto a 300
            if (personaggio.perc > 300) {
                personaggio.perc = 300;
            }
        });
        // Riordino i personaggi
        this.riordinaPersonaggi();
    }
    /**
     * Aggiunge un effetto all'elence degli effetti attivi del personaggio selezionato
     *
     * @param effetto Effetto da aggiungere
     */
    aggiungiEffetto(effetto) {
        this.getPersonaggioSelezionato().effettiAttivi.push(effetto);
    }
    /**
     * Metodo per il caricamento dei personaggi
     *
     * @param personaggi Dati dei personaggi da caricare
     */
    caricapersonaggi(personaggi) {
        // Clonazione senza riferimento
        this.personaggi = JSON.parse(JSON.stringify(personaggi));
        // Preseleziono il primo dopo averli ordinati
        if (this.personaggi.length > 0) {
            this.riordinaPersonaggi();
            this.personaggi[0].selected = true;
        }
    }
    /**
     * Metodo per il caricamento dei personaggi
     *
     * @param personaggi Dati dei personaggi da caricare
     */
    aggiungiPersonaggi(personaggi) {
        // Clonazione senza riferimento
        this.personaggi = this.personaggi.concat(JSON.parse(JSON.stringify(personaggi)));
        this.riordinaPersonaggi();
    }
    /**
     * Metodo per riordinare i personaggi in ordine decrescente di perc
     */
    riordinaPersonaggi() {
        this.personaggi.sort((personaggio1, personaggio2) => personaggio2.perc - personaggio1.perc);
    }
};
HomeService.ctorParameters = () => [];
HomeService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], HomeService);



/***/ }),

/***/ 9331:
/*!**************************************************************************!*\
  !*** ./src/app/home/barra-azioni/barra-azioni.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  width: 100%;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.button {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhcnJhLWF6aW9uaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6ImJhcnJhLWF6aW9uaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 302:
/*!******************************************************************************************!*\
  !*** ./src/app/home/dettagli-personaggio/dettagli-personaggio.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  width: 100%;\n  min-width: 500px;\n}\n\n.name {\n  padding: 0 20px;\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.nomeContainer {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.abilita {\n  width: 15px;\n  height: 16px;\n  border-radius: 100%;\n}\n\n.abilitaContainer {\n  width: 40px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.abilitaContent {\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.body {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: start;\n  flex-wrap: wrap;\n}\n\n.full-body {\n  width: 100%;\n  padding: 0%;\n}\n\n.half-body {\n  width: 50%;\n  padding: 0 3%;\n}\n\n@media screen and (max-width: 720px) {\n  .half-body {\n    width: 100%;\n  }\n}\n\n.title {\n  font-size: 20px;\n  text-align: center;\n  height: 40px;\n  margin: 15px 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.effetto {\n  width: 100%;\n  margin: 5px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.statisticaContainer {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.valueContainer {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.statistica {\n  font-size: 18px;\n  width: 40%;\n  margin: 5px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.enterValue {\n  width: 50px;\n  background: none;\n  border: none;\n  text-align: end;\n}\n\n.durata {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.buttonRow {\n  margin-top: 20px;\n  margin-bottom: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal {\n  align-items: center;\n  justify-content: center;\n}\n\n.modal::part(content) {\n  width: 500px;\n  height: 380px;\n}\n\n.buttonRowModale {\n  margin-top: 35px;\n  width: 80%;\n  padding-left: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Chrome, Safari, Edge, Opera */\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldHRhZ2xpLXBlcnNvbmFnZ2lvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQSxnQ0FBQTs7QUFDQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFBRjs7QUFFQSxZQUFBOztBQUNBO0VBQ0UsMEJBQUE7QUFDRiIsImZpbGUiOiJkZXR0YWdsaS1wZXJzb25hZ2dpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm5vbWVDb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFiaWxpdGEge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uYWJpbGl0YUNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFiaWxpdGFDb250ZW50IHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5mdWxsLWJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAlO1xyXG59XHJcblxyXG4uaGFsZi1ib2R5IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDAgMyU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgLmhhbGYtYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZWZmZXR0byB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhdGlzdGljYUNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi52YWx1ZUNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0aXN0aWNhIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBtYXJnaW46IDVweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbnRlclZhbHVlIHtcclxuICB3aWR0aDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi5kdXJhdGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b25Sb3cge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAmOjpwYXJ0KGNvbnRlbnQpIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMzgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9uUm93TW9kYWxlIHtcclxuICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi8qIEZpcmVmb3ggKi9cclxuaW5wdXRbdHlwZT0nbnVtYmVyJ10ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 9551:
/*!****************************************************************************************!*\
  !*** ./src/app/home/dominio-personaggio/dominio-personaggio.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = ".content {\n  padding: 0 5px;\n  width: 100%;\n  min-width: 500px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 15px;\n}\n\n.nome {\n  width: 15%;\n  padding-left: 10px;\n}\n\n.percBarContainer {\n  width: 40%;\n  height: 30px;\n  position: relative;\n  border-radius: 5px;\n}\n\n.percBar {\n  height: 30px;\n  border-radius: 5px;\n}\n\n.percAlign {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative;\n  left: 40%;\n}\n\n.percInput {\n  width: 55px;\n  background: none;\n  border: none;\n  text-align: end;\n}\n\n.buttonRow {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Chrome, Safari, Edge, Opera */\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWluaW8tcGVyc29uYWdnaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBLGdDQUFBOztBQUNBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBLFlBQUE7O0FBQ0E7RUFDRSwwQkFBQTtBQUVGIiwiZmlsZSI6ImRvbWluaW8tcGVyc29uYWdnaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5ub21lIHtcclxuICB3aWR0aDogMTUlO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLnBlcmNCYXJDb250YWluZXIge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5wZXJjQmFyIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucGVyY0FsaWduIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA0MCU7XHJcbn1cclxuXHJcbi5wZXJjSW5wdXQge1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLmJ1dHRvblJvdyB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLyogRmlyZWZveCAqL1xyXG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".container {\n  margin-top: 15px;\n  padding-left: 5%;\n  padding-right: 5%;\n  width: 100%;\n}\n\n.containerDomini {\n  width: 100%;\n  padding: 0 2%;\n  max-height: 410px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.containerDettagli {\n  width: 100%;\n  padding: 0 2%;\n  overflow-x: auto;\n}\n\n@media screen and (max-width: 992px) {\n  .container {\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n  .containerDomini {\n    overflow-x: auto;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .container {\n    padding-left: 2%;\n    padding-right: 2%;\n  }\n  .containerDomini {\n    overflow-x: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQUNGO0VBRUE7SUFDRSxnQkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUFERjtFQUlBO0lBQ0UsZ0JBQUE7RUFGRjtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyRG9taW5pIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDIlO1xyXG4gIG1heC1oZWlnaHQ6IDQxMHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyRGV0dGFnbGkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMiU7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJEb21pbmkge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyRG9taW5pIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3032:
/*!**************************************************************************!*\
  !*** ./src/app/home/barra-azioni/barra-azioni.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Container -->\n<div class=\"container default-black\">\n  <!-- Prossimo round -->\n  <ion-button\n    color=\"light\"\n    class=\"button\"\n    (click)=\"homeSrvc.nextRound()\"\n    [disabled]=\"!homeSrvc.isPersonaggiCaricati()\"\n    ><ion-icon name=\"play-forward-outline\"></ion-icon\n  ></ion-button>\n  <!-- Aggiungi personaggio -->\n  <ion-button color=\"light\" class=\"button\" (click)=\"openAddModal()\"\n    ><ion-icon name=\"add-outline\"></ion-icon\n  ></ion-button>\n  <!-- Export dati -->\n  <ion-button color=\"light\" class=\"button\" (click)=\"salva()\"\n    ><ion-icon name=\"save-outline\"></ion-icon\n  ></ion-button>\n  <!-- Import dati -->\n  <ion-button color=\"light\" class=\"button\" (click)=\"carica()\"\n    ><ion-icon name=\"download-outline\"></ion-icon\n  ></ion-button>\n</div>\n\n<!-- Modale inserimento -->\n<ion-modal>\n  <ng-template>\n    <ion-header\n      ><ion-title style=\"margin: 20px 0\"\n        >Inserisci i dati del personaggio</ion-title\n      ></ion-header\n    >\n    <ion-content>\n      <!-- Nome -->\n      <ion-item style=\"margin-top: 45px\">\n        <ion-input\n          type=\"text\"\n          placeholder=\"Nome personaggio\"\n          [(ngModel)]=\"personaggioAggiunto.nome\"\n        ></ion-input>\n      </ion-item>\n      <!-- Rapidità attuale -->\n      <ion-item>\n        <ion-input\n          type=\"number\"\n          placeholder=\"Rapidità attuale\"\n          [(ngModel)]=\"personaggioAggiunto.perc\"\n        ></ion-input>\n      </ion-item>\n      <!-- Rapidità per turno -->\n      <ion-item>\n        <ion-input\n          type=\"number\"\n          placeholder=\"Rapidità per turno\"\n          [(ngModel)]=\"personaggioAggiunto.percPerTurno\"\n        ></ion-input>\n      </ion-item>\n\n      <!-- Conferma -->\n      <!-- perc = 0 è un valore ammesso -->\n      <ion-button\n        expand=\"block\"\n        [disabled]=\"\n          !personaggioAggiunto.nome ||\n          personaggioAggiunto.perc === null ||\n          personaggioAggiunto.perc === undefined ||\n          !personaggioAggiunto.percPerTurno\n        \"\n        (click)=\"aggiungiPersonaggio()\"\n        style=\"margin: 15px 10px\"\n        >Conferma</ion-button\n      >\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ }),

/***/ 7429:
/*!******************************************************************************************!*\
  !*** ./src/app/home/dettagli-personaggio/dettagli-personaggio.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Container -->\n<div class=\"container default-black\" *ngIf=\"personaggio\">\n  <!-- Nome e abilità -->\n  <div class=\"nomeContainer\">\n    <!-- Nome -->\n    <p class=\"name\">{{ personaggio.nome }}</p>\n  </div>\n  <!-- Effetti attivi & stats -->\n  <div class=\"body\">\n    <!-- Display sinistro -->\n    <div class=\"half-body\">\n      <!-- Sup & inf -->\n      <div class=\"title\">\n        Superiorità/Inferioità\n        <!-- Button di gestione sup/inf -->\n        <div class=\"buttons\" style=\"margin-left: 20px\">\n          <ion-button\n            (click)=\"cambiaSup(true)\"\n            [disabled]=\"personaggio.isDead\"\n            color=\"success\"\n            >+</ion-button\n          >\n          <ion-button\n            (click)=\"cambiaSup(false)\"\n            [disabled]=\"personaggio.isDead\"\n            color=\"danger\"\n            >-</ion-button\n          >\n        </div>\n      </div>\n      <!-- Nessun sup/inf -->\n      <p\n        style=\"width: 100%; text-align: center\"\n        *ngIf=\"personaggio.superiorita === 0\"\n      >\n        Nessun livello di Superiorità o Inferioità\n      </p>\n      <!-- Sup/inf -->\n      <p\n        style=\"width: 100%; text-align: center\"\n        *ngIf=\"personaggio.superiorita !== 0\"\n      >\n        {{\n          personaggio.superiorita > 0\n            ? personaggio.superiorita\n            : personaggio.superiorita * -1\n        }}\n        {{ personaggio.superiorita > 0 ? 'Supperiorità' : 'Inferiorità' }}\n      </p>\n\n      <!-- Padronanza/sfinimento -->\n      <div class=\"title\">\n        Padronanza/Sfinimento\n        <!-- Button di gestione sup/inf -->\n        <div class=\"buttons\" style=\"margin-left: 20px\">\n          <ion-button\n            (click)=\"cambiaPadronanza(true)\"\n            [disabled]=\"personaggio.isDead\"\n            color=\"success\"\n            >+</ion-button\n          >\n          <ion-button\n            (click)=\"cambiaPadronanza(false)\"\n            [disabled]=\"personaggio.isDead\"\n            color=\"danger\"\n            >-</ion-button\n          >\n        </div>\n      </div>\n      <!-- Nessun pad/sfin -->\n      <p\n        style=\"width: 100%; text-align: center\"\n        *ngIf=\"personaggio.padronanza === 0\"\n      >\n        Nessun livello di Padronanza o Sfinimento\n      </p>\n      <!-- Padronanza/sfinimento -->\n      <p\n        style=\"width: 100%; text-align: center\"\n        *ngIf=\"personaggio.padronanza !== 0\"\n      >\n        {{\n          personaggio.padronanza > 0\n            ? personaggio.padronanza\n            : personaggio.padronanza * -1\n        }}\n        {{ personaggio.padronanza > 0 ? 'Padronanza' : 'Sfinimento' }}\n      </p>\n      <!-- Effetto padronanza -->\n      <p\n        style=\"width: 100%; text-align: center\"\n        *ngIf=\"personaggio.padronanza !== 0\"\n      >\n        {{ calcolaEffettoPadronanza(personaggio.padronanza) }}\n      </p>\n    </div>\n\n    <!-- Effetti attivi -->\n    <div class=\"half-body\">\n      <!-- Titolo -->\n      <p class=\"title\">\n        Effetti attivi\n        <ion-button\n          [disabled]=\"personaggio.isDead\"\n          color=\"success\"\n          id=\"open-modal\"\n          expand=\"block\"\n          style=\"margin-left: 20px\"\n          >+</ion-button\n        >\n        <!-- Modale inline per aggiunta effetto -->\n        <ion-modal\n          class=\"modal\"\n          trigger=\"open-modal\"\n          (willDismiss)=\"onWillDismiss($event)\"\n        >\n          <ng-template>\n            <ion-content class=\"ion-padding contentModale\">\n              <!-- Descrizione effetto -->\n              <ion-item style=\"width: 95%; padding: 20px 0 0 5%\">\n                <ion-label position=\"stacked\">Effetto</ion-label>\n                <ion-input\n                  type=\"text\"\n                  placeholder=\"Descrizione effetto\"\n                  [(ngModel)]=\"descrizioneEffetto\"\n                ></ion-input>\n              </ion-item>\n              <!-- Durata effetto -->\n              <ion-item style=\"width: 95%; padding: 20px 0 0 5%\">\n                <ion-label position=\"stacked\"\n                  >Durata {{ durataEffetto }}</ion-label\n                >\n                <ion-input\n                  type=\"text\"\n                  type=\"number\"\n                  placeholder=\"Durata effetto\"\n                  [disabled]=\"isPermanent\"\n                  (ngModelChange)=\"isPermanent = false\"\n                  [(ngModel)]=\"durataEffetto\"\n                ></ion-input>\n              </ion-item>\n              <!-- Effetto permanente -->\n              <ion-item style=\"width: 95%; padding: 20px 0 0 5%\">\n                <ion-label>Senza Scadenza</ion-label>\n                <ion-checkbox\n                  slot=\"start\"\n                  [(ngModel)]=\"isPermanent\"\n                  (ngModelChange)=\"durataEffetto = null\"\n                  [disabled]=\"!!+durataEffetto\"\n                ></ion-checkbox>\n              </ion-item>\n\n              <!-- Pulsanti chiusura modale -->\n              <div class=\"buttonRowModale\">\n                <ion-button\n                  (click)=\"confirm()\"\n                  color=\"dark\"\n                  [disabled]=\"\n                    (!durataEffetto && !isPermanent) || !descrizioneEffetto\n                  \"\n                  >Conferma</ion-button\n                >\n              </div>\n            </ion-content>\n          </ng-template>\n        </ion-modal>\n      </p>\n      <!-- Nessun effetto -->\n      <p\n        style=\"width: 100%; text-align: center\"\n        *ngIf=\"personaggio.effettiAttivi.length === 0\"\n      >\n        Nessun effetto attivo al momento\n      </p>\n      <!-- Effetto -->\n      <div\n        class=\"effetto\"\n        *ngFor=\"\n          let effetto of personaggio.effettiAttivi;\n          let indiceEffetto = index\n        \"\n      >\n        <p class=\"no-margin\">{{ effetto.descrizione }}</p>\n        <div class=\"durata\">\n          <p\n            *ngIf=\"!effetto.isPermanent\"\n            class=\"no-margin\"\n            style=\"text-align: end\"\n          >\n            {{ effetto.durata }} round\n          </p>\n          <ion-button\n            color=\"danger\"\n            (click)=\"rimuoviEffetto(indiceEffetto)\"\n            style=\"margin-left: 10px\"\n            >-</ion-button\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 2952:
/*!****************************************************************************************!*\
  !*** ./src/app/home/dominio-personaggio/dominio-personaggio.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Content -->\n<div\n  class=\"content hover default-black\"\n  (click)=\"homeSrvc.setPersonaggioSelezionato(indice)\"\n  [ngStyle]=\"{ 'background-color': dettagli.selected ? '#dd65a22e' : '' }\"\n>\n  <!-- Nome personaggio -->\n  <p\n    class=\"nome\"\n    [ngStyle]=\"{\n      'font-weight': dettagli.selected ? 'bold' : '',\n      'text-decoration': dettagli.isDead ? 'line-through' : ''\n    }\"\n  >\n    {{ dettagli.nome }} - {{ dettagli.rage }}\n  </p>\n  <div>\n    <!-- Gestione morente -->\n    <ion-icon\n      *ngIf=\"!dettagli.isDead\"\n      [name]=\"dettagli.isMorente ? 'heart-dislike-outline' : 'heart-outline'\"\n      (click)=\"setDeath()\"\n      [color]=\"dettagli.isMorente ? 'danger' : 'success'\"\n    ></ion-icon>\n    <!-- Personaggio morto -->\n    <ion-icon\n      *ngIf=\"dettagli.isDead\"\n      name=\"skull-outline\"\n      (click)=\"setDeath()\"\n      color=\"medium\"\n    ></ion-icon>\n  </div>\n  <!-- Percentuale rapidità -->\n  <div\n    class=\"percBarContainer\"\n    [ngStyle]=\"{ 'background-color': calcolaBackground() }\"\n  >\n    <!-- Gestione barra per percentuali positive -->\n    <div\n      *ngIf=\"dettagli.perc > 0\"\n      class=\"percBar\"\n      [ngStyle]=\"{\n        width: (dettagli.perc % 100) + '%',\n        'background-color': dettagli.perc > 100 ? '#8af58a' : '#efef74'\n      }\"\n    ></div>\n    <!-- Gestione barra per percentuali negative -->\n    <div\n      *ngIf=\"dettagli.perc < 0\"\n      class=\"percBar\"\n      [ngStyle]=\"{\n        width: (-dettagli.perc % 100) + '%',\n        'background-color': dettagli.perc < -100 ? '#eb7676' : '#f7ce83'\n      }\"\n    ></div>\n    <!-- Stringa di % -->\n    <div\n      class=\"percAlign\"\n      [ngStyle]=\"{ top: dettagli.perc === 0 ? '5px' : '-25px' }\"\n    >\n      <input\n        class=\"percInput no-margin\"\n        [(ngModel)]=\"dettagli.perc\"\n        type=\"number\"\n      />\n      <p class=\"no-margin\">%</p>\n    </div>\n  </div>\n  <!-- Button di gestione % -->\n  <!-- 1% -->\n  <div>\n    <ion-button\n      (click)=\"cambiaPerc($event, true, 1)\"\n      [disabled]=\"dettagli.isDead || dettagli.isMorente\"\n      color=\"success\"\n      >+1</ion-button\n    >\n    <ion-button\n      (click)=\"cambiaPerc($event, false, 1)\"\n      [disabled]=\"dettagli.isDead || dettagli.isMorente\"\n      color=\"danger\"\n      >-1</ion-button\n    >\n  </div>\n  <!-- 10% -->\n  <div>\n    <ion-button\n      (click)=\"cambiaPerc($event, true, 10)\"\n      [disabled]=\"dettagli.isDead || dettagli.isMorente\"\n      color=\"success\"\n      >+10</ion-button\n    >\n    <ion-button\n      (click)=\"cambiaPerc($event, false, 10)\"\n      [disabled]=\"dettagli.isDead || dettagli.isMorente\"\n      color=\"danger\"\n      >-10</ion-button\n    >\n  </div>\n  <!-- Buttons per rage -->\n  <div>\n    <ion-button\n      (click)=\"setRage(true)\"\n      [disabled]=\"dettagli.isDead || dettagli.isMorente\"\n      color=\"primary\"\n      >↑</ion-button\n    >\n    <ion-button\n      (click)=\"setRage(false)\"\n      [disabled]=\"dettagli.isDead || dettagli.isMorente || dettagli.rage === 0\"\n      color=\"warning\"\n      >↓</ion-button\n    >\n  </div>\n</div>\n<!-- Completa turno -->\n<div\n  class=\"buttonRow\"\n  *ngIf=\"dettagli.selected && !dettagli.isDead && !dettagli.isMorente\"\n>\n  <ion-button (click)=\"homeSrvc.completaTurno()\" color=\"dark\"\n    >Completa Turno</ion-button\n  >\n</div>\n";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!-- Content -->\r\n<ion-content [fullscreen]=\"true\">\r\n  <!-- Container generico -->\r\n  <div class=\"container\">\r\n    <!-- Barra azioni -->\r\n    <app-barra-azioni></app-barra-azioni>\r\n\r\n    <!-- Lista dei personaggi -->\r\n    <div class=\"containerDomini\">\r\n      <app-dominio-personaggio\r\n        *ngFor=\"let personaggio of homeSrvc.getPersonaggiList(); let indiceDominio = index\"\r\n        [dettagli]=\"personaggio\"\r\n        [indice]=\"indiceDominio\"\r\n      ></app-dominio-personaggio>\r\n\r\n      <p\r\n        style=\"width: 100%; text-align: center; font-size: 20px\"\r\n        *ngIf=\"!homeSrvc.isPersonaggiCaricati()\"\r\n      >\r\n        Carica i dati della partita per iniziare\r\n      </p>\r\n    </div>\r\n\r\n    <!-- Dettagli personaggio selezionato -->\r\n    <div class=\"containerDettagli\">\r\n      <app-dettagli-personaggio\r\n        [personaggio]=\"homeSrvc.getPersonaggioSelezionato()\"\r\n      ></app-dettagli-personaggio>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map
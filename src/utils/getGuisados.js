const API = 'https://sagazapi.vercel.app/'

class guisadosAPI {
   constructor(){
    this.apiURL = API
    this.guisadosAPI = `${this.apiURL}api/guisados/`
/*     this.getSagazData() */
  }

  async getSagazData(){
    try{
      const response = await fetch(this.guisadosAPI);
      this.data = await response.json();
      
      return this.data;
    }catch(error){
      console.log('Fetch Error', error);
    }
  }
};

export default guisadosAPI;
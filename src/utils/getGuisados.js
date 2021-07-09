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
      
      console.log(response)
      this.data = await response.json();
      console.log(this.data);
      
      return this.data;
    }catch(error){
      console.log('Fetch Error', error);
    }
  }
};

export default guisadosAPI;
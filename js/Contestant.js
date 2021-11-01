class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
   }

   getCount(){
     var contestantCountRef = dataBase.ref('contestantCount')
     contestantCount.on("value",(data)=>{
       contestantCount = data.val();
     })
    }
updateCount(count){
  dataBase.ref("/").update({
    contestantCount:count
  });
}
 
update(){
  var contestantIndex = "contestants/contestant"+ this.index;
  dataBase.ref(contestantIndex).set({
    name: this.name,
    answer:this.answer
  });
}
static getPlayerInfo(){
  var contestantInfoRef = database.ref('contestants');
  contestantInfoRef.on("value",(data)=>{
    allcontestants = data.val();
  })
}

}

let myself = {
   //properties
   myName : "PHYOXI",
   myAge :  28,
   skill : ["html", "css","js","php"] ,
   job : ["developer","teacher"],
   //methods
   teach : function(){
      return this.myName +  " can make video edict"
   },

      can() {
      return "I can run";
   },
   replace() {
      return this.myName;
   },
}
console.log(myself);
console.log(myself.myName);
console.log(myself["myName"]);

console.log(myself.teach());
console.log(myself.can());


console.log(myself.teach());

////////////////////////


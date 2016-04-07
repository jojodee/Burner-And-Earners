var walter = 'Walter sent: “Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.”';

messageWalter = walter.replace('Hello. I’ve got',"")
                      .replace(' and ', ",")
                      .replace('. I’m too old for the other ones.', " ").replace('“ ', '').replace(' ”', '').replace(' sent','');
console.log(messageWalter);



var jesse = 'Jesse sent: “Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk, LankedOn.”';
messageJesse = jesse.replace('“Yo! I’ve got ‘em all. ', '').replace(' sent','')
                     .replace(/ /g, '').replace('.”', '');
console.log(messageJesse);


var saul = 'Saul sent: “I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands.”';
messageSaul = saul.replace('“I’m on ', '')
                  .replace(' for Business. And I have an ', ',')
                  .replace(' account for my cats. Oh, and ', ',').replace(' for my ex-husbands.”', '').replace(' sent', '');
console.log(messageSaul);

var gus = 'Gus sent: “I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there.”';
messageGus = gus.replace('“I use ', '')
                .replace(' and ', ',')
                .replace('. My customers aren’t on the others, so I can’t get them to engage with my brand there.”','').replace(' sent', '');
console.log(messageGus);

 var dataWalter ='“It was 67MB. Is that everything? I’m busy, you know.”';
dataWalterUsed = dataWalter.replace('“It was ', '').replace('. Is that everything? I’m busy, you know.”', '').replace('MB','');
console.log(dataWalterUsed);

 var dataJesse ='“Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.”';
dataJesseUsed = dataJesse.replace('“Damn, it was like ', '').replace('. Dat Snaptalk is a data hog, yo.”', '').replace('MB','');
console.log(dataJesseUsed);

 var dataSaul ='“I think 283MB. That’s what the guy at the store said. I think it means MegaBites.”';
dataSaulUsed = dataSaul.replace('“I think ', '').replace('. That’s what the guy at the store said. I think it means MegaBites.”', '').replace('MB','');
console.log(dataSaulUsed);

 var dataGus ='“Around 150MB. I have the receipts if you need more precise figures.”';
dataGusUsed = dataGus.replace('“Around ', '').replace('. I have the receipts if you need more precise figures.”', '').replace('MB','');
console.log(dataGusUsed);

var walDet = messageWalter + ' ' + dataWalterUsed;

var jesDet = messageJesse + ' ' + dataJesseUsed;

var saulDet = messageSaul + ' ' + dataSaulUsed;

var gusMes = messageGus  + ' ' + dataGusUsed;

console.log(walDet);
console.log(jesDet);
console.log(saulDet);
console.log(gusDet);

var dataUsedByEveryone = [];

//dataUsedByEveryone.push(dataWalterUsed,dataJesseUsed,dataSaulUsed,dataGusUsed);
//console.log(dataUsedByEveryone);

//var whoUsedMoreData = [];
//dataUsedByEveryone.forEach(function(user){
  //whoUsedMoreData.push(Math.max(Number(user)));
//});
//console.log(whoUsedMoreData);

// mostDataUsed =  Math.max.apply(null, whoUsedMoreData);

//onsole.log('The most data used was' + ' ' + mostDataUsed + 'MB');

const PRIV_KEY = "9e277391cd31d26dfe4f81ad53ad283721fcc41c";
const PUBLIC_KEY = "2743415ce83357214bda74aedd940c8e";

var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

window.addEventListener("load", function() {
  document.getElementById("character-search").addEventListener("click", function(event) {
  	event.preventDefault();
  	const value = document.getElementById("characterInput").value;
  	if (value === "")
  		return;
  	console.log(value);
  	
  	var ts = new Date().getTime();
    var hash = MD5(ts + PRIV_KEY + PUBLIC_KEY);
    
    var url = 'https://gateway.marvel.com:443/v1/public/characters?name=' + value;
    
    $.getJSON(url, {
    	apikey: PUBLIC_KEY,
      ts: ts,
      hash: hash,
      //characters: characterId
      })
      .done(function(data) {
      	
        let charID = data.data.results[0].id;
        console.log(data);
        console.log(charID);
        
        url = 'https://gateway.marvel.com:443/v1/public/comics?characters=' + charID;
        //ts = new Date().getTime();
        
        $.getJSON(url, {
        	apikey: PUBLIC_KEY,
          ts: ts,
          hash: hash,
          //characters: characterId
          })
          .done(function(data) {
          	let html = "";
          	let comicID = data.data.results[0].id;
          	let url2 = 'https://gateway.marvel.com:443/v1/public/creators?comics=' + comicID;
          	//=================================================================
           $.getJSON(url2, {
            	apikey: PUBLIC_KEY,
              ts: ts,
              hash: hash,
              //characters: characterId
              })
              .done(function(data2) {
              	for (let i=0; i < data.data.results.length-11; i++){
                  html += `<br><br><br><div id="comic-example` + i + `" class="comic-example"><div class="comic-data">`;
              	  html += `<a href="` + data.data.results[i].urls[0].url + `"> <img src="` + data.data.results[i].images[0].path + `/portrait_fantastic.` + data.data.results[i].images[0].extension + `"></img></a>`;
              	  html += `<h4>` + data.data.results[i].title + `</h4>`;
              	  html += `</div><div id="comic-creator` + i + `" class="comic-creator"><h3>Creators</h3>`;
            	    for (let x = 0; x < data2.data.results.length; x++) {
            	      html += `<div>`;
            	      html += `<h5>` + data2.data.results[x].firstName + ` ` + data2.data.results[x].lastName + `</h5>`;
                    //html += `<h6><img src="` + data2.data.results[x].thumbnail.path + `/portrait_small.` + data2.data.results[x].thumbnail.extension + '"></img></h6>';
                    html += `</div>`;
                    document.getElementById("comicResults").innerHTML = html;
            	    }
            	    html += `</div>`
              	  html += `</div><br><br><br>`;
                }
                console.log(data);
                console.log(data2);
              })
              .fail(function(err){
                // the error codes are listed on the dev site
                console.log(err);
              });
          	
          	//-------------------------------------------------------------
          	
            console.log(data);
            document.getElementById("comicResults").innerHTML = html;
          })
          .fail(function(err){
            // the error codes are listed on the dev site
            console.log(err);
          });
        
      })
      .fail(function(err){
        // the error codes are listed on the dev site
        console.log(err);
      });
  });
});

//const PRIV_KEY = "c5173d05b86cfa794c58de80d317e9f5";
//const PUBLIC_KEY = "0213d2f1494ab651212f8ac4186f50ed91d42726";


function getVision() {

	console.log("Called Function");
  // you need a new ts every request                                                                                    
  var ts = new Date().getTime();
  var hash = MD5(ts + PRIV_KEY + PUBLIC_KEY);

  var url = 'https://gateway.marvel.com:443/v1/public/characters?name=Vision';

  //console.log(url);
  $.getJSON(url, {
  	apikey: PUBLIC_KEY,
    ts: ts,
    hash: hash,
    //characters: characterId
    })
    .done(function(data) {
    	//console.log("Fetching...");
      // sort of a long dump you will need to sort through
      let html = "";
      html = `<img src="` + data.data.results[0].thumbnail.path + `/portrait_uncanny.` + data.data.results[0].thumbnail.extension + `"></img>`;
      html += `<h2>` + data.data.results[0].name + `</h2>`;
      html += `<h3>` + data.data.results[0].description + `</h3>`;
      document.getElementById("display-character").innerHTML = html;
      console.log(data);
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};

function getIronMan() {

	console.log("Called Function");
  // you need a new ts every request                                                                                    
  var ts = new Date().getTime();
  var hash = MD5(ts + PRIV_KEY + PUBLIC_KEY);

  var url = 'https://gateway.marvel.com:443/v1/public/characters?name=Iron Man';

  //console.log(url);
  $.getJSON(url, {
  	apikey: PUBLIC_KEY,
    ts: ts,
    hash: hash,
    //characters: characterId
    })
    .done(function(data) {
    	//console.log("Fetching...");
      // sort of a long dump you will need to sort through
      let html = "";
      html = `<img src="` + data.data.results[0].thumbnail.path + `/portrait_uncanny.` + data.data.results[0].thumbnail.extension + `"></img>`;
      html += `<h2>` + data.data.results[0].name + `</h2>`;
      html += `<h2>` + data.data.results[0].description + `</h2>`;
      document.getElementById("display-character").innerHTML = html;
      console.log(data);
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};

function getHulk() {

	console.log("Called Function");
  // you need a new ts every request                                                                                    
  var ts = new Date().getTime();
  var hash = MD5(ts + PRIV_KEY + PUBLIC_KEY);

  var url = 'https://gateway.marvel.com:443/v1/public/characters?name=Hulk';

  //console.log(url);
  $.getJSON(url, {
  	apikey: PUBLIC_KEY,
    ts: ts,
    hash: hash,
    //characters: characterId
    })
    .done(function(data) {
    	//console.log("Fetching...");
      // sort of a long dump you will need to sort through
      let html = "";
      html = `<img src="` + data.data.results[0].thumbnail.path + `/portrait_uncanny.` + data.data.results[0].thumbnail.extension + `"></img>`;
      html += `<h2>` + data.data.results[0].name + `</h2>`;
      html += `<h2>` + data.data.results[0].description + `</h2>`;
      document.getElementById("display-character").innerHTML = html;
      console.log(data);
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};

function getThanos() {

	console.log("Called Function");
  // you need a new ts every request                                                                                    
  var ts = new Date().getTime();
  var hash = MD5(ts + PRIV_KEY + PUBLIC_KEY);

  var url = 'https://gateway.marvel.com:443/v1/public/characters?name=Thanos';

  //console.log(url);
  $.getJSON(url, {
  	apikey: PUBLIC_KEY,
    ts: ts,
    hash: hash,
    //characters: characterId
    })
    .done(function(data) {
    	//console.log("Fetching...");
      // sort of a long dump you will need to sort through
      let html = "";
      html = `<img src="` + data.data.results[0].thumbnail.path + `/portrait_uncanny.` + data.data.results[0].thumbnail.extension + `"></img>`;
      html += `<h2>` + data.data.results[0].name + `</h2>`;
      html += `<h2>` + data.data.results[0].description + `</h2>`;
      document.getElementById("display-character").innerHTML = html;
      console.log(data);
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};

function getSpider() {

	console.log("Called Function");
  // you need a new ts every request                                                                                    
  var ts = new Date().getTime();
  var hash = MD5(ts + PRIV_KEY + PUBLIC_KEY);

  var url = 'https://gateway.marvel.com:443/v1/public/characters?name=Spider-man';

  //console.log(url);
  $.getJSON(url, {
  	apikey: PUBLIC_KEY,
    ts: ts,
    hash: hash,
    //characters: characterId
    })
    .done(function(data) {
    	//console.log("Fetching...");
      // sort of a long dump you will need to sort through
      let html = "";
      html = `<img src="` + data.data.results[0].thumbnail.path + `/portrait_uncanny.` + data.data.results[0].thumbnail.extension + `"></img>`;
      html += `<h2>` + data.data.results[0].name + `</h2>`;
      html += `<h2>` + data.data.results[0].description + `</h2>`;
      document.getElementById("display-character").innerHTML = html;
      console.log(data);
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};

function getThing() {

	console.log("Called Function");
  // you need a new ts every request                                                                                    
  var ts = new Date().getTime();
  var hash = MD5(ts + PRIV_KEY + PUBLIC_KEY);

  var url = 'https://gateway.marvel.com:443/v1/public/characters?name=Thing';

  //console.log(url);
  $.getJSON(url, {
  	apikey: PUBLIC_KEY,
    ts: ts,
    hash: hash,
    //characters: characterId
    })
    .done(function(data) {
    	//console.log("Fetching...");
      // sort of a long dump you will need to sort through
      let html = "";
      html = `<img src="` + data.data.results[0].thumbnail.path + `/portrait_uncanny.` + data.data.results[0].thumbnail.extension + `"></img>`;
      html += `<h2>` + data.data.results[0].name + `</h2>`;
      html += `<h2>` + data.data.results[0].description + `</h2>`;
      document.getElementById("display-character").innerHTML = html;
      console.log(data);
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};

function getFalcon() {

	console.log("Called Function");
  // you need a new ts every request                                                                                    
  var ts = new Date().getTime();
  var hash = MD5(ts + PRIV_KEY + PUBLIC_KEY);

  var url = 'https://gateway.marvel.com:443/v1/public/characters?name=Falcon';

  //console.log(url);
  $.getJSON(url, {
  	apikey: PUBLIC_KEY,
    ts: ts,
    hash: hash,
    //characters: characterId
    })
    .done(function(data) {
    	//console.log("Fetching...");
      // sort of a long dump you will need to sort through
      let html = "";
      html = `<img src="` + data.data.results[0].thumbnail.path + `/portrait_uncanny.` + data.data.results[0].thumbnail.extension + `"></img>`;
      html += `<h2>` + data.data.results[0].name + `</h2>`;
      html += `<h2>` + data.data.results[0].description + `</h2>`;
      document.getElementById("display-character").innerHTML = html;
      console.log(data);
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};

function getCaptainAmerica() {

	console.log("Called Function");
  // you need a new ts every request                                                                                    
  var ts = new Date().getTime();
  var hash = MD5(ts + PRIV_KEY + PUBLIC_KEY);

  var url = 'https://gateway.marvel.com:443/v1/public/characters?name=Captain America';

  //console.log(url);
  $.getJSON(url, {
  	apikey: PUBLIC_KEY,
    ts: ts,
    hash: hash,
    //characters: characterId
    })
    .done(function(data) {
    	//console.log("Fetching...");
      // sort of a long dump you will need to sort through
      let html = "";
      html = `<img src="` + data.data.results[0].thumbnail.path + `/portrait_uncanny.` + data.data.results[0].thumbnail.extension + `"></img>`;
      html += `<h2>` + data.data.results[0].name + `</h2>`;
      html += `<h2>` + data.data.results[0].description + `</h2>`;
      document.getElementById("display-character").innerHTML = html;
      console.log(data);
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};

function getThor() {

	console.log("Called Function");
  // you need a new ts every request                                                                                    
  var ts = new Date().getTime();
  var hash = MD5(ts + PRIV_KEY + PUBLIC_KEY);

  var url = 'https://gateway.marvel.com:443/v1/public/characters?name=Thor';

  //console.log(url);
  $.getJSON(url, {
  	apikey: PUBLIC_KEY,
    ts: ts,
    hash: hash,
    //characters: characterId
    })
    .done(function(data) {
    	//console.log("Fetching...");
      // sort of a long dump you will need to sort through
      let html = "";
      html = `<img src="` + data.data.results[0].thumbnail.path + `/portrait_uncanny.` + data.data.results[0].thumbnail.extension + `"></img>`;
      html += `<h2>` + data.data.results[0].name + `</h2>`;
      html += `<h2>` + data.data.results[0].description + `</h2>`;
      document.getElementById("display-character").innerHTML = html;
      console.log(data);
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};

function getWolverine() {

	console.log("Called Function");
  // you need a new ts every request                                                                                    
  var ts = new Date().getTime();
  var hash = MD5(ts + PRIV_KEY + PUBLIC_KEY);

  var url = 'https://gateway.marvel.com:443/v1/public/characters?name=Wolverine';

  //console.log(url);
  $.getJSON(url, {
  	apikey: PUBLIC_KEY,
    ts: ts,
    hash: hash,
    //characters: characterId
    })
    .done(function(data) {
    	//console.log("Fetching...");
      // sort of a long dump you will need to sort through
      let html = "";
      html = `<img src="` + data.data.results[0].thumbnail.path + `/portrait_uncanny.` + data.data.results[0].thumbnail.extension + `"></img>`;
      html += `<h2>` + data.data.results[0].name + `</h2>`;
      html += `<h2>` + data.data.results[0].description + `</h2>`;
      document.getElementById("display-character").innerHTML = html;
      console.log(data);
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};



/* for (let i=0; i < data.data.results.length-11; i++){
       for (let i=0; i < data.data.results.length-11; i++){
            html += `<div id="comic-example" class="comic-example">`;
          	html += `<a href="` + data.data.results[i].urls[i].url + `"> <img src="` + data.data.results[i].images[0].path + `/portrait_medium.` + data.data.results[i].images[0].extension + `"></img></a>`;
          	html += `<h4>` + data.data.results[i].title + `</h4>`;
          	html += `</div>`;
       
       
}
}
       
       
*/
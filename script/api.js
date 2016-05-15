function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
}

function makeCorsRequest(endPath, json, func) {
  var url = 'http://10.55.33.136:8080/'+endPath;
  var xhr = createCORSRequest('POST', url,true);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }
  xhr.onload = function(){
  	alert('onload');
  	func(xhr.responseText);
  };
  
  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  xhr.send(json);
}






function user_signup(Login, Password, callback){

	var json = JSON.stringify({
		Login:Login,
		Password:Password
	});

func = function(text){
	var token = JSON.parse(text).token;
    var login = JSON.parse(text).login;
    callback(token, login);
    alert('Ok');
};
makeCorsRequest('user_signup', json, func);
}


function user_signin(Login, Password, callback){
		var json = JSON.stringify({
	Login:Login,
	Password:Password
});


func = function(text){
    //alert('Ok');
    // *********** get token ***********
    var token = JSON.parse(text).token;
    var login = JSON.parse(text).login;
    callback(token, login);
    //alert(login);

};

makeCorsRequest('user_signin', json, func);
}


function user_add_info(callback, Token, FirstName, LastName, Country, City, University, Start_study, End_study, Age, Work, Known_technology, About){
	var json = JSON.stringify({
	Token            :Token,
	FirstName        :FirstName,
	LastName         :LastName,
	Country          :Country,
	City             :City,
	University       :University,
	Start_study      :Start_study,
	End_study        :End_study,
	Age              :Age,
	Work             :Work,
	Known_technology :Known_technology,
	About            :About
	});
	callback();
    alert('Ok');

makeCorsRequest('user_add_info', json, func);
}


function user_get_info(token){
var json = JSON.stringify({
	token:token
});

func = function(text){
    alert(text);
    var r = JSON.parse(text);

    //******** show user info********** 
    alert(r.Login);

};

makeCorsRequest('user_get_info', json, func);
}


function company_signup(callback, Login, Password, FirstName, LastName, Country, City, Phone, Site_domain_address, Description){
            alert('d111');
	var json = JSON.stringify({

	Login               :Login,
	Password            :Password,
	FirstName           :FirstName,
	LastName            :LastName,
	Country             :Country,
	City                :City,
	Phone               :Phone,
	Site_domain_address :Site_domain_address,
	Description         :Description
	});

		func = function(){
			callback()
    		alert('Ok');
		};
makeCorsRequest('company_signup', json, func);
}

function company_signin(Login, Password){
var json = JSON.stringify({
	Login    :Login,
	Password :Password
});

func = function(text){
    alert('Ok');
    alert(text);
};
	makeCorsRequest('company_signin', json, func);
}

function company_get_info(token){
var json = JSON.stringify({
	token:token
});

func = function(text){
	//************ get info ****************
    alert('Ok');
};

	makeCorsRequest('company_get_info', json, func);
}


function company_add_event(Name, Description, Start_event, End_event, token){
var json = JSON.stringify({
	Name        :Name,
	Description :Description,
	Start_event :Start_event,
	End_event   :End_event,

	token       :token
});

func = function(text){
    alert('Ok');
};

makeCorsRequest('company_add_event', json, func);
}



function get_all_events(token){
var json = JSON.stringify({
	token:token
});


	func = function(text){
    alert('Ok');
    alert(text);

    //************* get all events ************
};

makeCorsRequest('get_all_events', json, func);
}



function get_company_events(Company_id){

var json = JSON.stringify({
	Company_id :Company_id
});

func = function(text){
    alert('Ok');
    alert(text);
   }
	makeCorsRequest('get_company_events', json, func);
}

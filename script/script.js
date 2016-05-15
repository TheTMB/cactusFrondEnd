//snap menu
var token1 = 0;
var login1 = 0;

var snapper = new Snap({
    element: document.getElementById('content'),
    disable: 'left'

});

snapper.close();

$("#open-right").click(function() {
	event.preventDefault();
    if (snapper.state().state=="right") {
    	snapper.close();
    } else {
    	snapper.open('right');

    }
});

$('.icon-search').click(function() {
    $('.search input').focus();
});

//scroll menu
var elem = document.getElementById('content');
if (elem.addEventListener) {
  if ('onwheel' in document) {
    elem.addEventListener("wheel", onWheel);
  }
}
function onWheel(e) {
  e = e || window.event;
  var delta = e.deltaY || e.detail || e.wheelDelta;
  (delta > 0) ? $('.top-bar').addClass('scroll') : $('.top-bar').removeClass('scroll');
}


// login form
$('.login a').click(function() {
	($('.loginform').hasClass('active')) ? $('.loginform').removeClass('active') : $('.loginform').addClass('active animated fadeInDown');
})

$('#addLanguage').click(function() {
	$('select').last().after(function() {
	  return '<select><option>C++</option><option value="">C#</option><option value="">Python</option><option value="">Java Script</option><option value="">Java</option></select>';
	 });
})

$('.form-radio').click(function() {
	var radio = $('input[name=ident]:checked').val();
	if (radio == "id0") {
		$('.block-form-1').addClass('active');
		$('.block-form-2').removeClass('active');
	} else {
		$('.block-form-2').addClass('active');
		$('.block-form-1').removeClass('active');		
	}
});

str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Ridik</td><td>Mirniy</td><td>193</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});
str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Rick</td><td>Baranichenko</td><td>214</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});
str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Tom</td><td>Shet</td><td>223</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});
str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Savely</td><td>Gukov</td><td>294</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});
str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Stas</td><td>Chak</td><td>302</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});
str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Sergiy</td><td>Kramarchuk</td><td>304</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});
str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Mihaylo</td><td>Syrnik</td><td>323</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});
str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Dmitry</td><td>Listosha</td><td>324</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});
str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Lina</td><td>Kovalenko</td><td>374</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});
str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Kiril</td><td>Vasylenko</td><td>550</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});
str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Max</td><td>Dmitryk</td><td>550</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});
str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Yuriy</td><td>Negoda</td><td>620</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});
str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Evgeniy</td><td>Zolotov</td><td>833</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});
str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Vladislav</td><td>Yatsyn</td><td>902</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});
str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Alex</td><td>Musatkin</td><td>950</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});
str = "<tr><td><input type='checkbox' name='addStudent'></td><td>Alex</td><td>Pereveznev</td><td>990</td>";
$('#filterStudents').after(function() {   
    return str + '</tr>'; 
});

str = "<tr><th>Check</th><th>Fisrt Name</th><th>Last Name</th><th>Rating</th></tr>";
$('#filterStudents').after(function() {   
    return str; 
});

str = "<tr><td>5</td><td>Bear</td>";
$('#tasks').after(function() {   
    return str + '</tr>'; 
});

str = "<tr><td>4</td><td>Football</td>";
$('#tasks').after(function() {   
    return str + '</tr>'; 
});

str = "<tr><td>3</td><td>List</td>";
$('#tasks').after(function() {   
    return str + '</tr>'; 
});

str = "<tr><td>2</td><td>Shop</td>";
$('#tasks').after(function() {   
    return str + '</tr>'; 
});

str = "<tr><td>1</td><td>Enemy</td>";
$('#tasks').after(function() {   
    return str + '</tr>'; 
});

str = "<tr><th>#</th><th>Name</th></tr>";
$('#tasks').after(function() {   
    return str; 
});

//api
//________________________________________________________________________


function pushRegister(f) {
    var k =f[0].value;
    return false;
}

(function() {
    if (login1 != 0) {
        var str = '<a href="site/student.html">'+login+'</a>';
        $('.login').text('');
        $('.login').append(str);
    }
})

function logIn(f) {
    func = function(token, login) {
        //alert(login);
        token1 = token;
        login1 = login;
        var str = '<a href="site/student.html">'+login+'</a>';
        $('.login').text('');
        $('.login').append(str);
    }
    user_signin(f[0].value,f[1].value, func);
    return false;
}


function registerStudent(f) {
    var radio = $('input[name=ident]:checked').val();
    if (radio == "id0") {
        func = function(token, login) {
            token1 = token;
            login1 = login;
            alert('first Ok');
            result = function() {
                alert('Ok');
            };
            user_add_info(result, token, f[2].value, f[3].value,f[4].value,f[5].value,f[6].value,f[7].value,f[8].value,f[9].value,f[10].value,f[11].value,f[12].value);
        };
        user_signup(f[0].value,f[1].value, func);
    } else {    
        result = function() {
                alert('Ok');
            };
            for(var i=0; i < 9; ++i)
                console.log(f[i].value);
        company_signup(result, f[0].value, f[1].value, f[2].value, f[3].value,f[4].value,f[5].value,f[6].value,f[7].value,f[8].value);
    }
}

function addEvent(f) {
    company_add_event(f[0].value, 'test',f[1].value,f[2].value, '3_c');
    alert('ok');
}




// cabinet
get_all_events()

for (var i = iCur-1; i >= 0; --i) {
    str = "<tr><td>"+i+"</td><td><a href='events.html'>" + "test" + "</a></td>";
    for (var j = 0; j < 3; ++j) str += '<td>' + 'test' + '</td>';
    $('#events').after(function() {   
        return str + '</tr>'; 
    });
};

str = "<tr><th>#</th><th>Name</th><th>Autors</th><th>Start</th><th>End</th></tr>";
$('#events').after(function() {   
    return str; 
});

var iCur    = 10;
var str     = '';

for (var i = iCur-1; i >= 0; --i) {
    str = "<tr><td>"+i+"</td><td><a href='events.html'>" + "test" + "</a></td>";
    for (var j = 0; j < 3; ++j) str += '<td>' + 'test' + '</td>';
    $('#eventsEnd').after(function() {   
        return str + '</tr>'; 
    });
};

str = "<tr><th>#</th><th>Name</th><th>Autors</th><th>Start</th><th>End</th></tr>";
$('#eventsEnd').after(function() {   
    return str; 
});











//________________________________________________________________________
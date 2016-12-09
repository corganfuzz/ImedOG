$(document).ready( function () {

  $('#box0').dialog({
    autoOpen: false,
    closeOnEscape: false,
    modal: true,
    draggable: false,
    resizable: false,
    width: 300,
    height: 600
  });

  //form validation

  $('#btnSave').click(function (e) {

    e.preventDefault();

    var Name;
    var Email;
    var Genre;
    var isValid = true;

    Name = $('#Name').val();
    Email = $('#Email').val();
    Genre = $('input[name=genre]:checked', '#myForm').val();

    $('#NameError').text('').removeClass();
    $('#EmailError').text('').removeClass();

    if (Name == '') {
      isValid = false;
      $('#NameError').text('Enter a Name').addClass('ui-state-error')
    }

    if (Email == '') {
      isValid = false;
      $('#EmailError').text('Enter an Email').addClass('ui-state-error')
    }

    if (isValid == true) {

      Cookies.set("Name" , Name , {expires: 7});
      Cookies.set("Genre", Genre , {expires: 7});

      $("#box0").dialog("close");
      $("#cookieMonster").text("Welcome, " + Name);

      if (Genre == 'dude') {
        $('#emptybox').addClass('thumbDude');
      }else {
        $('#emptybox').addClass('thumbLady');
      }
    }

    return isValid;

  });

  //check cookie

  var cookieName = Cookies.get("Name");
  var cookieDude = Cookies.get("Genre");

  if (cookieName != null) {
    $("#cookieMonster").text("Hello again! " + cookieName);

    if (cookieDude == 'dude') {
      $('#emptybox').addClass('thumbDude');
    }else {
      $('#emptybox').addClass('thumbLady');
    }
  }else {
    setTimeout(function () {
      $("#box0").dialog('open');
    }, 2000);
  }


});

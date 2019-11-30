window.fbAsyncInit = function() {
    FB.init({
      appId            : '471538306804012',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v5.0'
    });
};
var permissions = `id,first_name,middle_name,last_name,name,email,birthday,picture`;
var fields = `fields=${permissions}`;

function fbGetUser(){
    FB.api(`/me?${fields}`, (res)=>{
        UIkit.notification(`
            <h3 class="uk-text-center">Successfully Logged in! </h3>
            <p><b>First Name:</b> ${res.first_name} </p>
            <p><b>Middle Name:</b> ${res.middle_name}</p>
            <p><b>Last Name:</b> ${res.last_name}</p>
            <p><b>Email</b> ${res.email}</p>
            <p><b>Birthday</b> ${res.birthday}</p> 
        `)
    });
}

function fbLogin(e){
    FB.login((res)=>{
        if(res.authResponse){
            fbGetUser();
        }else{
            console.log(res);
        }

    }, {scope: 'public_profile,email,user_birthday,user_gender'});
}

$('.fb-button').click(fbLogin);
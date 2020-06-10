const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const msg = document.getElementById('msg');

const form = document.getElementById('contactForm').addEventListener('submit', function (e) {
    let nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    const mailFormat = /([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g;

    if(nameValue === '' || emailValue === '' || messageValue === '') {
        msg.className = 'alert alert-danger';
        msg.innerHTML = 'Please fill out all fieds.';

    } else {
        if(nameValue.length < 3){
            msg.className = 'alert alert-danger';
            msg.innerHTML = 'Name must be at least 3 characters.';

        } else {
            if (!emailValue.match(mailFormat)) {
                msg.className = 'alert alert-danger';
                msg.innerHTML = nameValue + ' incorrect email.';
                
            } else {
                if(messageValue.length < 10) {
                    msg.className = 'alert alert-danger';
                    msg.innerHTML = 'Message has to be at least 10 characters long.';

                }else {
                    msg.className = 'alert alert-success';
                    msg.innerHTML = nameValue + ', your contact was received. Thanks.';
                }
            }
        }
    }
    e.preventDefault();
});
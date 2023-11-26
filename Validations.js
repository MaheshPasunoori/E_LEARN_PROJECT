function Validation() {
    let username = document.contact.stuName.value;
    let usermobilenum = document.contact.stuMobile.value;
    let useremail = document.contact.stuEmail.value;
    let usersubject = document.contact.StudentSubject.value;
    let usermsg = document.contact.StuMsg.value;
    let alphaExp = /^[A-Za-z\s]+$/;
    let numberExp = /^[0-9]+$/;
    let emailExp = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    let userStatus = false;
    let mobileStatus = false;
    let emailstatus = false;
    let Substatus = false; // Declare Substatus
    let msgstatus = false; // Declare msgstatus

    // NAME VALIDATION
    if (username === "") {
        document.getElementById("userNote").innerHTML = "Please Enter Name";
        userStatus = false;
    } else {
        if (username.match(alphaExp)) {
            document.getElementById("userNote").innerHTML = "";
            userStatus = true;
        } else {
            document.getElementById("userNote").innerHTML = "Only Characters";
            userStatus = false; 
        }

        // Mobile Number Validation  
        if (usermobilenum === "") {
            document.getElementById("mobileNote").innerHTML = "Please Enter Mobile Number";
            mobileStatus = false;
        } else {
            if (usermobilenum.match(numberExp) && usermobilenum.length === 10) {
                document.getElementById("mobileNote").innerHTML = "";
                mobileStatus = true;
            } else {
                document.getElementById("mobileNote").innerHTML = "Please enter 10 digits";
                mobileStatus = false;
            }
        }

        // E-Mail Validations
        if (useremail === "") {
            document.getElementById("emailNote").innerHTML = "Please Enter Mail Id";
            emailstatus = false;
        } else if (useremail.match(emailExp)) {
            document.getElementById("emailNote").innerHTML = "";
            emailstatus = true;
        } else {
            document.getElementById("emailNote").innerHTML = "Invalid E-Mail Format (ex-saran@itech.com)";
            emailstatus = false;
        }

        // Subject Validations
        if (usersubject === "") {
            document.getElementById("subNote").innerHTML = "Please Enter Subject";
            Substatus = false;
        } else {
            if (usersubject.match(alphaExp)) {
                document.getElementById("subNote").innerHTML = "";
                Substatus = true;
            } else {
                document.getElementById("subNote").innerHTML = "Only Characters";
                Substatus = false;
            }
        }

        // Message Validation
        if (usermsg === "") {
            document.getElementById("msgNote").innerHTML = "Please Enter Message";
            msgstatus = false;
        } else {
            if (usermsg.match(alphaExp)) {
                document.getElementById("msgNote").innerHTML = "";
                msgstatus = true;
            } else {
                document.getElementById("msgNote").innerHTML = "Only Characters";
                msgstatus = false;
            }
        }
    }

    if (userStatus && mobileStatus && emailstatus && Substatus && msgstatus) {
        return true;
    } else {
        return false;
    }
}





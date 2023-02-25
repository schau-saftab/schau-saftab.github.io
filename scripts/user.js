"use strict";

(function (core){

    class User {
        constructor(displayName = "", emailAddress = "", username = "", password="") {
            this.DisplayName = displayName;
            this.EmailAddress = emailAddress;
            this.Username = username;
            this.Password = password;
        }

        //getters
        get DisplayName() {
            return this.m_displayName;
        }



        get EmailAddress() {
            return this.m_emailAddress;
        }
        get Username() {
            return this.m_username;
        }
        get Password(){
            return this.m_password;
        }
        //setters
        set DisplayName(displayName) {
            this.m_displayName = displayName;
        }



        set EmailAddress(emailAddress) {
            this.m_emailAddress = emailAddress;
        }
        set Username(username) {
            this.m_username = username;
        }
        set Password(password){
            this.m_password = password;
        }
        toString() {
            return `DisplayName: ${this.DisplayName}\n Email Address: ${this.EmailAddress} \n Username: ${this.Username}`;
        }
        toJSON(){
            return {
                "DisplayName": this.DisplayName,
                "EmailAddress": this.EmailAddress,
                "Username": this.Username,
                "Password": this.Password,
            }
        }
        fromJSON(data){
            this.DisplayName = data.DisplayName;
            this.EmailAddress = data.EmailAddress;
            this.Username = data.Username;
            this.Password = data.Password;
        }

        serialize(){
            if (this.DisplayName !== "" && this.Username !== "" && this.EmailAddress !== "" && this.m_password !=="") {
                return `${this.DisplayName}, ${this.EmailAddress},${this.Username}, ${this.Password}`;

            }
            console.error("One or more of the properties of the contact object are missing or inavlid");
            return null;
        }

        deserialize(data){
            let propertyArray = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.Username = propertyArray[2];
            this.Password = propertyArray [3];
        }

    }

    core.User = User;

})(core || (core ={}));
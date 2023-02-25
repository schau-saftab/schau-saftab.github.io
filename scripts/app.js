"use strict";

class User {
    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.newUsername = username;
        this.newEmailAddress = email;
        this.newPassword = password;
    }

    get firstName() {
        return this.m_firstName;
    }

    set firstName(value) {
        this.m_firstName = value;
    }

    get lastName() {
        return this.m_lastName;
    }

    set lastName(value) {
        this.m_lastName = value;
    }

    get newUsername() {
        return this.m_newUsername;
    }

    set newUsername(value) {
        this.m_newUsername = value;
    }

    get newEmailAddress() {
        return this.m_newEmailAddress;
    }

    set newEmailAddress(value) {
        this.m_newEmailAddress= value;
    }

    get newPassword() {
        return this.m_newPassword;
    }

    set newPassword(value) {
        this.m_newPassword = value;
    }

}


(function (){
    /**
     * Instantiates a contact and stores in localStorage
     * @param fullName
     * @param phoneNumber
     * @param emailAddress
     * @constructor
     */
    function AddContact(fullName, phoneNumber, emailAddress){
        let contact = new core.Contact(fullName, phoneNumber, emailAddress);
        if(contact.serialize()) {
            let key = contact.FullName.substring(0, 1) + Date.now();
            localStorage.setItem(key, contact.serialize());
        }
    }

    function AjaxRequest(method, url, callback){
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () =>{
            if(xhr.readyState === 4 && xhr.status ===200)
            {
                if(typeof callback ==="function"){
                    callback(xhr.responseText);

                }else{
                    console.error("Error: callback is not a valid function.");
                }


            }

        });
        xhr.open(method, url);
        xhr.send();
    }
    function LoadHeader(html_data){
        $("header").html(html_data);
        $(`li>a:contains(${document.title})`).addClass("active");
        CheckLogin();
        // Add Human Resources
        const navbarList=
            document.querySelector('.navbar-nav');
        const hrLi= document.createElement('li');
        hrLi.classList.add('nav-item');
        const hrLink = document.createElement('a');
        hrLink.classList.add('nav-link');
        hrLink.href ="humanResources.html";
        hrLink.innerHTML = '<i class="fa-regular fa-user"></i> Human Resources';
        hrLink.href = 'humanResources.html';
        hrLi.appendChild(hrLink);
        const aboutUsLi = document.querySelector('.nav-item:nth-of-type(5)');
        navbarList.insertBefore(hrLi, aboutUsLi);

        //Fixed Bottom NavBar
        let bottomNavbar = document.createElement("nav");
        bottomNavbar.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-light", "fixed-bottom");
        let copyright = document.createElement("div");
        let currentDate = new Date();
        copyright.classList.add("navbar-text", "text-center");
        copyright.innerHTML = "Copyright &copy;" + currentDate.toLocaleDateString();
        bottomNavbar.appendChild(copyright);
        document.body.appendChild(bottomNavbar);


        let navLink = document.getElementById("prodLink");
        navLink.innerHTML = "<i class=\"fa-solid fa-project-diagram\"></i>Projects";

    }
    function DisplayHomePage(){
        console.log("Home Page");



        $("#AboutUsBtn").on("click", () => {
            location.href = "about.html"
        });

        $("main").append(`<p id="MainParagraph" class="mt-3"> This is the home page for Assignment 2 </p>`);
        $("body").append(`<article class="container"><p id="ArticleParagraph" class="mt-3">-Sadaqat Chaudhry & Shehryar Aftab</p>`)
        let DocumentBody = document.getElementsByTagName("body")[0];
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph class="mt-3"><a href="services.html">Click Here</a> to know about our services.<br><a href="about.html">Click Here</a> to know about our team.<br><a href="products.html">Click Here</a> to know about our projects.</p>`;
        Article.setAttribute("class","container");
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);




    }



    function DisplayProductsPage(){
        console.log("Products Page");
        let titleTag = document.getElementsByTagName("title")[0];
        titleTag.innerHTML = "Projects";

        let headingTag = document.getElementsByTagName("h1")[0];
        headingTag.innerHTML = "Projects";

        let mainParagraph = document.getElementsByTagName("body")[0];
        const mainContainer = document.createElement('div');
        mainContainer.id = "mainContainer";


        const box1 = document.createElement('div');
        box1.id = "box1";
        box1.style.alignItems = "center";
        box1.style.gridTemplateColumns = "1fr 1fr 1fr";
        box1.style.display = "grid";
        box1.style.columnGap = "5px";

        const img1 = document.createElement("img");
        img1.src = "./images/python.jpg";
        img1.alt = "Python Logo";
        img1.height = 500;
        img1.style.padding = "20px";

        box1.appendChild(img1);

        const text1 = document.createElement("p");
        text1.innerHTML = "Used python and selenium modules to perform test cases for an application";
        box1.appendChild(text1);

        mainContainer.appendChild(box1);

        const box2 = document.createElement("div");
        box2.style.alignItems = "center";
        box2.style.gridTemplateColumns = "1fr 1fr 1fr";
        box2.style.display = "grid";
        box2.style.columnGap = "5px";
        box2.id = "box2";
        const img2 = document.createElement("img");
        img2.src = "./images/sql.jpg";
        img2.alt = "SQL Logo";
        img2.height = 500;
        img2.style.padding = "20px";

        const text2 = document.createElement("p");
        text2.innerHTML = "Used SQL to generate a database for a used car dealership which housed inventory information as well as customer and sales information";
        text2.style.padding = "20px";
        box2.appendChild(text2);
        box2.appendChild(img2);
        mainContainer.appendChild(box2);

        const box3 = document.createElement("div");
        box3.id = "box3";
        box3.style.alignItems = "center";
        box3.style.gridTemplateColumns = "1fr 1fr 1fr";
        box3.style.display = "grid";
        box3.style.columnGap = "5px";
        const img3 = document.createElement("img");
        img3.src = "./images/php.jpg";
        img3.alt = "PHP Logo";
        img3.height = 500;
        img3.style.padding = "20px";
        box3.appendChild(img3);
        const text3 = document.createElement("p");
        text3.innerHTML = "Used php and html to develop a website";
        box3.appendChild(text3);

        mainContainer.appendChild(box3);

        mainParagraph.appendChild(mainContainer);
    }

    function DisplayServicesPage(){
        console.log("Services Page");

        let mainParagraphServices = document.getElementsByTagName("body")[0];
        const mainContainerServices = document.createElement('div');
        mainContainerServices.id = "mainContainer";


        const box1Services = document.createElement('div');
        box1Services.id = "box1";
        box1Services.style.alignItems = "center";
        box1Services.style.gridTemplateColumns = "1fr 1fr 1fr";
        box1Services.style.display = "grid";
        box1Services.style.columnGap = "5px";

        const img1Services = document.createElement("img");
        img1Services.src = "./images/webdevelopment.jpg";
        img1Services.alt = "Python Logo";
        img1Services.width = 900;
        img1Services.height = 500;
        img1Services.style.padding = "20px";

        box1Services.appendChild(img1Services);

        const text1Services = document.createElement("p");
        text1Services.innerHTML = "As an experienced organization, we provide a range of services to help businesses build and optimize web browser applications. We specialize in developing web applications using JavaScript, HTML5, and CSS.\n" +
            "\n" +
            "Our services include:\n" +
            "\n" +
            "<ul><li>Custom web application development: We work closely with clients to understand their unique needs and design, develop and implement custom web applications tailored to their specific requirements\n</li>" +
            "<li>Website optimization and maintenance: We can help optimize existing web applications to improve performance and user experience, and provide ongoing maintenance and support to ensure smooth operation</li></ul>";
        box1Services.appendChild(text1Services);

        mainContainerServices.appendChild(box1Services);

        const box2Services = document.createElement("div");
        box2Services.style.alignItems = "center";
        box2Services.style.gridTemplateColumns = "1fr 1fr 1fr";
        box2Services.style.display = "grid";
        box2Services.style.columnGap = "5px";
        box2Services.id = "box2";
        const img2Services = document.createElement("img");
        img2Services.src = "./images/mobile.jpg";
        img2Services.alt = "SQL Logo";
        img2Services.height = 500;
        img2Services.style.paddingLeft = "20px";

        const text2Services = document.createElement("p");
        text2Services.innerHTML = "Our company specializes in providing mobile application development services to businesses and organizations looking to expand their reach and engage with their customers through mobile technology. We have a team of experienced mobile application developers with expertise in developing for both iOS and Android platforms.\n" +
            "\n" +
            "Our services include:\n" +
            "\n" +
            "<ul><li>Custom mobile application development: We work closely with clients to understand their unique needs and design, develop and implement custom mobile applications tailored to their specific requirements\n</li>" +
            "<li>Mobile app optimization and maintenance: We can help optimize existing mobile applications to improve performance and user experience, and provide ongoing maintenance and support to ensure smooth operation</li></ul>";
        text2Services.style.paddingLeft = "30px";
        box2Services.appendChild(text2Services);
        box2Services.appendChild(img2Services);
        mainContainerServices.appendChild(box2Services);

        const box3Services = document.createElement("div");
        box3Services.id = "box3";
        box3Services.style.alignItems = "center";
        box3Services.style.gridTemplateColumns = "1fr 1fr 1fr";
        box3Services.style.display = "grid";
        box3Services.style.columnGap = "5px";
        const img3Services = document.createElement("img");
        img3Services.src = "./images/saas.jpg";
        img3Services.alt = "PHP Logo";
        img3Services.height = 500;
        img3Services.style.padding = "20px";
        box3Services.appendChild(img3Services);
        const text3Services = document.createElement("p");
        text3Services.innerHTML = "Our company provides a range of Software as a Service (SaaS) solutions to help businesses and organizations streamline their operations and increase efficiency. Our SaaS offerings are cloud-based, which allows for easy access and scalability for our clients.\n" +
            "\n" +
            "Our services include:\n" +
            "\n" +
            "<ul><li>CRM software: We offer a customizable CRM software that helps businesses manage and organize customer interactions and data.\n</li>" +
            "<li>Project management software: We provide a project management tool that helps teams plan, collaborate and track progress on projects.</li></ul>";
        box3Services.appendChild(text3Services);

        mainContainerServices.appendChild(box3Services);

        mainParagraphServices.appendChild(mainContainerServices);
    }

    function DisplayAboutUsPage(){
        console.log("About us Page");
        let mainParagraphAbout = document.getElementsByTagName("body")[0];

        const mainContainerAbout = document.createElement('div');
        mainContainerAbout.id = "mainContainer";


        const box1About = document.createElement('div');
        box1About.id = "box1";
        box1About.style.alignItems = "center";
        box1About.style.gridTemplateColumns = "1fr 1fr 1fr";
        box1About.style.display = "grid";
        box1About.style.columnGap = "5px";

        const img1About = document.createElement("img");
        img1About.src = "./images/sadaqat.jpg";
        img1About.alt = "Python Logo";
        img1About.height = 500;
        img1About.style.paddingLeft = "300px";

        box1About.appendChild(img1About);

        const text1About = document.createElement("p");
        text1About.innerHTML = "Hi my name is Sadaqat Chaudhry, I am a 2nd year computer programming student at Durham College. A little bit more about me is: I am of Pakistani descent, I enjoy working out, going on walks, driving, playing around with new tech!";
        box1About.appendChild(text1About);

        mainContainerAbout.appendChild(box1About);

        const box2About = document.createElement("div");
        box2About.style.alignItems = "center";
        box2About.style.gridTemplateColumns = "1fr 1fr 1fr";
        box2About.style.display = "grid";
        box2About.style.columnGap = "5px";
        box2About.id = "box2";
        const img2About = document.createElement("img");
        img2About.src = "./images/shehryar.jpg";
        img2About.alt = "SQL Logo";
        img2About.height = 500;
        img2About.style.paddingBottom = "20px";

        const text2About = document.createElement("p");
        text2About.innerHTML = "Hi my name is Shehryar, I am a final year Computer Programming student at Durham College. I like to go on long drives at night alone with the music blasting.";
        text2About.style.padding = "20px";
        box2About.appendChild(text2About);
        box2About.appendChild(img2About);
        mainContainerAbout.appendChild(box2About);

        mainParagraphAbout.appendChild(mainContainerAbout);
    }

    /**
     * This function will validate a input provided based on a given regular expresssion
     *@param {string} input_field_id
     * @param {RegEx} regular_expression
     * @param {string} error_message
     * @constructor
     */
    function validateField(input_field_id, regular_expression, error_message){
        let messageArea = $("#messageArea");
        $(input_field_id).on("blur",function() {


            let fullNameText = $(this).val();
            if (!regular_expression.test(fullNameText)) {
                //fail validation
                $(this).trigger("focus").trigger("select");
                messageArea.addClass("alert alert-danger").text(error_message).show();
            }else {
                //pass validation
                messageArea.removeAttr("class").hide();

            }
        });
    }

    function ContactFormValidation(){
        validateField("#fullName",
            /^([A-Z][a-z]{1,3}\.?\s)?([A-Z][a-z]+)+([\s,-]([A-z][a-z]+))*$/,
            "Please enter a valid first and last name (ex: Matt Murdock)");
        validateField("#contactNumber", /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]\d{4}$/,
            "Please enter a valid phone contact number.");
        validateField("#emailAddress", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,10}$/,
            "Please enter a valid email address");

    }

    function DisplayContactPage(){
        console.log("Contact Us Page");
        ContactFormValidation();

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckBox");

        sendButton.addEventListener("click", function(event){

            if (subscribeCheckbox.checked){
                let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);
                if(contact.serialize()){
                    let key = contact.FullName.substring(0,1) +Date.now();
                    localStorage.setItem(key, contact.serialize());
                }
            }
        });
    }

    function DisplayContactListPage(){
        console.log("Contact List Page");

        if(localStorage.length >0){
            let contactList = document.getElementById("contactList");
            let data = "";
            let keys = Object.keys(localStorage);
            let index = 1;
            for(const key of keys){
                let contactData = localStorage.getItem(key);
                let contact = new core.Contact();
                contact.deserialize(contactData);
                data += `<tr><th scope="row" class="text-center>"${index}</th>
                     <td>${contact.FullName}</td>
                     <td>${contact.PhoneNumber}</td>
                     <td>${contact.EmailAddress}</td>
                     <td class="text-center">
                         <button value="${key}" class="btn btn-primary btn-sm edit">
                            <i class="fas fa-edit fa-sm"></i>Edit</button>
                     </td>
                      <td class="text-center">
                        <button value="${key}" class="btn btn-danger btn-sm delete">
                            <i class="fas fa-trash-alt fa-sm"></i>Delete</button>
                     </td>
                     
                     </tr>`;
                index++;
            }
            contactList.innerHTML = data;

            $("#addButton").on("click", () => {
                location.href = "edit.html#add";

            });
            $("button.delete").on("click", function(){
                if(confirm("Delete contact, are you sure?")){
                    localStorage.removeItem($(this).val())
                }
                location.href = "contact-list.html"
            })
        }

    }

    function DisplayEditPage(){
        console.log("Edit Contact Page");
        ContactFormValidation();

        let page = location.hash.substring(1);
        switch (page){
            case "add":
                $("main>h1").text("Add Contact");
                $("#editButton").html(`<i class="fas fa-plus-circle fa-sm"</i> Add`);

                $("#editButton").on("click", (event) => {
                    event.preventDefault();
                    AddContact(fullName.value, phoneNumber.value, emailAddress.value);
                    location.href = "contact-list.html";
                });

                $("#cancelButton").on("click", ()=> {
                    location.href = "contact-list.html";
                });

                break;
            default:{ //edit-case
                //get contact info from localStorage
                let contact = new core.Contact ();
                contact.deserialize(localStorage.getItem(page));
                // display the contact info in the edit form
                $("#fullName").val(contact.FullName);
                $("#phoneNumber").val(contact.PhoneNumber);
                $("#emailAddress").val(contact.EmailAddress);

                //when editButton is pressed- update the contact
                $("#editButton").on("click", (event) =>{
                    event.preventDefault();
                    //get changes
                    contact.FullName = $("#fullName").val();
                    contact.PhoneNumber = $("#phoneNumber").val();
                    contact.EmailAddress = $("#emailAddress").val();

                    //replace item in local storage
                    localStorage.setItem(page, contact.serialize());
                    //return to contact-list
                    location.href = "contact-list.html";
                });


            }
                break;
        }
    }
    function DisplayLoginPage(){
        console.log("Login Page");
        let messageArea = $("#messageArea");
        messageArea.hide();
        $("#loginButton").on("click", function(){

            let success = false;
            let newUser = new core.User();
            $.get("./data/user.json",function(data){

                for(const u of data.user){

                    if(username.value === u.Username && password.value ===u.Password){
                        success = true;
                        newUser.fromJSON(u);
                        break;

                    }
                }
                if (success){
                    sessionStorage.setItem("user", newUser.serialize());
                    messageArea.removeAttr("class").hide();



                    location.href = "contact-list.html";
                }else{
                    //failed authentication
                    $("#username").trigger("focus").trigger("select");
                    messageArea.addClass("alert alert-danger")
                        .text("Error: Invalid Credentials!");
                }
            });
            $("#cancelButton").on("click", function(){
                document.forms[0].reset();
                location.href = "index.html"

            });
        });
    }
    function CheckLogin(){
        let userJSON = sessionStorage.getItem("user");
        if(userJSON)
        {
            console.log(userJSON);
            let newUser = new core.User();
            console.log("HelloWorld");
            newUser.deserialize(userJSON);

            let username = newUser.Username;
            console.log("Username:", username);

            let contactUsLink = $("#navbarSupportedContent .nav-item:last-child");
            let loginLink = $("#login");
            let usernameLink = $("<li class='nav-item'><a class='nav-link'><i class=\"fa-solid fa-user\"></i>" + username + "</a></li>");
            contactUsLink.before(usernameLink);
            contactUsLink.before(" ");

            $("#login").html(`<a id="logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i>Logout</a>`)
        }
        $("#logout").on("click", function(){
            sessionStorage.clear();
            location.href = "login.html";
        });
    }
    function DisplayRegisterPage(){
        console.log("Register Page");
        let errorMessage = $("<div id='ErrorMessage'>Error message</div>").hide();
        $("#registerForm").append(errorMessage);


        $("#submitButton").on("click", function(){
            event.preventDefault();

            let errors = [];

            let firstName = $("#FirstName").val().trim();
            let lastName = $("#lastName").val().trim();
            let email = $("#emailAddress").val().trim();
            let password = $("#password").val().trim();
            let confirmPassword = $("#confirmPassword").val().trim();

            if (firstName.length < 2) {
                errors.push("First name must be at least 2 characters long.");
            }

            if (lastName.length < 2) {
                errors.push("Last name must be at least 2 characters long.");
            }

            if (email.length < 8 || !email.includes("@")) {
                errors.push("Please enter a valid email address.");
            }

            if (password.length < 6){
                errors.push("Password must be at least 6 characters long.");
            } else if(password !== confirmPassword){
                errors.push("Passwords do not match.");
            }

            if (errors.length > 0){
                errorMessage.empty();
                for (const error of errors) {
                    errorMessage.append(`<p>${error}</p>`);
                }
                errorMessage.show();
                return false;
            }else{
                let newUser = new User(firstName, lastName, null, email, password);
                console.log(newUser);
                location.href = "register.html";
            }

        });



    }
    function Start()
    {
        console.log("App Started!");
        AjaxRequest("GET", "header.html", LoadHeader);
        switch (document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutUsPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
            case "Contact List":
                DisplayContactListPage();
                break;
            case "Edit Contact":
                DisplayEditPage();
                break;
            case "Login":
                DisplayLoginPage();
                break;
            case "Register":
                DisplayRegisterPage();
                break;
        }
    }
    window.addEventListener("load", Start)

})();
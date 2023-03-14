 function myFunction() {
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

      document.oncontextmenu = document.body.oncontextmenu = function () {
        return false;
      };

      function validateForm() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        var emailError = document.getElementById("emailError");
        var passwordError = document.getElementById("passwordError");

        emailError.innerHTML = "";
        passwordError.innerHTML = "";

        var isValid = true;

        if (!email) {
          emailError.innerHTML = "Email is required";
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          emailError.innerHTML = "Email is invalid";
          isValid = false;
        }

        if (!password) {
          passwordError.innerHTML = "Password is required";
          isValid = false;
        } else if (password.length < 6) {
          passwordError.innerHTML = "Password must be at least 6 characters";
          isValid = false;
        }

        return isValid;
      }
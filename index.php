<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Form Validation</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/css/bootstrap.min.css" integrity="sha512-XWTTruHZEYJsxV3W/lSXG1n3Q39YIWOstqvmFsdNEEQfHoZ6vm6E9GK2OrF6DSJSpIbRbi+Nn0WDPID9O7xB2Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="css/main.css" />

</head>
<body>
    <div class="container">
        <div class="row justify-content-center align-items-center" style="height: 100vh">
            <div class="col-md-5">
                <h1 class="text-center">JS Form Validation</h1>

                <form class="p-5 shadow rounded" onsubmit="validate(event)" action="formsubmit.php">
                    <div class="mb-3">
                        <label for="username" class="form-label">User Name</label>
                        <input id="username" type="text" class="form-control" placeholder="User name" />
                        <small id="username_error" class="form-text fw-bold m-1 text-danger"></small>
                    </div>

                    <div class="mb-3">
                        <input id="email" type="text" class="form-control" placeholder="User Email" />
                        <small id="email_error" class="form-text fw-bold m-1 text-danger"></small>
                    </div>
                    <div class="mb-3">
                        <input id="password" type="password" class="form-control" placeholder="Provide password" />
                        <small id="password_error" class="form-text fw-bold m-1 text-danger"></small>
                    </div>
                    <div class="mb-3">
                        <input id="cpassword" type="password" class="form-control" placeholder="Confirm Password" />
                        <small id="cpassword_error" class="form-text fw-bold m-1 text-danger"></small>
                    </div>
                    <input type="submit" class="btn btn-primary"  value="Submit">
                </form>

            </div>
        </div>
    </div>
    <script type="text/javascript" src="js/main.js"></script>
</body>
</html>
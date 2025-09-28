<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="../assets/css/register-styles.css">
    <link rel="stylesheet" href="../assets/css/styles.css">
</head>
<body>
    <div class="registration-container">
         <div id="navbar-container"></div>
        <div class="registration-form">
            <h2>Registration</h2>
            <!-- <div class="disclaimer">
                <p>You can choose up to 2 events from each section.</p>
            </div> -->
            <div class="registration-links">
                <div class="link-item">
                    <a class="<?php echo ($page == 'cultural-form') ? 'active' : ''; ?>" href="../cultural-form.php">Cultural Registration</a>
                    <p class="description">You can choose 2 events from here.</p>
                </div>
                <div class="link-item">
                <a class="<?php echo ($page == 'technical-form') ? 'active' : ''; ?>" href="../technical-form.php">Technical Registration</a>
                    <p class="description">You can choose 2 events from here.</p>
                </div>
                <div class="link-item">
                <a class="<?php echo ($page == 'sports-form') ? 'active' : ''; ?>" href="../sports-form.php">Sports Registration</a>
                    <p class="description">You can choose 2 events from here.</p>
                </div>
            </div>
            <div class="last-date-box">
                <p class="last-date-text">Last Date: 20 March 2025</p>
            </div>
        </div>
    </div>
<script>
  
    fetch("navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        });

    
    document.addEventListener('DOMContentLoaded', function () {
        const successMessage = document.querySelector('.message.success');
        if (successMessage) {
            setTimeout(function () {
                successMessage.style.opacity = '0';
                setTimeout(function () {
                    successMessage.style.display = 'none';
                }, 300);
            }, 5000);
        }
    });
</script>

</body>
</html>
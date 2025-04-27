<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="../assets/css/register-styles.css">
</head>
<body>
    <div class="registration-container">
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
</body>
</html>
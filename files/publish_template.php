<?php
/**
 * GLOBAL VARIABLES
 * ================
 * SITE_NAME		- name of the website
 * $base_file_name	- name of the file, all revision files have the same base filename
 * $file_name		- filename of the current file
 * $file_revisions	- list of revisions to the file
 * $file_readonly	- flag indicating if the file is read only
 * $file_mode		- mode of the file (view, edit or published)
 * $file_contents	- contents of the file
 * $file_css		- list of CSS snippets
 * $list_files		- list of attached files
 * $url_files		- URL to the files
 * $baseurlapp		- base URL for the application, i. e. URL without the filename
 * $baseurl			- URL with the filename
 * $html			- HTML of the published version of the file
 * $max_upload		- Maximum size for uploading data
 */
?><!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title><?php echo SITE_NAME; ?> - <?php echo $file_name; ?></title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="assets/img/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Template Main CSS File -->
    <link href="/files/dist/main.css" rel="stylesheet">

    <!-- Custom CSS -->
    <?php foreach($file_css as $css) { echo "<style type=\"text/css\">$css</style>"; } ?>

    <!-- =======================================================
    * Template Name: MyResume - v4.7.0
    * Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== -->
</head>

<body>
    <noscript>
        JavaScript not detected; JavaScript is required for editing parts of the application.
    </noscript>

    <!-- ======= Mobile nav toggle button ======= -->
    <!-- <button type="button" class="btn btn-primary mobile-nav-toggle d-lg-none"><i class="bx bx-menu mobile-nav-toggle"></i></button> -->
    <i class="btn bx bx-menu mobile-nav-toggle d-lg-none"></i>
    <!-- ======= Header ======= -->
    <header id="header" class="d-flex flex-column justify-content-center">
        <nav id="navbar" class="navbar nav-menu">
            <ul>
                <li><a href="/#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
                <li><a href="/#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
                <li><a href="/#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
                <li><a href="/#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                <li><a href="/#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
                <li><a href="/#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
        </nav><!-- .nav-menu -->
    </header><!-- End Header -->

    <?php if(HOMEPAGE == $file_name) { ?>
        <!-- ======= Hero Section ======= -->
        <section id="hero" class="d-flex flex-column justify-content-center">
            <div class="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Ricardo Gonçalves</h1>
                <p>I'm <span class="typed" data-typed-items="Developer, Freelancer, Entrepreneur, Creative, Dreamer"></span></p>
                <div class="social-links">
                    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    <a href="#" class="github"><i class="bx bxl-github"></i></a>
                    <a href="#" class="youtube"><i class="bx bxl-youtube"></i></a>
                    <a href="#" class="discord"><i class="bx bxl-discord"></i></a>
                    <a href="#" class="patreon"><i class="bx bxl-patreon"></i></a>
                    <a href="#" class="mail-send"><i class="bx bx-mail-send"></i></a>
                </div>
                <div class="social-links">
                    <button class="btn btn-primary">Buy me a coffee! <i class="bx bxs-coffee-togo"></i></button>
                </div>
            </div>
        </section><!-- End Hero -->
    <?php } ?>

    <main id="main">
        <?php
            $sections = HOMEPAGE == $file_name ?
                array(
                    "about" => file_get_contents("files/about/about.html"),
                    "facts" => file_get_contents("files/facts/facts.html"),
                    "skills" => file_get_contents("files/skills/skills.html"),
                    "resume" => file_get_contents("files/resume/resume.html"),
                    "portfolio" => file_get_contents("files/portfolio/portfolio.html"),
                    "services" => file_get_contents("files/services/services.html"),
                    "testimonials" => file_get_contents("files/testimonials/testimonials.html"),
                    "contact" => file_get_contents("files/contact/contact.html")) :
                array($file_name => $html);
            
            foreach ($sections as $section_name => $section_content){
                echo "<!-- ======= $section_name section ======= -->";
                echo "<section id=\"$section_name\" class=\"$section_name\">";
                echo "    <div class=\"container\" data-aos=\"fade-up\">";
                echo $section_content;
                echo "    </div>";
                echo "</section><!-- end $section_name section -->";
            }
        ?>
    </main>

    <!-- ======= Footer ======= -->
    <footer id="footer">
        <div class="container">
            <h3>Ricardo Gonçalves</h3>
            <p>Worker, active, committed. I like new challenges!</p>
            <div class="social-links">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                <a href="#" class="github"><i class="bx bxl-github"></i></a>
                <a href="#" class="youtube"><i class="bx bxl-youtube"></i></a>
                <a href="#" class="discord"><i class="bx bxl-discord"></i></a>
                <a href="#" class="patreon"><i class="bx bxl-patreon"></i></a>
                <a href="#" class="mail-send"><i class="bx bx-mail-send"></i></a>
            </div>
            <div class="copyright">
                &copy; Copyright <strong><span>rigon.tk</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: [license-url] -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ -->
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
        </div>
    </footer><!-- End Footer -->

     <!-- Back to top button -->
    <a href="#" class="btn btn-primary back-to-top"><i class="bx bx-up-arrow"></i></a>

    <!-- Template Main JS File -->
    <script src="/files/dist/main.js"></script>

</body>

</html>

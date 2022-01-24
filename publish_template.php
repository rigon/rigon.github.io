<?php
/**
GLOBAL VARIABLES
================
$base_file_name     - name of the file, all revision files have the same base filename
$file_name			- filename of the current file
$file_revisions		- list of revisions to the file
$file_readonly		- flag indicating if the file is read only
$file_mode			- mode of the file, view or edit
$file_contents		- contents of the file
$file_css			- list of CSS snippets
$list_files			- list of attached files
$url_files			- URL to the files
$baseurlapp			- base URL for the application, i. e. URL without the filename
$baseurl			- URL with the filename
$html				- HTML of the published version of the file

*/
?><!DOCTYPE html>
<html>
	<head>
		<title>Ricardo Gonçalves Homepage</title>
		
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		
		<link rel="stylesheet" type="text/css" href="<?php echo $baseurlapp; ?>/static/css/pagedown.css" />
		<link rel="stylesheet" type="text/css" href="<?php echo $baseurlapp; ?>/static/css/bootstrap.min.css" />
		
		<script src="<?php echo $baseurlapp; ?>/static/js/jquery-1.11.1.min.js" async></script>
		<script src="<?php echo $baseurlapp; ?>/static/js/bootstrap.min.js" async></script>

		<style type="text/css">
			body {
				padding-top: 70px;
				padding-bottom: 30px;
			}
			.container img {
				max-width: 100%;
			}
			
		</style>
	</head>
	<body>
		<noscript>
			JavaScript not detected; JavaScript is required for editing parts of the application.
		</noscript>
		
		<!-- Fixed navbar -->
		<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="<?php echo $baseurl; ?>">Ricardo Gonçalves</a>
				</div>
				
				<!-- Navbar -->
				<div id="navbar" class="navbar-collapse collapse">
					<ul class="nav navbar-nav">
					
						<!-- Home -->
						<li <?php if($file_name=="home") echo 'class="active"'; ?>><a href="<?php echo $baseurlapp.'/home'; ?>">Home</a></li>
					</ul>

					<!-- Login user -->
					<ul class="nav navbar-nav navbar-right">
						<li><a href="?login">Login <span class="glyphicon glyphicon-log-in"></span></a></li>
					</ul>
				</div><!--/.nav-collapse -->
			</div>
		</nav>
		
		<!-- Container -->
		<div class="container">
			<?php echo $html; ?>
		</div>
	</body>
</html>

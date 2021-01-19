</!DOCTYPE html>
<html>
<head>
	<title>info  page</title>
	<link rel="stylesheet" type="text/css" href="css/info.css">
	
</head>
<body>
		<table>
				
				<tr>
					<td class="tc1">First Name </td>
					<td><?php echo $_POST["fname"]; ?></td>
				</tr>
				<tr>
					<td class="tc1">Last Name </td>
					<td><?php 

							if ($_POST["lname"]=='') {
								echo "not given";
							}
							else{
					echo $_POST["lname"]; }?></td>
				</tr>
				<tr>
					<td class="tc1">Date of birth</td>
					<td>month:<?php echo $_POST["DOBMonth"]; ?>&nbsp
						date:<?php echo $_POST["DOBDay"]; ?>&nbsp
						Year:<?php echo $_POST["DOBYear"];?>
					</td>
				</tr>
				<tr>
					<td class="tc1">Gender </td>
					<td> <?php 

							if ($_POST["gen"]=='') {
								echo "not given";
							}
							else{
					echo $_POST["gen"]; }?> 
				    </td>
				</tr>
				<tr>
				   			<td class="tc1"> Email</td>
				   			<td><?php 

							if ($_POST["email"]=='') {
								echo "not given";
							}
							else{
					echo $_POST["email"]; }?> </td>
				   		</tr>
				   		<tr>
				   			<td class="tc1"> Re-type Email</td>
				   			<td><?php 

							if ($_POST["reemail"]=='') {
								echo "not given";
							}
							else{
					echo $_POST["reemail"]; }?> </td>
				   		</tr>
				   		<tr>
				   			<td class="tc1"> Password</td>
				   			<td><?php echo $_POST["password"]; ?></td>
				   		</tr>
				   		<tr>
				   			<td class="tc1">Re-type Password</td>
				   			<td><?php echo $_POST["repassword"]; ?></td>
				   		</tr>
				   		<tr>
				   			<td class="tc1">Security question</td>
				   			<td><?php 

							if ($_POST["sec_question"]=='') {
								echo "not given";
							}
							else{
					             echo $_POST["sec_question"]; }?> </td>
				   		</tr>
				   		<tr>
				   			<td class="tc1">Security Answer</td>
				   			<td><?php 

							if ($_POST["ans"]=='') {
								echo "not given";
							}
							else{
					              echo $_POST["ans"]; }?></td>
				   		</tr>


				   		<tr>
							<td class="tc1">Address </td>
							<td><?php 

							if ($_POST["add"]=='') {
								echo "not given";
							}
							else{
					         echo $_POST["add"]; }?></td>
						</tr>
						<tr>
							<td class="tc1">City </td>
							<td><?php 

							if ($_POST["city"]=='') {
								echo "not given";
							}
							else{
					           echo $_POST["city"]; }?></td>
						</tr>
						<tr>
				   			<td class="tc1">State</td>
				   			<td><?php 

							if ($_POST["state"]=='') {
								echo "not given";
							}
							else{
				             	echo $_POST["state"]; }?></td>
				   		</tr>
				   		<tr>
							<td class="tc1">Zip code </td>
							<td><?php 

							if ($_POST["zip"]=='') {
								echo "not given";
							}
							else{
					echo $_POST["zip"]; }?></td>
						</tr>
						<tr>
							<td class="tc1">Phone </td>
							<td><?php echo $_POST["ph"]; ?>&nbsp
								<?php echo $_POST["phsel"]; ?>
						   	</td>
						</tr>
					</table>
</body>
</html>
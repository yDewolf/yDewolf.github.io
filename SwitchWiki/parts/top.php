<?php


// function getParamKeys(): string
// {
//     $param_str = "";

//     foreach (array_keys($_GET) as $key) {
//         if ($key == "p") {
//             continue;
//         }
//         $key_str = "$key={$_GET["$key"]}";
//         $param_str = "&{$param_str}{$key_str}";
//     }

//     return $param_str;
// }

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keyboard Switch Wiki</title>
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/complex_components.css">
    <link rel="stylesheet" href="css/navbar.css">
</head>

<body>
    <script src="js/ColorTheme.js"></script>
    <div class="background-scroll" style="background-image: url('assets/main-page-background.png');">

    </div>
    <div id="navbar" class="margin-to-center navbar navbar-colored">
        <div class="nav nav-border column-row">
            <div class="left nav-left">
                <div class="navbar-logo">
                    <a href="index.php?p=home"><img class="navbar-img" src="assets/logo/horizontal_logo.svg" alt="Switch Wiki"></a>
                </div>
                <button class="dark-mode-button mobile" onclick="swapTheme()">
                    <img class="" src="assets/icons/dark-mode.svg" alt="Toggle Dark Mode">
                </button>
            </div>
            <ul class="navbar-nav right">
                <li class="nav-item">
                    <a class="nav-link" href="index.php?p=membrane_x_mechanical">Membrana x Mecânico</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.php?p=optical_switches">Switches Ópticos</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="index.php?p=switches">Switches</a>
                    <div class="dropdown-content right-aligned default-border">
                        <a class="dropdown-link" href="index.php?p=switch_brown">Marrom</a>
                        <a class="dropdown-link" href="index.php?p=switch_red">Vermelho</a>
                        <a class="dropdown-link" href="index.php?p=switch_blue">Azul</a>
                    </div>
                </li>
                <button class="dark-mode-button desktop" onclick="swapTheme()">
                    <img class="" src="assets/icons/dark-mode.svg" alt="Toggle Dark Mode">
                </button>
            </ul>
        </div>
    </div>

    <main class="content main-content">
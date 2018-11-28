# WOW-air-
WOW air overzichtspagina verhalen
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>WoW air</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link rel="stylesheet" href="stylesheet/stylesheet.css">

</head>

<body>
    <header>
        <img src="https://valholl-prd.wowair.com/css/i/sitelogo.svg" alt="WOW air">
        <hr>
        <h1>WOW Story</h1>
        <form action="http://www.example.org/search.php">
            <p>Zoeken</p>
            <input type="search" name="search" placeholder="Naam, gevoel, kleur.." />
            <input type="submit" value="Zoek" />
        </form>
        <form action="http://www.example.org/search.php">
            <select name="sorteer" id="sorteren">
               <option value="nummering oplopend">Nummering oplopend</option>
                <option value="nummering aflopend">Nummering aflopend</option>
                <option value="populariteit oplopend">Populariteit oplopend</option>
                <option value="populariteit aflopend">Populariteit aflopend</option>
                </select>
        </form>
        <button type="button"><i class="fas fa-filter"></i></button>
        <!-- als hier op geklikt wordt komen de filters naar boven -->
    </header>
    <main>
        <section class="dedag">
            <h2>Verhaal van de dag</h2>

            <a href="" class="card">
                <img src="images/Screen%20Shot%202018-11-28%20at%2012.04.40.png" alt="voorbeeld verhaal">
                <div class="container">
                    <h3>Titel</h3>
                    <i class="fas fa-star"></i> <!-- de sterren geven de feedbak van andere aan -->
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <!--hier komt ook nog meta data-->
                    <i class="fas fa-download"></i> <!--met deze knop kunnen gebruikers verhalen downloaden-->
                </div>
            </a>

        </section>
        <section class="negennegen">
            <h2>99 Verhalen</h2>
            <a href="" class="card">
                <img src="images/Screen%20Shot%202018-11-28%20at%2012.04.40.png" alt="voorbeeld verhaal">
                <div class="container">
                    <h3>Titel</h3>
                    <i class="fas fa-star"></i> <!-- de sterren geven de feedbak van andere aan -->
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <!--hier komt ook nog meta data-->
                    <i class="fas fa-download"></i> <!--met deze knop kunnen gebruikers verhalen downloaden-->
                </div>
            </a>
            <a href="" class="card">
                <img src="images/Screen%20Shot%202018-11-28%20at%2012.04.40.png" alt="voorbeeld verhaal">
                <div class="container">
                    <h3>Titel</h3>
                    <i class="fas fa-star"></i> <!-- de sterren geven de feedbak van andere aan -->
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <!--hier komt ook nog meta data-->
                    <i class="fas fa-download"></i> <!--met deze knop kunnen gebruikers verhalen downloaden-->
                </div>
            </a>
            <a href="" class="card">
                <img src="images/Screen%20Shot%202018-11-28%20at%2012.04.40.png" alt="voorbeeld verhaal">
                <div class="container">
                    <h3>Titel</h3>
                    <i class="fas fa-star"></i> <!-- de sterren geven de feedbak van andere aan -->
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <!--hier komt ook nog meta data-->
                    <i class="fas fa-download"></i> <!--met deze knop kunnen gebruikers verhalen downloaden-->
                </div>
            </a>
            <a href="" class="card">
                <img src="images/Screen%20Shot%202018-11-28%20at%2012.04.40.png" alt="voorbeeld verhaal">
                <div class="container">
                    <h3>Titel</h3>
                    <i class="fas fa-star"></i> <!-- de sterren geven de feedbak van andere aan -->
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <!--hier komt ook nog meta data-->
                    <i class="fas fa-download"></i> <!--met deze knop kunnen gebruikers verhalen downloaden-->
                </div>
            </a>
            <a href="" class="card">
                <img src="images/Screen%20Shot%202018-11-28%20at%2012.04.40.png" alt="voorbeeld verhaal">
                <div class="container">
                    <h3>Titel</h3>
                    <i class="fas fa-star"></i> <!-- de sterren geven de feedbak van andere aan -->
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <!--hier komt ook nog meta data-->
                    <i class="fas fa-download"></i> <!--met deze knop kunnen gebruikers verhalen downloaden-->
                </div>
            </a>
        </section>
        <section>
            <h2>Filters</h2>
            <form action="http://www.example.org/search.php">
                <p class="filter">Tekstvorm</p>
                <input type="checkbox" name="tekstvorm" value="dialoog" id="dialoog">
                <label for="dialoog">Dialoog</label>
                <input type="checkbox" name="tekstvorm" value="gedicht" id="gedicht">
                <label for="gedicht">Gedicht</label>
                <input type="checkbox" name="tekstvorm" value="haiku" id="haiku">
                <label for="haiku">Haiku</label>
                <input type="checkbox" name="tekstvorm" value="verhaal" id="verhaal">
                <label for="verhaal">Verhaal</label>
                <p>Vormgeving</p>
                <input type="checkbox" name="vormgeving" value="druk" id="druk">
                <label for="druk">Druk</label>
                <input type="checkbox" name="vormgeving" value="rustig" id="rustig">
                <label for="rustig">Rustig</label>
                <input type="checkbox" name="vormgeving" value="zweverig" id="zweverig">
                <label for="zweverig">Zweverig</label>
                <input type="checkbox" name="vormgeving" value="kleurrijk" id="kleurrijk">
                <label for="kleurrijk">Kleurrijk</label>
                <input type="checkbox" name="vormgeving" value="abstract" id="abstract">
                <label for="abstract">abstract</label>
                <p>Emotie</p>
                <select name="emotie" id="emo">
                    <option value="vrolijk">Vrolijk</option>
                    <option value="angst">Angst</option>
                    <option value="verdriet">Verdriet</option>
                    <option value="agressie">Agressie</option>
                    <option value="eenzaam">Eenzaam</option>
                    <option value="verliefd">Verliefd</option>
                </select>
                <p>Uitgangspunt</p>
                <input type="checkbox" name="uitgang" value="persoon" id="persoon">
                <label for="persoon">Persoon</label>
                <input type="checkbox" name="uitgang" value="object" id="object">
                <label for="object">Object</label>
                <input type="checkbox" name="uitgang" value="emotie" id="emotie">
                <label for="emotie">Emotie</label>
                <input type="checkbox" name="uitgang" value="situatie" id="situatie">
                <label for="situatie">Situatie</label>
                <p>Resultaten:</p>
                <!--Hier telt het aantal resultaten op-->
                <input type="submit" value="Submit filter" />

            </form>
        </section>
    </main>
    <footer>
        <!-- hier komt metadata en navigatie van site-->

    </footer>
</body>

</html>


Projektin vaihe 1 - Määrittely ja suunnittelu
Projektin nimi: OSRS price checker


1. käyttäjä persoonat
 * persoona 1: Matti meikäläinen
   *Ikä: 25
   *Tarpeet: Pelaa oldschool runescapea ja haluaa tietää nopeaa tavaran zaryte crossbowin hinnan ja keskustella muitten peliä pelaavien ihmisten kanssa
   *Tavoitteet: Matti löytää esineen hinnan ja pystyy kirjoittelemaan ja lukemaan foorumia.

2. Käyttötarkoitus ja käyttäjävirta
   Päätoiminnot:
   *Sovelluksen päätehävänä on toimia nopeana Oldschool runescape pelin tavaroiden hintojen tarkistajana, sekä näyttää 24h sisällä tapahtuneet hinnan muutokset. Esimerkiksi, jos kirjoitat hakukenttään 'Torva platebody', sovellus palauttaa sinulle kuvan 
   Torva platebodystä, näyttäen sen tämänhetkisen hinnan (Current Price: 312.0m) ja hinnan muutoksen tänään (Price Change Today: +4.7m), jolloin saat nopeasti selville, miltä tavara näyttää ja mikä on sen nykyinen arvo pelissä. 
   *Foorumi missä pystyy kirjoittamaan postauksia ja lukemaan toisten kirjoittamia postauksia.
   *Käyttäjävirta: oletus arvoisesti käyttäjävirran olisi tarkoitus vain hakea tavaroiden hintoja sivulta, mutta käyttäjät voivat halutessaan keskustella foorumilla sivusta, tavaroista tai mistä ikinä haluavatkaan.

4. UI Prototyyppi
   *Pääsivu prototyypi: tumma navigaatio palkki ylhäällä, jossa on on home nappi, joka ohjaa käyttäjän aina aloitussivulle. Navigaatio palkissa on myös forum nappi, joka ohjaa käyttäjän foorumi sivulle. Navigaatio palkin alla on hakukenttä, jossa lukee "Enter item name" 
    tähän käyttäjä voi kirjoittaa tavaroiden nimiä joita käyttäjä haluaa hakea. Hakukentän oikeassa reunassa on vielä "Search" nappi, joka aktivoi haun.
   *Foorumi prototyyppi: tumma navigaatio palkki ylhäällä, jossa on on home nappi, joka ohjaa käyttäjän aina aloitussivulle. Navigaatio palkissa on myös forum nappi, joka ohjaa käyttäjän foorumi sivulle. Navigaatio palkin alla on kirjoituskenttä, jossa lukee "nickname" 
    johon voi syöttää haluamansa nimen postaukselle. Nickname kentän alla on "content" kenttä johon käyttäjä voi kirjoittaa haluamansa viestin foorumille. Content kentän alla on "Add Post" nappi, joka lisää postauksen sivulle kaikkien nähtäväksi.

5. Tietoarkkitehtuuri ja tekninen suunnittelu
   * Frontend:
   * React.js
   * Chakra UI
   Näillä aion tehdä käyttäjille simppelin ja helppokäyttöisen ui:n hakea tavaroiden hintoja ja kirjoitella foorumille.
   * Backend
   * Node.js + Express.js
   * SQLite
   * Runescape API

6. Projektinhallinta ja käyttäjätestaus
   1. Teen ensin backendin SQLitellä tietokannan runescapen tavaroille, jossa on kaikki pelin tavaroiden ID:t ja tavaroiden nimet.
   2. API:n testaus.
   3. Teen frontendin tavaran hakua varten.
   4. Laitan logiikan kuntoon, että tavaroiden hakutoiminto toimii.
   5. Teen erillisen tietokannan foorumia varten.
   6. Teen foorumin frontendin ja yhdistän backendin sen kanssa.
   7. Testaan että kaikki toimii
   
   

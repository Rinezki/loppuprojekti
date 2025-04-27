Projekti vaihe 2 - Perusrunko ja päätoiminnallisuudet


1. Environment
   Projekti tulee jäämään lokaaliin hostiin ajan puutteen vuoksi.

2. Backend
   Tässä koodissa käytetään useita Node.js-paketteja:
   express: Web framework, joka tarjoaa reittien käsittelyyn liittyvät toiminnot.
   axios: HTTP-pyyntöjen tekemiseen, käytetään ulkoisten API-kutsujen suorittamiseen.
   sqlite3: SQLite3-tietokannan käyttämiseen Node.js:ssä.
   cors: Käytetään mahdollistamaan CORS (Cross-Origin Resource Sharing), jotta frontend voi tehdä pyyntöjä backendille.

3. Frontend
   Tekniset valinnat ja rakenne:
   React: Käytetään käyttöliittymän kehittämiseen.
   React Router: Reitityksen hallintaan, jotta käyttäjä voi siirtyä esimerkiksi kotisivulta foorumiin.
   Axios: Käytetään HTTP-pyyntöjen tekemiseen backendille (Node.js ja Express) saadakseen OSRS-tavaroiden tiedot ja hinnat.
   Chakra UI: Tyylitämme käyttöliittymää moderneilla ja responsiivisilla komponenteilla, kuten Button, Input, SimpleGrid, Box, ja Image.

4. Database
   Projektissa käytetään kahta erillistä SQLite-tietokantaa: yksi foorumille ja toinen OSRS-tavaralistalle.
   Foorumin tietokannan rakenne: id: postauksen yksilöllinen tunniste. Title: postauksen otsikko. Content: postauksen sisältö. Timestamp: aika jolloin postaus luotiin.
   Osrs tavaroiden tietokannan rakenne: item_id: tavaran yksilöllinen tunniste. item_name: tavaralle annettu nimi.

5. Basic structure and architecture
   Projektin arkkitehtuuri on jaettu kolmeen kerrokseen: Frontend (React), Backend (Node.js/Express), ja Database (SQLite).
   Tämä rakenne takaa selkeän erottelun sovelluksen eri osien välillä, mikä parantaa koodin ylläpidettävyyttä ja laajennettavuutta.
   React vastaa käyttöliittymän esittämisestä, Node.js/Express huolehtii API:n ja liikenteen käsittelystä, ja SQLite vastaa tiedon säilyttämisestä ja hakemisesta.

6. Functionalities
   1. Tavaroiden haku ja tarkastelu
      Käyttäjät voivat etsiä OSRS-tavaroita nimellä ja tarkastella niiden ajankohtaisia hintoja sekä hinnan muutoksia.
   2. Foorumipostaukset
      Käyttäjät voivat selailla ja lisätä postauksia foorumille. Postaukset sisältävät otsikon ja sisällön.
   3. Dynaaminen haku ja tietojen päivitys
      Haku ja tavaroiden hintatiedot päivittyvät reaaliaikaisesti API:n kautta ilman sivun lataamista.

7. Code quality and documentation
   Modulaarisuus: Koodi on jaettu selkeisiin osiin (esim. frontend ja backend)
   Kommentointija koodin selkeys: Koodissa on tarvittavat kommentit, jotka selittävät tärkeimmät osat, kuten API-kutsut, tietokannan käsittely ja käyttäjäinteraktiot.

8. Testing and error handling
   Backend (Node.js/Express):
   Virheet, kuten tietokannan yhteysvirheet tai API-pyynnön epäonnistuminen, käsitellään asianmukaisesti. Käyttäjälle palautetaan selkeä virheilmoitus, kuten "Database error" tai "Item not found".
   Virheitä käsitellään try-catch-lohkoilla asynkronisessa koodissa, ja jokainen API-pyyntö tarkistaa mahdolliset virheet ennen vastausten palauttamista.
   HTTP-statuskoodit: Käytetään oikeita HTTP-statuskoodeja virheilmoitusten yhteydessä (esim. 400, 404, 500), jotta käyttäjä tai kehittäjä ymmärtää virheen syyn.
   Frontend (React):
   Virheiden hallinta on integroitu käyttöliittymään. Esimerkiksi, jos tavaran hakeminen epäonnistuu tai jos API-palvelin ei ole käytettävissä, käyttäjälle näytetään virheilmoitus ja hakuprosessi voidaan estää, kunnes virhe on korjattu.
   Loading-tilat ja virheilmoitukset: Käyttäjälle näytetään latausnäyttöjä ja virheilmoituksia, jotta he tietävät sovelluksen tilan ja mahdolliset ongelmat.


9. User interface and interaction
   Käyttöliittymä (UI):
   Responsiivisuus: Käyttöliittymä on responsiivinen ja mukautuu erikokoisiin näyttöihin (mobiili, tabletti, desktop), mikä takaa hyvän käyttökokemuksen kaikilla laitteilla.
   Visuaalinen selkeys: UI käyttää yksinkertaista ja puhdasta suunnittelua, jossa käytetään selkeitä värikontrasteja ja intuitiivisia komponentteja, kuten hakupalkkeja, painikkeita ja kortteja tavaroiden esittämiseen.
   Käyttöliittymän elementit: Käytetään Chakra UI:ta React-komponenttien rakentamiseen, mikä tuo selkeyttä ja yhtenäisyyttä käyttöliittymään.
   Käyttäjävuorovaikutus (Interaction):
   Tavaroiden haku: Käyttäjä voi syöttää hakusanan ja heti nähdä hakutulokset ilman sivun uudelleenlataamista. Tämä tarjoaa nopean ja sujuvan kokemuksen.
   Virheilmoitukset ja latausnäytöt: Jos hakutuloksia ei löydy tai API-pyyntö epäonnistuu, käyttäjälle näytetään selkeät virheilmoitukset, jotka opastavat seuraaviin toimiin. Latausnäytöt, kuten pyörivä spinners, ilmoittavat käyttäjälle, että haku on käynnissä.
   Foorumin käyttö: Käyttäjä voi helposti lisätä foorumipostauksia ja selailla niitä aikajärjestyksessä. UI tarjoaa tarvittavat kentät (otsikko ja sisältö), ja postausprosessissa ei ole turhia esteitä.
   Navigointi ja Käyttöliittymän Logiikka:
   Selkeä navigointi: Navigointi on yksinkertaista, ja käyttäjät voivat helposti siirtyä kotisivulta foorumiin ja takaisin. Navigointipalkki on selkeä ja tarjoaa pääsyn kaikkiin tärkeimpiin osiin.
   Nopea ja tehokas vuorovaikutus: Käyttöliittymä on optimoitu nopeaa vuorovaikutusta varten, ja kaikki toiminnot on rakennettu reagoimaan nopeasti käyttäjän syötteisiin.
   

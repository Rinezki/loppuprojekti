1. projektin määrittely ja suunnittelu
   Tämän projektin tavoitteena on kehittää web-sovellus, jonka avulla käyttäjät voivat seurata tulevia ammattitason Counter-Strike-otteluita, katsoa joukkueiden ranking-listoja sekä osallistua keskusteluun foorumilla.
   Sovellus tarjoaa ajankohtaista ja relevanttia tietoa esports-yleisölle. Foorumille kirjoittaminen edellyttää kirjautumista, mutta muut osiot ovat vapaasti selattavissa ilman käyttäjätunnusta.
   Käytettävät teknologiat:
   React – Käyttöliittymän rakentamiseen. Mahdollistaa dynaamisen ja responsiivisen frontendin.
   JavaScript – Sekä frontend- että backend-koodin kirjoittamiseen.
   Vite – Nopea kehitysympäristö ja build-työkalu React-sovellukselle.
   Node.js + Express – Backend-palvelin ja REST API:n toteutus.
   SQLite – Kevyt relaatiotietokanta, joka toimii projektissa paikallisesti ilman erillistä palvelinta. Sopii hyvin pieniin ja keskisuuriin projekteihin.
   Toiminnalliset vaatimukset:
   Näyttää tulevat ammattitason CS-ottelut (päivämäärä, joukkueet, turnaus, jne.)
   Näyttää tiimien ranking-listat
   Foorumi, jossa rekisteröityneet käyttäjät voivat aloittaa keskusteluja ja vastata viesteihin
   Käyttäjän rekisteröinti ja kirjautuminen (salasanan salaus)
   Admin-oikeudet (esim. viestien moderointi, sisällön hallinta – mahdollisesti myöhemmin)
   Tietorakenne luonnos:
   users (id, username, email, password_hash, created_at)
   matches (id, team1, team2, match_date, tournament_name)
   rankings (id, team_name, position, points, updated_at)
   forum_threads (id, title, user_id, created_at)
   forum_posts (id, thread_id, user_id, content, created_at)
   Arkkitehtuuri:
   Frontend (React + Vite) näyttää ottelut, rankingit ja foorumin käyttöliittymänä. Kommunikoi backendin kanssa REST API:n kautta.
   Backend (Node.js + Express) käsittelee API-pyynnöt, validoi tiedot, huolehtii autentikoinnista ja kommunikoi SQLite-tietokannan kanssa.
   SQLite-tietokanta säilyttää käyttäjätiedot, otteluohjelmat, rankingit ja foorumiviestit.
   
2. Perusrunko ja päätoiminnallisuudet
   Työ on minulla vielä todella lasten kengissä olen saanut vasta navigaatio osion aikaiseksi ja footerin. Olen työssäni tähän mennessä käyttänyt myös chakra-ui:n valmiita pohjia kyseisille komponenteille. Olen pahoillani, että työ on tällä hetkellä tosi kesken, mutta
   tulevan viikonlopun ja viikon aikana aion tehdä sitä mahdollisimman paljon eteenpäin.

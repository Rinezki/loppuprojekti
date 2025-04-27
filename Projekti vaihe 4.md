OSRS price checker

Projektin tarkoitus:
Tämä projekti on suunniteltu tarjoamaan alusta, jolla käyttäjät voivat etsiä ja tarkastella Old School RuneScape (OSRS) -pelin tavaroita ja niiden hintoja.
Lisäksi se mahdollistaa foorumipostauksia, joissa käyttäjät voivat keskustella pelin aiheista, jakaa kokemuksiaan ja pyytää neuvoja muilta pelaajilta.
Kohdeyleisö:
Projekti on suunnattu Old School RuneScape -pelin pelaajille ja yhteisön jäsenille.
Käyttäjät voivat olla joko aloittelijoita, jotka etsivät tietoa pelin tavaroista ja niiden hinnoista, tai kokeneempia pelaajia, jotka haluavat jakaa näkemyksiään ja kysymyksiään foorumilla.
Konteksti:
Projekti toimii yksinkertaisena verkkosovelluksena, jossa on kaksi päätoiminnallisuutta: OSRS-tavaroiden haku ja foorumipostaukset.
Käyttäjät voivat etsiä tavaroita nimellä ja tarkastella niiden ajankohtaisia hintoja sekä hinnan muutoksia. Samalla he voivat osallistua keskusteluihin foorumilla, joka tarjoaa paikan pelin ympärille rakentuneelle yhteisölle.

Projektin käyttötarkoitukset:
1. Tavaroiden hintojen haku. Toimiiko se? Kyllä. videolla kohdassa 0:30
2. Foorumi johon voi postailla ja lukea muiden kirjoituksia. Toimiiko se? Kyllä. videolla kohdassa 2:16

Tekninen toteutus:
Käytetyt teknologiat:
Frontend: Sovelluksen frontend on rakennettu React-kirjastolla, mikä mahdollistaa dynaamisen ja reagoivan käyttöliittymän.
Käytämme Chakra UI -komponenttikirjastoa käyttöliittymän elementtien rakentamiseen, mikä takaa selkeän ja responsiivisen ulkoasun.
Backend: Backend on toteutettu Node.js-ympäristössä ja Express-frameworkilla. Tämä mahdollistaa nopean ja tehokkaan REST API:n rakentamisen, joka käsittelee tietokantakyselyjä ja kommunikoi frontendin kanssa.
Tietokanta: Tietokantana käytetään SQLite3-tietokantaa, joka on kevyt ja helppokäyttöinen valinta pienille projekteille. Se säilyttää tietoja OSRS-tavaroista ja foorumipostauksista.
API-integraatiot: Tietojen hakeminen OSRS-tavaroiden hinnoista tehdään kolmannen osapuolen API:n kautta, käyttäen Axios-kirjastoa HTTP-pyyntöjen tekemiseen.
Arkkitehtoniset päätökset:
Kolmikerrosarkkitehtuuri: Projekti on jaettu kolmeen kerrokseen: frontend (React), backend (Node.js/Express) ja tietokanta (SQLite3). Tämä mahdollistaa selkeän eron eri kerroksien välillä ja helpottaa koodin ylläpitoa sekä laajentamista.
REST API: API:n rakennetta on suunniteltu selkeäksi ja skaalautuvaksi, jossa frontendi voi kommunikoida backendin kanssa HTTP-pyyntöjen kautta. API tarjoaa reitit tavaroiden hakemiseen ja foorumipostauksien hallintaan.
Tietokannan rakenne: Tietokannassa on kaksi päätaulukkoa: items, joka tallentaa OSRS-tavaroiden id:n ja nimen, ja posts, joka tallentaa foorumipostaukset (otsikko, sisältö, ajankohta). Tämä rakenne on yksinkertainen mutta riittävä projektin tarpeisiin.

Kehitys prosessi:
Projekti alkoi backendin toteutuksella, jonka tarkoituksena oli hakea suoraan RuneScapen API:sta tavaroiden hinnat.
Aluksi kokeilin hakea tietoja API:n kautta, mutta huomasin, että prosessi oli liian hidas, koska API kävi läpi RuneScapen tavaradatabasen kirjaimen kerrallaan.
Tämän vuoksi päätin tutkia tavaroiden rakenteita tarkemmin ja huomasin, että jokaisella RuneScapen tavaralla on oma uniikki item_id.
Tämän löydön perusteella päätin kokeilla, voisiko tavaran tiedot saada suoraan item_id:n avulla, ja huomasin, että RuneScapen API vastasi tällöin huomattavasti nopeammin.
Jatkaakseni eteenpäin, loin oman tietokannan, joka sisälsi kaikki RuneScapen tavarat, ja tallensin siihen kunkin tavaran id:n ja nimen.
Tämä mahdollisti sen, että backend voi nyt vastaanottaa frontendiltä tavaran nimen, etsiä tietokannasta siihen liittyvän item_id:n ja käyttää tätä id:tä hakeakseen tavaran hinnan ja kuvan RuneScapen API:sta.
Frontend puolestaan näyttää käyttäjälle tavaran hinnan ja kuvan sujuvasti.
Seuraavaksi törmäsin Chakra UI -kirjastoon, joka helpotti huomattavasti sivun ulkoasun muokkaamista. 
Chakra UI:n komponentit mahdollistivat responsiivisen ja visuaalisesti miellyttävän käyttöliittymän rakentamisen nopeasti.
Halusin myös lisätä muita toimintoja kuin pelkkä tavaroiden hinnan haku, joten aloin työstää foorumia backendille.
Foorumi on yksinkertainen, mutta toimiva. Käyttäjät voivat lisätä postauksia, joissa on otsikko ja sisältö.
Postauksen lähettämisen jälkeen se tallennetaan tietokantaan aikaleiman kanssa ja näytetään muille käyttäjille foorumilla.
Foorumin lisääminen rikastutti sovellusta ja teki siitä monipuolisemman.

Reflektointi ja mahdolliset parannukset:
Mikä meni hyvin:
Mielestäni UI toimii hyvin ja on miellyttävän näköinen.
Tavaroiden haku toimii ja suhteellisen nopea.
Hakukone on todella näppärä sinun ei tarvitse olla tarkka ollenkaan esimerkiksi tavaran nimen kanssa se antaa sinulle kaikki mahdolliset hakutulokset.
Mitä voisi parantaa:
Suurin parannuksen kohde on, että sovelluksen ympäristö olisi jossain muualla kuin lokaalissa verkossa.
Hakukonetta voisi parantaa siten, että jos haku tuloksia tulee tosi paljon mielestäni ensimmäiset 50 tavaraa näyttää tarkkoja hintoja ja loput näyttää price unavailable, koska veikkaan että ongelma on että sovellus lähettää liikaa pyyntöjä Runescapen API:lle.
Sovelluksessa voisi olla lisää toimintoja esimerkiksi kun löydät jonkun tavaran ja painaisit tavarasta se näyttäisi sinulle graafilla hintamuutoksia sanotaan vaikka viikon ajalta.

Työhön käytetyt tunnit:
21.4.2025 6h käyttötarkoituksen määrittely
22.4.2025 8h backendin tekeminen
23.4.2025 4h React pohja ja backendin hiominen
25.4.2025 10h Backendin ja frontendin logiikan tekeminen, jotta hinnat ja tavarat saatiin näkyville sivulle
26.4.2025 10h Frontendin UI:n kehittäminen ja foorumin backend ja frontend
27.4.2025 5h raportin kirjoittaminen
yhteistunnit: 43h

Linkki Esittely videoon:
https://youtu.be/kxZeFWfCSPc

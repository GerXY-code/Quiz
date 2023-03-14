Rendszerterv
==========================

Rendszer célja
--------------

Projekt terv
------------
- ### 1. Projektszerepkörök, felelőségek ###
    - A projektszerepkörök és felelőségek a feladatok típusától, összetettségétől és az illető hozzáértésétől is függ. A feladat elosztás fő szempontjai az egyéni igények illetve a kompetenciák függvényében történik. Továbbá, ha valamelyik csapattag az egyéni fejlődése érdekében egyéb technológiát kíván használni, erre természetese lehetősége van a kompatibilitás biztosításának függvényében.
    - Valamilyen szinten ezek a szerepkörök átjárhatók inspiráció, segítség nyújtás vagy egyéni igények alapján a csapat kollektív fejlődése és csapatépítés érdekében.

- ### 2. Projektmunkások és felelőségek ###
    - ### Front-end munkálatok: ### 
        - Résztvevői: Huszka Dániel
        - Feladatuk a weblap felhasználói felületének létrehozása és reszponzív elemek megvalósítása.
        
	- ### Back-end munkálatok: ### 
        - Résztvevői: Lehoczki Gergő Péter
        - Feladatuk a weblap funkcionalitásának biztosítása, kommunikáció az adatbázissal, inputok fogadása és feldolgozása a felhasználói felületről.

	- ### Adatbázis munkálatok: ### 
        - Résztvevői: Juhász Domonkos
        - Feladatuk a weblap számára biztosítani egy átgondolt és rendezett adatbázist az adatok biztonságos tárolásának garantálása mellett.

- ### 3. Ütemterv ###
    - Időszakosan heti meetingek, igényszerint spontán egyéb időpontokban megtartva. Fejlesztés részben egyéni ütemben, a többieket ezzel nem hátrálatva.

- ### 4. Mérföldkövek ###
    1. A dokumentációk elkészítése.
    2. A funkciók létrehozása és manuális, kisebb tesztelések a működés szempontjából. Egy funkcionális demó weblap elkészítése.
    3. A program teljeskürű tesztelése. Ennél a mérföldkőnél rendelkezésére fog állni a program közel egésze, illetve működőképes lesz. Lehetőség teljeskörű tesztre.
    4. A kényelmi funkciók kialakítása és tökéletesítése, illetve a dizájn kerül beépítésre.

Üzleti folyamatok modellje
--------------------------

Követelmények
-------------
- Dizájn
    - Színes és reszponzív dizájn
    - Mobil kompatibilitás
- Regisztráció / Bejelentkezés
    - A felhasználó tudjon bejelentkezni, valamint regisztrálni, ha nincsen még fiókja. Felhasználó névvel / email segítségével, valamint egy tetszőlegesen megadott jelszóval.
	- "Remember me" funkció a bejelentkezéshez
	- "Elfelejtett jelszó" lehetőség, mely során emailben kap további utasításokat
- Kvízek 
    - Kvízek létrehozása tetszőleges témakörben. 
    - A megoldott kvízek eredményeit minden felhasználónak külön egy adatbázisban tárolni, melyből könnyen lehet csoportosítani.
    - A kvízek mind szöveges formájúak.
- Adatbázis
    - Relációs adatbázis az adatok tárolására a megoldott kérdőívekkel kapcsolatosan minden felhasználóra.

Funkcionális terv
-----------------
- Rendszerszereplők
  - Superuser
  - Admin
  - Sima felh.
  
- Rendszerhasználati esetek és lefutásaik
  - Superuser
    - Eleve regisztrált felhasználó, aki minden jogosultsággal rendelkezik
	- Belőle csak egy lehet
	- Kitölthet, létrehozhat, módosíthat és törölhet kvízeket (bármelyik kvízt)
	- Látja a privát kvízeket is
	- Növelheti illetve csökkentheti a jogosultsági szintjét a felhasználóknak
	- Bármelyik felhasználót törölheti
  - Admin
    - Regisztráció után és a superuser közreműködésével válhat egy sima felhasználóból admin
	- Törölhet publikus kvízt, vagy saját privátot vagy módosíthatja azt
    - Saját profilját módosíthatja/törölheti
  - Sima felh.
    - Regisztrálhat
	- Készíthet saját, privát vagy publikus kvízt melyet módosíthat is akár
	- Saját profilját módosíthatja/törölheti
- Menü hierarchiák
    - Bejelentkező/Regisztrációs oldal
	  - Sikeres bejelentkezés vagy regisztrálás után a főoldalra irányít minket át az oldal
	- Főoldal
	  - Ezt az oldalt csak a bejelentkezett felhasználók láthatják
	  - A navigációs sávban láthatunk további menüpontokat
	  - Az oldal közepén láthatunk publikus kvízeket, melyeket kiválaszthatunk kitöltésre kategóriák szerint
	- Navigációs sáv
	  - Elemei 
	    - Saját profilom
		- Kvízeim
		- Privát kvízhez csatlakozás
		- Kijelentkezés
	  - Saját profilom
	    - Itt tudja szerkeszteni profilját a felhasználó, vagy akár törölni
	  - Kvízeim
	    - Itt tud új kvízt létrehozni, vagy akár a meglévő vagy kitöltött kvízek között keresgélni, módosítani azokat (ha saját)
	  - Privát kvízhez csatlakozás
	    - A privát kvízhez való csatlakozás kód ellenében történik
	  - Kijelentkezés
	    - A felhasználó kijelentkezését biztosítja


Fizikai környezet
-----------------

 - Adatbázis: Oracle-MySQL
 - Programozási nyelvek
   - Front-end: Javascript (React-al)
   - Back-end: PHP (Laravel keretrendszerrel)
   - Adatbázis: SQL, PL/SQL
 - Leíró nyelvek: HTML5 BOOTSTRAP-el, egyéni CSS3-al
 - Fejlesztői eszközök
   - Visual Studio Code
   - XAMPP (Apache és MySQL service)
   - MySQL workbench
   - Figma
 - Verziókezelést segítő eszközök
   - Github Desktop
 - Az alkalmazás jellege
   - Webes felület
   - Okostelefonokon/tableteken is egyaránt jól használható a reszponzivitás miatt
 - Szükséges rendszerkövetelmények
   - Megfelelő internetkapcsolat
   - Mozilla Firefox, Google Chrome, Safari, Edge, (IE nem támogatott)
 
   

Absztrakt domain modell
-----------------------

Architekturális
---------------
A Back-end PHP nyelven íródik, Laravel keretrendszerben.
Rendszerünkhöz az MVC (Model View Controller) szoftvertervezési mintát alkalmazzuk.
A Front-end Javascript nyelven íródik, React keretrendszerben

Adatbáziskezelésre MySQL-t használunk. A megjelenítésért a Bootstrap felel.

Adatbázis terv
--------------

A szükséges adatokat MySQL adatbázisban tároljuk, itt lesznek a felhasználó és kvíz adatai, továbbá a teszteléshez szükséges adatok is.

Az adatbázis adattáblái:

**Users Tábla** (A felhasználók adatait leíró tábla)<br>
| Mező              	| Típus  	|        Leírás                	     |
|-------------------	|----------	|-----------------------------	   |
| id          	      | int     	| azonosító, elsődleges kulcs      |
| name               	| varchar  	| felhasználó neve                 |
| age               	| tinyint  	| felhasználó kora                 |
| role_id          	  | int      	| szerepkör                        |
| username          	| varchar  	| felhasználónév              	   |
| email             	| varchar  	| email címet tartalmaző mező      |
| email_verified_at       	| timestamp  	| mikor hitelesítette az email címét      |
| password          	| varchar  	| jelszót tartalmazó mező     	   |
| remember_token          	| varchar  	| automatikus bejelentkezést segítő kulcs     	   |
| created_at 	| timestamp 	| regisztráció dátuma              |
| update_at 	| timestamp 	| frissítés dátuma leírása              |

Implementációs terv
-------------------

Tesztterv
---------

Telepítési terv
---------------

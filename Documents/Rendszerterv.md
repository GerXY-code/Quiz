Rendszerterv
==========================

Rendszer célja
--------------
A rendszer célja létrehozni egy olyan weboldalt, amiben kvízeket lehet létrehozni, illetve kitölteni. Minden kvíznek lesznek majd kérdései, minden kérdésnek válaszlehetőségei és minden kérdésnek egy megválaszolási ideje. A kérdésekre minden felhasználónak az adott válaszát adatbázisba mentjük.

Egy felhasználó majd ugyanúgy tud kvízeket létrehozni, mint kitölteni, illetve egy létrehozott kvíznél be lehet állítani hogy privát legyen, melyhez ezután csak az akkor kapott kóddal tudnak felhasználók kitölteni menni.

Minden kvízt szabadon választható témakörű, ezen részből a kvízkészítés az oldalon teljesen szabadon történik, mindenki azt ad meg, amit csak szeretne úgy kérdéseknek, mint válaszlehetőségeknek.

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

- Üzleti szereplők:
  - Felhasználók: Felhasználóvá a felületen történő regisztrációval válhat a látogató. A regisztráció során szerzett jogosultság határozza meg, hogy a felhasználó milyen funkciókhoz férhozzá a felületen. A felhasználóknak 3 csoportját különböztetjük meg:
    - Sima felhasználó: Ő kitölthet bármilyen kvízt, amit a nyílvános könyvtárből elér, illetve, kód bevitele után, privát kvízeket is kötölthet. Továbbá adatlapuk megtekintésére és szerkesztésére is lehetőségük van.
    - Admin: Regisztráció után egy superuser tehet egy profilt adminná. Feladata a kvízek moderálása, ezáltal törölhet vagy szerkezthet bármilyen kvízt.
    - Superuser: Ez a rang rendenlekezik minden hozzáférhető eszközzel. Belőle csak egy lehet. Törölhet vagy szerkeszthet bármiyen kvízt és profilt.

- Üzleti folyamatok: 
  - Felhasználó regisztrációja: A felhasználó egy regisztrációs form kitöltésével tud regisztrálni. A sikeres regisztrációhoz az alábbi adatok megadása szükséges.    
    - Felhasználónév: Egyedinek kell lennie.
    - Jelszó: Legalább 6 karakter hosszúságúnak kell lennie.
    - Jelszó megerősítése: A megadott jelszóval megegyezőnek kell lennie.

	A jelszavak titkosítás után kerülnek eltárolásra az adatbázisban

  - Felhasználó azonosítása: A felhasználó a bejelentkezés során a megfelelő mezőkbe megadja felhasználónevét és jelszavát, majd a rendszer ellenőrzi, hogy a felhasználó szerepel-e az adatbázisban. Amennyiben szerepel, a rendszer ellenrőzi a felhasználótól érkezett jelszó egyezik-e az adatbázisban tárolta. Ha az azonosítás sikeres, a felhasználó a nyitó oldalára kerül. Amennyiben az azonosítás sikertelen, a rendszer értesíti, hogy miért volt sikertelen a bejelentkezés.
  - Jelszó visszaállítása: A rendszer egy ilyen kérés után a felhasználó e-mail címén értesíti a kérésről. Ebben az email-ben egy átirányító link fog szerepelni, ami vissza viszi a felhasználót az eredeti weboldalra, ahol egy 2 mezős from-ban meg tudja adni az új jelszavát.
  - Kvízek eredménye: A kvízek megírása után egy értékelés látható a tesztek végeredményével.

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
   - Front-end: Javascript (jQuery-vel)
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
![kep](https://user-images.githubusercontent.com/114657677/226692165-51633402-bcca-4244-aa5d-235ac22eff7e.jpg)


Architekturális terv
---------------
A Back-end PHP nyelven íródik, Laravel keretrendszerben.
Rendszerünkhöz az MVC (Model View Controller) szoftvertervezési mintát alkalmazzuk.
A Front-end Javascript nyelven íródik, React keretrendszerben

Adatbáziskezelésre MySQL-t használunk. A megjelenítésért a Bootstrap felel.

Adatbázis terv
--------------

A szükséges adatokat MySQL adatbázisban tároljuk, itt lesznek a felhasználó és kvíz adatai, továbbá a teszteléshez szükséges adatok is.

Az adatbázis adattáblái:

**users Tábla** (A felhasználók adatait leíró tábla)<br>
| Mező              	| Típus  	|        Leírás                	     |
|-------------------	|----------	|-----------------------------	   |
| id          	      | bigint     	| azonosító, elsődleges kulcs      |
| name               	| varchar  	| felhasználó neve                 |
| role_id          	  | int      	| szerepkör                        |
| email             	| varchar  	| email címet tartalmaző mező      |
| email_verified_at       	| timestamp  	| mikor hitelesítette az email címét      |
| password          	| varchar  	| jelszót tartalmazó mező     	   |
| remember_token          	| varchar  	| automatikus bejelentkezést segítő kulcs     	   |
| created_at 	| timestamp 	| regisztráció dátuma              |
| update_at 	| timestamp 	| frissítés dátuma leírása              |

**personal_access_tokens** (Token tábla)<br>
| Mező          	| Típus   | Leírás                                 	|
|-----------------|---------|----------------------------------------	|
| id            	| bigint     | azonosító, elsődleges kulcs             |
| tokenable_type            | varchar | token típusa                     |
| tokenable_id            | bigint | token egyedi azonosítója                         |
| name            | varchar | token neve                          |
| token            | varchar | maga a token, személyesen                          |
| abilities            | text | leírja milyen szerepet lát el az adott token                          |
| last_used_at            | timestamp | az utolsó használatának az ideje                          |
| expires_at            | timestamp | a lejáratának az ideje                          |
| last_used_at            | timestamp | az utolsó használatának az ideje                          |
| created_at            | timestamp | a keletkezésének az ideje                          |
| updated_at            | timestamp | az utolsó frissítésének az ideje                          |

**password_reset_tokens** (jeszó visszaállító tokenek táblája)<br>
| Mező          	| Típus   | Leírás                                 	|
|-----------------|---------|----------------------------------------	|
| email            	| varchar     | azonosító, elsődleges kulcs             |
| token            | varchar | maga a token                          |
| created_at            | timestamp | létrehozásának az ideje                          |

**migrations** (Migrációk táblája)<br>
| Mező          	| Típus   | Leírás                                 	|
|-----------------|---------|----------------------------------------	|
| id            	| int     | azonosító, elsődleges kulcs             |
| migration            | varchar | migration file neve                          |
| batch            | int | ami nem futott le migration                          |

**failed_jobs** (Sikertelen műveletek)<br>
| Mező          	| Típus   | Leírás                                 	|
|-----------------|---------|----------------------------------------	|
| id            	| bigint     | azonosító, elsődleges kulcs             |
| UUid            | varchar | az adatbázis azonosítója                          |
| connection            | text | conntection string                          |
| queue            | text | várakozási idő                          |
| payload            | longtext | maga a tartalom                          |
| exception            | longtext | kivétel                          |
| failed_at            | timestamp | sikertelenség ideje                          |

**quizess** (A kvízek ebben a táblában kerülnek eltárolásra)
| Mező          	| Típus   | Leírás                                 	|
|-----------------|---------|----------------------------------------	|
| id            	| int     | azonosító, elsődleges kulcs             |
| title            	| varchar     |   a kvíz címe           |
| category            	| varchar     |   a kvíz kategóriája           |
| is_private            	| boolean     |   azt mutatja meg, hogy a kvíz publikus vagy privát   |

**quiz_users** (Kapcsolótábla, a quizess és a users táblát kapcsolja össze)
| Mező          	| Típus   | Leírás                                 	|
|-----------------|---------|----------------------------------------	|
| id            	| int     | azonosító, elsődleges kulcs             |
| quiz_id            	| int     |   a kvízek táblából a kvíz azonosítója kerül bele   |
| user_id            	| int     |   a users táblából a felh. azonosítója kerül bele   |




**questions** (A kvízekhez tartozó kérdések azonosítók alapján)<br>
| Mező          	| Típus   | Leírás                                 	|
|-----------------|---------|----------------------------------------	|
| id            	| int     | azonosító, elsődleges kulcs             |
| question            	| varchar     |   egy adott kvízhez tartozó kérdés           |


**quiz_questions** (A quizess és a questions táblák kapcsolótáblája)<br>
| Mező          	| Típus   | Leírás                                 	|
|-----------------|---------|----------------------------------------	|
| id            	| int     | azonosító, elsődleges kulcs             |
| quiz_id           | int     | a quizess tábla azonosítója kerül bele  |
| question_id       | int     | a kérdés azonosítója kerül bele         |


**answers** (A kvízekhre adott válaszok ide kerülnek be)<br>
| Mező          	| Típus   | Leírás                                 	|
|-----------------|---------|----------------------------------------	|
| id            	| int     | azonosító, elsődleges kulcs             |
| answer            	| varchar     |   egy adott kvízhez tartozó válasz     |

**quiz_question_answers** (Egy kvíz kitöltésekor töltődik fel)<br>
| Mező          	| Típus   | Leírás                                 	|
|-----------------|---------|----------------------------------------	|
| id            	| int     | azonosító, elsődleges kulcs             |
| quiz_id           | int     | a quizess tábla azonosítója kerül bele  |
| question_id       | int     | a kérdés azonosítója kerül bele         |
| answer_id         | int     | a kérdés azonosítója kerül bele         |
| user_id            	| int     |   a users táblából a felh. azonosítója kerül bele   |





Implementációs terv
-------------------
- A webes alkalmazások előnyeit kihasználva nincs szükség kompatibilitásra, hiszen a php szerver oldalon fut.
- A megjelenítéshez használt technológiák minimális követelményekkel rendelkeznek, egyedül az Interner Explorernél léphetnek fel komplikációk, de mivel hivatalosan nem támogatott böngésző, ezért nem készül rá implementáció, nem kerül bele a tesztbe se. 

Tesztterv
---------
- Az tesztelés a fejlesztéssel párhuzamosan, funkciók elkészítését követően, a program építése közben történik mind ameddig, amíg el nem jutunk egy szinte kész állapotba. 

Telepítési terv
---------------
 1. Egy webszerver telepítése, ami futtatni tud PHP szkripteket, Laravel 9.x keretrendszert és támogatja a MySQL-t.
 2. Egy modern webböngészőt futtatni képes operációs rendszer
például:
 - Windows
 - Linux
 - MacOS
 - Android
 - iOS
 3. Egy modern webböngésző ami futtatni képes az alkalmazást
például:
 - Mozilla Firefox
 - Google Chrome
 - Microsoft Edge
 - Opera
 - Tor
 4. Tárhely amely képes eltárolni az adatokat és támogatja a PHP szkripteket és a MySQL-t.
 5. Egy program, amellyel feltölthetők az alkalmazás fájljai.
 6. Forráskód és adatok importálása

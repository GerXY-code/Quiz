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

Fizikai környezet
-----------------

 - Adatbázis: Oracle-MySQL
 - Programozási nyelvek
   - Front-end: Javascript (React-al)
   - Back-end: PHP (Laravel keretrendszerrel)
   - Adatbázis: SQL, PL/SQL
 - Leíró nyelvek: HTML5 BOOTSTRAP-el, egyéni CSS3-al
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

Adatbázis terv
--------------

Implementációs terv
-------------------

Tesztterv
---------

Telepítési terv
---------------